(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},8310:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>x,tree:()=>c});var r=s(260),a=s(8203),i=s(5155),n=s.n(i),l=s(7292),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5104)),"/home/hugohonda/Developer/ai-hub/saas-hub/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,9611)),"/home/hugohonda/Developer/ai-hub/saas-hub/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/hugohonda/Developer/ai-hub/saas-hub/app/page.tsx"],m={require:s,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5112:(e,t,s)=>{Promise.resolve().then(s.bind(s,5104))},5784:(e,t,s)=>{Promise.resolve().then(s.bind(s,4093))},4093:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(5512),a=s(5782);let i=({categories:e,selectedCategory:t,onCategoryChange:s,allLabel:a})=>(0,r.jsxs)("div",{className:"flex gap-2 mb-12 overflow-x-auto pb-4 justify-center flex-wrap",children:[(0,r.jsx)("button",{onClick:()=>s(null),className:`px-4 py-2 rounded-full bg-white dark:bg-gray-800 border text-sm font-medium transition-colors
                    ${null===t?"border-primary text-primary dark:border-secondary dark:text-secondary":"border-gray-200 dark:border-gray-700 hover-primary dark:hover-secondary"}`,children:a||"All"}),e.map(e=>(0,r.jsx)("button",{onClick:()=>s(e),className:`px-4 py-2 rounded-full bg-white dark:bg-gray-800 border text-sm font-medium transition-colors
                        ${t===e?"border-primary text-primary dark:border-secondary dark:text-secondary":"border-gray-200 dark:border-gray-700 hover-primary dark:hover-secondary"}`,children:e},e))]});var n=s(8009),l=s(8531),o=s.n(l),c=s(7643),d=s(1643),m=s(9462);let x=(0,d.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function u({className:e,variant:t,...s}){return(0,r.jsx)("div",{className:(0,m.cn)(x({variant:t}),e),...s})}var p=s(5325);function g(){let{translations:e}=(0,a.o)(),[t,s]=(0,n.useState)(null),l=[{title:e.services.items.documentAnalysis.title,description:e.services.items.documentAnalysis.description,icon:"\uD83D\uDD0D",badge:e.services.badges.popular,category:e.services.categories.Business,slug:"documentAnalysis"},{title:e.services.items.fraudDetection.title,description:e.services.items.fraudDetection.description,icon:"\uD83D\uDEE1️",badge:e.services.badges.enterprise,category:e.services.categories.Security,slug:"fraudDetection"},{title:e.services.items.geoAnalytics.title,description:e.services.items.geoAnalytics.description,icon:"\uD83C\uDF0D",badge:e.services.badges.new,category:e.services.categories.Analytics,slug:"geoAnalytics"},{title:e.services.items.legalAI.title,description:e.services.items.legalAI.description,icon:"⚖️",badge:e.services.badges.popular,category:e.services.categories.Legal,slug:"legalAI"},{title:e.services.items.intelligentSearch.title,description:e.services.items.intelligentSearch.description,icon:"\uD83D\uDD0E",badge:e.services.badges.trending,category:e.services.categories.AI,slug:"intelligentSearch"},{title:e.services.items.marketIntelligence.title,description:e.services.items.marketIntelligence.description,icon:"\uD83D\uDCC8",badge:e.services.badges.enterprise,category:e.services.categories.Business,slug:"marketIntelligence"},{title:e.services.items.socialMedia.title,description:e.services.items.socialMedia.description,icon:"\uD83D\uDE80",category:e.services.categories.Marketing,slug:"socialMedia"},{title:e.services.items.dataAnalytics.title,description:e.services.items.dataAnalytics.description,icon:"\uD83D\uDCCA",category:e.services.categories.Business,slug:"dataAnalytics"},{title:e.services.items.documentOCR.title,description:e.services.items.documentOCR.description,icon:"\uD83D\uDCC4",category:e.services.categories.Legal,slug:"documentOCR"}],d=[...new Set(l.map(e=>e.category))].sort(),m=t?l.filter(e=>e.category===t):l;return(0,r.jsx)(p.A,{children:(0,r.jsxs)("main",{className:"flex-1",children:[(0,r.jsx)("section",{className:"w-full py-4 md:py-10 lg:py-10 xl:py-10 border-b",children:(0,r.jsx)("div",{className:"container max-w-screen-2xl mx-auto px-4",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-6 text-center",children:[(0,r.jsx)("h1",{className:"max-w-3xl mx-auto text-3xl font-bold tracking-tight pb-2 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] via-[#38b6ff] to-[#6c86ff]",children:e.hero.title}),(0,r.jsx)("p",{className:"max-w-[42rem] mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed",children:e.hero.subtitle})]})})}),(0,r.jsx)("section",{className:"w-full py-12 border-b",children:(0,r.jsxs)("div",{className:"container max-w-screen-2xl mx-auto px-4",children:[(0,r.jsx)("div",{className:"max-w-6xl mx-auto mb-2",children:(0,r.jsx)(i,{categories:d,selectedCategory:t,onCategoryChange:s,allLabel:e.services.all})}),(0,r.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",children:m.map((t,s)=>(0,r.jsxs)(c.Zp,{className:"group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full",children:[(0,r.jsx)(o(),{href:`/services/${t.slug}`,className:"absolute inset-0 z-10",children:(0,r.jsxs)("span",{className:"sr-only",children:["View ",t.title]})}),(0,r.jsxs)(c.aR,{className:"space-y-3 p-6",children:[t.badge&&(0,r.jsx)(u,{variant:"secondary",className:"absolute top-4 right-4 bg-primary/10 text-primary hover:bg-primary/20",children:t.badge}),(0,r.jsx)("div",{className:"text-4xl transition-transform duration-300 group-hover:scale-110 transform-gpu",children:t.icon}),(0,r.jsx)("div",{className:"text-sm font-medium text-muted-foreground",children:t.category}),(0,r.jsx)("h3",{className:"text-xl font-semibold tracking-tight",children:t.title})]}),(0,r.jsx)(c.Wu,{className:"p-6 pt-0 flex-grow",children:(0,r.jsx)("p",{className:"text-muted-foreground line-clamp-3",children:t.description})}),(0,r.jsx)(c.wL,{className:"p-6 pt-0",children:(0,r.jsxs)("div",{className:"flex items-center text-sm font-medium text-primary transition-transform duration-300 will-change-transform group-hover:translate-x-2",children:[e.services.learnMore,(0,r.jsx)("svg",{className:"w-4 h-4 ml-1 transition-transform duration-300 will-change-transform group-hover:translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})})]},s))})})]})}),(0,r.jsx)("section",{className:"w-full py-8",children:(0,r.jsx)("div",{className:"container max-w-screen-2xl mx-auto px-4",children:(0,r.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,r.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",children:[{label:e.stats.activeUsers.label,value:e.stats.activeUsers.value},{label:e.stats.timeSaved.label,value:e.stats.timeSaved.value},{label:e.stats.successRate.label,value:e.stats.successRate.value},{label:e.stats.roiAverage.label,value:e.stats.roiAverage.value}].map((e,t)=>(0,r.jsx)(c.Zp,{className:"relative overflow-hidden group transition-colors border-none",children:(0,r.jsx)(c.Wu,{className:"p-6 flex flex-col items-center justify-center text-center h-full",children:(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("div",{className:"text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#6c86ff] to-[#38b6ff] bg-clip-text text-transparent",children:e.value}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:e.label})]})})},t))})})})})]})})}},5325:(e,t,s)=>{"use strict";s.d(t,{A:()=>m});var r=s(5512),a=s(8009),i=s(5782),n=s(8531),l=s.n(n),o=s(5103),c=s(9334);function d(){let{language:e,setLanguage:t}=(0,i.o)(),[s,n]=(0,a.useState)(!1),l=(0,a.useRef)(null),o={"pt-BR":{name:"Portugu\xeas",flag:"\uD83C\uDDE7\uD83C\uDDF7"},en:{name:"English",flag:"\uD83C\uDDFA\uD83C\uDDF8"}};return(0,r.jsxs)("div",{className:"relative",ref:l,children:[(0,r.jsxs)("button",{onClick:()=>n(!s),className:"flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-primary transition-colors","aria-label":"Select language",children:[(0,r.jsx)("span",{className:"text-base",children:o[e].flag}),(0,r.jsx)("span",{className:"hidden sm:inline-flex",children:o[e].name}),(0,r.jsx)("svg",{className:`w-4 h-4 transition-transform ${s?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),s&&(0,r.jsx)("div",{className:"absolute right-0 mt-2 w-40 rounded-md bg-background border shadow-lg",children:Object.entries(o).map(([s,{name:a,flag:i}])=>(0,r.jsxs)("button",{onClick:()=>{t(s),n(!1)},className:`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors
                                ${e===s?"text-primary font-medium bg-accent/50":"text-muted-foreground"}
                                ${"en"===s?"rounded-b-md":"rounded-t-md"}`,children:[(0,r.jsx)("span",{className:"text-base",children:i}),(0,r.jsx)("span",{children:a}),e===s&&(0,r.jsx)("svg",{className:"w-4 h-4 ml-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})]},s))})]})}function m({children:e}){let{translations:t}=(0,i.o)(),s="/about"===(0,c.usePathname)(),a=s?"AI Hub":t.nav.about;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen bg-background",children:[(0,r.jsx)("header",{className:"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",children:(0,r.jsxs)("div",{className:"container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4",children:[(0,r.jsx)("div",{className:"flex items-center",children:(0,r.jsxs)(l(),{href:s?"/about":"/",className:"flex items-center space-x-3",children:[(0,r.jsx)(o.default,{src:"/images/logo.png",alt:"Logo",width:32,height:32,className:"w-8 h-8"}),(0,r.jsx)("span",{className:"font-bold text-xl bg-gradient-to-r from-[#6c86ff] to-[#38b6ff] bg-clip-text text-transparent",children:s?"Honda Data":"AI Hub"})]})}),(0,r.jsx)("nav",{className:"flex items-center",children:(0,r.jsxs)("div",{className:"flex items-center space-x-4 sm:space-x-6",children:[(0,r.jsx)(l(),{href:s?"/":"/about",className:"text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center",children:a}),(0,r.jsx)("div",{className:"h-6 w-px bg-border hidden sm:inline-flex"}),(0,r.jsx)("div",{className:"relative inline-flex items-center",children:(0,r.jsx)(d,{})})]})})]})}),e,(0,r.jsx)("footer",{className:"w-full border-t bg-muted/40 mt-2",children:(0,r.jsx)("div",{className:"container max-w-screen-2xl mx-auto px-4",children:(0,r.jsx)("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4 py-8",children:(0,r.jsx)("div",{className:"text-sm text-muted-foreground order-2 md:order-1 text-center md:text-left",children:t.footer.rights})})})})]})}},7643:(e,t,s)=>{"use strict";s.d(t,{Wu:()=>o,Zp:()=>n,aR:()=>l,wL:()=>c});var r=s(5512),a=s(8009),i=s(9462);let n=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...t}));n.displayName="Card";let l=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...t}));l.displayName="CardHeader",a.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,i.cn)("font-semibold leading-none tracking-tight",e),...t})).displayName="CardTitle",a.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,i.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription";let o=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,i.cn)("p-6 pt-0",e),...t}));o.displayName="CardContent";let c=a.forwardRef(({className:e,...t},s)=>(0,r.jsx)("div",{ref:s,className:(0,i.cn)("flex items-center p-6 pt-0",e),...t}));c.displayName="CardFooter"},9462:(e,t,s)=>{"use strict";s.d(t,{cn:()=>i});var r=s(2281),a=s(4805);function i(...e){return(0,a.QP)((0,r.$)(e))}},5104:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/hugohonda/Developer/ai-hub/saas-hub/app/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/hugohonda/Developer/ai-hub/saas-hub/app/page.tsx","default")},6055:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,883,90,873],()=>s(8310));module.exports=r})();