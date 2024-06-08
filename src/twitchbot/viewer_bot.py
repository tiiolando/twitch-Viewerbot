import os
import av
import re
import sys
import time
import random
import asyncio
import datetime
import requests
import logging
from sys import exit
from pathlib import Path
from dotenv import load_dotenv
from openai import OpenAI
from threading import Thread, Semaphore
from streamlink import Streamlink
from fake_useragent import UserAgent
from requests import RequestException
from message import TwitchBotManager

base_path = getattr(sys, '_MEIPASS', os.path.dirname(os.path.abspath(__file__)))

if not load_dotenv(os.path.join(base_path, 'twitchbot', '.env')):
    # If loading .env file from base path failed, try to load it from script directory
    if not load_dotenv(os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env')):
        # If loading .env file from script directory also failed, display an error
        print("Error: .env file not found")

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

class ViewerBot:
    def __init__(self, nb_of_threads, channel_name, proxylist, proxy_imported, timeout, stop=False, type_of_proxy="http"):
        self.nb_of_threads = nb_of_threads
        self.nb_requests = 0
        self.stop_event = stop
        self.proxylist = proxylist
        self.all_proxies = []
        self.proxyrefreshed = True
        try:
            self.type_of_proxy = type_of_proxy.get()
        except:
            self.type_of_proxy = type_of_proxy
        self.proxy_imported = proxy_imported
        self.timeout = timeout
        self.channel_name = channel_name
        self.tokens = []
        self.channel_url = "https://www.twitch.tv/" + channel_name.lower()
        self.proxyreturned1time = False
        self.thread_semaphore = Semaphore(int(nb_of_threads))  # Semaphore to control thread count
        self.active_threads = 0

    def create_session(self):
        # Create a session for making requests
        self.ua = UserAgent()
        self.session = Streamlink()
        self.session.set_option("http-headers", {
            "Accept-Language": "en-US,en;q=0.5",
            "Connection": "keep-alive",
            "DNT": "1",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": self.ua.random,
            "Client-ID": "ewvlchtxgqq88ru9gmfp1gmyt6h2b93",
            "Referer": "https://www.google.com/"
        })
        return self.session
    
    def make_request_with_retry(self, session, url, proxy, headers, proxy_used, max_retries=3):
        for _ in range(max_retries):
            try:
                # send requests to the twitch service
                response = session.head(url, proxies=proxy, headers=headers, timeout=((self.timeout/1000)+1))
                if response.status_code == 200:
                    return response
                else:
                    # Remove bad proxy from the list
                    if proxy_used in self.proxies:
                        self.proxies.remove(proxy_used)
                    return None
            except RequestException as e:
                # Sort exception for remove bad proxy from the list
                if "400 Bad Request" in str(e) or "403 Forbidden" in str(e) or "RemoteDisconnected" in str(e) or "connect timeout=10.0" in str(e):
                    if proxy_used in self.proxies:
                        self.proxies.remove(proxy_used)
                continue

        return None

    def get_proxies(self):
        # Fetch self.proxies from an API or use the provided proxy list

        if self.proxylist == None or self.proxyrefreshed == False: 
            try:
                response = requests.get(f"https://api.proxyscrape.com/v2/?request=displayproxies&protocol={self.type_of_proxy}&timeout={self.timeout}&country=all&ssl=all&anonymity=all")
                if response.status_code == 200:
                    lines = []
                    lines = response.text.split("\n")
                    lines = [line.strip() for line in lines if line.strip()]
                    self.proxyrefreshed = True
                    return lines
            except:
                pass
        elif self.proxyreturned1time == False:
            self.proxyreturned1time = True
            return self.proxylist

    def get_url(self):
        # Retrieve the URL for the channel's stream
        try:
            streams = self.session.streams(self.channel_url)
            try:
                url = streams['audio_only'].url
            except:
                url = streams['worst'].url
        except:
            pass
        try: 
            return url
        except:
            exit()

    def open_url(self, proxy_data):

        if self.stop_event:
            self.active_threads -= 1
            return
        self.active_threads += 1
        # Open the stream URL using the given proxy
        headers = {'User-Agent': self.ua.random}
        current_index = self.all_proxies.index(proxy_data)

        if proxy_data['url'] == "":
            # If the URL is not fetched for the current proxy, fetch it
            proxy_data['url'] = self.get_url()
        current_url = proxy_data['url']
        username = proxy_data.get('username')
        password = proxy_data.get('password')
        if username and password:
            # Set the proxy with authentication if username and password are available
            current_proxy = {"http": f"{username}:{password}@{proxy_data['proxy']}", "https": f"{username}:{password}@{proxy_data['proxy']}"}
        else:
            current_proxy = {"http": proxy_data['proxy'], "https": proxy_data['proxy']}

        try:
            if time.time() - proxy_data['time'] >= random.randint(1, 5):
                # Refresh the proxy after a random interval
                current_proxy = {"http": proxy_data['proxy'], "https": proxy_data['proxy']}
                with requests.Session() as s:
                    response = self.make_request_with_retry(s, current_url, current_proxy, headers, proxy_data['proxy'])
                if response:
                    self.nb_requests += 1
                    proxy_data['time'] = time.time()
                    self.all_proxies[current_index] = proxy_data
        except Exception as e:
            print(e)
            pass
        finally:
            if self.stop_event:
                self.active_threads -= 1
                return
            self.thread_semaphore.release()  # Release the semaphore
            self.active_threads -= 1

    def stop(self):
        # Stop the ViewerBot by setting the stop event
        self.stop_event = True

    async def audio_to_text(self, audio_stream_url, output_filename):
        # Open the HLS stream
        input_container = av.open(audio_stream_url)
        input_stream = input_container.streams.get(audio=0)[0]

        # Open an MP3 file
        output_filename = output_filename.replace('.wav', '.mp3')
        output_container = av.open(output_filename, 'w')
        output_stream = output_container.add_stream('mp3')

        # Read and play the stream
        start_time = time.time()
        for frame in input_container.decode(input_stream):
            # Convert the audio frame to MP3
            frame.pts = None
            for packet in output_stream.encode(frame):
                output_container.mux(packet)

            # Every 60 seconds, save the current chunk to a separate file and transcribe it
            if time.time() - start_time > 60:
                # Close the current MP3 file
                for packet in output_stream.encode(None):
                    output_container.mux(packet)
                output_container.close()

                audio_file_path = Path.cwd() / output_filename
                client = OpenAI(api_key=OPENAI_API_KEY)
                # Transcribe the audio file using OpenAI's API
                with open(audio_file_path, 'rb') as audio_file:
                    transcript = client.audio.transcriptions.create(
                    model="whisper-1",
                    file=audio_file
                )

                print(transcript)
                transcription_text = transcript.text  # Access the transcription text using dot notation
                os.remove(audio_file_path)

                chat = [
                    {"role": "system", "content": "You are a viewer on a Twitch Stream."},
                    {"role": "user", "content": "This is a transcription from a Counter-Strike stream. Please generate at least 30 sentences to continue the conversation. Give questions or answers like you are a viewer. Please reply in the language of the stream. And if you aren't inspired, you can generate just emoji reactions. We need some reaction in the chat. Write the sentence at the first person. Don't place emoji on all sentences."},
                    {"role": "user", "content": transcription_text}
                ]

                response = client.chat.completions.create(
                    model="gpt-3.5-turbo",
                    messages=chat
                )

                response_text = response.choices[0].message.content
                print(response_text)
                # Split the response text into sentences
                sentences = re.findall(r'[^.!?]*[.!?]', response_text)
                print(sentences)

                # Iterate over the sentences
                for sentence in sentences:
                    logging.info(f"Sentence: '{sentence}'")
                    if sentence.strip():  # Check if the sentence is not empty or whitespace
                        try:
                            # Choose a random bot
                            bot = random.choice(self.bot_manager.bots)
                            logging.info(f"Selected bot: {bot}")
                            logging.info(f"Sending message: {sentence}")
                            self.bot_manager.run_bot(sentence, bot)
                            logging.info(f"Message sent: {sentence}")
                            await asyncio.sleep(random.randint(0.3, 1))
                        except Exception as e:
                            logging.error(f"Failed to send message with bot {bot.name}: {e}")
                    else:
                        logging.error(f"Message is empty or whitespace: {sentence}")

                # Start a new MP3 file for the next chunk
                output_container = av.open(output_filename, 'w')
                output_stream = output_container.add_stream('mp3')

                start_time = time.time()

        # Close the MP3 file
        for packet in output_stream.encode(None):
            output_container.mux(packet)
        output_container.close()

    def start_bot_manager(self):
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

        # Wrap the coroutine in a Task and run it
        task = loop.create_task(self.bot_manager.initialize_bots())
        loop.run_until_complete(task)

        try:
            # Run the event loop forever
            loop.run_forever()
        except KeyboardInterrupt:
            pass
        finally:
            # Cancel all tasks running on the event loop
            for task in asyncio.Task.all_tasks(loop):
                task.cancel()
            # Gather all tasks to give them the opportunity to cancel
            loop.run_until_complete(asyncio.gather(*asyncio.Task.all_tasks(loop), return_exceptions=True))
            loop.close()
        
    def main(self):
        self.proxies = self.get_proxies()
        start = datetime.datetime.now()
        self.create_session()
        streams = self.session.streams(self.channel_url)
        audio_stream = streams['audio_only']

        try:
            with open(os.path.join(os.path.dirname(os.path.abspath(__file__))) + '/valid_tokens.txt', 'r') as file:
                self.tokens = [line.strip() for line in file.readlines()]
        except :
            with open(base_path + '/valid_tokens.txt', 'r') as file:
                self.tokens = [line.strip() for line in file.readlines()]
    
        self.bot_manager = TwitchBotManager(self.tokens, self.channel_name)
        self.managed_bot = Thread(target=self.start_bot_manager)
        self.managed_bot.start()

        # Create a new event loop for this thread
        self.loop = asyncio.new_event_loop()
        asyncio.set_event_loop(self.loop)
        self.loop.run_until_complete(self.audio_to_text(audio_stream.url, 'output.wav'))

        while not self.stop_event:
            elapsed_seconds = (datetime.datetime.now() - start).total_seconds()
    
            for p in self.proxies:
                # Add each proxy to the all_proxies list
                self.all_proxies.append({'proxy': p, 'time': time.time(), 'url': ""})
            
            for proxy_data in self.all_proxies:
                # Open the URL using a proxy from the all_proxies list
                self.thread_semaphore.acquire()  # Acquire the semaphore
                self.threaded = Thread(target=self.open_url, args=(proxy_data,))
                self.threaded.daemon = True  # This thread dies when the main thread (only non-daemon thread) exits.
                self.threaded.start()
    
            if elapsed_seconds >= 300 and not self.proxy_imported:
                # Refresh the self.proxies after 300 seconds (5 minutes)
                start = datetime.datetime.now()
                self.proxies = self.get_proxies()
                elapsed_seconds = 0  # Reset elapsed time
                self.proxyrefreshed = False