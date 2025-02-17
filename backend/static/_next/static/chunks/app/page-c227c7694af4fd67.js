(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4841:(e,t,a)=>{Promise.resolve().then(a.bind(a,3568))},5689:(e,t,a)=>{"use strict";a.d(t,{Nu:()=>d,iD:()=>i,kz:()=>l,ri:()=>c});var r=a(2651),s=a(8094);let o=a(2818).env.NEXT_PUBLIC_BACKEND_URL||"http://localhost:3000",n=async e=>(await r.A.get(e,{withCredentials:!0})).data;async function l(e){try{return(await r.A.post("".concat(o,"/auth/register"),e,{withCredentials:!0})).data}catch(e){throw console.error("Register error:",e),e}}async function i(e){try{let t=await r.A.post("".concat(o,"/auth/login"),e,{withCredentials:!0,headers:{"Content-Type":"application/json"},xsrfCookieName:"csrf_access_token",xsrfHeaderName:"X-CSRF-TOKEN"});return console.log("Cookies:",document.cookie),t.data}catch(e){throw console.error("Login error:",e),e}}async function c(){try{return(await r.A.post("".concat(o,"/auth/logout"),{},{withCredentials:!0})).data}catch(e){throw console.error("Logout error:",e),e}}function d(){return(0,s.Ay)("".concat(o,"/users/profile"),n)}},3568:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var r=a(5155),s=a(2115),o=a(7293),n=a(6323),l=a(1889),i=a(3767),c=a(3794),d=a(6777),u=a(8555),h=a(3669),m=a(6331);a(5716);var x=a(9199);function p(e){let{title:t,value:a,total:s,increment:n}=e,l=s?a/s*100:0;return(0,r.jsx)(o.Z,{children:(0,r.jsxs)(i.U,{className:"space-y-3",children:[(0,r.jsx)("h3",{className:"text-sm font-medium",children:t}),(0,r.jsxs)("div",{className:"flex justify-between items-baseline",children:[(0,r.jsxs)("div",{className:"flex items-baseline",children:[(0,r.jsx)("span",{className:"text-2xl font-bold",children:a}),n&&(0,r.jsx)("span",{className:"ml-1 text-sm opacity-70",children:"/s"})]}),s&&(0,r.jsxs)("div",{className:"text-sm opacity-70",children:["of ",s]})]}),s&&(0,r.jsx)(x.o,{value:l})]})})}var g=a(5689),v=a(6046);async function y(e){if(!e)return console.log("No username provided for viewer count fetch"),0;try{var t,a,r,s,o;console.log("\uD83D\uDCFA Fetching viewer count for channel: ".concat(e));let n=await fetch("https://gql.twitch.tv/gql",{method:"POST",headers:{"Client-Id":"kimne78kx3ncx6brgo4mv6wki5h1ko","Content-Type":"application/json"},body:JSON.stringify({query:"\n        query GetViewerCount($login: String!) {\n          user(login: $login) {\n            stream {\n              viewersCount\n            }\n          }\n        }\n      ",variables:{login:e}})}),l=await n.json(),i=(null==l?void 0:null===(r=l.data)||void 0===r?void 0:null===(a=r.user)||void 0===a?void 0:null===(t=a.stream)||void 0===t?void 0:t.viewersCount)||0;return(null==l?void 0:null===(o=l.data)||void 0===o?void 0:null===(s=o.user)||void 0===s?void 0:s.stream)?console.log("✅ Channel ".concat(e,": ").concat(i," viewers on stream")):console.log("❌ Channel ".concat(e," is offline or no stream data available")),console.log("Response data:",l),i}catch(t){return console.error("\uD83D\uDD34 Error fetching viewer count for ".concat(e,":"),t),0}}var f=a(119);function j(e){let{trend:t,delay:a=0}=e,[o,n]=(0,s.useState)(Math.random()),l=(0,s.useMemo)(()=>({initialX:80*Math.random()-40,randomX1:40*Math.random()-20,randomX2:80*Math.random()-40,randomRotate:360*Math.random(),randomSize:3*Math.random()+2,randomBorderRadius:10*Math.random()+2}),[]);return(0,r.jsx)(f.P.div,{initial:{y:0,x:l.initialX,opacity:1,scale:1,rotate:0},animate:{y:"up"===t?[0,-40,-120]:[0,40,80],x:"up"===t?[l.initialX,l.initialX+l.randomX1,l.initialX+l.randomX2]:[l.initialX,l.initialX,l.initialX],opacity:[1,.7,0],scale:[1,1.3,0],rotate:[0,l.randomRotate,0]},transition:{duration:2+Math.random(),delay:a,ease:"easeOut"},onAnimationComplete:()=>n(Math.random()),style:{width:l.randomSize,height:l.randomSize,borderRadius:l.randomBorderRadius},className:"absolute ".concat("up"===t?"bg-gradient-to-t from-orange-600 to-yellow-400 shadow-lg shadow-orange-500/50":"bg-gradient-to-b from-blue-500 to-cyan-300")},o)}function b(e){let{value:t,previousValue:a}=e,[n,l]=(0,s.useState)(null);return(0,s.useEffect)(()=>{void 0!==a&&t!==a&&l(t>a?"up":"down")},[t,a]),(0,r.jsx)(o.Z,{children:(0,r.jsxs)(i.U,{className:"space-y-3 relative overflow-hidden",children:[(0,r.jsxs)("h3",{className:"text-sm font-medium flex items-center gap-2",children:["Current Viewers",n&&(0,r.jsx)(f.P.div,{initial:{scale:0},animate:{scale:1},className:"text-xl ".concat("up"===n?"text-orange-500":"text-blue-500"),children:"up"===n?"\uD83D\uDD25":"❄️"})]}),(0,r.jsxs)("div",{className:"flex justify-center items-center relative min-h-[80px]",children:[(0,r.jsx)(f.P.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1,transition:{type:"spring",stiffness:300,damping:20}},className:"text-4xl font-bold relative z-10 ".concat("up"===n?"text-orange-500 drop-shadow-[0_0_15px_rgba(255,165,0,0.7)]":"down"===n?"text-blue-500 drop-shadow-[0_0_15px_rgba(0,191,255,0.7)]":""),children:0===t?(0,r.jsx)("span",{className:"text-2xl text-default-400",children:"Offline"}):t.toLocaleString()},t),n&&(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:Array.from({length:20}).map((e,t)=>(0,r.jsx)(j,{trend:n,delay:.1*t},"".concat(n,"-").concat(t)))})]})]})})}var N=a(2651);let w="http://localhost:3001/api";async function C(e){try{let t=new FormData;return t.append("channelName",e.channelName),t.append("threads",e.threads.toString()),t.append("timeout",e.timeout.toString()),t.append("proxyType",e.proxyType),e.proxyFile&&t.append("proxyFile",e.proxyFile),(await N.A.post("".concat(w,"/bot/start"),t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){throw console.error("Error starting bot:",e),e}}async function T(){try{return(await N.A.post("".concat(w,"/bot/stop"))).data}catch(e){throw console.error("Error stopping bot:",e),e}}async function _(){try{let e=await N.A.get("".concat(w,"/bot/stats"));return console.log("Bot stats:",e.data),e.data}catch(e){throw console.error("Error fetching bot stats:",e),e}}function S(){var e,t;let a=(0,v.useRouter)(),{data:x}=(0,g.Nu)(),[f,j]=(0,s.useState)({threads:1,channelName:"",gameName:"",messagesPerMinute:1,enableChat:!1,proxyType:"http",timeout:1e3}),{viewerCount:N,previousCount:w}=function(e){let[t,a]=(0,s.useState)(0),[r,o]=(0,s.useState)(0),[n,l]=(0,s.useState)();return(0,s.useEffect)(()=>{if(!e)return;let r=async()=>{let r=await y(e);o(t),a(r),l(new Date),console.log("\uD83D\uDCCA Viewer count updated at ".concat(new Date().toLocaleTimeString(),": ").concat(r," viewers"))};console.log("\uD83D\uDD04 Starting viewer count polling for ".concat(e)),r();let s=setInterval(r,2e3);return()=>{console.log("⏹️ Stopping viewer count polling for ".concat(e)),clearInterval(s)}},[e,t]),{viewerCount:t,previousCount:r,lastUpdate:n}}((null==f?void 0:f.channelName)||(null==x?void 0:null===(e=x.user)||void 0===e?void 0:e.TwitchUsername));console.log("currentViewers",N),console.log("profile",x);let[S,k]=(0,s.useState)(!1),[P,D]=(0,s.useState)(null),[A,E]=(0,s.useState)({totalProxies:0,aliveProxies:0,activeThreads:0,request_count:0,viewers:N,targetViewers:0});(0,s.useEffect)(()=>{let e;return S&&(e=setInterval(async()=>{try{let e=await _();E(t=>({...t,activeThreads:e.active_threads,totalProxies:e.total_proxies,aliveProxies:e.alive_proxies,request_count:e.request_count})),0===e.active_threads&&S&&k(!1)}catch(e){console.error("Failed to fetch stats:",e)}},1e3)),()=>{e&&clearInterval(e)}},[S]),(0,s.useEffect)(()=>{var e;(null==x?void 0:null===(e=x.user)||void 0===e?void 0:e.TwitchUsername)&&!f.channelName&&j(e=>({...e,channelName:x.user.TwitchUsername}))},[x,f.channelName]),(0,s.useEffect)(()=>{(async()=>{try{let e=await _();if((e.active_threads>0||e.is_running)&&(k(!0),E(t=>({...t,activeThreads:e.active_threads,totalProxies:e.total_proxies,aliveProxies:e.alive_proxies,request_count:e.request_count})),e.config)){let{threads:t,timeout:a,proxy_type:r}=e.config;j(s=>({...s,threads:null!=t?t:s.threads,timeout:null!=a?a:s.timeout,proxyType:null!=r?r:s.proxyType,channelName:e.channel_name||s.channelName}))}}catch(e){console.error("Failed to check bot status:",e)}})()},[]);let R=async()=>{try{k(!0),await C({channelName:f.channelName,threads:f.threads,proxyFile:P||void 0,timeout:f.timeout,proxyType:f.proxyType}),m.oR.success("Bot started successfully!")}catch(e){m.oR.error("Failed to start bot: ".concat(e instanceof Error?e.message:"Unknown error")),k(!1)}},F=async()=>{try{await T(),m.oR.success("Bot stopped successfully!"),k(!1),E(e=>({...e,activeThreads:0,requests:0}))}catch(e){m.oR.error("Failed to stop bot"),console.error("Failed to stop bot:",e)}},M=async()=>{try{await (0,g.ri)(),m.oR.success("Logged out successfully!"),a.push("/login")}catch(e){m.oR.error("Failed to logout")}};return(0,r.jsxs)("div",{className:"min-h-screen p-6",children:[(0,r.jsxs)("div",{className:"max-w-7xl mx-auto space-y-8",children:[(0,r.jsxs)(o.Z,{className:"relative text-center mb-8 p-8 rounded-2xl border border-default-200",children:[x&&(0,r.jsx)(n.T,{variant:"bordered",onPress:M,className:"absolute right-4 top-4",color:"danger",children:"Logout"}),(0,r.jsx)("h1",{className:"text-5xl font-black mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",children:"Twitch Viewer Bot"}),(0,r.jsx)("p",{className:"text-xl font-medium",children:x?"Welcome back, ".concat(x.user.username):"Monitor and control your viewer bot"})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.d,{children:(0,r.jsx)("h2",{className:"text-2xl font-semibold",children:"Live Monitoring"})}),(0,r.jsx)(i.U,{children:(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[(0,r.jsx)(b,{value:N,previousValue:w}),(0,r.jsx)(p,{title:"Active Threads",value:A.activeThreads,total:f.threads}),(0,r.jsx)(p,{title:"Proxies",value:A.totalProxies,total:A.totalProxies}),(0,r.jsx)(p,{title:"Requests",value:A.request_count})]})})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.d,{children:(0,r.jsx)("h2",{className:"text-2xl font-semibold",children:"Basic Configuration"})}),(0,r.jsxs)(i.U,{className:"space-y-6",children:[(0,r.jsx)(c.r,{label:"Channel Name",value:f.channelName,placeholder:(null==x?void 0:null===(t=x.user)||void 0===t?void 0:t.TwitchUsername)||"Enter channel name",onChange:e=>j({...f,channelName:e.target.value})}),(0,r.jsx)(c.r,{type:"number",label:"Number of Threads",value:f.threads.toString(),onChange:e=>j({...f,threads:parseInt(e.target.value)})}),(0,r.jsx)("div",{children:(0,r.jsx)(d.Q,{value:[f.timeout],defaultValue:[1e4],maxValue:1e4,onChange:e=>j({...f,timeout:Number(Array.isArray(e)?e[0]:e)}),getValue:e=>"".concat(e,"ms"),label:"Request Timeout",step:100})}),(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("label",{className:"text-sm font-medium block",children:"Proxy List (Optional)"}),(0,r.jsx)(c.r,{type:"file",accept:".txt",onChange:e=>{var t;return D((null===(t=e.target.files)||void 0===t?void 0:t[0])||null)}}),(0,r.jsx)("p",{className:"text-xs text-gray-500",children:"Upload a .txt file with proxies or let the bot scrape them automatically"})]})]})]}),(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.d,{children:(0,r.jsx)("h2",{className:"text-2xl font-semibold",children:"Advanced Settings"})}),(0,r.jsxs)(i.U,{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(c.r,{label:"Game Name",value:f.gameName,onChange:e=>j({...f,gameName:e.target.value}),isDisabled:!0}),(0,r.jsx)("span",{className:"absolute right-0 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded",children:"Coming Soon Premium Feature"})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(d.Q,{value:[1],defaultValue:[1],maxValue:60,isDisabled:!0,label:"Messages Per Minute",getValue:e=>"".concat(e," messages"),step:1}),(0,r.jsx)("span",{className:"absolute right-0 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded",children:"Coming Soon Premium Feature"})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(u.A,{checked:!1,isDisabled:!0,children:(0,r.jsx)("span",{className:"text-gray-400",children:"Enable Chat Messages"})}),(0,r.jsx)("span",{className:"absolute right-0 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded",children:"Coming Soon Premium Feature"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"text-sm font-medium mb-2 block",children:"Proxy Type"}),(0,r.jsx)(h.x,{children:["http","socks4","socks5","all"].map(e=>(0,r.jsx)(n.T,{variant:f.proxyType===e?"solid":"bordered",onPress:()=>j({...f,proxyType:e}),children:e},e))})]})]})]})]}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(i.U,{className:"py-6",children:(0,r.jsx)(n.T,{variant:"solid",color:S?"danger":"primary",size:"lg",fullWidth:!0,onPress:S?F:R,children:S?"Stop Bot":"Start Bot"})})})]}),(0,r.jsx)(m.N9,{})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[797,753,86,446,536,441,517,358],()=>t(4841)),_N_E=e.O()}]);