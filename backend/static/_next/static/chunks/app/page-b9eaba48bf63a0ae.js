(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4841:(e,t,a)=>{Promise.resolve().then(a.bind(a,109))},5689:(e,t,a)=>{"use strict";a.d(t,{Nu:()=>u,iD:()=>i,kz:()=>o,ri:()=>c});var s=a(2651),r=a(8094);let n="https://api.velbots.shop",l=async e=>(await s.A.get(e,{withCredentials:!0})).data;async function o(e){try{return(await s.A.post("".concat(n,"/auth/register"),e,{withCredentials:!0})).data}catch(e){throw console.error("Register error:",e),e}}async function i(e){try{return(await s.A.post("".concat(n,"/auth/login"),e,{withCredentials:!0,headers:{"Content-Type":"application/json"},xsrfCookieName:"csrf_access_token",xsrfHeaderName:"X-CSRF-TOKEN"})).data}catch(e){throw console.error("Login error:",e),e}}async function c(){try{return(await s.A.post("".concat(n,"/auth/logout"),{},{withCredentials:!0})).data}catch(e){throw console.error("Logout error:",e),e}}function u(){return(0,r.Ay)("".concat(n,"/users/profile"),l)}},109:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var s=a(5155),r=a(2115),n=a(7293),l=a(6323),o=a(1889),i=a(3767),c=a(3794),u=a(8260),d=a(4121),h=a(4595),m=a(3669),p=a(1665);a(5716);var x=a(9199),f=a(3463),g=a(9795);function v(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,g.QP)((0,f.$)(t))}function j(e){let{value:t,className:a}=e,[n,l]=(0,r.useState)(t),[o,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(t!==n){i(!0);let e=(t-n)/20,a=0,s=setInterval(()=>{a<20?(l(t=>Math.round(t+e)),a++):(l(t),i(!1),clearInterval(s))},50);return()=>clearInterval(s)}},[t,n]),(0,s.jsx)("span",{className:v("transition-transform",o&&"animate-bounce-once",a),children:n.toLocaleString()})}function b(e){let{title:t,value:a,total:l,increment:o}=e,c=l?a/l*100:0,[u,d]=(0,r.useState)(a),[h,m]=(0,r.useState)(!1),[p,f]=(0,r.useState)(0),g=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(a!==u){let e=a-u;e>0&&(f(e),m(!0),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{m(!1),f(0)},1e3))}return d(a),()=>{g.current&&clearTimeout(g.current)}},[a,u]);let b=t.toLowerCase().includes("request");return(0,s.jsx)(n.Z,{className:v("border-none bg-gradient-to-br from-default-50/50 to-default-100/50 backdrop-blur-md transition-all duration-300",b&&h&&"ring-1 ring-purple-500/50"),shadow:"sm",children:(0,s.jsxs)(i.U,{className:"space-y-4 p-6",children:[(0,s.jsxs)("h3",{className:"text-sm font-semibold text-default-600 uppercase tracking-wider flex items-center justify-between",children:[t,b&&h&&(0,s.jsxs)("span",{className:"flex h-2 w-2",children:[(0,s.jsx)("span",{className:"animate-ping absolute h-2 w-2 rounded-full bg-purple-400 opacity-75"}),(0,s.jsx)("span",{className:"rounded-full h-2 w-2 bg-purple-500"})]})]}),(0,s.jsxs)("div",{className:"flex justify-between items-baseline",children:[(0,s.jsxs)("div",{className:"flex items-baseline gap-2 relative",children:[(0,s.jsx)("span",{className:v("text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300",b&&h&&"scale-105"),children:t.toLowerCase().includes("thread")||t.toLowerCase().includes("requests")?(0,s.jsx)(j,{value:a}):a.toLocaleString()}),b&&h&&p>0&&(0,s.jsxs)("span",{className:"absolute -right-12 top-0 text-xs font-medium text-green-500 animate-fade-up",children:["+",p.toLocaleString()]}),o&&(0,s.jsx)("span",{className:"text-xs font-medium text-default-500",children:"/sec"})]}),l&&(0,s.jsxs)("div",{className:"text-sm font-medium text-default-400",children:["of ",l.toLocaleString()]})]}),l&&(0,s.jsx)(x.o,{value:c,classNames:{base:"h-2",indicator:"bg-gradient-to-r from-purple-600 to-pink-600",track:"bg-default-100"}})]})})}var N=a(5689),y=a(6046);async function w(e){if(!e)return console.log("No username provided for viewer count fetch"),0;try{var t,a,s;let r=await fetch("https://gql.twitch.tv/gql",{method:"POST",headers:{"Client-Id":"kimne78kx3ncx6brgo4mv6wki5h1ko","Content-Type":"application/json"},body:JSON.stringify({query:"\n        query GetViewerCount($login: String!) {\n          user(login: $login) {\n            stream {\n              viewersCount\n            }\n          }\n        }\n      ",variables:{login:e}})}),n=await r.json();return(null==n?void 0:null===(s=n.data)||void 0===s?void 0:null===(a=s.user)||void 0===a?void 0:null===(t=a.stream)||void 0===t?void 0:t.viewersCount)||0}catch(t){return console.error("\uD83D\uDD34 Error fetching viewer count for ".concat(e,":"),t),0}}var T=a(1536);function k(e){let{value:t}=e,{previousValue:a,percentageChange:l}=function(e){let[t,a]=(0,r.useState)([]);(0,r.useEffect)(()=>{e>0&&a(t=>[...t,e].slice(-10))},[e]);let s=()=>t.length<2?e:t[t.length-2];return{previousValue:s(),percentageChange:(()=>{let t=s();return 0===t?0:(e-t)/t*100})(),values:t}}(t),o=t-a,[c,u]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(o>0){u(!0);let e=setTimeout(()=>u(!1),2e3);return()=>clearTimeout(e)}},[t,o]),(0,s.jsxs)("div",{className:"relative",children:[c&&(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-lg blur-xl animate-pulse"}),(0,s.jsx)(n.Z,{className:v("relative border-none bg-default-50/50 backdrop-blur-md transition-all duration-300",c&&"ring-2 ring-purple-500/50"),shadow:"sm",children:(0,s.jsxs)(i.U,{className:"space-y-4 p-6",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("h3",{className:"text-sm font-semibold text-default-600 uppercase tracking-wider",children:"Live Viewers"}),c&&(0,s.jsxs)("span",{className:"flex h-2 w-2",children:[(0,s.jsx)("span",{className:"animate-ping absolute h-2 w-2 rounded-full bg-purple-400 opacity-75"}),(0,s.jsx)("span",{className:"rounded-full h-2 w-2 bg-purple-500"})]})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("div",{className:"flex items-baseline gap-2",children:(0,s.jsx)("span",{className:v("text-4xl font-black bg-clip-text text-transparent transition-all duration-1000",c?"bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient-x":"bg-gradient-to-r from-purple-600 to-pink-600"),children:t.toLocaleString()})}),(0,s.jsxs)("div",{className:"flex items-center gap-1 ".concat(o>0?"text-green-500":o<0?"text-red-500":"text-gray-500"),children:[o>0?(0,s.jsx)(T.uCC,{className:"w-4 h-4"}):o<0?(0,s.jsx)(T.$TP,{className:"w-4 h-4"}):(0,s.jsx)(T.iu5,{className:"w-4 h-4"}),(0,s.jsxs)("span",{className:"text-sm font-medium",children:[Math.abs(l).toFixed(1),"%"]}),(0,s.jsx)("span",{className:"text-xs text-default-500 ml-1",children:"since last update"})]})]})]})})]})}let C="https://velbots.shop/api/bot",S=async e=>{let t=new FormData;t.append("channelName",e.channelName),t.append("threads",e.threads.toString()),e.proxyFile&&t.append("proxyFile",e.proxyFile),e.timeout&&t.append("timeout",e.timeout.toString()),e.proxyType&&t.append("proxyType",e.proxyType);let a=await fetch("".concat(C,"/start"),{method:"POST",body:t,credentials:"include"});if(!a.ok)throw Error("HTTP error! status: ".concat(a.status));return a.json()},P=async()=>{let e=await fetch("".concat(C,"/stop"),{method:"POST",credentials:"include"});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return e.json()},_=async()=>{let e=await fetch("".concat(C,"/stats"),{credentials:"include"});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return e.json()};function E(){var e,t;let a=(0,y.useRouter)(),{data:x}=(0,N.Nu)(),[f,g]=(0,r.useState)({threads:0,channelName:"",gameName:"",messagesPerMinute:1,enableChat:!1,proxyType:"http",timeout:1e3}),{viewerCount:v}=function(e){let[t,a]=(0,r.useState)(0),[s,n]=(0,r.useState)(0),[l,o]=(0,r.useState)();return(0,r.useEffect)(()=>{if(!e)return;let s=async()=>{let s=await w(e);n(t),a(s),o(new Date)};s();let r=setInterval(s,2e3);return()=>{clearInterval(r)}},[e,t]),{viewerCount:t,previousCount:s,lastUpdate:l}}((null==f?void 0:f.channelName)||(null==x?void 0:null===(e=x.user)||void 0===e?void 0:e.TwitchUsername)),[j,T]=(0,r.useState)(!1),[C,E]=(0,r.useState)(null),[L,q]=(0,r.useState)({totalProxies:0,aliveProxies:0,activeThreads:0,request_count:0,viewers:v,targetViewers:0}),[F,R]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e;return j&&(e=setInterval(async()=>{try{let e=await _();q(t=>({...t,activeThreads:e.active_threads,totalProxies:e.total_proxies,aliveProxies:e.alive_proxies,request_count:e.request_count})),0===e.active_threads&&j&&T(!1)}catch(e){console.error("Failed to fetch stats:",e)}},1e3)),()=>{e&&clearInterval(e)}},[j]),(0,r.useEffect)(()=>{var e;(null==x?void 0:null===(e=x.user)||void 0===e?void 0:e.TwitchUsername)&&!f.channelName&&!F&&g(e=>({...e,channelName:x.user.TwitchUsername}))},[x,F,f.channelName]),(0,r.useEffect)(()=>{(async()=>{try{let e=await _();if((e.active_threads>0||e.is_running)&&(T(!0),q(t=>({...t,activeThreads:e.active_threads,totalProxies:e.total_proxies,aliveProxies:e.alive_proxies,request_count:e.request_count})),e.config)){let{threads:t,timeout:a,proxy_type:s}=e.config;g(r=>({...r,threads:null!=t?t:r.threads,timeout:null!=a?a:r.timeout,proxyType:null!=s?s:r.proxyType,channelName:e.channel_name||r.channelName}))}}catch(e){console.error("Failed to check bot status:",e)}})()},[]);let I=async()=>{if(f.channelName){if(0===f.threads){p.oR.error("Threads count must be greater than 0");return}}else{p.oR.error("Channel name is required");return}try{T(!0),await S({channelName:f.channelName,threads:f.threads,proxyFile:C||void 0,timeout:f.timeout,proxyType:f.proxyType}),p.oR.success("Bot started successfully!\uD83D\uDE80 It may take a while before the viewers appear on the stream.")}catch(e){p.oR.error("Failed to start bot: ".concat(e instanceof Error?e.message:"Unknown error")),T(!1)}},M=async()=>{try{await P(),p.oR.success("Bot stopped successfully!"),T(!1),q(e=>({...e,activeThreads:0,requests:0}))}catch(e){p.oR.error("Failed to stop bot"),console.error("Failed to stop bot:",e)}},U=async()=>{try{await (0,N.ri)(),p.oR.success("Logged out successfully!"),a.push("/login")}catch(e){p.oR.error("Failed to logout")}};return(0,s.jsxs)("div",{className:"min-h-screen p-6",children:[(0,s.jsxs)("div",{className:"max-w-7xl mx-auto space-y-8",children:[(0,s.jsxs)(n.Z,{className:"relative text-center mb-8 p-8 rounded-2xl",children:[(0,s.jsx)(l.T,{as:"a",href:"https://www.patreon.com/c/HIBO",target:"_blank",rel:"noopener noreferrer",variant:"bordered",className:"absolute left-4 top-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none",startContent:(0,s.jsx)("span",{className:"text-lg",children:"❤️"}),children:"Support Me"}),x&&(0,s.jsx)(l.T,{variant:"bordered",onPress:U,className:"absolute right-4 top-4",color:"danger",children:"Logout"}),(0,s.jsx)("h1",{className:"text-5xl font-black mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",children:"Twitch Viewer Bot"}),(0,s.jsx)("p",{className:"text-xl font-medium",children:x?"Welcome back, ".concat(x.user.username):"Monitor and control your viewer bot"})]}),(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(o.d,{children:(0,s.jsx)("h2",{className:"text-2xl font-semibold",children:"Live Monitoring"})}),(0,s.jsx)(i.U,{children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[(0,s.jsx)(k,{value:v}),(0,s.jsx)(b,{title:"Active Threads",value:L.activeThreads,total:f.threads}),(0,s.jsx)(b,{title:"Proxies",value:L.totalProxies,total:L.totalProxies}),(0,s.jsx)(b,{title:"Requests",value:L.request_count})]})})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(o.d,{children:(0,s.jsx)("h2",{className:"text-2xl font-semibold",children:"Basic Configuration"})}),(0,s.jsxs)(i.U,{className:"space-y-6",children:[(0,s.jsx)(c.r,{label:"Channel Name",value:f.channelName,placeholder:(null==x?void 0:null===(t=x.user)||void 0===t?void 0:t.TwitchUsername)||"Enter channel name",onChange:e=>{R(!0),g(t=>({...t,channelName:e.target.value}))}}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)(c.r,{type:"number",label:"Number of Threads",value:0===f.threads?"":f.threads.toString(),min:0,max:1e3,onChange:e=>g({...f,threads:""===e.target.value?0:Math.min(1e3,parseInt(e.target.value)||0)})}),(0,s.jsx)(u.I,{content:(0,s.jsxs)("div",{className:"max-w-xs p-2",children:[(0,s.jsx)("p",{children:"Threads determine how many simultaneous connections the bot will make."}),(0,s.jsx)("p",{className:"mt-1",children:"More threads = more viewers, but requires more resources and stable proxies."}),(0,s.jsx)("p",{className:"mt-1",children:"Recommended: Start with 100-200 threads."})]}),children:(0,s.jsx)("div",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-default-100 text-default-500 cursor-help",children:"?"})})]}),(0,s.jsx)("div",{children:(0,s.jsx)(d.Q,{value:[f.timeout],defaultValue:[1e4],maxValue:1e4,onChange:e=>g({...f,timeout:Number(Array.isArray(e)?e[0]:e)}),getValue:e=>"".concat(e,"ms"),label:"Request Timeout",step:100})}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("label",{className:"text-sm font-medium block",children:"Proxy List (Optional)"}),(0,s.jsx)("div",{className:"relative",children:(0,s.jsxs)(l.T,{as:"label",className:"w-full h-[40px] flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg cursor-pointer transition-all duration-300 group",children:[(0,s.jsx)("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"})}),(0,s.jsx)("span",{className:"text-sm",children:C?C.name:"Choose proxy file (Optional)"}),(0,s.jsx)(c.r,{type:"file",accept:".txt",onChange:e=>{var t;return E((null===(t=e.target.files)||void 0===t?void 0:t[0])||null)},className:"hidden"})]})}),(0,s.jsx)("p",{className:"text-xs text-gray-500",children:"Upload a .txt file with proxies or let the bot scrape them automatically (format: ip:port). Ensure the proxies are reliable for better performance."})]})]})]}),(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(o.d,{children:(0,s.jsx)("h2",{className:"text-2xl font-semibold",children:"Advanced Settings"})}),(0,s.jsxs)(i.U,{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(c.r,{label:"Game Name",value:f.gameName,onChange:e=>g({...f,gameName:e.target.value}),isDisabled:!0}),(0,s.jsx)("span",{className:"absolute right-0 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded",children:"Coming Soon Premium Feature"})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(d.Q,{value:[1],defaultValue:[1],maxValue:60,isDisabled:!0,label:"Messages Per Minute",getValue:e=>"".concat(e," messages"),step:1}),(0,s.jsx)("span",{className:"absolute right-0 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded",children:"Coming Soon Premium Feature"})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(h.A,{checked:!1,isDisabled:!0,children:(0,s.jsx)("span",{className:"text-gray-400",children:"Enable Chat Messages"})}),(0,s.jsx)("span",{className:"absolute right-0 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded",children:"Coming Soon Premium Feature"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"text-sm font-medium mb-2 block",children:"Proxy Type"}),(0,s.jsx)(m.x,{children:["http","socks4","socks5","all"].map(e=>(0,s.jsx)(l.T,{variant:f.proxyType===e?"solid":"bordered",onPress:()=>g({...f,proxyType:e}),children:e},e))})]})]})]})]}),(0,s.jsx)(n.Z,{children:(0,s.jsx)(i.U,{className:"py-6",children:(0,s.jsx)(l.T,{variant:"solid",color:j?"danger":"primary",size:"lg",fullWidth:!0,onPress:j?M:I,children:j?"Stop Bot":"Start Bot"})})})]}),(0,s.jsx)(p.N9,{})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[797,711,385,373,551,302,441,517,358],()=>t(4841)),_N_E=e.O()}]);