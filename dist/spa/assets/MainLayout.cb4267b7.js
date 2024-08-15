import{c as L,a as f,h,r as S,i as M,o as O,b as P,n as J,d as U,g as V,l as W,e as j,f as T,w,j as F,p as Z,k as oe,m as R,q as ne,s as le,t as ie,u as re,v as $,x as C,y as A}from"./index.e42de4a6.js";import{h as D,a as ae,b as se,c as ee}from"./render.8e878090.js";import{u as ue,a as ce,Q as de,c as K,g as fe}from"./dom.a837c4ed.js";import{_ as ve}from"./plugin-vue_export-helper.21dcd24c.js";var X=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},D(d.default))}});function he(){const e=S(!M.value);return e.value===!1&&O(()=>{e.value=!0}),{isHydrated:e}}const te=typeof ResizeObserver!="undefined",Y=te===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var E=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let n=null,o,t={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),o){const{offsetWidth:c,offsetHeight:r}=o;(c!==t.width||r!==t.height)&&(t={width:c,height:r},d("resize",t))}}const{proxy:m}=V();if(m.trigger=a,te===!0){let c;const r=b=>{o=m.$el.parentNode,o?(c=new ResizeObserver(a),c.observe(o),u()):b!==!0&&U(()=>{r(!0)})};return O(()=>{r()}),P(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():o&&c.unobserve(o))}),J}else{let b=function(){n!==null&&(clearTimeout(n),n=null),r!==void 0&&(r.removeEventListener!==void 0&&r.removeEventListener("resize",a,W.passive),r=void 0)},y=function(){b(),o&&o.contentDocument&&(r=o.contentDocument.defaultView,r.addEventListener("resize",a,W.passive),u())};const{isHydrated:c}=he();let r;return O(()=>{U(()=>{o=m.$el,o&&y()})}),P(b),()=>{if(c.value===!0)return h("object",{class:"q--avoid-card-border",style:Y.style,tabindex:-1,type:"text/html",data:Y.url,"aria-hidden":"true",onLoad:y})}}}}),ge=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=V(),t=j(F,T);if(t===T)return console.error("QHeader needs to be child of QLayout"),T;const a=S(parseInt(e.heightHint,10)),u=S(!0),m=f(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||o.platform.is.ios&&t.isContainer.value===!0),c=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return u.value===!0?a.value:0;const i=a.value-t.scroll.value.position;return i>0?i:0}),r=f(()=>e.modelValue!==!0||m.value===!0&&u.value!==!0),b=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),y=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=f(()=>{const i=t.rows.value.top,x={};return i[0]==="l"&&t.left.space===!0&&(x[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(x[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),x});function v(i,x){t.update("header",i,x)}function z(i,x){i.value!==x&&(i.value=x)}function p({height:i}){z(a,i),v("size",i)}function _(i){b.value===!0&&z(u,!0),n("focusin",i)}w(()=>e.modelValue,i=>{v("space",i),z(u,!0),t.animate()}),w(c,i=>{v("offset",i)}),w(()=>e.reveal,i=>{i===!1&&z(u,e.modelValue)}),w(u,i=>{t.animate(),n("reveal",i)}),w(t.scroll,i=>{e.reveal===!0&&z(u,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const H={};return t.instances.header=H,e.modelValue===!0&&v("size",a.value),v("space",e.modelValue),v("offset",c.value),P(()=>{t.instances.header===H&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const i=ae(d.default,[]);return e.elevated===!0&&i.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(h(E,{debounce:0,onResize:p})),h("header",{class:y.value,style:q.value,onFocusin:_},i)}}}),me=L({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:n}}=V(),o=j(F,T);if(o===T)return console.error("QPageContainer needs to be child of QLayout"),T;Z(oe,!0);const t=f(()=>{const a={};return o.header.space===!0&&(a.paddingTop=`${o.header.size}px`),o.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(a.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),a});return()=>h("div",{class:"q-page-container",style:t.value},D(d.default))}}),be=L({name:"QAvatar",props:{...ue,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:d}){const n=ce(e),o=f(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=f(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const a=e.icon!==void 0?[h(de,{name:e.icon})]:void 0;return h("div",{class:o.value,style:n.value},[h("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},se(d.default,a))])}}}),ye=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},D(d.default))}}),we=L({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=V(),t=j(F,T);if(t===T)return console.error("QFooter needs to be child of QLayout"),T;const a=S(parseInt(e.heightHint,10)),u=S(!0),m=S(M.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=f(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||o.platform.is.ios&&t.isContainer.value===!0),r=f(()=>t.isContainer.value===!0?t.containerHeight.value:m.value),b=f(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return u.value===!0?a.value:0;const l=t.scroll.value.position+r.value+a.value-t.height.value;return l>0?l:0}),y=f(()=>e.modelValue!==!0||c.value===!0&&u.value!==!0),q=f(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),v=f(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),z=f(()=>{const l=t.rows.value.bottom,g={};return l[0]==="l"&&t.left.space===!0&&(g[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(g[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),g});function p(l,g){t.update("footer",l,g)}function _(l,g){l.value!==g&&(l.value=g)}function H({height:l}){_(a,l),p("size",l)}function i(){if(e.reveal!==!0)return;const{direction:l,position:g,inflectionPoint:Q}=t.scroll.value;_(u,l==="up"||g-Q<100||t.height.value-r.value-g-a.value<300)}function x(l){q.value===!0&&_(u,!0),n("focusin",l)}w(()=>e.modelValue,l=>{p("space",l),_(u,!0),t.animate()}),w(b,l=>{p("offset",l)}),w(()=>e.reveal,l=>{l===!1&&_(u,e.modelValue)}),w(u,l=>{t.animate(),n("reveal",l)}),w([a,t.scroll,t.height],i),w(()=>o.screen.height,l=>{t.isContainer.value!==!0&&_(m,l)});const s={};return t.instances.footer=s,e.modelValue===!0&&p("size",a.value),p("space",e.modelValue),p("offset",b.value),P(()=>{t.instances.footer===s&&(t.instances.footer=void 0,p("size",0),p("offset",0),p("space",!1))}),()=>{const l=ee(d.default,[h(E,{debounce:0,onResize:H})]);return e.elevated===!0&&l.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h("footer",{class:v.value,style:z.value,onFocusin:x},l)}}});const pe=[Element,String],xe=[null,document,document.body,document.scrollingElement,document.documentElement];function ze(e,d){let n=fe(d);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return xe.includes(n)?window:n}function Se(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function qe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let B;function N(){if(B!==void 0)return B;const e=document.createElement("p"),d=document.createElement("div");K(e,{width:"100%",height:"200px"}),K(d,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),d.appendChild(e),document.body.appendChild(d);const n=e.offsetWidth;d.style.overflow="scroll";let o=e.offsetWidth;return n===o&&(o=d.clientWidth),d.remove(),B=n-o,B}const{passive:G}=W,_e=["both","horizontal","vertical"];var Te=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>_e.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:pe},emits:["scroll"],setup(e,{emit:d}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,a;w(()=>e.scrollTarget,()=>{c(),m()});function u(){o!==null&&o();const y=Math.max(0,Se(t)),q=qe(t),v={top:y-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const z=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:y,left:q},n.directionChanged=n.direction!==z,n.delta=v,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),d("scroll",{...n})}function m(){t=ze(a,e.scrollTarget),t.addEventListener("scroll",r,G),r(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",r,G),t=void 0)}function r(y){if(y===!0||e.debounce===0||e.debounce==="0")u();else if(o===null){const[q,v]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{v(q),o=null}}}const{proxy:b}=V();return w(()=>b.$q.lang.rtl,u),O(()=>{a=b.$el.parentNode,m()}),P(()=>{o!==null&&o(),c()}),Object.assign(b,{trigger:r,getPosition:()=>n}),J}}),Le=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:n}){const{proxy:{$q:o}}=V(),t=S(null),a=S(o.screen.height),u=S(e.container===!0?0:o.screen.width),m=S({position:0,direction:"down",inflectionPoint:0}),c=S(0),r=S(M.value===!0?0:N()),b=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),q=f(()=>r.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),v=f(()=>r.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function z(s){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};m.value=l,e.onScroll!==void 0&&n("scroll",l)}}function p(s){const{height:l,width:g}=s;let Q=!1;a.value!==l&&(Q=!0,a.value=l,e.onScrollHeight!==void 0&&n("scrollHeight",l),H()),u.value!==g&&(Q=!0,u.value=g),Q===!0&&e.onResize!==void 0&&n("resize",s)}function _({height:s}){c.value!==s&&(c.value=s,H())}function H(){if(e.container===!0){const s=a.value>c.value?N():0;r.value!==s&&(r.value=s)}}let i=null;const x={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:c,scrollbarWidth:r,totalWidth:f(()=>u.value+r.value),rows:f(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:R({size:0,offset:0,space:!1}),right:R({size:300,offset:0,space:!1}),footer:R({size:0,offset:0,space:!1}),left:R({size:300,offset:0,space:!1}),scroll:m,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,l,g){x[s][l]=g}};if(Z(F,x),N()>0){let g=function(){s=null,l.classList.remove("hide-scrollbar")},Q=function(){if(s===null){if(l.scrollHeight>o.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(s);s=setTimeout(g,300)},k=function(I){s!==null&&I==="remove"&&(clearTimeout(s),g()),window[`${I}EventListener`]("resize",Q)},s=null;const l=document.body;w(()=>e.container!==!0?"add":"remove",k),e.container!==!0&&k("add"),ne(()=>{k("remove")})}return()=>{const s=ee(d.default,[h(Te,{onScroll:z}),h(E,{onResize:p})]),l=h("div",{class:b.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},s);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:t},[h(E,{onResize:_}),h("div",{class:"absolute-full",style:q.value},[h("div",{class:"scroll",style:v.value},[l])])]):l}}});const $e={},Ce=A("img",{src:"icons/sahas-logo.jpg",style:{height:"4rem",padding:"4px 0 4px 0"}},null,-1),He=A("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1),Qe=A("div",null,"Title",-1);function Ve(e,d){const n=le("router-view");return ie(),re(Le,{view:"hHh LpR fff"},{default:$(()=>[C(ge,{elevated:"",class:"bg-white"},{default:$(()=>[C(X,{class:"flex flex-center"},{default:$(()=>[Ce]),_:1})]),_:1}),C(me,null,{default:$(()=>[C(n)]),_:1}),C(we,{bordered:"",class:"bg-footer-bg text-white"},{default:$(()=>[C(X,null,{default:$(()=>[C(ye,null,{default:$(()=>[C(be,null,{default:$(()=>[He]),_:1}),Qe]),_:1})]),_:1})]),_:1})]),_:1})}var Ee=ve($e,[["render",Ve]]);export{Ee as default};
