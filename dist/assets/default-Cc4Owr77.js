import{p as O,i as ce,n as de,c as x,r as N,a as j,e as be,b as H,g as ze,d as Me,f as He,h as U,m as me,o as Ee,u as ie,j as ve,s as X,k as De,w as Oe,l as he,q as fe,t as Ue,v as a,x as K,y as Ge,I as Fe,z as Ye,A as je,F as Z,B as qe,C as we,D as Ke,E as We,G as Xe,H as Ze,J as Ce,K as Ie,L as D,M as oe,N as g,O as ue,P as p,Q as M,R as ke,S as ne,T as pe,U as Je,V as J,W as Qe,X as et,Y as tt}from"./index-BmUWRPF4.js";import{m as at,u as lt,V as Ve}from"./VOverlay-zBIbomp_.js";import{u as ot,m as nt,a as st,b as it,c as ut,d as Te,e as rt,f as ct,g as dt,h as Pe,i as mt,V as vt,j as q,k as ft,l as yt,L as gt,n as bt,o as ht,p as kt,q as pt,r as Vt,s as _t,t as se,v as St,w as xt}from"./VBtn-DUeCz8Eb.js";import{u as F,V as re,m as ee,a as ye,b as wt}from"./VIcon-nVZxIAfi.js";import{V as Ct}from"./VMenu-1qZ8TAru.js";import{V as It,a as G,b as Tt,u as Pt}from"./VList-olNr1QHw.js";import{m as $t,u as Rt,V as _e,a as Bt,b as Lt}from"./VInput-BKGasZBA.js";import{m as At,V as Se}from"./VSelectionControl-DjU89L1r.js";import{V as Nt,a as zt,b as Mt}from"./VChip-J9OWZSLw.js";const Q=Symbol.for("vuetify:layout"),Ht=Symbol.for("vuetify:layout-item"),xe=1e3,Et=O({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function $e(){const e=ce(Q);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:de(),getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const Dt=(e,n,t,l)=>{let s={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...s}}];for(const c of e){const i=n.get(c),d=t.get(c),h=l.get(c);if(!i||!d||!h)continue;const b={...s,[i.value]:parseInt(s[i.value],10)+(h.value?parseInt(d.value,10):0)};o.push({id:c,layer:b}),s=b}return o};function Ot(e){const n=ce(Q,null),t=x(()=>n?n.rootZIndex.value-100:xe),l=N([]),s=j(new Map),o=j(new Map),c=j(new Map),i=j(new Map),d=j(new Map),{resizeRef:h,contentRect:b}=ot(),v=be(()=>{const y=[...new Set([...c.values()].map(f=>f.value))].sort((f,R)=>f-R),I=[];for(const f of y){const R=l.value.filter(V=>{var m;return((m=c.get(V))==null?void 0:m.value)===f});I.push(...R)}return Dt(I,s,o,i)}),T=x(()=>!Array.from(d.values()).some(y=>y.value)),_=x(()=>v.value[v.value.length-1].layer),w=x(()=>({"--v-layout-left":H(_.value.left),"--v-layout-right":H(_.value.right),"--v-layout-top":H(_.value.top),"--v-layout-bottom":H(_.value.bottom),...T.value?void 0:{transition:"none"}})),u=be(()=>v.value.slice(1).map((y,I)=>{let{id:f}=y;const{layer:R}=v.value[I],V=o.get(f),m=s.get(f);return{id:f,...R,size:Number(V.value),position:m.value}})),$=y=>u.value.find(I=>I.id===y),r=ze("createLayout"),k=de();Me(Q,{register:(y,I)=>{let{id:f,order:R,position:V,layoutSize:m,elementSize:S,active:P,disableTransitions:L,absolute:B}=I;c.set(f,R),s.set(f,V),o.set(f,m),i.set(f,P),L&&d.set(f,L);const W=He(Ht,r==null?void 0:r.vnode).indexOf(y);W>-1?l.value.splice(W,0,f):l.value.push(f);const E=x(()=>u.value.findIndex(Y=>Y.id===f)),te=x(()=>t.value+v.value.length*2-E.value*2),Re=x(()=>{const Y=V.value==="left"||V.value==="right",ae=V.value==="right",Le=V.value==="bottom",le=S.value??m.value,Ae=le===0?"%":"px",Ne={[V.value]:0,zIndex:te.value,transform:`translate${Y?"X":"Y"}(${(P.value?0:-(le===0?100:le))*(ae||Le?-1:1)}${Ae})`,position:B.value||t.value!==xe?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(E.value<0)throw new Error(`Layout item "${f}" is missing`);const A=u.value[E.value];if(!A)throw new Error(`[Vuetify] Could not find layout item "${f}"`);return{...Ne,height:Y?`calc(100% - ${A.top}px - ${A.bottom}px)`:S.value?`${S.value}px`:void 0,left:ae?void 0:`${A.left}px`,right:ae?`${A.right}px`:void 0,top:V.value!=="bottom"?`${A.top}px`:void 0,bottom:V.value!=="top"?`${A.bottom}px`:void 0,width:Y?S.value?`${S.value}px`:void 0:`calc(100% - ${A.left}px - ${A.right}px)`}}),Be=x(()=>({zIndex:te.value-1}));return{layoutItemStyles:Re,layoutItemScrimStyles:Be,zIndex:te}},unregister:y=>{c.delete(y),s.delete(y),o.delete(y),i.delete(y),d.delete(y),l.value=l.value.filter(I=>I!==y)},mainRect:_,mainStyles:w,getLayoutItem:$,items:u,layoutRect:b,rootZIndex:t,layoutIsReady:k});const C=x(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),z=x(()=>({zIndex:n?t.value:void 0,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:C,layoutStyles:z,getLayoutItem:$,items:u,layoutRect:b,layoutIsReady:k,layoutRef:h}}const Ut=U()({name:"VSlideGroupItem",props:nt(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const l=st(e,Nt);return()=>{var s;return(s=t.default)==null?void 0:s.call(t,{isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}}});function Gt(e){const n=X(e);let t=-1;function l(){clearInterval(t)}function s(){l(),de(()=>n.value=e)}function o(c){const i=c?getComputedStyle(c):{transitionDuration:.2},d=parseFloat(i.transitionDuration)*1e3||200;if(l(),n.value<=0)return;const h=performance.now();t=window.setInterval(()=>{const b=performance.now()-h+d;n.value=Math.max(e-b,0),n.value<=0&&l()},d)}return Ge(l),{clear:l,time:n,start:o,reset:s}}const Ft=O({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...it({location:"bottom"}),...ut(),...Te(),...rt(),...me(),...Ee(at({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Yt=U()({name:"VSnackbar",props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const l=ie(e,"modelValue"),{positionClasses:s}=ct(e),{scopeId:o}=lt(),{themeClasses:c}=ve(e),{colorClasses:i,colorStyles:d,variantClasses:h}=dt(e),{roundedClasses:b}=Pe(e),v=Gt(Number(e.timeout)),T=N(),_=N(),w=X(!1),u=X(0),$=N(),r=ce(Q,void 0);De(()=>!!r,()=>{const m=$e();Oe(()=>{$.value=m.mainStyles.value})}),he(l,C),he(()=>e.timeout,C),fe(()=>{l.value&&C()});let k=-1;function C(){v.reset(),window.clearTimeout(k);const m=Number(e.timeout);if(!l.value||m===-1)return;const S=Ue(_.value);v.start(S),k=window.setTimeout(()=>{l.value=!1},m)}function z(){v.reset(),window.clearTimeout(k)}function y(){w.value=!0,z()}function I(){w.value=!1,C()}function f(m){u.value=m.touches[0].clientY}function R(m){Math.abs(u.value-m.changedTouches[0].clientY)>50&&(l.value=!1)}const V=x(()=>e.location.split(" ").reduce((m,S)=>(m[`v-snackbar--${S}`]=!0,m),{}));return F(()=>{const m=Ve.filterProps(e),S=!!(t.default||t.text||e.text);return a(Ve,K({ref:T,class:["v-snackbar",{"v-snackbar--active":l.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},V.value,s.value,e.class],style:[$.value,e.style]},m,{modelValue:l.value,"onUpdate:modelValue":P=>l.value=P,contentProps:K({class:["v-snackbar__wrapper",c.value,i.value,b.value,h.value],style:[d.value],onPointerenter:y,onPointerleave:I},m.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:f,onTouchend:R},o),{default:()=>{var P,L;return[mt(!1,"v-snackbar"),e.timer&&!w.value&&a("div",{key:"timer",class:"v-snackbar__timer"},[a(vt,{ref:_,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":v.time.value},null)]),S&&a("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((P=t.text)==null?void 0:P.call(t))??e.text,(L=t.default)==null?void 0:L.call(t)]),t.actions&&a(q,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[t.actions({isActive:l})])]})]},activator:t.activator})}),ft({},T)}}),jt=O({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...$t(),...At()},"VSwitch"),qt=U()({name:"VSwitch",inheritAttrs:!1,props:jt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,n){let{attrs:t,slots:l}=n;const s=ie(e,"indeterminate"),o=ie(e,"modelValue"),{loaderClasses:c}=yt(e),{isFocused:i,focus:d,blur:h}=Rt(e),b=N(),v=Fe&&window.matchMedia("(forced-colors: active)").matches,T=x(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),_=Ye(),w=x(()=>e.id||`switch-${_}`);function u(){s.value&&(s.value=!1)}function $(r){var k,C;r.stopPropagation(),r.preventDefault(),(C=(k=b.value)==null?void 0:k.input)==null||C.click()}return F(()=>{const[r,k]=je(t),C=_e.filterProps(e),z=Se.filterProps(e);return a(_e,K({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":s.value},c.value,e.class]},r,C,{modelValue:o.value,"onUpdate:modelValue":y=>o.value=y,id:w.value,focused:i.value,style:e.style}),{...l,default:y=>{let{id:I,messagesId:f,isDisabled:R,isReadonly:V,isValid:m}=y;const S={model:o,isValid:m};return a(Se,K({ref:b},z,{modelValue:o.value,"onUpdate:modelValue":[P=>o.value=P,u],id:I.value,"aria-describedby":f.value,type:"checkbox","aria-checked":s.value?"mixed":void 0,disabled:R.value,readonly:V.value,onFocus:d,onBlur:h},k),{...l,default:P=>{let{backgroundColorClasses:L,backgroundColorStyles:B}=P;return a("div",{class:["v-switch__track",v?void 0:L.value],style:B.value,onClick:$},[l["track-true"]&&a("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](S)]),l["track-false"]&&a("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](S)])])},input:P=>{let{inputNode:L,icon:B,backgroundColorClasses:ge,backgroundColorStyles:W}=P;return a(Z,null,[L,a("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":B||e.loading},e.inset||v?void 0:ge.value],style:e.inset?void 0:W.value},[l.thumb?a(q,{defaults:{VIcon:{icon:B,size:"x-small"}}},{default:()=>[l.thumb({...S,icon:B})]}):a(Bt,null,{default:()=>[e.loading?a(gt,{name:"v-switch",active:!0,color:m.value===!1?void 0:T.value},{default:E=>l.loader?l.loader(E):a(bt,{active:E.isActive,color:E.color,indeterminate:!0,size:"16",width:"2"},null)}):B&&a(re,{key:String(B),icon:B,size:"x-small"},null)]})])])}})}})}),{}}}),Kt=O({text:String,...ee(),...ye()},"VToolbarTitle"),Wt=U()({name:"VToolbarTitle",props:Kt(),setup(e,n){let{slots:t}=n;return F(()=>{const l=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[l&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),Xt=[null,"prominent","default","comfortable","compact"],Zt=O({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Xt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ht(),...ee(),...kt(),...Te(),...ye({tag:"header"}),...me()},"VToolbar"),Jt=U()({name:"VToolbar",props:Zt(),setup(e,n){var _;let{slots:t}=n;const{backgroundColorClasses:l,backgroundColorStyles:s}=wt(qe(e,"color")),{borderClasses:o}=pt(e),{elevationClasses:c}=Vt(e),{roundedClasses:i}=Pe(e),{themeClasses:d}=ve(e),{rtlClasses:h}=we(),b=X(!!(e.extended||(_=t.extension)!=null&&_.call(t))),v=x(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),T=x(()=>b.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ke({VBtn:{variant:"text"}}),F(()=>{var r;const w=!!(e.title||t.title),u=!!(t.image||e.image),$=(r=t.extension)==null?void 0:r.call(t);return b.value=!!(e.extended||$),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,o.value,c.value,i.value,d.value,h.value,e.class],style:[s.value,e.style]},{default:()=>[u&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(_t,{key:"image-img",cover:!0,src:e.image},null)]),a(q,{defaults:{VTabs:{height:H(v.value)}}},{default:()=>{var k,C,z;return[a("div",{class:"v-toolbar__content",style:{height:H(v.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(k=t.prepend)==null?void 0:k.call(t)]),w&&a(Wt,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(z=t.append)==null?void 0:z.call(t)])])]}}),a(q,{defaults:{VTabs:{height:H(T.value)}}},{default:()=>[a(Lt,null,{default:()=>[b.value&&a("div",{class:"v-toolbar__extension",style:{height:H(T.value)}},[$])]})]})]})}),{contentHeight:v,extensionHeight:T}}}),Qt={class:"navbar"},ea={class:"box-menu"},ta={class:"box-link"},aa={class:"copy-link"},la={class:"box-link"},oa={class:"copy-link"},na={class:"box-route"},sa={__name:"Navbar",setup(e){const n=We();document.title="Hoome";const t=Xe(),l=Ze(),s=t.getRoutes(),o=Ce(),c=N(localStorage.defaultTheme?JSON.parse(localStorage.defaultTheme):!1),i=N(!0),d=N(!1),h=N("");function b(w){navigator.clipboard.writeText(w).then(()=>{h.value="تم نسخ الرابط إلى الحافظة!",d.value=!0}).catch(u=>{console.error("حدث خطأ أثناء نسخ الرابط:",u)})}function v(){return window.location.hostname}fe(()=>{});function T(){c.value?(n.global.name.value="dark",localStorage.setItem("defaultTheme",!0)):(n.global.name.value="light",localStorage.setItem("defaultTheme",!1))}function _(){o.loadengApi=!0,et.post("logout").then(w=>{o.loadengApi=!1,localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload(!0),o.setAuthHeaderNew(localStorage.token),o.isAuth=!1}).catch(w=>{o.loadengApi=!1})}return(w,u)=>{const $=Ie("router-link");return D(),oe(Z,null,[g(i)?ue("",!0):(D(),oe("div",{key:0,onClick:u[0]||(u[0]=r=>i.value=!g(i)),class:"toggleIconmMnu"})),a(Jt,{density:"comfortable",elevation:8},{default:p(()=>[M("div",Qt,[a(Yt,{modelValue:g(d),"onUpdate:modelValue":u[1]||(u[1]=r=>ke(d)?d.value=r:null),location:"top center",color:"primary",timeout:"1000"},{default:p(()=>[ne(pe(g(h)),1)]),_:1},8,["modelValue"]),M("div",ea,[a(Ct,{onClick:u[6]||(u[6]=r=>i.value=!g(i))},{activator:p(({props:r})=>[a(se,K({style:{"z-index":"199"},onClick:u[2]||(u[2]=k=>i.value=!g(i)),icon:g(i)?"mdi-menu":"mdi-close"},r),null,16,["icon"])]),default:p(()=>[a(It,null,{default:p(()=>[a(G,{to:"/admin/user","prepend-avatar":g(o).user.profile_image,subtitle:g(o).user.email,title:g(o).user.username},null,8,["prepend-avatar","subtitle","title"]),M("div",ta,[M("div",aa,[a(se,{icon:"",onClick:u[3]||(u[3]=r=>b(`${v()}/ar/${g(o).user.username}`))},{default:p(()=>[a(re,null,{default:p(()=>[ne("mdi-content-copy")]),_:1})]),_:1})]),a(G,{href:`${v()}/ar/${g(o).user.username}`,target:"_blank","prepend-icon":"mdi-web",subtitle:`${v()}/ar/${g(o).user.username}`,title:"النسخة العربية"},null,8,["href","subtitle"])]),M("div",la,[M("div",oa,[a(se,{icon:"",onClick:u[4]||(u[4]=r=>b(`${v()}/ar/${g(o).user.username}`))},{default:p(()=>[a(re,null,{default:p(()=>[ne("mdi-content-copy")]),_:1})]),_:1})]),a(G,{href:`${v()}/en/${g(o).user.username}`,target:"_blank","prepend-icon":"mdi-web",subtitle:`${v()}/en/${g(o).user.username}`,title:"النسخة الانجليزية"},null,8,["href","subtitle"])]),a(G,{to:"/admin/contact","prepend-icon":"mdi-message-badge-outline",subtitle:"تفقده رسائلك باستمرار ",title:"الرسائل"}),a(G,null,{default:p(()=>[a(Tt,null,{default:p(()=>[a(qt,{onChange:T,modelValue:g(c),"onUpdate:modelValue":u[5]||(u[5]=r=>ke(c)?c.value=r:null),color:"info",label:"الوضع المظلم","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),a(G,{onClick:_,"prepend-icon":"mdi-logout",title:"خروج"})]),_:1})]),_:1})]),M("div",na,[a(zt,{"show-arrows":""},{default:p(()=>[(D(!0),oe(Z,null,Je(g(s),(r,k)=>(D(),J(Ut,{key:k},{default:p(()=>[r.meta.show?(D(),J($,{key:0,to:r.path},{default:p(()=>[a(Mt,{color:"primary",variant:"outlined",class:"my-1 mx-1"},{default:p(()=>[M("div",{class:Qe({"active-chip":g(l).path===r.path})},pe(r.meta.title),3)]),_:2},1024)]),_:2},1032,["to"])):ue("",!0)]),_:2},1024))),128))]),_:1})])])]),_:1})],64)}}},ia=O({...ee(),...Et({fullHeight:!0}),...me()},"VApp"),ua=U()({name:"VApp",props:ia(),setup(e,n){let{slots:t}=n;const l=ve(e),{layoutClasses:s,getLayoutItem:o,items:c,layoutRef:i}=Ot(e),{rtlClasses:d}=we();return F(()=>a("div",{ref:i,class:["v-application",l.themeClasses.value,s.value,d.value,e.class],style:[e.style]},[a("div",{class:"v-application__wrap"},[a(tt,null,{default:()=>{var h;return[a(Z,null,[(h=t.default)==null?void 0:h.call(t)])]}})])])),{getLayoutItem:o,items:c,theme:l}}}),ra=O({scrollable:Boolean,...ee(),...St(),...ye({tag:"main"})},"VMain"),ca=U()({name:"VMain",props:ra(),setup(e,n){let{slots:t}=n;const{dimensionStyles:l}=xt(e),{mainStyles:s,layoutIsReady:o}=$e(),{ssrBootStyles:c}=Pt();return F(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,c.value,l.value,e.style]},{default:()=>{var i,d;return[e.scrollable?a("div",{class:"v-main__scroller"},[(i=t.default)==null?void 0:i.call(t)]):(d=t.default)==null?void 0:d.call(t)]}})),o}}),pa={__name:"default",setup(e){const n=Ce();return fe(()=>{localStorage.token&&(n.isLoader=!1,n.loadengApi=!1),n.setAuthHeaderNew(localStorage.token).then(()=>{n.isAuth=!0,n.fetchUser()})}),(t,l)=>{const s=sa,o=Ie("router-view");return D(),J(ua,null,{default:p(()=>[g(n).isAuth?(D(),J(s,{key:0})):ue("",!0),a(ca,null,{default:p(()=>[a(o)]),_:1})]),_:1})}}};export{pa as default};
