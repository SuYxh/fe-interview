import{d,S as L,b as m,o,c as r,A as i,_ as v,s as D,e as _,a as C,y as b,B as N,x as f,F as h,p as P,n as w,t as g,M as I,C as V,u as M,a3 as p,w as x,K as y,a4 as B,a5 as S,a6 as T,a7 as F,a8 as R,a9 as j,aa as H,ab as z,ac as O,ad as q,H as K,h as W,l as G,ae as U,af as J,ag as Q}from"./chunks/framework.47b6683e.js";import{_ as X,t as k}from"./chunks/theme.f3ed86c6.js";const Y={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=fe_interview",onerror:"this.style.display='none'"},Z=d({__name:"MNavVisitor",setup(e){const t=L("DEV");return(n,a)=>m(t)?i("",!0):(o(),r("img",Y))}});const ee=v(Z,[["__scopeId","data-v-1200dd52"]]),te={class:"copyright"},ne=["src"],ae=d({__name:"MDocFooter",setup(e){const t=L("DEV"),n=D(),a=_(()=>n.path.replace("/mm-notes",""));return(l,s)=>(o(),r("div",te,[m(t)?i("",!0):(o(),r("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=fe_interview.${a.value}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,ne)),C(" Copyright © 2020-present ")]))}});const se=v(ae,[["__scopeId","data-v-0611aa05"]]),oe=d({__name:"MAsideSponsors",setup(e){const t=[{items:[{img:"https://qn.huat.xyz/mac/202308122340742.jpg"}]},{items:[{img:"https://qn.huat.xyz/mac/202308122340353.jpg"}]}];return(n,a)=>(o(),b(m(X),{data:t}))}});const re=/[\u0000-\u001f]/g,ie=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,ce=/[\u0300-\u036F]/g,$=e=>e.normalize("NFKD").replace(ce,"").replace(re,"").replace(ie,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),le=["href"],ue={class:"box-header"},de=["innerHTML"],pe={key:1,class:"icon"},_e=["src","alt"],fe=["id"],me={key:1,class:"desc"},ve=d({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(e){const t=e,n=_(()=>t.title?$(t.title):""),a=_(()=>typeof t.icon=="object"?t.icon.svg:""),l=_(()=>typeof t.badge=="string"?{text:t.badge,type:"info"}:t.badge);return(s,De)=>{const E=N("Badge");return s.link?(o(),r("a",{key:0,class:"m-nav-link",href:s.link,target:"_blank",rel:"noreferrer"},[f("article",{class:w(["box",{"has-badge":l.value}])},[f("div",ue,[s.noIcon?i("",!0):(o(),r(h,{key:0},[a.value?(o(),r("div",{key:0,class:"icon",innerHTML:a.value},null,8,de)):s.icon&&typeof s.icon=="string"?(o(),r("div",pe,[f("img",{src:m(P)(s.icon),alt:s.title,onerror:"this.parentElement.style.display='none'"},null,8,_e)])):i("",!0)],64)),s.title?(o(),r("h5",{key:1,id:n.value,class:w(["title",{"no-icon":s.noIcon}])},g(s.title),11,fe)):i("",!0)]),l.value?(o(),b(E,{key:0,class:"badge",type:l.value.type,text:l.value.text},null,8,["type","text"])):i("",!0),s.desc?(o(),r("p",me,g(s.desc),1)):i("",!0)],2)],8,le)):i("",!0)}}});const he=v(ve,[["__scopeId","data-v-f6a1464b"]]),ge=["id"],ye=["href"],be={class:"m-nav-links"},we=d({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(e){const t=e,n=_(()=>$(t.title));return(a,l)=>(o(),r(h,null,[a.title?(o(),r("h2",{key:0,id:n.value,tabindex:"-1"},[C(g(a.title)+" ",1),f("a",{class:"header-anchor",href:`#${n.value}`,"aria-hidden":"true"},null,8,ye)],8,ge)):i("",!0),f("div",be,[(o(!0),r(h,null,I(a.items,s=>(o(),b(he,V({noIcon:a.noIcon},s),null,16,["noIcon"]))),256))])],64))}});const ke=v(we,[["__scopeId","data-v-3a009e39"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));let c;const Le={extends:k,Layout:()=>{var n;const e={},{frontmatter:t}=M();return(n=t.value)!=null&&n.layoutClass&&(e.class=t.value.layoutClass),p(k.Layout,e,{"nav-bar-title-after":()=>p(ee),"doc-after":()=>p(se),"aside-bottom":()=>p(oe)})},enhanceApp({app:e,router:t}){e.component("MNavLinks",ke),e.provide("DEV",!1),typeof window<"u"&&x(()=>t.route.data.relativePath,()=>Ce(location.pathname==="/"),{immediate:!0})}};if(typeof window<"u"){const e=navigator.userAgent.toLowerCase();e.includes("chrome")?document.documentElement.classList.add("browser-chrome"):e.includes("firefox")?document.documentElement.classList.add("browser-firefox"):e.includes("safari")&&document.documentElement.classList.add("browser-safari")}function Ce(e){if(e){if(c)return;c=document.createElement("style"),c.innerHTML=`
    :root {
      animation: rainbow 12s linear infinite;
    }`,document.body.appendChild(c)}else{if(!c)return;c.remove(),c=void 0}}function A(e){if(e.extends){const t=A(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const u=A(Le),Me=d({name:"VitePressApp",setup(){const{site:e}=M();return W(()=>{G(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),U(),J(),Q(),u.setup&&u.setup(),()=>p(u.Layout)}});async function $e(){const e=Ee(),t=Ae();t.provide(S,e);const n=T(e.route);return t.provide(F,n),t.component("Content",R),t.component("ClientOnly",j),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),u.enhanceApp&&await u.enhanceApp({app:t,router:e,siteData:H}),{app:t,router:e,data:n}}function Ae(){return z(Me)}function Ee(){let e=y,t;return O(n=>{let a=q(n);return e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),y&&(e=!1),K(()=>import(a),[])},u.NotFound)}y&&$e().then(({app:e,router:t,data:n})=>{t.go().then(()=>{B(t.route,n.site),e.mount("#app")})});export{$e as createApp};
