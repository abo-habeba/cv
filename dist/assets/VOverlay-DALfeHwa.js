import{aQ as Fe,aR as Me,h as Re,v as R,x as I,aS as le,p as q,r as W,ae as $,k as ve,l as L,y as D,aT as Ue,c as k,n as de,b as N,ac as be,w as me,aU as Ne,aV as Ge,g as ye,i as _e,aW as Ee,ah as Qe,s as X,W as Ze,q as Je,a as De,d as Ke,aN as et,aJ as tt,m as nt,u as ot,j as at,A as rt,z as it,an as st,aX as lt,Y as ct,Z as ut,a2 as ft,Q as vt}from"./index-DoUa79Mj.js";import{d as Q,e as dt,s as ce,g as mt,h as He,n as Ve,B as oe,i as xe}from"./forwardRefs-ByVqR1CM.js";import{v as Se,w as ae,x as re,y as pe,z as Oe,d as yt,h as gt,o as ht,f as wt,i as bt,A as Et,b as xt,M as St,B as pt}from"./index-CPodMjtC.js";const J=new WeakMap;function Ot(e,n){Object.keys(n).forEach(t=>{if(Fe(t)){const o=Me(t),a=J.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[s,i]=r;s===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),J.has(e)||J.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function kt(e,n){Object.keys(n).forEach(t=>{if(Fe(t)){const o=Me(t),a=J.get(e);a==null||a.forEach(r=>{const[s,i]=r;s===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(t)})}function Ie(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?At(e):ge(e))return e;e=e.parentElement}return document.scrollingElement}function ee(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ge(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ge(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function At(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Ct(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Tt=q({target:[Object,Array]},"v-dialog-transition"),cn=Re()({name:"VDialogTransition",props:Tt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,r){var w;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),a.style.visibility="";const{x:s,y:i,sx:u,sy:c,speed:f}=Pe(e.target,a),g=Q(a,[{transform:`translate(${s}px, ${i}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:dt});(w=ke(a))==null||w.forEach(m=>{Q(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ce})}),g.finished.then(()=>r())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,r){var w;await new Promise(m=>requestAnimationFrame(m));const{x:s,y:i,sx:u,sy:c,speed:f}=Pe(e.target,a);Q(a,[{},{transform:`translate(${s}px, ${i}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:mt}).finished.then(()=>r()),(w=ke(a))==null||w.forEach(m=>{Q(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?R(le,I({name:"dialog-transition"},o,{css:!1}),t):R(le,{name:"dialog-transition"},t)}});function ke(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Pe(e,n){const t=He(e),o=Ve(n),[a,r]=getComputedStyle(n).transformOrigin.split(" ").map(T=>parseFloat(T)),[s,i]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;s==="left"||i==="left"?u-=t.width/2:(s==="right"||i==="right")&&(u+=t.width/2);let c=t.top+t.height/2;s==="top"||i==="top"?c-=t.height/2:(s==="bottom"||i==="bottom")&&(c+=t.height/2);const f=t.width/o.width,g=t.height/o.height,w=Math.max(1,f,g),m=f/w||0,d=g/w||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),E=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(a+o.left),y:c-(r+o.top),sx:m,sy:d,speed:E}}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Bt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ae(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:r},n)}return ie({x:n.width/2,y:n.height/2},n)}const We={static:Mt,connected:Nt},Lt=q({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in We},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Ft(e,n){const t=W({}),o=W();$&&ve(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var s,i;L(()=>e.locationStrategy,r),D(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(i=We[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function a(r){var s;(s=o.value)==null||s.call(o,r)}return{contentStyles:t,updateLocation:o}}function Mt(){}function Rt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ve(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Nt(e,n,t){(Array.isArray(e.target.value)||Ct(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=Ue(()=>{const d=Se(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?ae(d):Se(n.origin,e.isRtl.value);return d.side===v.side&&d.align===re(v).align?{preferredAnchor:pe(d),preferredOrigin:pe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,i,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>k(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=k(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const w=new ResizeObserver(()=>{g&&m()});L([e.target,e.contentEl],(d,v)=>{let[E,T]=d,[x,S]=v;x&&!Array.isArray(x)&&w.unobserve(x),E&&!Array.isArray(E)&&w.observe(E),S&&w.unobserve(S),T&&w.observe(T)},{immediate:!0}),D(()=>{w.disconnect()});function m(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const d=He(e.target.value),v=Rt(e.contentEl.value,e.isRtl.value),E=ee(e.contentEl.value),T=12;E.length||(E.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const x=E.reduce((O,p)=>{const y=p.getBoundingClientRect(),h=new oe({x:p===document.documentElement?0:y.x,y:p===document.documentElement?0:y.y,width:p.clientWidth,height:p.clientHeight});return O?new oe({x:Math.max(O.left,h.left),y:Math.max(O.top,h.top),width:Math.min(O.right,h.right)-Math.max(O.left,h.left),height:Math.min(O.bottom,h.bottom)-Math.max(O.top,h.top)}):h},void 0);x.x+=T,x.y+=T,x.width-=T*2,x.height-=T*2;let S={anchor:a.value,origin:r.value};function H(O){const p=new oe(v),y=Ae(O.anchor,d),h=Ae(O.origin,p);let{x:P,y:M}=Bt(y,h);switch(O.anchor.side){case"top":M-=f.value[0];break;case"bottom":M+=f.value[0];break;case"left":P-=f.value[0];break;case"right":P+=f.value[0];break}switch(O.anchor.align){case"top":M-=f.value[1];break;case"bottom":M+=f.value[1];break;case"left":P-=f.value[1];break;case"right":P+=f.value[1];break}return p.x+=P,p.y+=M,p.width=Math.min(p.width,u.value),p.height=Math.min(p.height,c.value),{overflows:xe(p,x),x:P,y:M}}let F=0,A=0;const l={x:0,y:0},B={x:!1,y:!1};let U=-1;for(;!(U++>10);){const{x:O,y:p,overflows:y}=H(S);F+=O,A+=p,v.x+=O,v.y+=p;{const h=Oe(S.anchor),P=y.x.before||y.x.after,M=y.y.before||y.y.after;let z=!1;if(["x","y"].forEach(C=>{if(C==="x"&&P&&!B.x||C==="y"&&M&&!B.y){const V={anchor:{...S.anchor},origin:{...S.origin}},j=C==="x"?h==="y"?re:ae:h==="y"?ae:re;V.anchor=j(V.anchor),V.origin=j(V.origin);const{overflows:Y}=H(V);(Y[C].before<=y[C].before&&Y[C].after<=y[C].after||Y[C].before+Y[C].after<(y[C].before+y[C].after)/2)&&(S=V,z=B[C]=!0)}}),z)continue}y.x.before&&(F+=y.x.before,v.x+=y.x.before),y.x.after&&(F-=y.x.after,v.x-=y.x.after),y.y.before&&(A+=y.y.before,v.y+=y.y.before),y.y.after&&(A-=y.y.after,v.y-=y.y.after);{const h=xe(v,x);l.x=x.width-h.x.before-h.x.after,l.y=x.height-h.y.before-h.y.after,F+=h.x.before,v.x+=h.x.before,A+=h.y.before,v.y+=h.y.before}break}const ne=Oe(S.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${S.anchor.side} ${S.anchor.align}`,transformOrigin:`${S.origin.side} ${S.origin.align}`,top:N(se(A)),left:e.isRtl.value?void 0:N(se(F)),right:e.isRtl.value?N(se(-F)):void 0,minWidth:N(ne==="y"?Math.min(s.value,d.width):s.value),maxWidth:N(Ce(be(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:N(Ce(be(l.y,i.value===1/0?0:i.value,c.value)))}),{available:l,contentBox:v}}return L(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>m()),de(()=>{const d=m();if(!d)return;const{available:v,contentBox:E}=d;E.height>v.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ce(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const te=[];function _t(e){!ue||te.length?(te.push(e),fe()):(ue=!1,e(),fe())}let Te=-1;function fe(){cancelAnimationFrame(Te),Te=requestAnimationFrame(()=>{const e=te.shift();e&&e(),te.length?fe():ue=!0})}const K={none:null,close:Vt,block:It,reposition:Wt},Dt=q({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in K}},"VOverlay-scroll-strategies");function Ht(e,n){if(!$)return;let t;me(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ne(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=K[e.scrollStrategy])==null||o.call(K,n,e,t)}))}),D(()=>{t==null||t.stop()})}function Vt(e){function n(t){e.isActive.value=!1}$e(e.targetEl.value??e.contentEl.value,n)}function It(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...ee(e.targetEl.value,n.contained?t:void 0),...ee(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>ge(i)&&i)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",N(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",N(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",N(a)),i.classList.add("v-overlay-scroll-blocked")}),D(()=>{o.forEach((i,u)=>{const c=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),g=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-c,i.scrollTop=-f,i.style.scrollBehavior=g}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Wt(e,n,t){let o=!1,a=-1,r=-1;function s(i){_t(()=>{var f,g;const u=performance.now();(g=(f=e.updateLocation).value)==null||g.call(f,i),o=(performance.now()-u)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{$e(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(i)})})):s(i)})})}),D(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function $e(e,n){const t=[document,...ee(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),D(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const $t=Symbol.for("vuetify:v-menu"),qt=q({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function zt(e,n){let t=()=>{};function o(s){t==null||t();const i=Number(s?e.openDelay:e.closeDelay);return new Promise(u=>{t=Ge(i,()=>{n==null||n(s),u(s)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:r}}const jt=q({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...qt()},"VOverlay-activator");function Yt(e,n){let{isActive:t,isTop:o}=n;const a=ye("useActivator"),r=W();let s=!1,i=!1,u=!0;const c=k(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=k(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:g,runCloseDelay:w}=zt(e,l=>{l===(e.openOnHover&&s||c.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),m=W(),d={onClick:l=>{l.stopPropagation(),r.value=l.currentTarget||l.target,t.value||(m.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var B;(B=l.sourceCapabilities)!=null&&B.firesTouchEvents||(s=!0,r.value=l.currentTarget||l.target,g())},onMouseleave:l=>{s=!1,w()},onFocus:l=>{Qe(l.target,":focus-visible")!==!1&&(i=!0,l.stopPropagation(),r.value=l.currentTarget||l.target,g())},onBlur:l=>{i=!1,l.stopPropagation(),w()}},v=k(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),c.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),E=k(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,g()},l.onMouseleave=()=>{s=!1,w()}),c.value&&(l.onFocusin=()=>{i=!0,g()},l.onFocusout=()=>{i=!1,w()}),e.closeOnContentClick){const B=_e($t,null);l.onClick=()=>{t.value=!1,B==null||B.closeParents()}}return l}),T=k(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,g())},l.onMouseleave=()=>{s=!1,w()}),l});L(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!i)||c.value&&!i&&(!e.openOnHover||!s))&&(t.value=!1)}),L(t,l=>{l||setTimeout(()=>{m.value=void 0})},{flush:"post"});const x=Ee();me(()=>{x.value&&de(()=>{r.value=x.el})});const S=Ee(),H=k(()=>e.target==="cursor"&&m.value?m.value:S.value?S.el:qe(e.target,a)||r.value),F=k(()=>Array.isArray(H.value)?void 0:H.value);let A;return L(()=>!!e.activator,l=>{l&&$?(A=Ne(),A.run(()=>{Xt(e,a,{activatorEl:r,activatorEvents:v})})):A&&A.stop()},{flush:"post",immediate:!0}),D(()=>{A==null||A.stop()}),{activatorEl:r,activatorRef:x,target:H,targetEl:F,targetRef:S,activatorEvents:v,contentEvents:E,scrimEvents:T}}function Xt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;L(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=i(c);f&&s(f)}u&&de(()=>r())},{immediate:!0}),L(()=>e.activatorProps,()=>{r()}),D(()=>{s()});function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ot(u,I(a.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&kt(u,I(a.value,c))}function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=qe(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function qe(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let r=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Ut(){if(!$)return X(!1);const{ssr:e}=Ze();if(e){const n=X(!1);return Je(()=>{n.value=!0}),n}else return X(!0)}const Gt=q({eager:Boolean},"lazy");function Qt(e,n){const t=X(!1),o=k(()=>t.value||e.eager||n.value);L(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}function Zt(){const n=ye("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Be=Symbol.for("vuetify:stack"),G=De([]);function Jt(e,n,t){const o=ye("useStack"),a=!t,r=_e(Be,void 0),s=De({activeChildren:new Set});Ke(Be,s);const i=X(+n.value);ve(e,()=>{var g;const f=(g=G.at(-1))==null?void 0:g[1];i.value=f?f+10:+n.value,a&&G.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),D(()=>{if(a){const w=tt(G).findIndex(m=>m[0]===o.uid);G.splice(w,1)}r==null||r.activeChildren.delete(o.uid)})});const u=X(!0);a&&me(()=>{var g;const f=((g=G.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>u.value=f)});const c=k(()=>!s.activeChildren.size);return{globalTop:et(u),localTop:c,stackStyles:k(()=>({zIndex:i.value}))}}function Kt(e){return{teleportTarget:k(()=>{const t=e.value;if(t===!0||!$)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function en(){return!0}function ze(e,n,t){if(!e||je(e,t)===!1)return!1;const o=Ie(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function je(e,n){return(typeof n.value=="object"&&n.value.closeConditional||en)(e)}function tn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&ze(e,n,t)&&setTimeout(()=>{je(e,t)&&o&&o(e)},0)}function Le(e,n){const t=Ie(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const nn={mounted(e,n){const t=a=>tn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=ze(a,e,n)};Le(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Le(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function on(e){const{modelValue:n,color:t,...o}=e;return R(le,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&R("div",I({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const an=q({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...jt(),...yt(),...gt(),...Gt(),...Lt(),...Dt(),...nt(),...ht()},"VOverlay"),un=Re()({name:"VOverlay",directives:{ClickOutside:nn},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...an()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=ot(e,"modelValue"),s=k({get:()=>r.value,set:b=>{b&&e.disabled||(r.value=b)}}),{themeClasses:i}=at(e),{rtlClasses:u,isRtl:c}=rt(),{hasContent:f,onAfterLeave:g}=Qt(e,s),w=wt(k(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:m,localTop:d,stackStyles:v}=Jt(s,it(e,"zIndex"),e._disableGlobalStack),{activatorEl:E,activatorRef:T,target:x,targetEl:S,targetRef:H,activatorEvents:F,contentEvents:A,scrimEvents:l}=Yt(e,{isActive:s,isTop:d}),B=k(()=>{var b;return(b=E==null?void 0:E.value)==null?void 0:b.getRootNode()}),{teleportTarget:U}=Kt(k(()=>e.attach||e.contained||B.value instanceof ShadowRoot?B.value:!1)),{dimensionStyles:ne}=bt(e),O=Ut(),{scopeId:p}=Zt();L(()=>e.disabled,b=>{b&&(s.value=!1)});const y=W(),h=W(),P=W(),{contentStyles:M,updateLocation:z}=Ft(e,{isRtl:c,contentEl:P,target:x,isActive:s});Ht(e,{root:y,contentEl:P,targetEl:S,isActive:s,updateLocation:z});function C(b){a("click:outside",b),e.persistent?Z():s.value=!1}function V(b){return s.value&&m.value&&(!e.scrim||b.target===h.value)}$&&L(s,b=>{b?window.addEventListener("keydown",j):window.removeEventListener("keydown",j)},{immediate:!0}),st(()=>{$&&window.removeEventListener("keydown",j)});function j(b){var _,we;b.key==="Escape"&&m.value&&(e.persistent?Z():(s.value=!1,(_=P.value)!=null&&_.contains(document.activeElement)&&((we=E.value)==null||we.focus())))}const Y=Et();ve(()=>e.closeOnBack,()=>{pt(Y,b=>{m.value&&s.value?(b(!1),e.persistent?Z():s.value=!1):b()})});const he=W();L(()=>s.value&&(e.absolute||e.contained)&&U.value==null,b=>{if(b){const _=Pt(y.value);_&&_!==document.scrollingElement&&(he.value=_.scrollTop)}});function Z(){e.noClickAnimation||P.value&&Q(P.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}function Ye(){a("afterEnter")}function Xe(){g(),a("afterLeave")}return xt(()=>{var b;return R(vt,null,[(b=t.activator)==null?void 0:b.call(t,{isActive:s.value,targetRef:H,props:I({ref:T},F.value,e.activatorProps)}),O.value&&f.value&&R(lt,{disabled:!U.value,to:U.value},{default:()=>[R("div",I({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},i.value,u.value,e.class],style:[v.value,{"--v-overlay-opacity":e.opacity,top:N(he.value)},e.style],ref:y},p,o),[R(on,I({color:w,modelValue:s.value&&!!e.scrim,ref:h},l.value),null),R(St,{appear:!0,persisted:!0,transition:e.transition,target:x.value,onAfterEnter:Ye,onAfterLeave:Xe},{default:()=>{var _;return[ct(R("div",I({ref:P,class:["v-overlay__content",e.contentClass],style:[ne.value,M.value]},A.value,e.contentProps),[(_=t.default)==null?void 0:_.call(t,{isActive:s})]),[[ut,s.value],[ft("click-outside"),{handler:C,closeConditional:V,include:()=>[E.value]}]])]}})])]})])}),{activatorEl:E,scrimEl:h,target:x,animateClick:Z,contentEl:P,globalTop:m,localTop:d,updateLocation:z}}});export{un as V,Gt as a,Qt as b,cn as c,$t as d,Pt as g,an as m,Zt as u};
