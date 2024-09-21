import{b6 as le,p as S,h as $,b5 as gt,b3 as bt,b2 as $e,g as D,aW as ht,r as K,ae as Ne,an as Q,l as A,aN as yt,b7 as Ct,B as pe,c as f,aT as Oe,b8 as xe,b9 as St,aF as _t,ba as kt,N as F,a_ as W,b as w,_ as ie,m as H,j as M,bb as wt,z as R,bc as xt,bd as It,v as u,x as be,b1 as Bt,aS as Ae,be as he,s as j,b0 as Vt,n as ye,X as ve,a1 as Pt,Q as We,Y as Et,J as fe,A as je,u as Fe,ac as Ie,bf as Tt,bg as Be,aH as De,y as Lt,bh as Rt,bi as Ve,a9 as zt,d as He,i as $t,a as Nt,q as pt,bj as Ot,ag as At,f as Wt,w as jt}from"./index-BoEzT4Gr.js";const Me=["top","bottom"],Ft=["start","end","left","right"];function Dt(e,n){let[a,t]=e.split(" ");return t||(t=le(Me,a)?"start":le(Ft,a)?"top":"center"),{side:Pe(a,n),align:Pe(t,n)}}function Pe(e,n){return e==="start"?n?"right":"left":e==="end"?n?"left":"right":e}function Ln(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Rn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function zn(e){return{side:e.align,align:e.side}}function $n(e){return le(Me,e.side)?"y":"x"}const N=S({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Nn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return $()({name:a??gt(bt(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...N()},setup(t,s){let{slots:l}=s;return()=>{var i;return $e(t.tag,{class:[e,t.class],style:t.style},(i=l.default)==null?void 0:i.call(l))}}})}function p(e){const n=D("useRender");n.render=e}function Ht(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=ht(),t=K();if(Ne){const s=new ResizeObserver(l=>{e==null||e(l,s),l.length&&(n==="content"?t.value=l[0].contentRect:t.value=l[0].target.getBoundingClientRect())});Q(()=>{s.disconnect()}),A(()=>a.el,(l,i)=>{i&&(s.unobserve(i),t.value=void 0),l&&s.observe(l)},{flush:"post"})}return{resizeRef:a,contentRect:yt(t)}}const Mt=S({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),ne=$(!1)({name:"VDefaultsProvider",props:Mt(),setup(e,n){let{slots:a}=n;const{defaults:t,disabled:s,reset:l,root:i,scoped:o}=Ct(e);return pe(t,{reset:l,root:i,scoped:o,disabled:s}),()=>{var c;return(c=a.default)==null?void 0:c.call(a)}}});function Ce(e){return Oe(()=>{const n=[],a={};if(e.value.background)if(xe(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&St(e.value.background)){const t=_t(e.value.background);if(t.a==null||t.a===1){const s=kt(t);a.color=s,a.caretColor=s}}}else n.push(`bg-${e.value.background}`);return e.value.text&&(xe(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):n.push(`text-${e.value.text}`)),{colorClasses:n,colorStyles:a}})}function re(e,n){const a=f(()=>({text:F(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=Ce(a);return{textColorClasses:t,textColorStyles:s}}function ae(e,n){const a=f(()=>({background:F(e)?e.value:n?e[n]:null})),{colorClasses:t,colorStyles:s}=Ce(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}const Gt=["x-small","small","default","large","x-large"],ue=S({size:{type:[String,Number],default:"default"}},"size");function ce(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return Oe(()=>{let a,t;return le(Gt,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:w(e.size),height:w(e.size)}),{sizeClasses:a,sizeStyles:t}})}const G=S({tag:{type:String,default:"div"}},"tag"),Ut=S({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:ie,...N(),...ue(),...G({tag:"i"}),...H()},"VIcon"),se=$()({name:"VIcon",props:Ut(),setup(e,n){let{attrs:a,slots:t}=n;const s=K(),{themeClasses:l}=M(e),{iconData:i}=wt(f(()=>s.value||e.icon)),{sizeClasses:o}=ce(e),{textColorClasses:c,textColorStyles:m}=re(R(e,"color"));return p(()=>{var r,d;const g=(r=t.default)==null?void 0:r.call(t);g&&(s.value=(d=xt(g).filter(h=>h.type===It&&h.children&&typeof h.children=="string")[0])==null?void 0:d.children);const b=!!(a.onClick||a.onClickOnce);return u(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,o.value,c.value,{"v-icon--clickable":b,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:w(e.size),height:w(e.size),width:w(e.size)},m.value,e.style],role:b?"button":void 0,"aria-hidden":!b,tabindex:b?e.disabled?-1:0:void 0},{default:()=>[g]})}),{}}}),Ge=S({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ue(e){return{dimensionStyles:f(()=>{const a={},t=w(e.height),s=w(e.maxHeight),l=w(e.maxWidth),i=w(e.minHeight),o=w(e.minWidth),c=w(e.width);return t!=null&&(a.height=t),s!=null&&(a.maxHeight=s),l!=null&&(a.maxWidth=l),i!=null&&(a.minHeight=i),o!=null&&(a.minWidth=o),c!=null&&(a.width=c),a})}}function qt(e){return{aspectStyles:f(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const qe=S({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...N(),...Ge()},"VResponsive"),Ee=$()({name:"VResponsive",props:qe(),setup(e,n){let{slots:a}=n;const{aspectStyles:t}=qt(e),{dimensionStyles:s}=Ue(e);return p(()=>{var l;return u("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[u("div",{class:"v-responsive__sizer",style:t.value},null),(l=a.additional)==null?void 0:l.call(a),a.default&&u("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),Z=S({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ee(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{roundedClasses:f(()=>{const t=F(e)?e.value:e.rounded,s=F(e)?e.value:e.tile,l=[];if(t===!0||t==="")l.push(`${n}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))l.push(`rounded-${i}`);else(s||t===!1)&&l.push("rounded-0");return l})}}const Xt=S({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),te=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:s,group:l,...i}=e,{component:o=l?Bt:Ae,...c}=typeof t=="object"?t:{};return $e(o,be(typeof t=="string"?{name:s?"":t}:c,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:l}).filter(m=>{let[g,b]=m;return b!==void 0})),i),a)};function Yt(e,n){if(!he)return;const a=n.modifiers||{},t=n.value,{handler:s,options:l}=typeof t=="object"?t:{handler:t,options:{}},i=new IntersectionObserver(function(){var b;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const m=(b=e._observe)==null?void 0:b[n.instance.$.uid];if(!m)return;const g=o.some(r=>r.isIntersecting);s&&(!a.quiet||m.init)&&(!a.once||g||m.init)&&s(g,o,c),g&&a.once?Xe(e,n):m.init=!0},l);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:i},i.observe(e)}function Xe(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Jt={mounted:Yt,unmounted:Xe},Kt=S({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...qe(),...N(),...Z(),...Xt()},"VImg"),Qt=$()({name:"VImg",directives:{intersect:Jt},props:Kt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:l}=ae(R(e,"color")),{roundedClasses:i}=ee(e),o=D("VImg"),c=j(""),m=K(),g=j(e.eager?"loading":"idle"),b=j(),r=j(),d=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),h=f(()=>d.value.aspect||b.value/r.value||0);A(()=>e.src,()=>{v(g.value!=="idle")}),A(h,(y,k)=>{!y&&k&&m.value&&I(m.value)}),Vt(()=>v());function v(y){if(!(e.eager&&y)&&!(he&&!y&&!e.eager)){if(g.value="loading",d.value.lazySrc){const k=new Image;k.src=d.value.lazySrc,I(k,null)}d.value.src&&ye(()=>{var k;a("loadstart",((k=m.value)==null?void 0:k.currentSrc)||d.value.src),setTimeout(()=>{var B;if(!o.isUnmounted)if((B=m.value)!=null&&B.complete){if(m.value.naturalWidth||_(),g.value==="error")return;h.value||I(m.value,null),g.value==="loading"&&C()}else h.value||I(m.value),P()})})}}function C(){var y;o.isUnmounted||(P(),I(m.value),g.value="loaded",a("load",((y=m.value)==null?void 0:y.currentSrc)||d.value.src))}function _(){var y;o.isUnmounted||(g.value="error",a("error",((y=m.value)==null?void 0:y.currentSrc)||d.value.src))}function P(){const y=m.value;y&&(c.value=y.currentSrc||y.src)}let E=-1;Q(()=>{clearTimeout(E)});function I(y){let k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const B=()=>{if(clearTimeout(E),o.isUnmounted)return;const{naturalHeight:X,naturalWidth:we}=y;X||we?(b.value=we,r.value=X):!y.complete&&g.value==="loading"&&k!=null?E=window.setTimeout(B,k):(y.currentSrc.endsWith(".svg")||y.currentSrc.startsWith("data:image/svg+xml"))&&(b.value=1,r.value=1)};B()}const z=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),T=()=>{var B;if(!d.value.src||g.value==="idle")return null;const y=u("img",{class:["v-img__img",z.value],style:{objectPosition:e.position},src:d.value.src,srcset:d.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:m,onLoad:C,onError:_},null),k=(B=t.sources)==null?void 0:B.call(t);return u(te,{transition:e.transition,appear:!0},{default:()=>[ve(k?u("picture",{class:"v-img__picture"},[k,y]):y,[[Et,g.value==="loaded"]])]})},O=()=>u(te,{transition:e.transition},{default:()=>[d.value.lazySrc&&g.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",z.value],style:{objectPosition:e.position},src:d.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),U=()=>t.placeholder?u(te,{transition:e.transition,appear:!0},{default:()=>[(g.value==="loading"||g.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,q=()=>t.error?u(te,{transition:e.transition,appear:!0},{default:()=>[g.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,x=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,L=j(!1);{const y=A(h,k=>{k&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{L.value=!0})}),y())})}return p(()=>{const y=Ee.filterProps(e);return ve(u(Ee,be({class:["v-img",{"v-img--booting":!L.value},s.value,i.value,e.class],style:[{width:w(e.width==="auto"?b.value:e.width)},l.value,e.style]},y,{aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>u(We,null,[u(T,null,null),u(O,null,null),u(x,null,null),u(U,null,null),u(q,null,null)]),default:t.default}),[[Pt("intersect"),{handler:v,options:e.options},null,{once:!0}]])}),{currentSrc:c,image:m,state:g,naturalWidth:b,naturalHeight:r}}}),Zt=[null,"default","comfortable","compact"],Se=S({density:{type:String,default:"default",validator:e=>Zt.includes(e)}},"density");function _e(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{densityClasses:f(()=>`${n}--density-${e.density}`)}}const en=["elevated","flat","tonal","outlined","text","plain"];function Ye(e,n){return u(We,null,[e&&u("span",{key:"overlay",class:`${n}__overlay`},null),u("span",{key:"underlay",class:`${n}__underlay`},null)])}const ke=S({color:String,variant:{type:String,default:"elevated",validator:e=>en.includes(e)}},"variant");function Je(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();const a=f(()=>{const{variant:l}=fe(e);return`${n}--variant-${l}`}),{colorClasses:t,colorStyles:s}=Ce(f(()=>{const{variant:l,color:i}=fe(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:t,colorStyles:s,variantClasses:a}}const tn=S({start:Boolean,end:Boolean,icon:ie,image:String,text:String,...N(),...Se(),...Z(),...ue(),...G(),...H(),...ke({variant:"flat"})},"VAvatar"),pn=$()({name:"VAvatar",props:tn(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=M(e),{colorClasses:s,colorStyles:l,variantClasses:i}=Je(e),{densityClasses:o}=_e(e),{roundedClasses:c}=ee(e),{sizeClasses:m,sizeStyles:g}=ce(e);return p(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,s.value,o.value,c.value,m.value,i.value,e.class],style:[l.value,g.value,e.style]},{default:()=>[a.default?u(ne,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?u(Qt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(se,{key:"icon",icon:e.icon},null):e.text,Ye(!1,"v-avatar")]})),{}}}),Ke=S({border:[Boolean,Number,String]},"border");function Qe(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{borderClasses:f(()=>{const t=F(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))s.push(`border-${l}`);return s})}}const Ze=S({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function et(e){return{elevationClasses:f(()=>{const a=F(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}function tt(e,n){const a=K(),t=j(!1);if(he){const s=new IntersectionObserver(l=>{t.value=!!l.find(i=>i.isIntersecting)},n);Q(()=>{s.disconnect()}),A(a,(l,i)=>{i&&(s.unobserve(i),t.value=!1),l&&s.observe(l)},{flush:"post"})}return{intersectionRef:a,isIntersecting:t}}const Te={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},nt=S({location:String},"location");function at(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=je();return{locationStyles:f(()=>{if(!e.location)return{};const{side:l,align:i}=Dt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function o(m){return a?a(m):0}const c={};return l!=="center"&&(n?c[Te[l]]=`calc(100% - ${o(l)}px)`:c[l]=0),i!=="center"?n?c[Te[i]]=`calc(100% - ${o(i)}px)`:c[i]=0:(l==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),c})}}const nn=S({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...N(),...nt({location:"top"}),...Z(),...G(),...H()},"VProgressLinear"),an=$()({name:"VProgressLinear",props:nn(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=Fe(e,"modelValue"),{isRtl:s,rtlClasses:l}=je(),{themeClasses:i}=M(e),{locationStyles:o}=at(e),{textColorClasses:c,textColorStyles:m}=re(e,"color"),{backgroundColorClasses:g,backgroundColorStyles:b}=ae(f(()=>e.bgColor||e.color)),{backgroundColorClasses:r,backgroundColorStyles:d}=ae(f(()=>e.bufferColor||e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:v}=ae(e,"color"),{roundedClasses:C}=ee(e),{intersectionRef:_,isIntersecting:P}=tt(),E=f(()=>parseFloat(e.max)),I=f(()=>parseFloat(e.height)),z=f(()=>Ie(parseFloat(e.bufferValue)/E.value*100,0,100)),T=f(()=>Ie(parseFloat(t.value)/E.value*100,0,100)),O=f(()=>s.value!==e.reverse),U=f(()=>e.indeterminate?"fade-transition":"slide-x-transition");function q(x){if(!_.value)return;const{left:L,right:y,width:k}=_.value.getBoundingClientRect(),B=O.value?k-x.clientX+(y-k):x.clientX-L;t.value=Math.round(B/k*E.value)}return p(()=>u(e.tag,{ref:_,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&P.value,"v-progress-linear--reverse":O.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},C.value,i.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?w(I.value):0,"--v-progress-linear-height":w(I.value),...e.absolute?o.value:{}},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:T.value,onClick:e.clickable&&q},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",c.value],style:{...m.value,[O.value?"left":"right"]:w(-I.value),borderTop:`${w(I.value/2)} dotted`,opacity:parseFloat(e.bufferOpacity),top:`calc(50% - ${w(I.value/4)})`,width:w(100-z.value,"%"),"--v-progress-linear-stream-to":w(I.value*(O.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",g.value],style:[b.value,{opacity:parseFloat(e.bgOpacity),width:e.stream?0:void 0}]},null),u("div",{class:["v-progress-linear__buffer",r.value],style:[d.value,{opacity:parseFloat(e.bufferOpacity),width:w(z.value,"%")}]},null),u(Ae,{name:U.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(x=>u("div",{key:x,class:["v-progress-linear__indeterminate",x,h.value],style:v.value},null))]):u("div",{class:["v-progress-linear__determinate",h.value],style:[v.value,{width:w(T.value,"%")}]},null)]}),a.default&&u("div",{class:"v-progress-linear__content"},[a.default({value:T.value,buffer:z.value})])]})),{}}}),sn=S({loading:[Boolean,String]},"loader");function ln(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{loaderClasses:f(()=>({[`${n}--loading`]:e.loading}))}}function On(e,n){var t;let{slots:a}=n;return u("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||u(an,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const rn=["static","relative","fixed","absolute","sticky"],on=S({position:{type:String,validator:e=>rn.includes(e)}},"position");function un(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:W();return{positionClasses:f(()=>e.position?`${n}--${e.position}`:void 0)}}function cn(){const e=D("useRoute");return f(()=>{var n;return(n=e==null?void 0:e.proxy)==null?void 0:n.$route})}function An(){var e,n;return(n=(e=D("useRouter"))==null?void 0:e.proxy)==null?void 0:n.$router}function dn(e,n){var m,g;const a=Tt("RouterLink"),t=f(()=>!!(e.href||e.to)),s=f(()=>(t==null?void 0:t.value)||Be(n,"click")||Be(e,"click"));if(typeof a=="string"||!("useLink"in a))return{isLink:t,isClickable:s,href:R(e,"href")};const l=f(()=>({...e,to:R(()=>e.to||"")})),i=a.useLink(l.value),o=f(()=>e.to?i:void 0),c=cn();return{isLink:t,isClickable:s,route:(m=o.value)==null?void 0:m.route,navigate:(g=o.value)==null?void 0:g.navigate,isActive:f(()=>{var b,r,d;return o.value?e.exact?c.value?((d=o.value.isExactActive)==null?void 0:d.value)&&De(o.value.route.value.query,c.value.query):((r=o.value.isExactActive)==null?void 0:r.value)??!1:((b=o.value.isActive)==null?void 0:b.value)??!1:!1}),href:f(()=>{var b;return e.to?(b=o.value)==null?void 0:b.route.value.href:e.href})}}const vn=S({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let de=!1;function Wn(e,n){let a=!1,t,s;Ne&&(ye(()=>{window.addEventListener("popstate",l),t=e==null?void 0:e.beforeEach((i,o,c)=>{de?a?n(c):c():setTimeout(()=>a?n(c):c()),de=!0}),s=e==null?void 0:e.afterEach(()=>{de=!1})}),Lt(()=>{window.removeEventListener("popstate",l),t==null||t(),s==null||s()}));function l(i){var o;(o=i.state)!=null&&o.replaced||(a=!0,setTimeout(()=>a=!1))}}const me=Symbol("rippleStop"),fn=80;function Le(e,n){e.style.transform=n,e.style.webkitTransform=n}function ge(e){return e.constructor.name==="TouchEvent"}function st(e){return e.constructor.name==="KeyboardEvent"}const mn=function(e,n){var b;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!st(e)){const r=n.getBoundingClientRect(),d=ge(e)?e.touches[e.touches.length-1]:e;t=d.clientX-r.left,s=d.clientY-r.top}let l=0,i=.3;(b=n._ripple)!=null&&b.circle?(i=.15,l=n.clientWidth/2,l=a.center?l:l+Math.sqrt((t-l)**2+(s-l)**2)/4):l=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const o=`${(n.clientWidth-l*2)/2}px`,c=`${(n.clientHeight-l*2)/2}px`,m=a.center?o:`${t-l}px`,g=a.center?c:`${s-l}px`;return{radius:l,scale:i,x:m,y:g,centerX:o,centerY:c}},oe={show(e,n){var d;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=n==null?void 0:n._ripple)!=null&&d.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:l,scale:i,x:o,y:c,centerX:m,centerY:g}=mn(e,n,a),b=`${l*2}px`;s.className="v-ripple__animation",s.style.width=b,s.style.height=b,n.appendChild(t);const r=window.getComputedStyle(n);r&&r.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Le(s,`translate(${o}, ${c}) scale3d(${i},${i},${i})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Le(s,`translate(${m}, ${g}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=a.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(a.parentNode)},300)},s)}};function lt(e){return typeof e>"u"||!!e}function Y(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[me])){if(e[me]=!0,ge(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||st(e),a._ripple.class&&(n.class=a._ripple.class),ge(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{oe.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},fn)}else oe.show(e,a,n)}}function Re(e){e[me]=!0}function V(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{V(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),oe.hide(n)}}function it(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let J=!1;function rt(e){!J&&(e.keyCode===Ve.enter||e.keyCode===Ve.space)&&(J=!0,Y(e))}function ot(e){J=!1,V(e)}function ut(e){J&&(J=!1,V(e))}function ct(e,n,a){const{value:t,modifiers:s}=n,l=lt(t);if(l||oe.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=s.center,e._ripple.circle=s.circle,Rt(t)&&t.class&&(e._ripple.class=t.class),l&&!a){if(s.stop){e.addEventListener("touchstart",Re,{passive:!0}),e.addEventListener("mousedown",Re);return}e.addEventListener("touchstart",Y,{passive:!0}),e.addEventListener("touchend",V,{passive:!0}),e.addEventListener("touchmove",it,{passive:!0}),e.addEventListener("touchcancel",V),e.addEventListener("mousedown",Y),e.addEventListener("mouseup",V),e.addEventListener("mouseleave",V),e.addEventListener("keydown",rt),e.addEventListener("keyup",ot),e.addEventListener("blur",ut),e.addEventListener("dragstart",V,{passive:!0})}else!l&&a&&dt(e)}function dt(e){e.removeEventListener("mousedown",Y),e.removeEventListener("touchstart",Y),e.removeEventListener("touchend",V),e.removeEventListener("touchmove",it),e.removeEventListener("touchcancel",V),e.removeEventListener("mouseup",V),e.removeEventListener("mouseleave",V),e.removeEventListener("keydown",rt),e.removeEventListener("keyup",ot),e.removeEventListener("dragstart",V),e.removeEventListener("blur",ut)}function gn(e,n){ct(e,n,!1)}function bn(e){delete e._ripple,dt(e)}function hn(e,n){if(n.value===n.oldValue)return;const a=lt(n.oldValue);ct(e,n,a)}const yn={mounted:gn,unmounted:bn,updated:hn},Cn=S({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Sn=S({value:null,disabled:Boolean,selectedClass:String},"group-item");function _n(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=D("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=zt();He(Symbol.for(`${n.description}:id`),s);const l=$t(n,null);if(!l){if(!a)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const i=R(e,"value"),o=f(()=>!!(l.disabled.value||e.disabled));l.register({id:s,value:i,disabled:o},t),Q(()=>{l.unregister(s)});const c=f(()=>l.isSelected(s)),m=f(()=>l.items.value[0].id===s),g=f(()=>l.items.value[l.items.value.length-1].id===s),b=f(()=>c.value&&[l.selectedClass.value,e.selectedClass]);return A(c,r=>{t.emit("group:selected",{value:r})},{flush:"sync"}),{id:s,isSelected:c,isFirst:m,isLast:g,toggle:()=>l.select(s,!c.value),select:r=>l.select(s,r),selectedClass:b,value:i,disabled:o,group:l}}function kn(e,n){let a=!1;const t=Nt([]),s=Fe(e,"modelValue",[],r=>r==null?[]:vt(t,At(r)),r=>{const d=xn(t,r);return e.multiple?d:d[0]}),l=D("useGroup");function i(r,d){const h=r,v=Symbol.for(`${n.description}:id`),_=Wt(v,l==null?void 0:l.vnode).indexOf(d);fe(h.value)==null&&(h.value=_,h.useIndexAsValue=!0),_>-1?t.splice(_,0,h):t.push(h)}function o(r){if(a)return;c();const d=t.findIndex(h=>h.id===r);t.splice(d,1)}function c(){const r=t.find(d=>!d.disabled);r&&e.mandatory==="force"&&!s.value.length&&(s.value=[r.id])}pt(()=>{c()}),Q(()=>{a=!0}),Ot(()=>{for(let r=0;r<t.length;r++)t[r].useIndexAsValue&&(t[r].value=r)});function m(r,d){const h=t.find(v=>v.id===r);if(!(d&&(h!=null&&h.disabled)))if(e.multiple){const v=s.value.slice(),C=v.findIndex(P=>P===r),_=~C;if(d=d??!_,_&&e.mandatory&&v.length<=1||!_&&e.max!=null&&v.length+1>e.max)return;C<0&&d?v.push(r):C>=0&&!d&&v.splice(C,1),s.value=v}else{const v=s.value.includes(r);if(e.mandatory&&v)return;s.value=d??!v?[r]:[]}}function g(r){if(e.multiple,s.value.length){const d=s.value[0],h=t.findIndex(_=>_.id===d);let v=(h+r)%t.length,C=t[v];for(;C.disabled&&v!==h;)v=(v+r)%t.length,C=t[v];if(C.disabled)return;s.value=[t[v].id]}else{const d=t.find(h=>!h.disabled);d&&(s.value=[d.id])}}const b={register:i,unregister:o,selected:s,select:m,disabled:R(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:r=>s.value.includes(r),selectedClass:f(()=>e.selectedClass),items:f(()=>t),getItemIndex:r=>wn(t,r)};return He(n,b),b}function wn(e,n){const a=vt(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function vt(e,n){const a=[];return n.forEach(t=>{const s=e.find(i=>De(t,i.value)),l=e[t];(s==null?void 0:s.value)!=null?a.push(s.id):l!=null&&a.push(l.id)}),a}function xn(e,n){const a=[];return n.forEach(t=>{const s=e.findIndex(l=>l.id===t);if(~s){const l=e[s];a.push(l.value!=null?l.value:s)}}),a}const ft=S({baseColor:String,divided:Boolean,...Ke(),...N(),...Se(),...Ze(),...Z(),...G(),...H(),...ke()},"VBtnGroup"),ze=$()({name:"VBtnGroup",props:ft(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=M(e),{densityClasses:s}=_e(e),{borderClasses:l}=Qe(e),{elevationClasses:i}=et(e),{roundedClasses:o}=ee(e);pe({VBtn:{height:"auto",baseColor:R(e,"baseColor"),color:R(e,"color"),density:R(e,"density"),flat:!0,variant:R(e,"variant")}}),p(()=>u(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,l.value,s.value,i.value,o.value,e.class],style:e.style},a))}}),mt=Symbol.for("vuetify:v-btn-toggle"),In=S({...ft(),...Cn()},"VBtnToggle");$()({name:"VBtnToggle",props:In(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:s,prev:l,select:i,selected:o}=kn(e,mt);return p(()=>{const c=ze.filterProps(e);return u(ze,be({class:["v-btn-toggle",e.class]},c,{style:e.style}),{default:()=>{var m;return[(m=a.default)==null?void 0:m.call(a,{isSelected:t,next:s,prev:l,select:i,selected:o})]}})}),{next:s,prev:l,select:i}}});const Bn=S({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...N(),...ue(),...G({tag:"div"}),...H()},"VProgressCircular"),Vn=$()({name:"VProgressCircular",props:Bn(),setup(e,n){let{slots:a}=n;const t=20,s=2*Math.PI*t,l=K(),{themeClasses:i}=M(e),{sizeClasses:o,sizeStyles:c}=ce(e),{textColorClasses:m,textColorStyles:g}=re(R(e,"color")),{textColorClasses:b,textColorStyles:r}=re(R(e,"bgColor")),{intersectionRef:d,isIntersecting:h}=tt(),{resizeRef:v,contentRect:C}=Ht(),_=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),P=f(()=>Number(e.width)),E=f(()=>c.value?Number(e.size):C.value?C.value.width:Math.max(P.value,32)),I=f(()=>t/(1-P.value/E.value)*2),z=f(()=>P.value/E.value*I.value),T=f(()=>w((100-_.value)/100*s));return jt(()=>{d.value=l.value,v.value=l.value}),p(()=>u(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,o.value,m.value,e.class],style:[c.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:_.value},{default:()=>[u("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[u("circle",{class:["v-progress-circular__underlay",b.value],style:r.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":z.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),u("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":z.value,"stroke-dasharray":s,"stroke-dashoffset":T.value},null)]),a.default&&u("div",{class:"v-progress-circular__content"},[a.default({value:_.value})])]})),{}}});function Pn(e,n){A(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&ye(()=>{n(!0)})},{immediate:!0})}const En=S({active:{type:Boolean,default:void 0},baseColor:String,symbol:{type:null,default:mt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ie,appendIcon:ie,block:Boolean,readonly:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Ke(),...N(),...Se(),...Ge(),...Ze(),...Sn(),...sn(),...nt(),...on(),...Z(),...vn(),...ue(),...G({tag:"button"}),...H(),...ke({variant:"elevated"})},"VBtn"),jn=$()({name:"VBtn",props:En(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:s}=M(e),{borderClasses:l}=Qe(e),{densityClasses:i}=_e(e),{dimensionStyles:o}=Ue(e),{elevationClasses:c}=et(e),{loaderClasses:m}=ln(e),{locationStyles:g}=at(e),{positionClasses:b}=un(e),{roundedClasses:r}=ee(e),{sizeClasses:d,sizeStyles:h}=ce(e),v=_n(e,e.symbol,!1),C=dn(e,a),_=f(()=>{var x;return e.active!==void 0?e.active:C.isLink.value?(x=C.isActive)==null?void 0:x.value:v==null?void 0:v.isSelected.value}),P=f(()=>{var L,y;return{color:(v==null?void 0:v.isSelected.value)&&(!C.isLink.value||((L=C.isActive)==null?void 0:L.value))||!v||((y=C.isActive)==null?void 0:y.value)?e.color??e.baseColor:e.baseColor,variant:e.variant}}),{colorClasses:E,colorStyles:I,variantClasses:z}=Je(P),T=f(()=>(v==null?void 0:v.disabled.value)||e.disabled),O=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),U=f(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function q(x){var L;T.value||C.isLink.value&&(x.metaKey||x.ctrlKey||x.shiftKey||x.button!==0||a.target==="_blank")||((L=C.navigate)==null||L.call(C,x),v==null||v.toggle())}return Pn(C,v==null?void 0:v.select),p(()=>{const x=C.isLink.value?"a":e.tag,L=!!(e.prependIcon||t.prepend),y=!!(e.appendIcon||t.append),k=!!(e.icon&&e.icon!==!0);return ve(u(x,{type:x==="a"?void 0:"button",class:["v-btn",v==null?void 0:v.selectedClass.value,{"v-btn--active":_.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":O.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--readonly":e.readonly,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},s.value,l.value,E.value,i.value,c.value,m.value,b.value,r.value,d.value,z.value,e.class],style:[I.value,o.value,g.value,h.value,e.style],"aria-busy":e.loading?!0:void 0,disabled:T.value||void 0,href:C.href.value,tabindex:e.loading||e.readonly?-1:void 0,onClick:q,value:U.value},{default:()=>{var B;return[Ye(!0,"v-btn"),!e.icon&&L&&u("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?u(ne,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):u(se,{key:"prepend-icon",icon:e.prependIcon},null)]),u("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&k?u(se,{key:"content-icon",icon:e.icon},null):u(ne,{key:"content-defaults",disabled:!k,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var X;return[((X=t.default)==null?void 0:X.call(t))??e.text]}})]),!e.icon&&y&&u("span",{key:"append",class:"v-btn__append"},[t.append?u(ne,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):u(se,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&u("span",{key:"loader",class:"v-btn__loader"},[((B=t.loader)==null?void 0:B.call(t))??u(Vn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,width:"2"},null)])]}}),[[yn,!T.value&&!!e.ripple,"",{center:!!e.icon}]])}),{group:v}}});export{sn as $,ce as A,Se as B,_e as C,pn as D,Cn as E,kn as F,Vn as G,Kt as H,Xt as I,Jt as J,re as K,at as L,te as M,Nn as N,vn as O,dn as P,ln as Q,yn as R,On as S,Dt as T,Ln as U,an as V,Rn as W,zn as X,$n as Y,An as Z,Wn as _,_n as a,nt as b,on as c,Z as d,ke as e,un as f,Je as g,ee as h,p as i,Ye as j,ne as k,N as l,Sn as m,G as n,Ke as o,Ze as p,ae as q,Qe as r,et as s,Qt as t,Ht as u,jn as v,se as w,Ge as x,Ue as y,ue as z};
