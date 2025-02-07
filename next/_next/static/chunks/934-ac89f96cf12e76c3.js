"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{2393:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(5155),a=r(2115),s=r(5850),o=r(8173),i=r.n(o),c=r(5565),l=r(6046);function d(){let{language:e,setLanguage:t}=(0,s.o)(),[r,o]=(0,a.useState)(!1),i=(0,a.useRef)(null),c={"pt-BR":{name:"Portugu\xeas",flag:"\uD83C\uDDE7\uD83C\uDDF7"},en:{name:"English",flag:"\uD83C\uDDFA\uD83C\uDDF8"}};return(0,a.useEffect)(()=>{function e(e){i.current&&!i.current.contains(e.target)&&o(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),(0,n.jsxs)("div",{className:"relative",ref:i,children:[(0,n.jsxs)("button",{onClick:()=>o(!r),className:"flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors","aria-label":"Select language",children:[(0,n.jsx)("span",{className:"text-base",children:c[e].flag}),(0,n.jsx)("span",{className:"hidden sm:inline-flex",children:c[e].name}),(0,n.jsx)("svg",{className:"w-4 h-4 transition-transform ".concat(r?"rotate-180":""),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),r&&(0,n.jsx)("div",{className:"absolute right-0 mt-2 w-40 rounded-md bg-background border shadow-lg",children:Object.entries(c).map(r=>{let[a,{name:s,flag:i}]=r;return(0,n.jsxs)("button",{onClick:()=>{t(a),o(!1)},className:"w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors\n                                ".concat(e===a?"text-primary font-medium bg-accent/50":"text-muted-foreground","\n                                ").concat("en"===a?"rounded-b-md":"rounded-t-md"),children:[(0,n.jsx)("span",{className:"text-base",children:i}),(0,n.jsx)("span",{children:s}),e===a&&(0,n.jsx)("svg",{className:"w-4 h-4 ml-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})]},a)})})]})}function u(e){let{children:t}=e,{translations:r}=(0,s.o)(),a="/about"===(0,l.usePathname)(),o=a?"AI Hub":r.nav.about;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen bg-background",children:[(0,n.jsx)("header",{className:"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:(0,n.jsxs)("div",{className:"container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4",children:[(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)(i(),{href:a?"/about":"/",className:"flex items-center space-x-3",children:[(0,n.jsx)(c.default,{src:"/images/logo.png",alt:"Logo",width:32,height:32,className:"w-8 h-8"}),(0,n.jsx)("span",{className:"font-bold text-xl bg-gradient-to-r from-[#6c86ff] to-[#38b6ff] bg-clip-text text-transparent",children:a?"Honda Data":"AI Hub"})]})}),(0,n.jsx)("nav",{className:"flex items-center",children:(0,n.jsxs)("div",{className:"flex items-center space-x-4 sm:space-x-6",children:[(0,n.jsx)(i(),{href:a?"/":"/about",className:"text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center",children:o}),(0,n.jsx)("div",{className:"h-6 w-px bg-border hidden sm:inline-flex"}),(0,n.jsx)("div",{className:"relative inline-flex items-center",children:(0,n.jsx)(d,{})})]})})]})}),t,(0,n.jsx)("footer",{className:"w-full border-t bg-muted/40 mt-2",children:(0,n.jsx)("div",{className:"container max-w-screen-2xl mx-auto px-4",children:(0,n.jsx)("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4 py-8",children:(0,n.jsx)("div",{className:"text-sm text-muted-foreground order-2 md:order-1 text-center md:text-left",children:r.footer.rights})})})})]})}},4085:(e,t,r)=>{r.d(t,{$:()=>l});var n=r(5155),a=r(2115),s=r(1290),o=r(1027),i=r(9602);let c=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=a.forwardRef((e,t)=>{let{className:r,variant:a,size:o,asChild:l=!1,...d}=e,u=l?s.DX:"button";return(0,n.jsx)(u,{className:(0,i.cn)(c({variant:a,size:o,className:r})),ref:t,...d})});l.displayName="Button"},1882:(e,t,r)=>{r.d(t,{R6:()=>m,Bg:()=>g,t9:()=>h});var n=r(1983),a=r(9962),s=r(4057);let o=(0,s.A)("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);var i=r(2591);let c=(0,s.A)("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),l=(0,s.A)("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]),d=(0,s.A)("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]),u=(0,s.A)("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]),m={BUSINESS:"Business",MARKETING:"Marketing",LEGAL:"Legal",AI:"AI & ML",SECURITY:"Security",ANALYTICS:"Analytics"},h=["docSensePro","legalMind","videoGenerator","marketPulse","neuralSearch","guardianAgent","marketingConcierge","customerGenius","geoInsight"],g={docSensePro:{icon:n.A,route:"/services/doc-sense-pro",category:m.BUSINESS},guardianAgent:{icon:a.A,route:"/services/guardian-agent",category:m.SECURITY},geoInsight:{icon:o,route:"/services/geo-insight",category:m.ANALYTICS},legalMind:{icon:a.A,route:"/services/legal-mind",category:m.SECURITY},neuralSearch:{icon:i.A,route:"/services/neural-search",category:m.AI},marketPulse:{icon:c,route:"/services/market-pulse",category:m.BUSINESS},marketingConcierge:{icon:l,route:"/services/marketing-concierge",category:m.MARKETING},customerGenius:{icon:d,route:"/services/customer-genius",category:m.BUSINESS},videoGenerator:{icon:u,route:"/services/video-generator",category:m.MARKETING}}},9602:(e,t,r)=>{r.d(t,{cn:()=>s});var n=r(3463),a=r(9795);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,n.$)(t))}},4057:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(2115);let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:c,className:l="",children:d,iconNode:u,...m}=e;return(0,n.createElement)("svg",{ref:t,...o,width:a,height:a,stroke:r,strokeWidth:c?24*Number(i)/Number(a):i,className:s("lucide",l),...m},[...u.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),c=(e,t)=>{let r=(0,n.forwardRef)((r,o)=>{let{className:c,...l}=r;return(0,n.createElement)(i,{ref:o,iconNode:t,className:s("lucide-".concat(a(e)),c),...l})});return r.displayName="".concat(e),r}},1983:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(4057).A)("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]])},2591:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(4057).A)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},9962:(e,t,r)=>{r.d(t,{A:()=>n});let n=(0,r(4057).A)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]])}}]);