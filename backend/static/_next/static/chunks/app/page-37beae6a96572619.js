(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4841:(e,s,a)=>{Promise.resolve().then(a.bind(a,5912))},5689:(e,s,a)=>{"use strict";a.d(s,{Nu:()=>o,iD:()=>c,kz:()=>n});var t=a(2651),r=a(8094);let l=a(2818).env.NEXT_PUBLIC_BACKEND_URL||"http://localhost:3000",i=async e=>(await t.A.get(e,{withCredentials:!0})).data;async function n(e){try{return(await t.A.post("".concat(l,"/auth/register"),e,{withCredentials:!0})).data}catch(e){throw console.error("Register error:",e),e}}async function c(e){try{let s=await t.A.post("".concat(l,"/auth/login"),e,{withCredentials:!0,headers:{"Content-Type":"application/json"},xsrfCookieName:"csrf_access_token",xsrfHeaderName:"X-CSRF-TOKEN"});return console.log("Cookies:",document.cookie),s.data}catch(e){throw console.error("Login error:",e),e}}function o(){return(0,r.Ay)("".concat(l,"/users/profile"),i)}},5912:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>g});var t=a(5155),r=a(2115),l=a(7293),i=a(1889),n=a(3767),c=a(3794),o=a(6777),d=a(8555),x=a(3669),h=a(6323),m=a(6331);a(5716);var u=a(9199);function j(e){let{title:s,value:a,total:r,increment:i}=e,c=r?a/r*100:0;return(0,t.jsx)(l.Z,{children:(0,t.jsxs)(n.U,{className:"space-y-3",children:[(0,t.jsx)("h3",{className:"text-sm font-medium",children:s}),(0,t.jsxs)("div",{className:"flex justify-between items-baseline",children:[(0,t.jsxs)("div",{className:"flex items-baseline",children:[(0,t.jsx)("span",{className:"text-2xl font-bold",children:a}),i&&(0,t.jsx)("span",{className:"ml-1 text-sm opacity-70",children:"/s"})]}),r&&(0,t.jsxs)("div",{className:"text-sm opacity-70",children:["of ",r]})]}),r&&(0,t.jsx)(u.o,{value:c})]})})}var p=a(5689);function g(){let{data:e}=(0,p.Nu)(),[s,a]=(0,r.useState)(!1),[u]=(0,r.useState)({totalProxies:0,aliveProxies:0,activeThreads:0,requests:0,viewers:0,targetViewers:0}),[g,N]=(0,r.useState)({threads:1,channelName:"",gameName:"",messagesPerMinute:1,enableChat:!1,proxyType:"http",timeout:1e3}),v=async()=>{a(!0);try{m.oR.success("Bot started successfully!")}catch(e){m.oR.error("Failed to start bot")}finally{a(!1)}};return(0,t.jsxs)("div",{className:"min-h-screen p-6",children:[(0,t.jsxs)("div",{className:"max-w-7xl mx-auto space-y-8",children:[(0,t.jsxs)("div",{className:"text-center mb-8",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold mb-2",children:"Twitch Viewer Bot"}),(0,t.jsx)("p",{className:"text-gray-500",children:e?"Welcome back, ".concat(e.username):"Monitor and control your viewer bot"})]}),(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.d,{children:(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:"Live Monitoring"})}),(0,t.jsx)(n.U,{children:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[(0,t.jsx)(j,{title:"Current Viewers",value:u.viewers,total:u.targetViewers}),(0,t.jsx)(j,{title:"Active Threads",value:u.activeThreads,total:g.threads}),(0,t.jsx)(j,{title:"Proxies",value:u.aliveProxies,total:u.totalProxies}),(0,t.jsx)(j,{title:"Requests",value:u.requests,increment:!0})]})})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.d,{children:(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:"Basic Configuration"})}),(0,t.jsxs)(n.U,{className:"space-y-6",children:[(0,t.jsx)(c.r,{label:"Channel Name",value:g.channelName,onChange:e=>N({...g,channelName:e.target.value})}),(0,t.jsx)(c.r,{label:"Game Name",value:g.gameName,onChange:e=>N({...g,gameName:e.target.value})}),(0,t.jsx)(c.r,{type:"number",label:"Number of Threads",value:g.threads.toString(),onChange:e=>N({...g,threads:parseInt(e.target.value)})})]})]}),(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(i.d,{children:(0,t.jsx)("h2",{className:"text-2xl font-semibold",children:"Advanced Settings"})}),(0,t.jsxs)(n.U,{className:"space-y-6",children:[(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(o.Q,{value:[1],defaultValue:[1],maxValue:60,isDisabled:!0,label:"Messages Per Minute",getValue:e=>"".concat(e," messages"),step:1}),(0,t.jsx)("span",{className:"absolute right-0 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded",children:"Coming Soon Premium Feature"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(o.Q,{value:[g.timeout],defaultValue:[1e3],maxValue:1e4,onChange:e=>N({...g,timeout:Number(Array.isArray(e)?e[0]:e)}),getValue:e=>"".concat(e,"ms"),label:"Request Timeout",step:100})}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(d.A,{checked:!1,isDisabled:!0,children:(0,t.jsx)("span",{className:"text-gray-400",children:"Enable Chat Messages"})}),(0,t.jsx)("span",{className:"absolute right-0 top-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded",children:"Coming Soon Premium Feature"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"text-sm font-medium mb-2 block",children:"Proxy Type"}),(0,t.jsx)(x.x,{children:["http","socks4","socks5","all"].map(e=>(0,t.jsx)(h.T,{variant:g.proxyType===e?"solid":"bordered",onPress:()=>N({...g,proxyType:e}),children:e},e))})]})]})]})]}),(0,t.jsx)(l.Z,{children:(0,t.jsx)(n.U,{className:"py-6",children:(0,t.jsx)(h.T,{variant:"solid",color:"primary",size:"lg",fullWidth:!0,isLoading:s,onPress:v,children:s?"Running...":"Start Bot"})})})]}),(0,t.jsx)(m.N9,{})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[797,602,667,240,441,517,358],()=>s(4841)),_N_E=e.O()}]);