(()=>{var e={};e.id=805,e.ids=[805],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},5549:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=n(260),s=n(8203),i=n(5155),a=n.n(i),o=n(7292),l={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let c=["",{children:["services",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,2460)),"/home/hugohonda/Developer/ai-hub/saas-hub/app/services/[slug]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,9611)),"/home/hugohonda/Developer/ai-hub/saas-hub/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/hugohonda/Developer/ai-hub/saas-hub/app/services/[slug]/page.tsx"],u={require:n,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/services/[slug]/page",pathname:"/services/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},744:(e,t,n)=>{Promise.resolve().then(n.bind(n,915))},4296:(e,t,n)=>{Promise.resolve().then(n.bind(n,8999))},8999:(e,t,n)=>{"use strict";n.d(t,{default:()=>u});var r=n(5512);n(8009);var s=n(5782),i=n(9334),a=n(8531),o=n.n(a),l=n(5325),c=n(6287),d=n(2037);function u(){let{translations:e}=(0,s.o)(),t=(0,i.useParams)().slug;return Object.entries(e.services.items).find(([e])=>e===t)?.[1]?(0,r.jsx)(l.A,{children:(0,r.jsx)("main",{className:"flex-1",children:(0,r.jsx)("div",{className:"container max-w-screen-2xl mx-auto px-4 py-12",children:(0,r.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,r.jsx)("div",{className:"bg-card rounded-lg p-8",children:(0,r.jsxs)("div",{className:"container max-w-screen-2xl mx-auto px-4 relative",children:[(0,r.jsx)("div",{className:"max-w-4xl mx-auto flex flex-col items-center space-y-8 text-center",children:(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)("h2",{className:"text-4xl pb-2 font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] to-[#38b6ff]",children:e.about.contact.title}),(0,r.jsx)("p",{className:"mx-auto max-w-[800px] text-lg sm:text-xl text-muted-foreground leading-relaxed",children:e.about.contact.content})]})}),(0,r.jsx)("div",{className:"flex justify-center pt-12 pb-12",children:(0,r.jsx)(c.$,{size:"lg",onClick:()=>{window.location.href=(0,d.B)(e.contact.emailSubject)},className:"w-full sm:w-auto rounded-full text-lg px-8 py-6 h-auto hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-[#6c86ff] to-[#38b6ff] hover:from-[#38b6ff] hover:to-[#6c86ff]",children:e.contact.sendEmail})})]})})})})})}):(0,r.jsx)(l.A,{children:(0,r.jsx)("div",{className:"flex items-center justify-center min-h-[60vh]",children:(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h1",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100",children:"Service not found"}),(0,r.jsx)(o(),{href:"/",className:"mt-4 text-primary hover:underline",children:"Return to home"})]})})})}},2037:(e,t,n)=>{"use strict";n.d(t,{B:()=>s});let r=()=>"honda.data.science@gmail.com",s=e=>{let t=r(),n=e?`?subject=${encodeURIComponent(e)}`:"";return`mailto:${t}${n}`}},5325:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(5512),s=n(8009),i=n(5782),a=n(8531),o=n.n(a),l=n(5103),c=n(9334);function d(){let{language:e,setLanguage:t}=(0,i.o)(),[n,a]=(0,s.useState)(!1),o=(0,s.useRef)(null),l={"pt-BR":{name:"Portugu\xeas",flag:"\uD83C\uDDE7\uD83C\uDDF7"},en:{name:"English",flag:"\uD83C\uDDFA\uD83C\uDDF8"}};return(0,r.jsxs)("div",{className:"relative",ref:o,children:[(0,r.jsxs)("button",{onClick:()=>a(!n),className:"flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors","aria-label":"Select language",children:[(0,r.jsx)("span",{className:"text-base",children:l[e].flag}),(0,r.jsx)("span",{className:"hidden sm:inline-flex",children:l[e].name}),(0,r.jsx)("svg",{className:`w-4 h-4 transition-transform ${n?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),n&&(0,r.jsx)("div",{className:"absolute right-0 mt-2 w-40 rounded-md bg-background border shadow-lg",children:Object.entries(l).map(([n,{name:s,flag:i}])=>(0,r.jsxs)("button",{onClick:()=>{t(n),a(!1)},className:`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors
                                ${e===n?"text-primary font-medium bg-accent/50":"text-muted-foreground"}
                                ${"en"===n?"rounded-b-md":"rounded-t-md"}`,children:[(0,r.jsx)("span",{className:"text-base",children:i}),(0,r.jsx)("span",{children:s}),e===n&&(0,r.jsx)("svg",{className:"w-4 h-4 ml-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})]},n))})]})}function u({children:e}){let{translations:t}=(0,i.o)(),n="/about"===(0,c.usePathname)(),s=n?"AI Hub":t.nav.about;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen bg-background",children:[(0,r.jsx)("header",{className:"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:(0,r.jsxs)("div",{className:"container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsxs)(o(),{href:n?"/about":"/",className:"flex items-center space-x-3",children:[(0,r.jsx)(l.default,{src:"/images/logo.png",alt:"Logo",width:32,height:32,className:"w-8 h-8"}),(0,r.jsx)("span",{className:"font-bold text-xl bg-gradient-to-r from-[#6c86ff] to-[#38b6ff] bg-clip-text text-transparent",children:n?"Honda Data":"AI Hub"})]})}),(0,r.jsx)("nav",{className:"flex items-center",children:(0,r.jsxs)("div",{className:"flex items-center space-x-4 sm:space-x-6",children:[(0,r.jsx)(o(),{href:n?"/":"/about",className:"text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center",children:s}),(0,r.jsx)("div",{className:"h-6 w-px bg-border hidden sm:inline-flex"}),(0,r.jsx)("div",{className:"relative inline-flex items-center",children:(0,r.jsx)(d,{})})]})})]})}),e,(0,r.jsx)("footer",{className:"w-full border-t bg-muted/40 mt-2",children:(0,r.jsx)("div",{className:"container max-w-screen-2xl mx-auto px-4",children:(0,r.jsx)("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4 py-8",children:(0,r.jsx)("div",{className:"text-sm text-muted-foreground order-2 md:order-1 text-center md:text-left",children:t.footer.rights})})})})]})}},6287:(e,t,n)=>{"use strict";n.d(t,{$:()=>p});var r=n(5512),s=n(8009);function i(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var a=s.forwardRef((e,t)=>{let{children:n,...i}=e,a=s.Children.toArray(n),l=a.find(c);if(l){let e=l.props.children,n=a.map(t=>t!==l?t:s.Children.count(e)>1?s.Children.only(null):s.isValidElement(e)?e.props.children:null);return(0,r.jsx)(o,{...i,ref:t,children:s.isValidElement(e)?s.cloneElement(e,void 0,n):null})}return(0,r.jsx)(o,{...i,ref:t,children:n})});a.displayName="Slot";var o=s.forwardRef((e,t)=>{let{children:n,...r}=e;if(s.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n);return s.cloneElement(n,{...function(e,t){let n={...t};for(let r in t){let s=e[r],i=t[r];/^on[A-Z]/.test(r)?s&&i?n[r]=(...e)=>{i(...e),s(...e)}:s&&(n[r]=s):"style"===r?n[r]={...s,...i}:"className"===r&&(n[r]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?function(...e){return t=>{let n=!1,r=e.map(e=>{let r=i(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():i(e[t],null)}}}}(t,e):e})}return s.Children.count(n)>1?s.Children.only(null):null});o.displayName="SlotClone";var l=({children:e})=>(0,r.jsx)(r.Fragment,{children:e});function c(e){return s.isValidElement(e)&&e.type===l}var d=n(1643),u=n(9462);let m=(0,d.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),p=s.forwardRef(({className:e,variant:t,size:n,asChild:s=!1,...i},o)=>{let l=s?a:"button";return(0,r.jsx)(l,{className:(0,u.cn)(m({variant:t,size:n,className:e})),ref:o,...i})});p.displayName="Button"},9462:(e,t,n)=>{"use strict";n.d(t,{cn:()=>i});var r=n(2281),s=n(4805);function i(...e){return(0,s.QP)((0,r.$)(e))}},915:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});let r=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/hugohonda/Developer/ai-hub/saas-hub/app/services/[slug]/ServiceDetailClient.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/hugohonda/Developer/ai-hub/saas-hub/app/services/[slug]/ServiceDetailClient.tsx","default")},2460:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o,generateStaticParams:()=>a});var r=n(2740);let s={services:{all:"All",categories:{Business:"Business",Marketing:"Marketing",Development:"Development",Legal:"Legal",Support:"Support",AI:"AI & ML",Finance:"Finance",Security:"Security",Analytics:"Analytics"},items:{videoGenerator:{title:"AI Video Creator",description:"Create professional videos from text with AI-powered scenes and voiceovers"},documentAnalysis:{title:"Intelligent Document Analysis",description:"Extract insights from contracts, invoices, and documents automatically"},fraudDetection:{title:"Fraud Detection Agent",description:"Advanced AI models for detecting frauds, anomalies, and suspicious patterns in real-time"},geoAnalytics:{title:"Geographic Analytics",description:"Comprehensive demographic analysis and geographic intelligence with predictive modeling"},legalAI:{title:"Legal Assistant",description:"Advanced NLP for legal document analysis, classification, and entity recognition"},intelligentSearch:{title:"Vector Search Engine",description:"Intelligent search powered by vector databases and semantic understanding"},marketIntelligence:{title:"Market Intelligence",description:"B2B and B2C market analysis with predictive insights and trend forecasting"},financeAI:{title:"Finance Copilot",description:"AI-powered financial analysis, forecasting, and investment insights"},socialMedia:{title:"Content Studio",description:"Generate and schedule viral content across all platforms with AI"},codeAssistant:{title:"AI Code Companion",description:"Real-time code suggestions, security analysis, and automated testing"},aiTraining:{title:"Custom AI Training",description:"Train specialized AI models on your business data and workflows"},dataAnalytics:{title:"AI Analytics Suite",description:"Advanced data analytics with automated insights and visualizations"},anomalyDetection:{title:"Anomaly Detection",description:"Real-time detection of anomalies and patterns in complex data streams"},documentOCR:{title:"Computer Vision",description:"Advanced OCR and computer vision for image processing and analysis"},customerService:{title:"AI Chatbot",description:"Multilingual 24/7 support with sentiment analysis and predictive solutions"}},badges:{popular:"Popular",new:"New",trending:"Trending",beta:"Beta",enterprise:"Enterprise"},learnMore:"Learn more"}};var i=n(915);function a(){return Object.keys(s.services.items).map(e=>({slug:e}))}function o(){return(0,r.jsx)(i.default,{})}},6055:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(8077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[638,883,90,873],()=>n(5549));module.exports=r})();