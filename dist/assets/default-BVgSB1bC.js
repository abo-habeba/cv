import{p as A,i as de,n as ne,c as h,r as $,a as j,e as Be,b as D,g as Ae,d as ze,f as at,h as lt,s as R,o as nt,j as ot,k as me,l as Y,m as s,q as fe,t as te,u as ge,v as xe,w as De,x as st,y as L,z as oe,A as Te,B as q,C as _e,D as ae,E as it,F as Oe,G as ut,H as rt,T as ct,I as ve,J as vt,K as dt,L as mt,M as ft,N as gt,O as Ye,P as We,Q,R as Ee,S as M,U as pe,V as ht,W as E,X as Se,Y as K,Z as yt,_ as bt,$ as ke,a0 as wt,a1 as pt,a2 as St}from"./index-ChxtWFXL.js";import{m as kt,u as Ue,a as Vt,b as xt,V as Re}from"./VSelectionControl-CYwPMwAT.js";import{u as Tt,c as _t,m as se,a as he,b as W,d as Xe,e as Fe,f as Ie,g as Ve,h as qe,i as Ze,j as Ce,V as je,k as ee,l as It,t as Ct,n as Pt,o as Bt,p as Et,q as Rt,r as Ht,s as $t,v as Mt,w as Lt,x as G,y as He,z as Nt,A as At}from"./VLabel-86a35s0f.js";import{V as zt}from"./VSwitch-Nb1fgJoj.js";import{V as Dt}from"./index-CUSXw9Lg.js";import{u as Pe}from"./ssrBoot-BR0SdiGS.js";import{V as Ot}from"./VList-KUUjaQG9.js";import{V as J}from"./VListItem-C4Kbk8rt.js";import"./VInput-B2xPres-.js";import"./VDivider-a6yMoM3r.js";const le=Symbol.for("vuetify:layout"),Ke=Symbol.for("vuetify:layout-item"),$e=1e3,Yt=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ge=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Je(){const e=de(le);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:ne(),getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Qe(e){const o=de(le);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${lt()}`,i=Ae("useLayoutItem");ze(Ke,{id:t});const a=R(!1);nt(()=>a.value=!0),ot(()=>a.value=!1);const l=ne(),{layoutItemStyles:n,layoutItemScrimStyles:u}=o.register(i,{...e,active:h(()=>a.value?!1:e.active.value),id:t});return me(()=>o.unregister(t)),{layoutItemStyles:n,layoutRect:o.layoutRect,layoutItemScrimStyles:u,layoutIsReady:l}}const Wt=(e,o,t,i)=>{let a={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...a}}];for(const n of e){const u=o.get(n),g=t.get(n),p=i.get(n);if(!u||!g||!p)continue;const d={...a,[u.value]:parseInt(a[u.value],10)+(p.value?parseInt(g.value,10):0)};l.push({id:n,layer:d}),a=d}return l};function Ut(e){const o=de(le,null),t=h(()=>o?o.rootZIndex.value-100:$e),i=$([]),a=j(new Map),l=j(new Map),n=j(new Map),u=j(new Map),g=j(new Map),{resizeRef:p,contentRect:d}=Tt(),f=Be(()=>{const _=[...new Set([...n.values()].map(r=>r.value))].sort((r,V)=>r-V),m=[];for(const r of _){const V=i.value.filter(b=>{var y;return((y=n.get(b))==null?void 0:y.value)===r});m.push(...V)}return Wt(m,a,l,u)}),k=h(()=>!Array.from(g.values()).some(_=>_.value)),w=h(()=>f.value[f.value.length-1].layer),v=h(()=>({"--v-layout-left":D(w.value.left),"--v-layout-right":D(w.value.right),"--v-layout-top":D(w.value.top),"--v-layout-bottom":D(w.value.bottom),...k.value?void 0:{transition:"none"}})),c=Be(()=>f.value.slice(1).map((_,m)=>{let{id:r}=_;const{layer:V}=f.value[m],b=l.get(r),y=a.get(r);return{id:r,...V,size:Number(b.value),position:y.value}})),I=_=>c.value.find(m=>m.id===_),x=Ae("createLayout"),C=ne();ze(le,{register:(_,m)=>{let{id:r,order:V,position:b,layoutSize:y,elementSize:T,active:H,disableTransitions:N,absolute:ye}=m;n.set(r,V),a.set(r,b),l.set(r,y),u.set(r,H),N&&g.set(r,N);const ie=at(Ke,x==null?void 0:x.vnode).indexOf(_);ie>-1?i.value.splice(ie,0,r):i.value.push(r);const Z=h(()=>c.value.findIndex(O=>O.id===r)),U=h(()=>t.value+f.value.length*2-Z.value*2),we=h(()=>{const O=b.value==="left"||b.value==="right",P=b.value==="right",re=b.value==="bottom",X=T.value??y.value,ce=X===0?"%":"px",tt={[b.value]:0,zIndex:U.value,transform:`translate${O?"X":"Y"}(${(H.value?0:-(X===0?100:X))*(P||re?-1:1)}${ce})`,position:ye.value||t.value!==$e?"absolute":"fixed",...k.value?void 0:{transition:"none"}};if(Z.value<0)throw new Error(`Layout item "${r}" is missing`);const z=c.value[Z.value];if(!z)throw new Error(`[Vuetify] Could not find layout item "${r}"`);return{...tt,height:O?`calc(100% - ${z.top}px - ${z.bottom}px)`:T.value?`${T.value}px`:void 0,left:P?void 0:`${z.left}px`,right:P?`${z.right}px`:void 0,top:b.value!=="bottom"?`${z.top}px`:void 0,bottom:b.value!=="top"?`${z.bottom}px`:void 0,width:O?T.value?`${T.value}px`:void 0:`calc(100% - ${z.left}px - ${z.right}px)`}}),ue=h(()=>({zIndex:U.value-1}));return{layoutItemStyles:we,layoutItemScrimStyles:ue,zIndex:U}},unregister:_=>{n.delete(_),a.delete(_),l.delete(_),u.delete(_),g.delete(_),i.value=i.value.filter(m=>m!==_)},mainRect:w,mainStyles:v,getLayoutItem:I,items:c,layoutRect:d,rootZIndex:t,layoutIsReady:C});const S=h(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),B=h(()=>({zIndex:o?t.value:void 0,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:S,layoutStyles:B,getLayoutItem:I,items:c,layoutRect:d,layoutIsReady:C,layoutRef:p}}const Xt=_t("v-spacer","div","VSpacer"),Ft=A({text:String,...se(),...he()},"VToolbarTitle"),qt=Y()({name:"VToolbarTitle",props:Ft(),setup(e,o){let{slots:t}=o;return W(()=>{const i=!!(t.default||t.text||e.text);return s(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[i&&s("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Zt=[null,"prominent","default","comfortable","compact"],et=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Zt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Xe(),...se(),...Fe(),...Ie(),...he({tag:"header"}),...fe()},"VToolbar"),Me=Y()({name:"VToolbar",props:et(),setup(e,o){var w;let{slots:t}=o;const{backgroundColorClasses:i,backgroundColorStyles:a}=Ve(te(e,"color")),{borderClasses:l}=qe(e),{elevationClasses:n}=Ze(e),{roundedClasses:u}=Ce(e),{themeClasses:g}=ge(e),{rtlClasses:p}=xe(),d=R(!!(e.extended||(w=t.extension)!=null&&w.call(t))),f=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),k=h(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return De({VBtn:{variant:"text"}}),W(()=>{var x;const v=!!(e.title||t.title),c=!!(t.image||e.image),I=(x=t.extension)==null?void 0:x.call(t);return d.value=!!(e.extended||I),s(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,l.value,n.value,u.value,g.value,p.value,e.class],style:[a.value,e.style]},{default:()=>[c&&s("div",{key:"image",class:"v-toolbar__image"},[t.image?s(ee,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):s(je,{key:"image-img",cover:!0,src:e.image},null)]),s(ee,{defaults:{VTabs:{height:D(f.value)}}},{default:()=>{var C,S,B;return[s("div",{class:"v-toolbar__content",style:{height:D(f.value)}},[t.prepend&&s("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),v&&s(qt,{key:"title",text:e.title},{text:t.title}),(S=t.default)==null?void 0:S.call(t),t.append&&s("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])])]}}),s(ee,{defaults:{VTabs:{height:D(k.value)}}},{default:()=>[s(Dt,null,{default:()=>[d.value&&s("div",{class:"v-toolbar__extension",style:{height:D(k.value)}},[I])]})]})]})}),{contentHeight:f,extensionHeight:k}}}),jt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Kt(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=o;let i=0,a=0;const l=$(null),n=R(0),u=R(0),g=R(0),p=R(!1),d=R(!1),f=h(()=>Number(e.scrollThreshold)),k=h(()=>st((f.value-n.value)/f.value||0)),w=()=>{const v=l.value;if(!v||t&&!t.value)return;i=n.value,n.value="window"in v?v.pageYOffset:v.scrollTop;const c=v instanceof Window?document.documentElement.scrollHeight:v.scrollHeight;if(a!==c){a=c;return}d.value=n.value<i,g.value=Math.abs(n.value-f.value)};return L(d,()=>{u.value=u.value||n.value}),L(p,()=>{u.value=0}),oe(()=>{L(()=>e.scrollTarget,v=>{var I;const c=v?document.querySelector(v):window;c&&c!==l.value&&((I=l.value)==null||I.removeEventListener("scroll",w),l.value=c,l.value.addEventListener("scroll",w,{passive:!0}))},{immediate:!0})}),me(()=>{var v;(v=l.value)==null||v.removeEventListener("scroll",w)}),t&&L(t,w,{immediate:!0}),{scrollThreshold:f,currentScroll:n,currentThreshold:g,isScrollActive:p,scrollRatio:k,isScrollingUp:d,savedScroll:u}}const Gt=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...et(),...Ge(),...jt(),height:{type:[Number,String],default:64}},"VAppBar"),Jt=Y()({name:"VAppBar",props:Gt(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const i=$(),a=Te(e,"modelValue"),l=h(()=>{var B;const S=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:S.has("hide"),fullyHide:S.has("fully-hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),n=h(()=>{const S=l.value;return S.hide||S.fullyHide||S.inverted||S.collapse||S.elevate||S.fadeImage||!a.value}),{currentScroll:u,scrollThreshold:g,isScrollingUp:p,scrollRatio:d}=Kt(e,{canScroll:n}),f=h(()=>l.value.hide||l.value.fullyHide),k=h(()=>e.collapse||l.value.collapse&&(l.value.inverted?d.value>0:d.value===0)),w=h(()=>e.flat||l.value.fullyHide&&!a.value||l.value.elevate&&(l.value.inverted?u.value>0:u.value===0)),v=h(()=>l.value.fadeImage?l.value.inverted?1-d.value:d.value:void 0),c=h(()=>{var _,m;const S=Number(((_=i.value)==null?void 0:_.contentHeight)??e.height),B=Number(((m=i.value)==null?void 0:m.extensionHeight)??0);return f.value?u.value<g.value||l.value.fullyHide?S+B:S:S+B});q(h(()=>!!e.scrollBehavior),()=>{_e(()=>{f.value?l.value.inverted?a.value=u.value>g.value:a.value=p.value||u.value<g.value:a.value=!0})});const{ssrBootStyles:I}=Pe(),{layoutItemStyles:x,layoutIsReady:C}=Qe({id:e.name,order:h(()=>parseInt(e.order,10)),position:te(e,"location"),layoutSize:c,elementSize:R(void 0),active:a,absolute:te(e,"absolute")});return W(()=>{const S=Me.filterProps(e);return s(Me,ae({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...x.value,"--v-toolbar-image-opacity":v.value,height:void 0,...I.value},e.style]},S,{collapse:k.value,flat:w.value}),t)}),C}});function Qt(e){let{rootEl:o,isSticky:t,layoutItemStyles:i}=e;const a=R(!1),l=R(0),n=h(()=>{const p=typeof a.value=="boolean"?"top":a.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[p]:D(l.value)}:{top:i.value.top}]});oe(()=>{L(t,p=>{p?window.addEventListener("scroll",g,{passive:!0}):window.removeEventListener("scroll",g)},{immediate:!0})}),me(()=>{window.removeEventListener("scroll",g)});let u=0;function g(){const p=u>window.scrollY?"up":"down",d=o.value.getBoundingClientRect(),f=parseFloat(i.value.top??0),k=window.scrollY-Math.max(0,l.value-f),w=d.height+Math.max(l.value,f)-window.scrollY-window.innerHeight,v=parseFloat(getComputedStyle(o.value).getPropertyValue("--v-body-scroll-y"))||0;d.height<window.innerHeight-f?(a.value="top",l.value=f):p==="up"&&a.value==="bottom"||p==="down"&&a.value==="top"?(l.value=window.scrollY+d.top-v,a.value=!0):p==="down"&&w<=0?(l.value=0,a.value="bottom"):p==="up"&&k<=0&&(v?a.value!=="top"&&(l.value=-k+v+f,a.value="top"):(l.value=d.top+k,a.value="top")),u=window.scrollY}return{isStuck:a,stickyStyles:n}}const ea=100,ta=20;function Le(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ne(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let o=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const i=Le(o),a=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);o+=(a-i)*Math.abs(a),t===e.length-1&&(o*=.5)}return Le(o)*1e3}function aa(){const e={};function o(a){Array.from(a.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new it(ta))).push([a.timeStamp,l])})}function t(a){Array.from(a.changedTouches).forEach(l=>{delete e[l.identifier]})}function i(a){var p;const l=(p=e[a])==null?void 0:p.values().reverse();if(!l)throw new Error(`No samples for touch id ${a}`);const n=l[0],u=[],g=[];for(const d of l){if(n[0]-d[0]>ea)break;u.push({t:d[0],d:d[1].clientX}),g.push({t:d[0],d:d[1].clientY})}return{x:Ne(u),y:Ne(g),get direction(){const{x:d,y:f}=this,[k,w]=[Math.abs(d),Math.abs(f)];return k>w&&d>=0?"right":k>w&&d<=0?"left":w>k&&f>=0?"down":w>k&&f<=0?"up":la()}}}return{addMovement:o,endTouch:t,getVelocity:i}}function la(){throw new Error}function na(e){let{el:o,isActive:t,isTemporary:i,width:a,touchless:l,position:n}=e;oe(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",S,{passive:!1}),window.addEventListener("touchend",B,{passive:!0})}),me(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",S),window.removeEventListener("touchend",B)});const u=h(()=>["left","right"].includes(n.value)),{addMovement:g,endTouch:p,getVelocity:d}=aa();let f=!1;const k=R(!1),w=R(0),v=R(0);let c;function I(m,r){return(n.value==="left"?m:n.value==="right"?document.documentElement.clientWidth-m:n.value==="top"?m:n.value==="bottom"?document.documentElement.clientHeight-m:F())-(r?a.value:0)}function x(m){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const V=n.value==="left"?(m-v.value)/a.value:n.value==="right"?(document.documentElement.clientWidth-m-v.value)/a.value:n.value==="top"?(m-v.value)/a.value:n.value==="bottom"?(document.documentElement.clientHeight-m-v.value)/a.value:F();return r?Math.max(0,Math.min(1,V)):V}function C(m){if(l.value)return;const r=m.changedTouches[0].clientX,V=m.changedTouches[0].clientY,b=25,y=n.value==="left"?r<b:n.value==="right"?r>document.documentElement.clientWidth-b:n.value==="top"?V<b:n.value==="bottom"?V>document.documentElement.clientHeight-b:F(),T=t.value&&(n.value==="left"?r<a.value:n.value==="right"?r>document.documentElement.clientWidth-a.value:n.value==="top"?V<a.value:n.value==="bottom"?V>document.documentElement.clientHeight-a.value:F());(y||T||t.value&&i.value)&&(c=[r,V],v.value=I(u.value?r:V,t.value),w.value=x(u.value?r:V),f=v.value>-20&&v.value<80,p(m),g(m))}function S(m){const r=m.changedTouches[0].clientX,V=m.changedTouches[0].clientY;if(f){if(!m.cancelable){f=!1;return}const y=Math.abs(r-c[0]),T=Math.abs(V-c[1]);(u.value?y>T&&y>3:T>y&&T>3)?(k.value=!0,f=!1):(u.value?T:y)>3&&(f=!1)}if(!k.value)return;m.preventDefault(),g(m);const b=x(u.value?r:V,!1);w.value=Math.max(0,Math.min(1,b)),b>1?v.value=I(u.value?r:V,!0):b<0&&(v.value=I(u.value?r:V,!1))}function B(m){if(f=!1,!k.value)return;g(m),k.value=!1;const r=d(m.changedTouches[0].identifier),V=Math.abs(r.x),b=Math.abs(r.y);(u.value?V>b&&V>400:b>V&&b>3)?t.value=r.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.value]||F()):t.value=w.value>.5}const _=h(()=>k.value?{transform:n.value==="left"?`translateX(calc(-100% + ${w.value*a.value}px))`:n.value==="right"?`translateX(calc(100% - ${w.value*a.value}px))`:n.value==="top"?`translateY(calc(-100% + ${w.value*a.value}px))`:n.value==="bottom"?`translateY(calc(100% - ${w.value*a.value}px))`:F(),transition:"none"}:void 0);return q(k,()=>{var V,b;const m=((V=o.value)==null?void 0:V.style.transform)??null,r=((b=o.value)==null?void 0:b.style.transition)??null;_e(()=>{var y,T,H,N;(T=o.value)==null||T.style.setProperty("transform",((y=_.value)==null?void 0:y.transform)||"none"),(N=o.value)==null||N.style.setProperty("transition",((H=_.value)==null?void 0:H.transition)||null)}),Oe(()=>{var y,T;(y=o.value)==null||y.style.setProperty("transform",m),(T=o.value)==null||T.style.setProperty("transition",r)})}),{isDragging:k,dragProgress:w,dragStyles:_}}function F(){throw new Error}const oa=["start","end","left","right","top","bottom"],sa=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>oa.includes(e)},sticky:Boolean,...Xe(),...se(),...kt(),...ut({mobile:null}),...Fe(),...Ge(),...Ie(),...he({tag:"nav"}),...fe()},"VNavigationDrawer"),ia=Y()({name:"VNavigationDrawer",props:sa(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,o){let{attrs:t,emit:i,slots:a}=o;const{isRtl:l}=xe(),{themeClasses:n}=ge(e),{borderClasses:u}=qe(e),{backgroundColorClasses:g,backgroundColorStyles:p}=Ve(te(e,"color")),{elevationClasses:d}=Ze(e),{displayClasses:f,mobile:k}=rt(e),{roundedClasses:w}=Ce(e),v=It(),c=Te(e,"modelValue",null,P=>!!P),{ssrBootStyles:I}=Pe(),{scopeId:x}=Ue(),C=$(),S=R(!1),{runOpenDelay:B,runCloseDelay:_}=Vt(e,P=>{S.value=P}),m=h(()=>e.rail&&e.expandOnHover&&S.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),r=h(()=>Ct(e.location,l.value)),V=h(()=>e.persistent),b=h(()=>!e.permanent&&(k.value||e.temporary)),y=h(()=>e.sticky&&!b.value&&r.value!=="bottom");q(()=>e.expandOnHover&&e.rail!=null,()=>{L(S,P=>i("update:rail",!P))}),q(()=>!e.disableResizeWatcher,()=>{L(b,P=>!e.permanent&&ne(()=>c.value=!P))}),q(()=>!e.disableRouteWatcher&&!!v,()=>{L(v.currentRoute,()=>b.value&&(c.value=!1))}),L(()=>e.permanent,P=>{P&&(c.value=!0)}),e.modelValue==null&&!b.value&&(c.value=e.permanent||!k.value);const{isDragging:T,dragProgress:H}=na({el:C,isActive:c,isTemporary:b,width:m,touchless:te(e,"touchless"),position:r}),N=h(()=>{const P=b.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):m.value;return T.value?P*H.value:P}),ye=h(()=>["top","bottom"].includes(e.location)?0:m.value),{layoutItemStyles:be,layoutItemScrimStyles:ie,layoutIsReady:Z}=Qe({id:e.name,order:h(()=>parseInt(e.order,10)),position:r,layoutSize:N,elementSize:ye,active:h(()=>c.value||T.value),disableTransitions:h(()=>T.value),absolute:h(()=>e.absolute||y.value&&typeof U.value!="string")}),{isStuck:U,stickyStyles:we}=Qt({rootEl:C,isSticky:y,layoutItemStyles:be}),ue=Ve(h(()=>typeof e.scrim=="string"?e.scrim:null)),O=h(()=>({...T.value?{opacity:H.value*.2,transition:"none"}:void 0,...ie.value}));return De({VList:{bgColor:"transparent"}}),W(()=>{const P=a.image||e.image;return s(ve,null,[s(e.tag,ae({ref:C,onMouseenter:B,onMouseleave:_,class:["v-navigation-drawer",`v-navigation-drawer--${r.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":S.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":b.value,"v-navigation-drawer--persistent":V.value,"v-navigation-drawer--active":c.value,"v-navigation-drawer--sticky":y.value},n.value,g.value,u.value,f.value,d.value,w.value,e.class],style:[p.value,be.value,I.value,we.value,e.style,["top","bottom"].includes(r.value)?{height:"auto"}:{}]},x,t),{default:()=>{var re,X,ce;return[P&&s("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?s(ee,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},a.image):s(je,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),a.prepend&&s("div",{class:"v-navigation-drawer__prepend"},[(re=a.prepend)==null?void 0:re.call(a)]),s("div",{class:"v-navigation-drawer__content"},[(X=a.default)==null?void 0:X.call(a)]),a.append&&s("div",{class:"v-navigation-drawer__append"},[(ce=a.append)==null?void 0:ce.call(a)])]}}),s(ct,{name:"fade-transition"},{default:()=>[b.value&&(T.value||c.value)&&!!e.scrim&&s("div",ae({class:["v-navigation-drawer__scrim",ue.backgroundColorClasses.value],style:[O.value,ue.backgroundColorStyles.value],onClick:()=>{V.value||(c.value=!1)}},x),null)]})])}),Z.then(()=>({isStuck:U}))}});function ua(e){const o=R(e);let t=-1;function i(){clearInterval(t)}function a(){i(),ne(()=>o.value=e)}function l(n){const u=n?getComputedStyle(n):{transitionDuration:.2},g=parseFloat(u.transitionDuration)*1e3||200;if(i(),o.value<=0)return;const p=performance.now();t=window.setInterval(()=>{const d=performance.now()-p+g;o.value=Math.max(e-d,0),o.value<=0&&i()},g)}return Oe(i),{clear:i,time:o,start:l,reset:a}}const ra=A({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Pt({location:"bottom"}),...Bt(),...Ie(),...Et(),...fe(),...vt(xt({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),ca=Y()({name:"VSnackbar",props:ra(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const i=Te(e,"modelValue"),{positionClasses:a}=Rt(e),{scopeId:l}=Ue(),{themeClasses:n}=ge(e),{colorClasses:u,colorStyles:g,variantClasses:p}=Ht(e),{roundedClasses:d}=Ce(e),f=ua(Number(e.timeout)),k=$(),w=$(),v=R(!1),c=R(0),I=$(),x=de(le,void 0);q(()=>!!x,()=>{const y=Je();_e(()=>{I.value=y.mainStyles.value})}),L(i,S),L(()=>e.timeout,S),oe(()=>{i.value&&S()});let C=-1;function S(){f.reset(),window.clearTimeout(C);const y=Number(e.timeout);if(!i.value||y===-1)return;const T=dt(w.value);f.start(T),C=window.setTimeout(()=>{i.value=!1},y)}function B(){f.reset(),window.clearTimeout(C)}function _(){v.value=!0,B()}function m(){v.value=!1,S()}function r(y){c.value=y.touches[0].clientY}function V(y){Math.abs(c.value-y.changedTouches[0].clientY)>50&&(i.value=!1)}const b=h(()=>e.location.split(" ").reduce((y,T)=>(y[`v-snackbar--${T}`]=!0,y),{}));return W(()=>{const y=Re.filterProps(e),T=!!(t.default||t.text||e.text);return s(Re,ae({ref:k,class:["v-snackbar",{"v-snackbar--active":i.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},b.value,a.value,e.class],style:[I.value,e.style]},y,{modelValue:i.value,"onUpdate:modelValue":H=>i.value=H,contentProps:ae({class:["v-snackbar__wrapper",n.value,u.value,d.value,p.value],style:[g.value],onPointerenter:_,onPointerleave:m},y.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:r,onTouchend:V},l),{default:()=>{var H,N;return[$t(!1,"v-snackbar"),e.timer&&!v.value&&s("div",{key:"timer",class:"v-snackbar__timer"},[s(Mt,{ref:w,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":f.time.value},null)]),T&&s("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((H=t.text)==null?void 0:H.call(t))??e.text,(N=t.default)==null?void 0:N.call(t)]),t.actions&&s(ee,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[s("div",{class:"v-snackbar__actions"},[t.actions({isActive:i})])]})]},activator:t.activator})}),Lt({},k)}}),va={class:"ms-6 mt-7"},da={class:"box-link"},ma={class:"copy-link"},fa={class:"box-link"},ga={class:"copy-link"},ha={__name:"Navbar",setup(e){const o=mt();document.title="Hoome";const t=ft();gt();const i=$(t.getRoutes().filter(v=>v.meta&&v.meta.show)),a=$(!1),l=Ye(),n=$(localStorage.defaultTheme?JSON.parse(localStorage.defaultTheme):!1);$(!0);const u=$(!1),g=$("");function p(v){navigator.clipboard.writeText(v).then(()=>{g.value="تم نسخ الرابط إلى الحافظة!",u.value=!0}).catch(c=>{console.error("حدث خطأ أثناء نسخ الرابط:",c)})}function d(){return window.location.hostname}function f(){return window.location.origin}oe(()=>{});function k(){n.value?(o.global.name.value="dark",localStorage.setItem("defaultTheme",!0)):(o.global.name.value="light",localStorage.setItem("defaultTheme",!1))}function w(){l.loadengApi=!0,wt.post("logout").then(v=>{l.loadengApi=!1,localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload(!0),l.setAuthHeaderNew(localStorage.token),l.isAuth=!1}).catch(v=>{l.loadengApi=!1})}return(v,c)=>{const I=We("router-link");return Q(),Ee(ve,null,[s(ca,{modelValue:E(u),"onUpdate:modelValue":c[0]||(c[0]=x=>Se(u)?u.value=x:null),location:"top center",color:"primary",timeout:"1500"},{default:M(()=>[pe(ht(E(g)),1)]),_:1},8,["modelValue"]),s(Jt,{color:"info",prominent:""},{default:M(()=>[s(I,{to:"/admin"},{default:M(()=>[s(G,{color:"#fff",icon:"mdi-home",size:"35"})]),_:1}),K("div",va,[s(I,{to:"/admin/contact"},{default:M(()=>[s(G,{color:"#f0f000",icon:"mdi-message-reply-text-outline",size:"20"})]),_:1})]),s(Xt),s(zt,{class:"pe-5","append-icon":"mdi-theme-light-dark",onChange:k,modelValue:E(n),"onUpdate:modelValue":c[1]||(c[1]=x=>Se(n)?n.value=x:null),color:"#000","hide-details":""},null,8,["modelValue"]),s(G,{onClick:c[2]||(c[2]=yt(x=>a.value=!E(a),["stop"])),icon:E(a)?"mdi-close":"mdi-menu",size:"35"},null,8,["icon"])]),_:1}),s(ia,{modelValue:E(a),"onUpdate:modelValue":c[5]||(c[5]=x=>Se(a)?a.value=x:null),location:"right",temporary:""},{default:M(()=>[s(Ot,{style:{"text-align":"right"}},{default:M(()=>[s(J,{class:"elevation-2 my-1",to:"/admin/user","append-avatar":E(l).user.profile_image,subtitle:E(l).user.email,title:E(l).user.username},null,8,["append-avatar","subtitle","title"]),K("div",da,[K("div",ma,[s(He,{icon:"",onClick:c[3]||(c[3]=x=>p(`${d()}/ar/${E(l).user.username}`))},{default:M(()=>[s(G,null,{default:M(()=>[pe("mdi-content-copy")]),_:1})]),_:1})]),s(J,{class:"elevation-2 my-1",href:`${f()}/ar/${E(l).user.username}`,target:"_blank","append-icon":"mdi-web",subtitle:`${d()}/ar/${E(l).user.username}`,title:"النسخة العربية"},null,8,["href","subtitle"])]),K("div",fa,[K("div",ga,[s(He,{icon:"",onClick:c[4]||(c[4]=x=>p(`${d()}/ar/${E(l).user.username}`))},{default:M(()=>[s(G,null,{default:M(()=>[pe("mdi-content-copy")]),_:1})]),_:1})]),s(J,{class:"elevation-2 my-1",href:`${f()}/en/${E(l).user.username}`,target:"_blank","append-icon":"mdi-web",subtitle:`${d()}/en/${E(l).user.username}`,title:"النسخة الانجليزية"},null,8,["href","subtitle"])]),(Q(!0),Ee(ve,null,bt(E(i),x=>(Q(),ke(J,{cols:"6",key:x,class:"elevation-2 my-1",to:x.path,"append-icon":x.meta.icon,subtitle:x.meta.description,title:x.meta.title},null,8,["to","append-icon","subtitle","title"]))),128)),s(J,{class:"elevation-2 my-1",onClick:w,"append-icon":"mdi-logout",title:"خروج"})]),_:1})]),_:1},8,["modelValue"])],64)}}},ya=A({...se(),...Yt({fullHeight:!0}),...fe()},"VApp"),ba=Y()({name:"VApp",props:ya(),setup(e,o){let{slots:t}=o;const i=ge(e),{layoutClasses:a,getLayoutItem:l,items:n,layoutRef:u}=Ut(e),{rtlClasses:g}=xe();return W(()=>s("div",{ref:u,class:["v-application",i.themeClasses.value,a.value,g.value,e.class],style:[e.style]},[s("div",{class:"v-application__wrap"},[s(pt,null,{default:()=>{var p;return[s(ve,null,[(p=t.default)==null?void 0:p.call(t)])]}})])])),{getLayoutItem:l,items:n,theme:i}}}),wa=A({scrollable:Boolean,...se(),...Nt(),...he({tag:"main"})},"VMain"),pa=Y()({name:"VMain",props:wa(),setup(e,o){let{slots:t}=o;const{dimensionStyles:i}=At(e),{mainStyles:a,layoutIsReady:l}=Je(),{ssrBootStyles:n}=Pe();return W(()=>s(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[a.value,n.value,i.value,e.style]},{default:()=>{var u,g;return[e.scrollable?s("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(g=t.default)==null?void 0:g.call(t)]}})),l}}),Ea={__name:"default",setup(e){const o=Ye();return(t,i)=>{const a=ha,l=We("router-view");return Q(),ke(ba,null,{default:M(()=>[E(o).isAuth?(Q(),ke(a,{key:0})):St("",!0),s(pa,null,{default:M(()=>[s(l)]),_:1})]),_:1})}}};export{Ea as default};
