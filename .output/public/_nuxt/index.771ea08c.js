import{f as L,g as M,e as P,d as D,_ as j,i as Z}from"./entry.b3c0c4b3.js";import{k as m,j as S,a as h,z as U,l as W,D as v,E as x,B as n,X as Y,u as d,Y as F,Q as e,Z as X,_ as J,V as C,W as E,b as K,G as ee,L as A,$ as te,C as se,U as $,F as B,r as ae,n as oe,R as c,a0 as z,a1 as q,a2 as ie,a3 as ne,a4 as le,a5 as re}from"./swiper-vue.b1fdd68d.js";import R from"./Icon.c20cba21.js";import"./config.c80b7ca5.js";const ce={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},decoding:{type:String,default:void 0,validator:t=>["async","auto","sync"].includes(t)},nonce:{type:[String],default:void 0}},de=t=>{const a=m(()=>({provider:t.provider,preset:t.preset})),i=m(()=>({width:L(t.width),height:L(t.height),alt:t.alt,referrerpolicy:t.referrerpolicy,usemap:t.usemap,longdesc:t.longdesc,ismap:t.ismap,crossorigin:t.crossorigin===!0?"anonymous":t.crossorigin||void 0,loading:t.loading,decoding:t.decoding,nonce:t.nonce})),l=M(),p=m(()=>({...t.modifiers,width:L(t.width),height:L(t.height),format:t.format,quality:t.quality||l.options.quality,background:t.background,fit:t.fit}));return{options:a,attrs:i,modifiers:p}},pe={...ce,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},H=S({name:"NuxtImg",props:pe,emits:["load","error"],setup:(t,a)=>{const i=M(),l=de(t),p=h(!1),r=m(()=>i.getSizes(t.src,{...l.options.value,sizes:t.sizes,densities:t.densities,modifiers:{...l.modifiers.value,width:L(t.width),height:L(t.height)}})),u=m(()=>{const s={...l.attrs.value,"data-nuxt-img":""};return(!t.placeholder||p.value)&&(s.sizes=r.value.sizes,s.srcset=r.value.srcset),s}),f=m(()=>{let s=t.placeholder;if(s===""&&(s=!0),!s||p.value)return!1;if(typeof s=="string")return s;const _=Array.isArray(s)?s:typeof s=="number"?[s,s]:[10,10];return i(t.src,{...l.modifiers.value,width:_[0],height:_[1],quality:_[2]||50,blur:_[3]||3},l.options.value)}),g=m(()=>t.sizes?r.value.src:i(t.src,l.modifiers.value,l.options.value)),T=m(()=>f.value?f.value:g.value);if(t.preload){const s=Object.values(r.value).every(_=>_);P({link:[{rel:"preload",as:"image",nonce:t.nonce,...s?{href:r.value.src,imagesizes:r.value.sizes,imagesrcset:r.value.srcset}:{href:T.value}}]})}const b=h(),y=D().isHydrating;return U(()=>{if(f.value){const s=new Image;s.src=g.value,t.sizes&&(s.sizes=r.value.sizes||"",s.srcset=r.value.srcset),s.onload=_=>{p.value=!0,a.emit("load",_)};return}b.value&&(b.value.complete&&y&&(b.value.getAttribute("data-error")?a.emit("error",new Event("error")):a.emit("load",new Event("load"))),b.value.onload=s=>{a.emit("load",s)},b.value.onerror=s=>{a.emit("error",s)})}),()=>W("img",{ref:b,src:T.value,...u.value,...a.attrs})}}),me=S({__name:"scroll_indicator",setup(t){const a=h(!0);return U(()=>{window.addEventListener("scroll",()=>{a.value=window.scrollY==0})}),(i,l)=>{const p=R;return v(),x("div",{class:Y({hidden:!d(a)})},[n(p,{name:"fluent-mdl2:chrome-back-mirrored",class:"text-3xl md:text-4xl rotate-90 animate-swing"})],2)}}});const ue=j(me,[["__scopeId","data-v-4b583c1e"]]),_e=S({__name:"parallax",props:{height:{type:String,default:"80vh"}},setup(t){const a=t;F(g=>({bfd2b06c:d(i)}));const i=m(()=>a.height),l=h(null),p=h(null),r=h(null),u=h(1),f=()=>{l.value&&(u.value=window.innerHeight/l.value.clientHeight)};return U(()=>{p.value&&(r.value=p.value.querySelector("img")),f(),window.addEventListener("resize",f),window.addEventListener("scroll",()=>{if(r.value&&p.value&&l.value){const g=l.value.offsetTop-window.scrollY-window.innerHeight;r.value.style.transform=`scale(${u.value}) translateY(${-g*.08}px)`,console.log()}})}),(g,T)=>(v(),x("div",{ref_key:"parallaxContainer",ref:l,class:"parallax-container"},[e("div",{ref_key:"parallaxImg",ref:p,class:"parallax-img"},[X(g.$slots,"default",{},void 0,!0)],512)],512))}});const fe=j(_e,[["__scopeId","data-v-49430ec7"]]),ge=t=>(C("data-v-e8efaf41"),t=t(),E(),t),he={id:"footer",class:"relative w-full text-lg pt-28 pb-28 lg:pb-36 flex flex-col items-center"},ve={class:"w-full text-center"},xe=ge(()=>e("h3",{class:"mb-8 font-heading my-10 text-3xl"},"Trattoria Skipper",-1)),be={class:"text-4xl max-w-[200px] mx-auto flex justify-around"},ye={class:"text-primary-light hover:text-primary",href:"https://www.facebook.com/people/Trattoria-Skipper/100057075745048/"},we={class:"text-primary-light hover:text-primary",href:"https://www.tripadvisor.it/Restaurant_Review-g187898-d2211855-Reviews-Skipper-Lucca_Province_of_Lucca_Tuscany.html"},ke=J('<div class="text-center mt-14" data-v-e8efaf41><a class="underline hover:text-primary" href="https://maps.app.goo.gl/jYpYS1AUMQdurjneA" data-v-e8efaf41>Via Nuova Per Pisa, 5901 – 55100 Lucca (LU) Italia</a><br data-v-e8efaf41><a class="underline hover:text-primary" href="tel:+390583379073" data-v-e8efaf41>+39 0583 379073</a> | <a href="mailto:info@trattoriaskipper.it" data-v-e8efaf41>info@trattoriaskipper.it</a><br data-v-e8efaf41> P.I. 01771440466 | <a class="underline hover:text-primary" href="legal_informations_it.html" data-v-e8efaf41>Informazioni Legali</a> | <a class="underline hover:text-primary" href="privacy_policy_it.html" data-v-e8efaf41>Privacy Policy e Cookie Policy</a></div><div class="mt-8 w-full max-w-[250px] mx-auto flex justify-around" data-v-e8efaf41><a class="underline hover:text-primary" data-v-e8efaf41>Home</a><a class="underline hover:text-primary" data-v-e8efaf41>Menu</a></div>',2),$e=S({__name:"page_footer",setup(t){F(l=>({"05ae0de1":d(i)}));const a=M(),i=m(()=>`url('${a("skipper_footer.svg.png",{format:"webp",width:1024})}')`);return(l,p)=>{const r=H,u=R;return v(),x("footer",he,[n(r,{format:"webp",src:"skipper_logo.svg.png",class:"w-[140px]"}),e("div",ve,[xe,e("div",be,[e("a",ye,[n(u,{name:"fluent-mdl2:facebook-logo"})]),e("a",we,[n(u,{name:"fontisto:tripadvisor"})])])]),ke])}}});const Se=j($e,[["__scopeId","data-v-e8efaf41"]]),Ie=""+new URL("video_home_720.36fa4452.mp4",import.meta.url).href,V=t=>(C("data-v-fea76e81"),t=t(),E(),t),ze={key:0,class:"fixed z-30 w-screen h-screen bg-primary-dark flex flex-col justify-around items-center"},Le=V(()=>e("nav",null,[e("ul",{class:"text-light"},[e("li",{class:"text-3xl md:text-4xl mb-12"},[e("a",{href:"/",class:"hover:text-primary-light"},"Home")]),e("li",{class:"text-3xl md:text-4xl"},[e("a",{href:"/",class:"hover:text-primary-light"},"Menu")])])],-1)),Te={class:"fixed bottom-0 left-0 right-0 w-screen pb-4"},je=V(()=>e("div",null,[e("h2",{class:"text-center text-primary text-2xl font-heading mb-4"}," Trattoria Skipper ")],-1)),Ue={class:"w-full max-w-[100px] mx-auto flex justify-between text-3xl mb-4"},Re={class:"text-light hover:text-primary-light",href:"https://www.facebook.com/people/Trattoria-Skipper/100057075745048/"},Ae={class:"text-light hover:text-primary-light",href:"https://www.tripadvisor.it/Restaurant_Review-g187898-d2211855-Reviews-Skipper-Lucca_Province_of_Lucca_Tuscany.html"},Be=V(()=>e("div",{class:"w-full text-center"},[e("a",{class:"underline text-primary text-xs",href:"https://maps.app.goo.gl/jYpYS1AUMQdurjneA"},"Via Nuova Per Pisa, 5901 – 55100 Lucca (LU) Italia"),e("br"),e("a",{class:"underline text-primary text-xs",href:"tel:+390583379073"},"+39 0583 379073"),$(" | "),e("a",{href:"mailto:info@trattoriaskipper.it"},"info@trattoriaskipper.it"),e("br"),$(" P.I. 01771440466 | "),e("a",{class:"underline text-primary text-xs",href:"legal_informations_it.html"},"Informazioni Legali"),$(" | "),e("a",{class:"underline text-primary text-xs",href:"privacy_policy_it.html"},"Privacy Policy e Cookie Policy")],-1)),Pe=S({__name:"menu",props:{open:{type:Boolean,required:!0}},setup(t){const a=t,i=P({bodyAttrs:{class:a.open?"overflow-hidden":"overflow-auto"}});return K(()=>a.open,()=>{i.patch({bodyAttrs:{class:a.open?"overflow-hidden":"overflow-auto"}})},{immediate:!0}),(l,p)=>{const r=H,u=R;return v(),ee(se,{name:"slide-fade"},{default:A(()=>[a.open?(v(),x("div",ze,[n(r,{format:"webp",src:"skipper_icon_light.svg.webp",class:"h-[50px] lg:h-[60px] absolute top-4 left-1/2 -translate-x-1/2"}),Le,e("div",Te,[je,e("div",Ue,[e("a",Re,[n(u,{name:"fluent-mdl2:facebook-logo"})]),e("a",Ae,[n(u,{name:"fontisto:tripadvisor"})])]),Be])])):te("",!0)]),_:1})}}});const Me=j(Pe,[["__scopeId","data-v-fea76e81"]]),Ne={class:"container flex justify-end items-center h-16"},Ce=S({__name:"navbar",setup(t){const a=h(!0),i=h(!1),l=m(()=>i.value?"fluent-mdl2:chrome-close":"fluent-mdl2:list-mirrored"),p=m(()=>i.value?"1.85rem":"2.2rem");return U(()=>{window.addEventListener("scroll",()=>{a.value=window.scrollY==0})}),(r,u)=>{const f=R;return v(),x(B,null,[e("nav",{class:Y(["z-40 fixed left-0 top-0 right-0 text-primary bg-primary/80 transition-colors",{"!bg-primary/0":d(a)||d(i),"backdrop-blur-sm":!d(a)&&!d(i)}])},[e("div",Ne,[e("span",{onClick:u[0]||(u[0]=g=>i.value=!d(i)),class:"text-light"},[n(f,{name:d(l),size:d(p)},null,8,["name","size"])])])],2),n(Me,{open:d(i)},null,8,["open"])],64)}}}),I=t=>(C("data-v-9409d206"),t=t(),E(),t),Ee={class:"absolute top-0 left-0 right-0 h-screen w-screen flex items-center justify-center bg-primary-dark/80"},He={class:"flex flex-col items-center"},Ve=I(()=>e("h1",{class:"text-6xl md:text-7xl text-center text-light font-heading mb-8"},[$(" Trattoria"),e("br",{class:"md:hidden"}),$(" Skipper ")],-1)),qe={class:"container"},Ye={class:"relative pt-44 grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-8"},Fe={class:"lg:pr-8"},Qe=["innerHTML"],Ge={class:"text-lg"},Oe={class:"mt-12 lg:mt-0 flex items-end"},De={class:"relative lg:col-span-2 flex flex-col lg:flex-row lg:justify-end"},Ze={class:"container"},We={class:"relative pt-32"},Xe={class:"text-center"},Je={class:"font-heading text-5xl lg:text-6xl mb-4"},Ke=["innerHTML"],et={class:"grid grid-cols-1 md:grid-cols-2 gap-y-8 mt-14"},tt={class:"text-center"},st={class:"text-lg"},at=["innerHTML"],ot={class:"h-56 flex justify-center items-center"},it={href:"#",class:"button"},nt={id:"section-3",class:"home-section"},lt={class:"container"},rt={class:"flex justify-center items-center"},ct={class:"font-heading text-5xl lg:text-6xl"},dt={class:"container py-20"},pt={class:"relative max-w-[720px] mx-auto"},mt={class:"carousel-prev-handle hidden md:block absolute -left-10 top-1/2 -translate-y-1/2 opacity-30"},ut={class:"carousel-next-handle hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 opacity-30"},_t={class:"review-slide md:h-80 px-8"},ft={class:"block mb-8"},gt={class:"text-lg mb-8"},ht={class:"block text-lg font-bold"},vt={class:"block text-lg text-std-gray"},xt=I(()=>e("div",{class:"review-slide-decoration"},"”",-1)),bt={id:"section-5"},yt={class:"relative container !max-w-[1280px]"},wt={class:"w-full md:absolute -top-32 left-1/2 md:-translate-x-1/3 lg:translate-x-0 md:w-[490px] md:h-[490px] bg-primary-dark flex flex-col justify-around p-10 md:border-canvas-lg md:border-light mt-8 md:mt-0"},kt={class:"font-heading text-6xl lg:text-7xl text-light md:whitespace-nowrap mb-8 md:mb-0"},$t={class:"text-lg text-light"},St={id:"section-6",class:"mt-10"},It={class:"w-full md:absolute top-0 left-0 md:w-[550px] bg-primary-lighter flex flex-col justify-around p-10 md:py-20 md:border-canvas-lg md:border-light mt-8 md:mt-0"},zt={class:"font-heading text-6xl lg:text-7xl text-primary-dark md:whitespace-nowrap mb-8"},Lt={class:"text-lg text-primary-dark"},Tt=I(()=>e("div",{id:"map",class:"w-full h-80 lg:h-96 bg-primary-dark"},null,-1)),jt=[Tt],Ut={class:"relative container !max-w-[1280px] py-20 grid grid-cols-2 gap-y-10 lg:gap-y-0 lg:gap-x-8 lg:grid-cols-3"},Rt={class:"col-span-2 lg:col-span-1"},At={class:"text-4xl font-heading mb-10"},Bt=I(()=>e("p",{class:"text-lg"},[$("Via Nuova per Pisa 5901,"),e("br"),$("55100 Lucca LU")],-1)),Pt={class:"text-lg block underline hover:text-primary",href:""},Mt={id:"section-8-banner",class:""},Nt={class:"relative overflow-hidden p-8 md:p-12 h-full"},Ct={class:"font-heading text-4xl text-light mb-10"},Et={class:"grid grid-cols-2 md:grid-cols-1 md:gap-y-8 text-light items-end"},Ht={class:"text-lg"},Vt={class:"text-lg"},qt={class:"col-span-2 lg:col-span-1"},Yt={class:"text-4xl font-heading mb-10"},Ft=I(()=>e("a",{class:"text-lg block underline hover:text-primary",href:"tel:+39 0583 379073"},"+39 0583 379073",-1)),Qt=I(()=>e("a",{class:"text-lg block underline hover:text-primary",href:"mailto:info@trattoriaskipper.com"},"info@trattoriaskipper.com",-1)),Gt=I(()=>e("section",{id:"section-9",class:"video-homepage-wrapper relative"},[e("video",{autoplay:"",muted:"",loop:"",playsinline:"",class:"w-full h-96 object-cover",style:{}},[e("source",{src:Ie,type:"video/mp4"})]),e("div",{class:"absolute inset-0 bg-primary-dark/60"}),e("div",{class:"absolute inset-0 flex items-center justify-center p-8"},[e("h2",{class:"font-heading text-4xl lg:text-7xl text-center text-light"},"Avrete voglia di tornare")])],-1)),Ot=S({__name:"index",setup(t){const{t:a}=Z(),i=M(),l=h(null);P({meta:[{name:"msapplication-TileColor",content:"#f0faff"},{name:"theme-color",content:"#00517f"}],link:[{rel:"apple-touch-icon",sizes:"180x180",href:i("favicons/apple-touch-icon.png")},{rel:"icon",type:"image/png",sizes:"32x32",href:i("favicons/favicon-32x32.png")},{rel:"icon",type:"image/png",sizes:"16x16",href:i("favicons/favicon-16x16.png")},{rel:"mask-icon",href:i("favicons/safari-pinned-tab.svg.png"),color:"#0171bb"},{rel:"icon",href:"favicon.ico"}],script:[{src:"https://maps.googleapis.com/maps/api/js?key=AIzaSyAGbxq8T1F7efMZm5qWC2FVF4AHiV0a7yU&libraries=places",async:!0}]}),P({title:"Trattoria Skipper",titleTemplate:()=>"Trattoria Skipper",meta:[{property:"og:title",content:"Trattoria Skipper"},{name:"description",content:"La Trattoria Skipper a Lucca è un delizioso ristorante di pesce situato nella pittoresca zona di Santa Maria del Giudice. Qui, gli amanti della cucina marinara possono deliziarsi con autentiche ricette di mare, preparate secondo la tradizione, e assaporare i sapori del Mediterraneo sulle affascinanti colline lucchesi. Un luogo ideale per un'esperienza gastronomica indimenticabile immersi nella bellezza della Toscana."},{property:"og:description",content:"La Trattoria Skipper a Lucca è un delizioso ristorante di pesce situato nella pittoresca zona di Santa Maria del Giudice. Qui, gli amanti della cucina marinara possono deliziarsi con autentiche ricette di mare, preparate secondo la tradizione, e assaporare i sapori del Mediterraneo sulle affascinanti colline lucchesi. Un luogo ideale per un'esperienza gastronomica indimenticabile immersi nella bellezza della Toscana."},{property:"og:image",content:i("skipper_icon.svg.png")},{name:"twitter:card",content:"summary_large_image"}]});const p=ae({evidenceRecipes:[{title:a("section2.evidenceRecipes[0].title"),caption:a("section2.evidenceRecipes[0].caption")},{title:a("section2.evidenceRecipes[1].title"),caption:a("section2.evidenceRecipes[1].caption")},{title:a("section2.evidenceRecipes[2].title"),caption:a("section2.evidenceRecipes[2].caption")},{title:a("section2.evidenceRecipes[3].title"),caption:a("section2.evidenceRecipes[3].caption")},{title:a("section2.evidenceRecipes[4].title"),caption:a("section2.evidenceRecipes[4].caption")},{title:a("section2.evidenceRecipes[5].title"),caption:a("section2.evidenceRecipes[5].caption")}]}),r=m(()=>({backgroundImage:`url('${i("skipper_elements_clam_combo_2.svg.webp",{format:"webp",width:490})}')`})),u=m(()=>{const o=i("skipper_elements_salmon_combo.svg.webp",{format:"webp",width:580}),y=i("skipper_elements_shrimps.svg.webp",{format:"webp",width:580});return{backgroundImage:`url('${o}'), url('${y}')`}}),f=m(()=>{const o=i("skipper_elements_crab.svg.webp",{format:"webp",width:580}),y=i("skipper_elements_lobster.svg.webp",{format:"webp",width:580});return{backgroundImage:`url('${o}'), url('${y}')`}}),g=m(()=>({backgroundImage:`url('${i("skipper_elements_fish.svg.webp",{format:"webp",width:580})}')`})),T=m(()=>({backgroundImage:`url('${i("skipper_elements_clam_combo_2.svg.webp",{format:"webp",width:580})}')`})),b=m(()=>({backgroundImage:`url('${i("skipper_elements_wheat.svg.webp",{format:"webp",width:580})}')`}));return U(()=>{oe();let o;async function y(){const s={lat:43.77644120870568,lng:10.459434706484583},{Map:_}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:N}=await google.maps.importLibrary("marker");o=new _(document.getElementById("map"),{mapId:"skipper-homepage-map",disableDefaultUI:!0,center:s,zoom:15,styles:[{featureType:"all",stylers:[{saturation:-100},{gamma:0}]}]}),new N({map:o,position:s,title:"Uluru"})}y()}),(o,y)=>{const s=H,_=ue,N=fe,w=R,Q=re,G=ie,O=Se;return v(),x(B,null,[n(Ce,{class:"z-10"}),n(s,{format:"webp",class:"h-screen w-screen object-cover object-center",src:"photo_book/home_hero.webp"}),e("section",Ee,[e("div",He,[n(s,{format:"webp",class:"w-[132px] mb-6",src:"skipper_icon_light.svg.webp"}),Ve,n(s,{format:"webp",class:"w-[302px] md:w-[491px]",src:"skipper_elements.svg.webp"}),n(_,{class:"absolute top-[90vh] text-light"})])]),e("section",{id:"section-1",class:"home-section",style:z({...d(r)})},[e("div",qe,[e("div",Ye,[e("div",Fe,[e("h2",{class:"font-heading text-5xl lg:text-6xl mb-6",innerHTML:o.$t("section1.title")},null,8,Qe),e("p",Ge,c(o.$t("section1.body")),1)]),e("div",Oe,[n(s,{format:"webp",class:"w-full",src:"photo_book/2_688.webp"})]),e("div",De,[n(s,{format:"webp",class:"lg:w-1/2",src:"photo_book/3_688.webp"}),n(s,{format:"webp",class:"mt-6 lg:mt-0 lg:w-1/2 lg:absolute lg:border-canvas-lg border-light lg:top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2",src:"photo_book/1_688.webp"})])])])],4),e("section",{id:"section-2",class:"home-section",style:z({...d(u)})},[e("div",Ze,[e("div",We,[e("div",Xe,[e("h2",Je,c(o.$t("section2.title")),1),e("p",{class:"text-lg",innerHTML:o.$t("section2.body")},null,8,Ke)]),e("div",et,[(v(!0),x(B,null,q(d(p).evidenceRecipes,k=>(v(),x("div",tt,[e("strong",st,c(k.title),1),e("p",{innerHTML:k.caption,class:"italic"},null,8,at)]))),256))]),e("div",ot,[e("a",it,c(o.$t("section2.actionLabel")),1)])])])],4),e("section",nt,[n(N,{height:"80vh"},{default:A(()=>[n(s,{format:"webp",ref_key:"section3Photo",ref:l,id:"section-3-photo",src:"photo_book/4_1920.webp"},null,512)]),_:1})]),e("section",{id:"section-4",class:"home-section pt-20",style:z({...d(f)})},[e("div",lt,[e("div",rt,[e("h3",ct,c(o.$t("section4.title")),1)]),e("div",dt,[e("div",pt,[e("div",mt,[n(w,{name:"fluent-mdl2:chevron-left-med",class:"text-4xl text-primary md:text-5xl"})]),e("div",ut,[n(w,{name:"fluent-mdl2:chevron-right-med",class:"text-4xl text-primary md:text-5xl"})]),n(G,{class:"w-full",modules:["SwiperAutoplay"in o?o.SwiperAutoplay:d(ne),"SwiperEffectCreative"in o?o.SwiperEffectCreative:d(le)],"slides-per-view":1,autoplay:"",breakpoints:{768:{slidesPerView:2}},loop:!0},{default:A(()=>[(v(),x(B,null,q(4,k=>n(Q,{key:k},{default:A(()=>[e("div",_t,[e("span",ft,[n(w,{class:"text-2xl text-amber-400",name:"fluent-mdl2:favorite-star-fill"}),n(w,{class:"text-2xl text-amber-400",name:"fluent-mdl2:favorite-star-fill"}),n(w,{class:"text-2xl text-amber-400",name:"fluent-mdl2:favorite-star-fill"}),n(w,{class:"text-2xl text-amber-400",name:"fluent-mdl2:favorite-star-fill"}),n(w,{class:"text-2xl text-amber-400",name:"fluent-mdl2:favorite-star-fill"})]),e("p",gt,"“"+c(o.$t(`section4.reviews[${k-1}].text`))+"”",1),e("span",ht,c(o.$t(`section4.reviews[${k-1}].author`)),1),e("span",vt,c(o.$t(`section4.reviews[${k-1}].date`)),1),xt])]),_:2},1024)),64))]),_:1},8,["modules"])])])])],4),e("section",bt,[e("div",yt,[n(s,{format:"webp",src:"photo_book/5_1048.webp",class:"w-full h-[400px] md:h-[680px] object-cover"}),e("div",wt,[e("h3",kt,c(o.$t("section5.title")),1),e("p",$t,c(o.$t("section5.body")),1)])])]),e("section",St,[e("div",{id:"section-6-inner",class:"relative container md:pl-52 md:pt-40 !max-w-[1280px]",style:z({...d(g)})},[n(s,{format:"webp",src:"photo_book/6_1048.webp",class:"w-full h-[400px] md:h-[650px] object-cover"}),e("div",It,[e("h3",zt,c(o.$t("section6.title")),1),e("p",Lt,c(o.$t("section6.body")),1)])],4)]),e("section",{id:"section-7",class:"pt-64 -mt-32",style:z({...d(T)})},jt,4),e("section",{id:"section-8",class:"",style:z({...d(b)})},[e("div",Ut,[e("div",Rt,[e("h4",At,c(o.$t("section8.title1")),1),Bt,e("a",Pt,c(o.$t("section8.actionLabel1")),1)]),e("div",Mt,[e("div",Nt,[n(s,{format:"webp",id:"section-8-banner-bg-img",src:"skipper_elements_crab.svg.webp",class:"opacity-30 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px]"}),e("h5",Ct,c(o.$t("section8.bannerTitle")),1),e("div",Et,[e("div",Ht,[e("strong",null,c(o.$t("section8.bannerTitle1")),1),e("p",null,c(o.$t("section8.bannerBody1")),1)]),e("div",Vt,[e("strong",null,c(o.$t("section8.bannerTitle2")),1),e("p",null,c(o.$t("section8.bannerBody2")),1)])])])]),e("div",qt,[e("h4",Yt,c(o.$t("section8.title2")),1),Ft,Qt])])],4),Gt,n(O)],64)}}});const Jt=j(Ot,[["__scopeId","data-v-9409d206"]]);export{Jt as default};