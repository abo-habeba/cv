import{p as A,i as me,n as oe,c as h,r as L,a as K,e as Ee,b as D,g as ze,d as De,f as lt,h as nt,s as H,o as ot,j as st,k as fe,l as Y,m as o,q as ge,t as le,u as he,v as Te,w as Oe,x as it,y as M,z as se,A as _e,B as q,C as Ie,D as Z,E as ut,F as Ye,G as rt,H as ct,T as vt,I as de,J as dt,K as mt,L as ft,M as gt,N as ht,O as We,P as Ue,Q as te,R as Re,S as B,U as G,V as Se,W as R,X as ke,Y as J,Z as yt,_ as bt,$ as Ve,a0 as pt,a1 as wt,a2 as St}from"./index-BncGg9FV.js";import{m as kt,u as Xe,a as Vt,b as xt,V as He}from"./VSelectionControl-BlNThGpR.js";import{f as Tt}from"./VLabel-Bec2Bxp_.js";import{u as _t,c as It,m as ie,a as ye,b as W,d as Fe,e as qe,f as Ce,g as xe,h as Ze,i as je,j as Pe,V as Ke,k as ae,l as Ct,t as Pt,n as Bt,o as Et,p as Rt,q as Ht,r as $t,s as Lt,v as Mt,w as Q,x as $e,y as Nt,z as At}from"./VGrid-nb7C4rp2.js";import{V as zt}from"./VSwitch-BhDfgU8R.js";import{V as Dt}from"./VInput-D67ZAAbO.js";import{u as Be}from"./ssrBoot-C0Ke4U1Y.js";import{V as Ot,a as Yt}from"./VList-B7xTJvoG.js";import{V as ee,a as Wt,b as Ut}from"./VListItem-dYOWXcBs.js";import"./VDivider-yqs-gyi5.js";const ne=Symbol.for("vuetify:layout"),Ge=Symbol.for("vuetify:layout-item"),Le=1e3,Xt=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Je=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Qe(){const e=me(ne);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:oe(),getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function et(e){const s=me(ne);if(!s)throw new Error("[Vuetify] Could not find injected layout");const t=e.id??`layout-item-${nt()}`,i=ze("useLayoutItem");De(Ge,{id:t});const a=H(!1);ot(()=>a.value=!0),st(()=>a.value=!1);const l=oe(),{layoutItemStyles:n,layoutItemScrimStyles:u}=s.register(i,{...e,active:h(()=>a.value?!1:e.active.value),id:t});return fe(()=>s.unregister(t)),{layoutItemStyles:n,layoutRect:s.layoutRect,layoutItemScrimStyles:u,layoutIsReady:l}}const Ft=(e,s,t,i)=>{let a={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...a}}];for(const n of e){const u=s.get(n),g=t.get(n),w=i.get(n);if(!u||!g||!w)continue;const d={...a,[u.value]:parseInt(a[u.value],10)+(w.value?parseInt(g.value,10):0)};l.push({id:n,layer:d}),a=d}return l};function qt(e){const s=me(ne,null),t=h(()=>s?s.rootZIndex.value-100:Le),i=L([]),a=K(new Map),l=K(new Map),n=K(new Map),u=K(new Map),g=K(new Map),{resizeRef:w,contentRect:d}=_t(),f=Ee(()=>{const _=[...new Set([...n.values()].map(r=>r.value))].sort((r,V)=>r-V),m=[];for(const r of _){const V=i.value.filter(b=>{var y;return((y=n.get(b))==null?void 0:y.value)===r});m.push(...V)}return Ft(m,a,l,u)}),k=h(()=>!Array.from(g.values()).some(_=>_.value)),p=h(()=>f.value[f.value.length-1].layer),v=h(()=>({"--v-layout-left":D(p.value.left),"--v-layout-right":D(p.value.right),"--v-layout-top":D(p.value.top),"--v-layout-bottom":D(p.value.bottom),...k.value?void 0:{transition:"none"}})),c=Ee(()=>f.value.slice(1).map((_,m)=>{let{id:r}=_;const{layer:V}=f.value[m],b=l.get(r),y=a.get(r);return{id:r,...V,size:Number(b.value),position:y.value}})),I=_=>c.value.find(m=>m.id===_),x=ze("createLayout"),C=oe();De(ne,{register:(_,m)=>{let{id:r,order:V,position:b,layoutSize:y,elementSize:T,active:$,disableTransitions:N,absolute:be}=m;n.set(r,V),a.set(r,b),l.set(r,y),u.set(r,$),N&&g.set(r,N);const ue=lt(Ge,x==null?void 0:x.vnode).indexOf(_);ue>-1?i.value.splice(ue,0,r):i.value.push(r);const j=h(()=>c.value.findIndex(O=>O.id===r)),U=h(()=>t.value+f.value.length*2-j.value*2),we=h(()=>{const O=b.value==="left"||b.value==="right",P=b.value==="right",ce=b.value==="bottom",X=T.value??y.value,ve=X===0?"%":"px",at={[b.value]:0,zIndex:U.value,transform:`translate${O?"X":"Y"}(${($.value?0:-(X===0?100:X))*(P||ce?-1:1)}${ve})`,position:be.value||t.value!==Le?"absolute":"fixed",...k.value?void 0:{transition:"none"}};if(j.value<0)throw new Error(`Layout item "${r}" is missing`);const z=c.value[j.value];if(!z)throw new Error(`[Vuetify] Could not find layout item "${r}"`);return{...at,height:O?`calc(100% - ${z.top}px - ${z.bottom}px)`:T.value?`${T.value}px`:void 0,left:P?void 0:`${z.left}px`,right:P?`${z.right}px`:void 0,top:b.value!=="bottom"?`${z.top}px`:void 0,bottom:b.value!=="top"?`${z.bottom}px`:void 0,width:O?T.value?`${T.value}px`:void 0:`calc(100% - ${z.left}px - ${z.right}px)`}}),re=h(()=>({zIndex:U.value-1}));return{layoutItemStyles:we,layoutItemScrimStyles:re,zIndex:U}},unregister:_=>{n.delete(_),a.delete(_),l.delete(_),u.delete(_),g.delete(_),i.value=i.value.filter(m=>m!==_)},mainRect:p,mainStyles:v,getLayoutItem:I,items:c,layoutRect:d,rootZIndex:t,layoutIsReady:C});const S=h(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),E=h(()=>({zIndex:s?t.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:S,layoutStyles:E,getLayoutItem:I,items:c,layoutRect:d,layoutIsReady:C,layoutRef:w}}const Zt=It("v-spacer","div","VSpacer"),jt=A({text:String,...ie(),...ye()},"VToolbarTitle"),Kt=Y()({name:"VToolbarTitle",props:jt(),setup(e,s){let{slots:t}=s;return W(()=>{const i=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[i&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),Gt=[null,"prominent","default","comfortable","compact"],tt=A({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Gt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Fe(),...ie(),...qe(),...Ce(),...ye({tag:"header"}),...ge()},"VToolbar"),Me=Y()({name:"VToolbar",props:tt(),setup(e,s){var p;let{slots:t}=s;const{backgroundColorClasses:i,backgroundColorStyles:a}=xe(le(e,"color")),{borderClasses:l}=Ze(e),{elevationClasses:n}=je(e),{roundedClasses:u}=Pe(e),{themeClasses:g}=he(e),{rtlClasses:w}=Te(),d=H(!!(e.extended||(p=t.extension)!=null&&p.call(t))),f=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),k=h(()=>d.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Oe({VBtn:{variant:"text"}}),W(()=>{var x;const v=!!(e.title||t.title),c=!!(t.image||e.image),I=(x=t.extension)==null?void 0:x.call(t);return d.value=!!(e.extended||I),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},i.value,l.value,n.value,u.value,g.value,w.value,e.class],style:[a.value,e.style]},{default:()=>[c&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(Ke,{key:"image-img",cover:!0,src:e.image},null)]),o(ae,{defaults:{VTabs:{height:D(f.value)}}},{default:()=>{var C,S,E;return[o("div",{class:"v-toolbar__content",style:{height:D(f.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(C=t.prepend)==null?void 0:C.call(t)]),v&&o(Kt,{key:"title",text:e.title},{text:t.title}),(S=t.default)==null?void 0:S.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),o(ae,{defaults:{VTabs:{height:D(k.value)}}},{default:()=>[o(Dt,null,{default:()=>[d.value&&o("div",{class:"v-toolbar__extension",style:{height:D(k.value)}},[I])]})]})]})}),{contentHeight:f,extensionHeight:k}}}),Jt=A({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Qt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let i=0,a=0;const l=L(null),n=H(0),u=H(0),g=H(0),w=H(!1),d=H(!1),f=h(()=>Number(e.scrollThreshold)),k=h(()=>it((f.value-n.value)/f.value||0)),p=()=>{const v=l.value;if(!v||t&&!t.value)return;i=n.value,n.value="window"in v?v.pageYOffset:v.scrollTop;const c=v instanceof Window?document.documentElement.scrollHeight:v.scrollHeight;if(a!==c){a=c;return}d.value=n.value<i,g.value=Math.abs(n.value-f.value)};return M(d,()=>{u.value=u.value||n.value}),M(w,()=>{u.value=0}),se(()=>{M(()=>e.scrollTarget,v=>{var I;const c=v?document.querySelector(v):window;c&&c!==l.value&&((I=l.value)==null||I.removeEventListener("scroll",p),l.value=c,l.value.addEventListener("scroll",p,{passive:!0}))},{immediate:!0})}),fe(()=>{var v;(v=l.value)==null||v.removeEventListener("scroll",p)}),t&&M(t,p,{immediate:!0}),{scrollThreshold:f,currentScroll:n,currentThreshold:g,isScrollActive:w,scrollRatio:k,isScrollingUp:d,savedScroll:u}}const ea=A({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...tt(),...Je(),...Jt(),height:{type:[Number,String],default:64}},"VAppBar"),ta=Y()({name:"VAppBar",props:ea(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const i=L(),a=_e(e,"modelValue"),l=h(()=>{var E;const S=new Set(((E=e.scrollBehavior)==null?void 0:E.split(" "))??[]);return{hide:S.has("hide"),fullyHide:S.has("fully-hide"),inverted:S.has("inverted"),collapse:S.has("collapse"),elevate:S.has("elevate"),fadeImage:S.has("fade-image")}}),n=h(()=>{const S=l.value;return S.hide||S.fullyHide||S.inverted||S.collapse||S.elevate||S.fadeImage||!a.value}),{currentScroll:u,scrollThreshold:g,isScrollingUp:w,scrollRatio:d}=Qt(e,{canScroll:n}),f=h(()=>l.value.hide||l.value.fullyHide),k=h(()=>e.collapse||l.value.collapse&&(l.value.inverted?d.value>0:d.value===0)),p=h(()=>e.flat||l.value.fullyHide&&!a.value||l.value.elevate&&(l.value.inverted?u.value>0:u.value===0)),v=h(()=>l.value.fadeImage?l.value.inverted?1-d.value:d.value:void 0),c=h(()=>{var _,m;const S=Number(((_=i.value)==null?void 0:_.contentHeight)??e.height),E=Number(((m=i.value)==null?void 0:m.extensionHeight)??0);return f.value?u.value<g.value||l.value.fullyHide?S+E:S:S+E});q(h(()=>!!e.scrollBehavior),()=>{Ie(()=>{f.value?l.value.inverted?a.value=u.value>g.value:a.value=w.value||u.value<g.value:a.value=!0})});const{ssrBootStyles:I}=Be(),{layoutItemStyles:x,layoutIsReady:C}=et({id:e.name,order:h(()=>parseInt(e.order,10)),position:le(e,"location"),layoutSize:c,elementSize:H(void 0),active:a,absolute:le(e,"absolute")});return W(()=>{const S=Me.filterProps(e);return o(Me,Z({ref:i,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...x.value,"--v-toolbar-image-opacity":v.value,height:void 0,...I.value},e.style]},S,{collapse:k.value,flat:p.value}),t)}),C}});function aa(e){let{rootEl:s,isSticky:t,layoutItemStyles:i}=e;const a=H(!1),l=H(0),n=h(()=>{const w=typeof a.value=="boolean"?"top":a.value;return[t.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[w]:D(l.value)}:{top:i.value.top}]});se(()=>{M(t,w=>{w?window.addEventListener("scroll",g,{passive:!0}):window.removeEventListener("scroll",g)},{immediate:!0})}),fe(()=>{window.removeEventListener("scroll",g)});let u=0;function g(){const w=u>window.scrollY?"up":"down",d=s.value.getBoundingClientRect(),f=parseFloat(i.value.top??0),k=window.scrollY-Math.max(0,l.value-f),p=d.height+Math.max(l.value,f)-window.scrollY-window.innerHeight,v=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;d.height<window.innerHeight-f?(a.value="top",l.value=f):w==="up"&&a.value==="bottom"||w==="down"&&a.value==="top"?(l.value=window.scrollY+d.top-v,a.value=!0):w==="down"&&p<=0?(l.value=0,a.value="bottom"):w==="up"&&k<=0&&(v?a.value!=="top"&&(l.value=-k+v+f,a.value="top"):(l.value=d.top+k,a.value="top")),u=window.scrollY}return{isStuck:a,stickyStyles:n}}const la=100,na=20;function Ne(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ae(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let t=e.length-1;t>0;t--){if(e[t].t===e[t-1].t)continue;const i=Ne(s),a=(e[t].d-e[t-1].d)/(e[t].t-e[t-1].t);s+=(a-i)*Math.abs(a),t===e.length-1&&(s*=.5)}return Ne(s)*1e3}function oa(){const e={};function s(a){Array.from(a.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new ut(na))).push([a.timeStamp,l])})}function t(a){Array.from(a.changedTouches).forEach(l=>{delete e[l.identifier]})}function i(a){var w;const l=(w=e[a])==null?void 0:w.values().reverse();if(!l)throw new Error(`No samples for touch id ${a}`);const n=l[0],u=[],g=[];for(const d of l){if(n[0]-d[0]>la)break;u.push({t:d[0],d:d[1].clientX}),g.push({t:d[0],d:d[1].clientY})}return{x:Ae(u),y:Ae(g),get direction(){const{x:d,y:f}=this,[k,p]=[Math.abs(d),Math.abs(f)];return k>p&&d>=0?"right":k>p&&d<=0?"left":p>k&&f>=0?"down":p>k&&f<=0?"up":sa()}}}return{addMovement:s,endTouch:t,getVelocity:i}}function sa(){throw new Error}function ia(e){let{el:s,isActive:t,isTemporary:i,width:a,touchless:l,position:n}=e;se(()=>{window.addEventListener("touchstart",C,{passive:!0}),window.addEventListener("touchmove",S,{passive:!1}),window.addEventListener("touchend",E,{passive:!0})}),fe(()=>{window.removeEventListener("touchstart",C),window.removeEventListener("touchmove",S),window.removeEventListener("touchend",E)});const u=h(()=>["left","right"].includes(n.value)),{addMovement:g,endTouch:w,getVelocity:d}=oa();let f=!1;const k=H(!1),p=H(0),v=H(0);let c;function I(m,r){return(n.value==="left"?m:n.value==="right"?document.documentElement.clientWidth-m:n.value==="top"?m:n.value==="bottom"?document.documentElement.clientHeight-m:F())-(r?a.value:0)}function x(m){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const V=n.value==="left"?(m-v.value)/a.value:n.value==="right"?(document.documentElement.clientWidth-m-v.value)/a.value:n.value==="top"?(m-v.value)/a.value:n.value==="bottom"?(document.documentElement.clientHeight-m-v.value)/a.value:F();return r?Math.max(0,Math.min(1,V)):V}function C(m){if(l.value)return;const r=m.changedTouches[0].clientX,V=m.changedTouches[0].clientY,b=25,y=n.value==="left"?r<b:n.value==="right"?r>document.documentElement.clientWidth-b:n.value==="top"?V<b:n.value==="bottom"?V>document.documentElement.clientHeight-b:F(),T=t.value&&(n.value==="left"?r<a.value:n.value==="right"?r>document.documentElement.clientWidth-a.value:n.value==="top"?V<a.value:n.value==="bottom"?V>document.documentElement.clientHeight-a.value:F());(y||T||t.value&&i.value)&&(c=[r,V],v.value=I(u.value?r:V,t.value),p.value=x(u.value?r:V),f=v.value>-20&&v.value<80,w(m),g(m))}function S(m){const r=m.changedTouches[0].clientX,V=m.changedTouches[0].clientY;if(f){if(!m.cancelable){f=!1;return}const y=Math.abs(r-c[0]),T=Math.abs(V-c[1]);(u.value?y>T&&y>3:T>y&&T>3)?(k.value=!0,f=!1):(u.value?T:y)>3&&(f=!1)}if(!k.value)return;m.preventDefault(),g(m);const b=x(u.value?r:V,!1);p.value=Math.max(0,Math.min(1,b)),b>1?v.value=I(u.value?r:V,!0):b<0&&(v.value=I(u.value?r:V,!1))}function E(m){if(f=!1,!k.value)return;g(m),k.value=!1;const r=d(m.changedTouches[0].identifier),V=Math.abs(r.x),b=Math.abs(r.y);(u.value?V>b&&V>400:b>V&&b>3)?t.value=r.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.value]||F()):t.value=p.value>.5}const _=h(()=>k.value?{transform:n.value==="left"?`translateX(calc(-100% + ${p.value*a.value}px))`:n.value==="right"?`translateX(calc(100% - ${p.value*a.value}px))`:n.value==="top"?`translateY(calc(-100% + ${p.value*a.value}px))`:n.value==="bottom"?`translateY(calc(100% - ${p.value*a.value}px))`:F(),transition:"none"}:void 0);return q(k,()=>{var V,b;const m=((V=s.value)==null?void 0:V.style.transform)??null,r=((b=s.value)==null?void 0:b.style.transition)??null;Ie(()=>{var y,T,$,N;(T=s.value)==null||T.style.setProperty("transform",((y=_.value)==null?void 0:y.transform)||"none"),(N=s.value)==null||N.style.setProperty("transition",(($=_.value)==null?void 0:$.transition)||null)}),Ye(()=>{var y,T;(y=s.value)==null||y.style.setProperty("transform",m),(T=s.value)==null||T.style.setProperty("transition",r)})}),{isDragging:k,dragProgress:p,dragStyles:_}}function F(){throw new Error}const ua=["start","end","left","right","top","bottom"],ra=A({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ua.includes(e)},sticky:Boolean,...Fe(),...ie(),...kt(),...rt({mobile:null}),...qe(),...Je(),...Ce(),...ye({tag:"nav"}),...ge()},"VNavigationDrawer"),ca=Y()({name:"VNavigationDrawer",props:ra(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:t,emit:i,slots:a}=s;const{isRtl:l}=Te(),{themeClasses:n}=he(e),{borderClasses:u}=Ze(e),{backgroundColorClasses:g,backgroundColorStyles:w}=xe(le(e,"color")),{elevationClasses:d}=je(e),{displayClasses:f,mobile:k}=ct(e),{roundedClasses:p}=Pe(e),v=Ct(),c=_e(e,"modelValue",null,P=>!!P),{ssrBootStyles:I}=Be(),{scopeId:x}=Xe(),C=L(),S=H(!1),{runOpenDelay:E,runCloseDelay:_}=Vt(e,P=>{S.value=P}),m=h(()=>e.rail&&e.expandOnHover&&S.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),r=h(()=>Pt(e.location,l.value)),V=h(()=>e.persistent),b=h(()=>!e.permanent&&(k.value||e.temporary)),y=h(()=>e.sticky&&!b.value&&r.value!=="bottom");q(()=>e.expandOnHover&&e.rail!=null,()=>{M(S,P=>i("update:rail",!P))}),q(()=>!e.disableResizeWatcher,()=>{M(b,P=>!e.permanent&&oe(()=>c.value=!P))}),q(()=>!e.disableRouteWatcher&&!!v,()=>{M(v.currentRoute,()=>b.value&&(c.value=!1))}),M(()=>e.permanent,P=>{P&&(c.value=!0)}),e.modelValue==null&&!b.value&&(c.value=e.permanent||!k.value);const{isDragging:T,dragProgress:$}=ia({el:C,isActive:c,isTemporary:b,width:m,touchless:le(e,"touchless"),position:r}),N=h(()=>{const P=b.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):m.value;return T.value?P*$.value:P}),be=h(()=>["top","bottom"].includes(e.location)?0:m.value),{layoutItemStyles:pe,layoutItemScrimStyles:ue,layoutIsReady:j}=et({id:e.name,order:h(()=>parseInt(e.order,10)),position:r,layoutSize:N,elementSize:be,active:h(()=>c.value||T.value),disableTransitions:h(()=>T.value),absolute:h(()=>e.absolute||y.value&&typeof U.value!="string")}),{isStuck:U,stickyStyles:we}=aa({rootEl:C,isSticky:y,layoutItemStyles:pe}),re=xe(h(()=>typeof e.scrim=="string"?e.scrim:null)),O=h(()=>({...T.value?{opacity:$.value*.2,transition:"none"}:void 0,...ue.value}));return Oe({VList:{bgColor:"transparent"}}),W(()=>{const P=a.image||e.image;return o(de,null,[o(e.tag,Z({ref:C,onMouseenter:E,onMouseleave:_,class:["v-navigation-drawer",`v-navigation-drawer--${r.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":S.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":b.value,"v-navigation-drawer--persistent":V.value,"v-navigation-drawer--active":c.value,"v-navigation-drawer--sticky":y.value},n.value,g.value,u.value,f.value,d.value,p.value,e.class],style:[w.value,pe.value,I.value,we.value,e.style,["top","bottom"].includes(r.value)?{height:"auto"}:{}]},x,t),{default:()=>{var ce,X,ve;return[P&&o("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?o(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},a.image):o(Ke,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),a.prepend&&o("div",{class:"v-navigation-drawer__prepend"},[(ce=a.prepend)==null?void 0:ce.call(a)]),o("div",{class:"v-navigation-drawer__content"},[(X=a.default)==null?void 0:X.call(a)]),a.append&&o("div",{class:"v-navigation-drawer__append"},[(ve=a.append)==null?void 0:ve.call(a)])]}}),o(vt,{name:"fade-transition"},{default:()=>[b.value&&(T.value||c.value)&&!!e.scrim&&o("div",Z({class:["v-navigation-drawer__scrim",re.backgroundColorClasses.value],style:[O.value,re.backgroundColorStyles.value],onClick:()=>{V.value||(c.value=!1)}},x),null)]})])}),j.then(()=>({isStuck:U}))}});function va(e){const s=H(e);let t=-1;function i(){clearInterval(t)}function a(){i(),oe(()=>s.value=e)}function l(n){const u=n?getComputedStyle(n):{transitionDuration:.2},g=parseFloat(u.transitionDuration)*1e3||200;if(i(),s.value<=0)return;const w=performance.now();t=window.setInterval(()=>{const d=performance.now()-w+g;s.value=Math.max(e-d,0),s.value<=0&&i()},g)}return Ye(i),{clear:i,time:s,start:l,reset:a}}const da=A({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Bt({location:"bottom"}),...Et(),...Ce(),...Rt(),...ge(),...dt(xt({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),ma=Y()({name:"VSnackbar",props:da(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const i=_e(e,"modelValue"),{positionClasses:a}=Ht(e),{scopeId:l}=Xe(),{themeClasses:n}=he(e),{colorClasses:u,colorStyles:g,variantClasses:w}=$t(e),{roundedClasses:d}=Pe(e),f=va(Number(e.timeout)),k=L(),p=L(),v=H(!1),c=H(0),I=L(),x=me(ne,void 0);q(()=>!!x,()=>{const y=Qe();Ie(()=>{I.value=y.mainStyles.value})}),M(i,S),M(()=>e.timeout,S),se(()=>{i.value&&S()});let C=-1;function S(){f.reset(),window.clearTimeout(C);const y=Number(e.timeout);if(!i.value||y===-1)return;const T=mt(p.value);f.start(T),C=window.setTimeout(()=>{i.value=!1},y)}function E(){f.reset(),window.clearTimeout(C)}function _(){v.value=!0,E()}function m(){v.value=!1,S()}function r(y){c.value=y.touches[0].clientY}function V(y){Math.abs(c.value-y.changedTouches[0].clientY)>50&&(i.value=!1)}const b=h(()=>e.location.split(" ").reduce((y,T)=>(y[`v-snackbar--${T}`]=!0,y),{}));return W(()=>{const y=He.filterProps(e),T=!!(t.default||t.text||e.text);return o(He,Z({ref:k,class:["v-snackbar",{"v-snackbar--active":i.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},b.value,a.value,e.class],style:[I.value,e.style]},y,{modelValue:i.value,"onUpdate:modelValue":$=>i.value=$,contentProps:Z({class:["v-snackbar__wrapper",n.value,u.value,d.value,w.value],style:[g.value],onPointerenter:_,onPointerleave:m},y.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:r,onTouchend:V},l),{default:()=>{var $,N;return[Lt(!1,"v-snackbar"),e.timer&&!v.value&&o("div",{key:"timer",class:"v-snackbar__timer"},[o(Mt,{ref:p,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":f.time.value},null)]),T&&o("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[(($=t.text)==null?void 0:$.call(t))??e.text,(N=t.default)==null?void 0:N.call(t)]),t.actions&&o(ae,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[o("div",{class:"v-snackbar__actions"},[t.actions({isActive:i})])]})]},activator:t.activator})}),Tt({},k)}}),fa={class:"ms-6 mt-7"},ga={class:"box-link"},ha={class:"copy-link"},ya={class:"box-link"},ba={class:"copy-link"},pa={__name:"Navbar",setup(e){const s=ft();document.title="Hoome";const t=gt();ht();const i=L(t.getRoutes().filter(v=>v.meta&&v.meta.show)),a=L(!1),l=We(),n=L(localStorage.defaultTheme?JSON.parse(localStorage.defaultTheme):!1);L(!0);const u=L(!1),g=L("");function w(v){navigator.clipboard.writeText(v).then(()=>{g.value="تم نسخ الرابط إلى الحافظة!",u.value=!0}).catch(c=>{console.error("حدث خطأ أثناء نسخ الرابط:",c)})}function d(){return window.location.hostname}function f(){return window.location.origin}se(()=>{});function k(){n.value?(s.global.name.value="dark",localStorage.setItem("defaultTheme",!0)):(s.global.name.value="light",localStorage.setItem("defaultTheme",!1))}function p(){l.loadengApi=!0,pt.post("logout").then(v=>{l.loadengApi=!1,localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload(!0),l.setAuthHeaderNew(localStorage.token),l.isAuth=!1}).catch(v=>{l.loadengApi=!1})}return(v,c)=>{const I=Ue("router-link");return te(),Re(de,null,[o(ma,{modelValue:R(u),"onUpdate:modelValue":c[0]||(c[0]=x=>ke(u)?u.value=x:null),location:"top center",color:"primary",timeout:"1500"},{default:B(()=>[G(Se(R(g)),1)]),_:1},8,["modelValue"]),o(ta,{color:"info",prominent:""},{default:B(()=>[o(I,{to:"/admin"},{default:B(()=>[o(Q,{color:"#fff",icon:"mdi-home",size:"35"})]),_:1}),J("div",fa,[o(I,{to:"/admin/contact"},{default:B(()=>[o(Q,{color:"#f0f000",icon:"mdi-message-reply-text-outline",size:"20"})]),_:1})]),o(Zt),o(zt,{class:"pe-5","append-icon":"mdi-theme-light-dark",onChange:k,modelValue:R(n),"onUpdate:modelValue":c[1]||(c[1]=x=>ke(n)?n.value=x:null),color:"#000","hide-details":""},null,8,["modelValue"]),o(Q,{onClick:c[2]||(c[2]=yt(x=>a.value=!R(a),["stop"])),icon:R(a)?"mdi-close":"mdi-menu",size:"35"},null,8,["icon"])]),_:1}),o(ca,{modelValue:R(a),"onUpdate:modelValue":c[5]||(c[5]=x=>ke(a)?a.value=x:null),location:"right",temporary:""},{default:B(()=>[o(Ot,{style:{"text-align":"right"}},{default:B(()=>[o(Yt,{justify:"center"},{activator:B(({props:x})=>[o(ee,Z({density:"compact",class:"elevation-2 my-1"},x,{"append-avatar":R(l).user.profile_image}),{default:B(()=>[o(I,{to:"/admin/user"},{default:B(()=>[o(Wt,null,{default:B(()=>[G(Se(R(l).user.username),1)]),_:1}),o(Ut,null,{default:B(()=>[G(Se(R(l).user.email),1)]),_:1})]),_:1})]),_:2},1040,["append-avatar"])]),default:B(()=>[J("div",ga,[J("div",ha,[o($e,{icon:"",onClick:c[3]||(c[3]=x=>w(`${d()}/ar/${R(l).user.username}`))},{default:B(()=>[o(Q,null,{default:B(()=>[G("mdi-content-copy")]),_:1})]),_:1})]),o(ee,{density:"compact",class:"elevation-2 my-1",href:`${f()}/ar/${R(l).user.username}`,target:"_blank","append-icon":"mdi-web",subtitle:`${d()}/ar/${R(l).user.username}`,title:"النسخة العربية"},null,8,["href","subtitle"])]),J("div",ya,[J("div",ba,[o($e,{icon:"",onClick:c[4]||(c[4]=x=>w(`${d()}/ar/${R(l).user.username}`))},{default:B(()=>[o(Q,null,{default:B(()=>[G("mdi-content-copy")]),_:1})]),_:1})]),o(ee,{density:"compact",class:"elevation-2 my-1",href:`${f()}/en/${R(l).user.username}`,target:"_blank","append-icon":"mdi-web",subtitle:`${d()}/en/${R(l).user.username}`,title:"النسخة الانجليزية"},null,8,["href","subtitle"])])]),_:1}),(te(!0),Re(de,null,bt(R(i),x=>(te(),Ve(ee,{density:"compact",cols:"6",key:x,class:"elevation-2 my-1",to:x.path,"append-icon":x.meta.icon,title:x.meta.title},null,8,["to","append-icon","title"]))),128)),o(ee,{density:"compact",class:"elevation-2 my-1",onClick:p,"append-icon":"mdi-logout",title:"خروج"})]),_:1})]),_:1},8,["modelValue"])],64)}}},wa=A({...ie(),...Xt({fullHeight:!0}),...ge()},"VApp"),Sa=Y()({name:"VApp",props:wa(),setup(e,s){let{slots:t}=s;const i=he(e),{layoutClasses:a,getLayoutItem:l,items:n,layoutRef:u}=qt(e),{rtlClasses:g}=Te();return W(()=>o("div",{ref:u,class:["v-application",i.themeClasses.value,a.value,g.value,e.class],style:[e.style]},[o("div",{class:"v-application__wrap"},[o(wt,null,{default:()=>{var w;return[o(de,null,[(w=t.default)==null?void 0:w.call(t)])]}})])])),{getLayoutItem:l,items:n,theme:i}}}),ka=A({scrollable:Boolean,...ie(),...Nt(),...ye({tag:"main"})},"VMain"),Va=Y()({name:"VMain",props:ka(),setup(e,s){let{slots:t}=s;const{dimensionStyles:i}=At(e),{mainStyles:a,layoutIsReady:l}=Qe(),{ssrBootStyles:n}=Be();return W(()=>o(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[a.value,n.value,i.value,e.style]},{default:()=>{var u,g;return[e.scrollable?o("div",{class:"v-main__scroller"},[(u=t.default)==null?void 0:u.call(t)]):(g=t.default)==null?void 0:g.call(t)]}})),l}}),$a={__name:"default",setup(e){const s=We();return(t,i)=>{const a=pa,l=Ue("router-view");return te(),Ve(Sa,null,{default:B(()=>[R(s).isAuth?(te(),Ve(a,{key:0})):St("",!0),o(Va,null,{default:B(()=>[o(l)]),_:1})]),_:1})}}};export{$a as default};
