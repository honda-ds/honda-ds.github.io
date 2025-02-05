(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2496:(e,r,t)=>{Promise.resolve().then(t.bind(t,7708))},7708:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var s=t(5155),a=t(5850),n=t(4085);function i(e){let{categories:r,selectedCategory:t,onCategoryChange:a,allLabel:i}=e;return(0,s.jsxs)("div",{className:"flex flex-wrap gap-2 justify-center mb-8",children:[(0,s.jsx)(n.$,{variant:null===t?"default":"outline",onClick:()=>a(null),className:"rounded-full",children:i}),r.map(e=>(0,s.jsx)(n.$,{variant:t===e?"default":"outline",onClick:()=>a(e),className:"rounded-full",children:e},e))]})}var l=t(2115),o=t(8173),c=t.n(o),d=t(5007),u=t(1027),x=t(9602);let m=(0,u.F)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function g(e){let{className:r,variant:t,...a}=e;return(0,s.jsx)("div",{className:(0,x.cn)(m({variant:t}),r),...a})}var f=t(2393),p=t(8072);function h(){let{translations:e}=(0,a.o)(),[r,t]=(0,l.useState)(null),n=p.t9.map(r=>({id:r,title:e.services.items[r].title,description:e.services.items[r].description,icon:p.Bg[r].icon,category:p.Bg[r].category,route:p.Bg[r].route,...r in e.services.badges?{badge:e.services.badges[r]}:{}})),o=r?n.filter(e=>e.category===r):n,u=Object.values(p.R6).sort();return(0,s.jsx)(f.A,{children:(0,s.jsxs)("main",{className:"flex-1",children:[(0,s.jsx)("section",{className:"w-full py-4",children:(0,s.jsx)("div",{className:"container max-w-screen-2xl mx-auto px-4",children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-6 text-center",children:[(0,s.jsx)("h1",{className:"max-w-3xl mx-auto text-3xl font-bold tracking-tight pb-2 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#6c86ff] via-[#38b6ff] to-[#6c86ff]",children:e.hero.title}),(0,s.jsx)("p",{className:"max-w-[42rem] mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed",children:e.hero.subtitle})]})})}),(0,s.jsx)("section",{className:"w-full py-12 pb-18",children:(0,s.jsxs)("div",{className:"container max-w-screen-2xl mx-auto px-4",children:[(0,s.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,s.jsx)(i,{categories:u,selectedCategory:r,onCategoryChange:t,allLabel:e.services.all})}),(0,s.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",children:o.map(r=>(0,s.jsxs)(d.Zp,{className:"group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full",children:[(0,s.jsx)(c(),{href:r.route,className:"absolute inset-0 z-10",children:(0,s.jsxs)("span",{className:"sr-only",children:["View ",r.title]})}),(0,s.jsxs)(d.aR,{className:"space-y-3 p-6",children:[r.badge&&(0,s.jsx)(g,{variant:"secondary",className:"absolute top-4 right-4 bg-primary/10 text-primary hover:bg-primary/20",children:r.badge}),(0,s.jsx)("div",{className:"text-4xl transition-transform duration-300 group-hover:scale-110 transform-gpu",children:r.icon}),(0,s.jsx)("div",{className:"text-sm font-medium text-muted-foreground",children:e.services.categories[r.category]}),(0,s.jsx)("h3",{className:"text-xl font-semibold tracking-tight",children:r.title})]}),(0,s.jsx)(d.Wu,{className:"p-6 pt-0 flex-grow",children:(0,s.jsx)("p",{className:"text-muted-foreground line-clamp-3",children:r.description})}),(0,s.jsx)(d.wL,{className:"p-6 pt-0",children:(0,s.jsxs)("div",{className:"flex items-center text-sm font-medium text-primary transition-transform duration-300 will-change-transform group-hover:translate-x-2",children:[e.services.learnMore,(0,s.jsx)("svg",{className:"w-4 h-4 ml-1 transition-transform duration-300 will-change-transform group-hover:translate-x-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})})]},r.id))})})]})})]})})}},5007:(e,r,t)=>{"use strict";t.d(r,{Wu:()=>o,Zp:()=>i,aR:()=>l,wL:()=>c});var s=t(5155),a=t(2115),n=t(9602);let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...a})});i.displayName="Card";let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",t),...a})});l.displayName="CardHeader",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("font-semibold leading-none tracking-tight",t),...a})}).displayName="CardTitle",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",t),...a})}).displayName="CardDescription";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("p-6 pt-0",t),...a})});o.displayName="CardContent";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",t),...a})});c.displayName="CardFooter"},8072:(e,r,t)=>{"use strict";t.d(r,{Bg:()=>n,R6:()=>s,t9:()=>a});let s={BUSINESS:"Business",MARKETING:"Marketing",LEGAL:"Legal",AI:"AI & ML",SECURITY:"Security",ANALYTICS:"Analytics"},a=["docSense","legalMind","marketPulse","neuralSearch","videoGenerator","guardianAgent","marketingConcierge","customerGenius","geoInsight"],n={docSense:{route:"/services/doc-sense",category:s.LEGAL,icon:"\uD83D\uDCDD"},guardianAgent:{route:"/services/guardian-agent",category:s.SECURITY,icon:"\uD83D\uDEE1️"},geoInsight:{route:"/services/geo-insight",category:s.ANALYTICS,icon:"\uD83C\uDF0D"},legalMind:{route:"/services/legal-mind",category:s.LEGAL,icon:"⚖️"},neuralSearch:{route:"/services/neural-search",category:s.AI,icon:"\uD83D\uDD0E"},marketPulse:{route:"/services/market-pulse",category:s.BUSINESS,icon:"\uD83D\uDE80"},marketingConcierge:{route:"/services/marketing-concierge",category:s.MARKETING,icon:"\uD83D\uDCE2"},customerGenius:{route:"/services/customer-genius",category:s.BUSINESS,icon:"\uD83D\uDCAC"},videoGenerator:{route:"/services/video-generator",category:s.MARKETING,icon:"\uD83E\uDD33"}}}},e=>{var r=r=>e(e.s=r);e.O(0,[835,845,441,517,358],()=>r(2496)),_N_E=e.O()}]);