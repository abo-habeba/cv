import{p as O,i as ce,n as de,c as x,r as N,a as j,e as be,b as M,g as ze,d as Me,f as He,h as U,m as me,o as Ee,u as ie,j as ve,s as Z,k as De,w as Oe,l as he,q as fe,t as Ue,v as a,x as K,y as Ge,I as Fe,z as Ye,A as je,F as J,B as qe,C as we,D as Ke,E as We,G as Xe,H as Ze,J as Ce,K as Ie,L as D,M as ne,N as y,O as ue,P as p,Q as E,R as ke,S as X,T as pe,U as Je,V as Q,W as Qe,X as et,Y as tt}from"./index-9PVhDJqA.js";import{m as at,u as lt,V as Ve}from"./VOverlay-cuo6ZFt1.js";import{u as ot,m as nt,a as st,b as it,c as ut,d as Te,e as rt,f as ct,g as dt,h as Pe,i as mt,V as vt,j as q,k as ft,l as gt,L as yt,n as bt,o as ht,p as kt,q as pt,r as Vt,s as _t,t as se,v as St,w as xt}from"./VBtn-CcYQ1lSM.js";import{u as F,V as re,m as te,a as ge,b as wt}from"./VIcon-C79UM_55.js";import{V as Ct}from"./VMenu-CP__UQ76.js";import{V as It,a as G,b as Tt,u as Pt}from"./VList-DQJOxbxD.js";import{m as $t,u as Rt,V as _e,a as Bt,b as Lt}from"./VInput-68thhHEQ.js";import{m as At,V as Se}from"./VSelectionControl-DVY5jjDI.js";import{V as Nt,a as zt,b as Mt}from"./VChip-DKyZdwSR.js";const ee=Symbol.for("vuetify:layout"),Ht=Symbol.for("vuetify:layout-item"),xe=1e3,Et=O({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout");function $e(){const e=ce(ee);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{layoutIsReady:de(),getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}const Dt=(e,n,t,l)=>{let s={top:0,left:0,right:0,bottom:0};const o=[{id:"",layer:{...s}}];for(const c of e){const i=n.get(c),d=t.get(c),h=l.get(c);if(!i||!d||!h)continue;const b={...s,[i.value]:parseInt(s[i.value],10)+(h.value?parseInt(d.value,10):0)};o.push({id:c,layer:b}),s=b}return o};function Ot(e){const n=ce(ee,null),t=x(()=>n?n.rootZIndex.value-100:xe),l=N([]),s=j(new Map),o=j(new Map),c=j(new Map),i=j(new Map),d=j(new Map),{resizeRef:h,contentRect:b}=ot(),v=be(()=>{const g=[...new Set([...c.values()].map(f=>f.value))].sort((f,R)=>f-R),I=[];for(const f of g){const R=l.value.filter(V=>{var m;return((m=c.get(V))==null?void 0:m.value)===f});I.push(...R)}return Dt(I,s,o,i)}),T=x(()=>!Array.from(d.values()).some(g=>g.value)),_=x(()=>v.value[v.value.length-1].layer),w=x(()=>({"--v-layout-left":M(_.value.left),"--v-layout-right":M(_.value.right),"--v-layout-top":M(_.value.top),"--v-layout-bottom":M(_.value.bottom),...T.value?void 0:{transition:"none"}})),u=be(()=>v.value.slice(1).map((g,I)=>{let{id:f}=g;const{layer:R}=v.value[I],V=o.get(f),m=s.get(f);return{id:f,...R,size:Number(V.value),position:m.value}})),$=g=>u.value.find(I=>I.id===g),r=ze("createLayout"),k=de();Me(ee,{register:(g,I)=>{let{id:f,order:R,position:V,layoutSize:m,elementSize:S,active:P,disableTransitions:L,absolute:B}=I;c.set(f,R),s.set(f,V),o.set(f,m),i.set(f,P),L&&d.set(f,L);const W=He(Ht,r==null?void 0:r.vnode).indexOf(g);W>-1?l.value.splice(W,0,f):l.value.push(f);const H=x(()=>u.value.findIndex(Y=>Y.id===f)),ae=x(()=>t.value+v.value.length*2-H.value*2),Re=x(()=>{const Y=V.value==="left"||V.value==="right",le=V.value==="right",Le=V.value==="bottom",oe=S.value??m.value,Ae=oe===0?"%":"px",Ne={[V.value]:0,zIndex:ae.value,transform:`translate${Y?"X":"Y"}(${(P.value?0:-(oe===0?100:oe))*(le||Le?-1:1)}${Ae})`,position:B.value||t.value!==xe?"absolute":"fixed",...T.value?void 0:{transition:"none"}};if(H.value<0)throw new Error(`Layout item "${f}" is missing`);const A=u.value[H.value];if(!A)throw new Error(`[Vuetify] Could not find layout item "${f}"`);return{...Ne,height:Y?`calc(100% - ${A.top}px - ${A.bottom}px)`:S.value?`${S.value}px`:void 0,left:le?void 0:`${A.left}px`,right:le?`${A.right}px`:void 0,top:V.value!=="bottom"?`${A.top}px`:void 0,bottom:V.value!=="top"?`${A.bottom}px`:void 0,width:Y?S.value?`${S.value}px`:void 0:`calc(100% - ${A.left}px - ${A.right}px)`}}),Be=x(()=>({zIndex:ae.value-1}));return{layoutItemStyles:Re,layoutItemScrimStyles:Be,zIndex:ae}},unregister:g=>{c.delete(g),s.delete(g),o.delete(g),i.delete(g),d.delete(g),l.value=l.value.filter(I=>I!==g)},mainRect:_,mainStyles:w,getLayoutItem:$,items:u,layoutRect:b,rootZIndex:t,layoutIsReady:k});const C=x(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),z=x(()=>({zIndex:n?t.value:void 0,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:C,layoutStyles:z,getLayoutItem:$,items:u,layoutRect:b,layoutIsReady:k,layoutRef:h}}const Ut=U()({name:"VSlideGroupItem",props:nt(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const l=st(e,Nt);return()=>{var s;return(s=t.default)==null?void 0:s.call(t,{isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}}});function Gt(e){const n=Z(e);let t=-1;function l(){clearInterval(t)}function s(){l(),de(()=>n.value=e)}function o(c){const i=c?getComputedStyle(c):{transitionDuration:.2},d=parseFloat(i.transitionDuration)*1e3||200;if(l(),n.value<=0)return;const h=performance.now();t=window.setInterval(()=>{const b=performance.now()-h+d;n.value=Math.max(e-b,0),n.value<=0&&l()},d)}return Ge(l),{clear:l,time:n,start:o,reset:s}}const Ft=O({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...it({location:"bottom"}),...ut(),...Te(),...rt(),...me(),...Ee(at({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Yt=U()({name:"VSnackbar",props:Ft(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const l=ie(e,"modelValue"),{positionClasses:s}=ct(e),{scopeId:o}=lt(),{themeClasses:c}=ve(e),{colorClasses:i,colorStyles:d,variantClasses:h}=dt(e),{roundedClasses:b}=Pe(e),v=Gt(Number(e.timeout)),T=N(),_=N(),w=Z(!1),u=Z(0),$=N(),r=ce(ee,void 0);De(()=>!!r,()=>{const m=$e();Oe(()=>{$.value=m.mainStyles.value})}),he(l,C),he(()=>e.timeout,C),fe(()=>{l.value&&C()});let k=-1;function C(){v.reset(),window.clearTimeout(k);const m=Number(e.timeout);if(!l.value||m===-1)return;const S=Ue(_.value);v.start(S),k=window.setTimeout(()=>{l.value=!1},m)}function z(){v.reset(),window.clearTimeout(k)}function g(){w.value=!0,z()}function I(){w.value=!1,C()}function f(m){u.value=m.touches[0].clientY}function R(m){Math.abs(u.value-m.changedTouches[0].clientY)>50&&(l.value=!1)}const V=x(()=>e.location.split(" ").reduce((m,S)=>(m[`v-snackbar--${S}`]=!0,m),{}));return F(()=>{const m=Ve.filterProps(e),S=!!(t.default||t.text||e.text);return a(Ve,K({ref:T,class:["v-snackbar",{"v-snackbar--active":l.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},V.value,s.value,e.class],style:[$.value,e.style]},m,{modelValue:l.value,"onUpdate:modelValue":P=>l.value=P,contentProps:K({class:["v-snackbar__wrapper",c.value,i.value,b.value,h.value],style:[d.value],onPointerenter:g,onPointerleave:I},m.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:f,onTouchend:R},o),{default:()=>{var P,L;return[mt(!1,"v-snackbar"),e.timer&&!w.value&&a("div",{key:"timer",class:"v-snackbar__timer"},[a(vt,{ref:_,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":v.time.value},null)]),S&&a("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((P=t.text)==null?void 0:P.call(t))??e.text,(L=t.default)==null?void 0:L.call(t)]),t.actions&&a(q,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[t.actions({isActive:l})])]})]},activator:t.activator})}),ft({},T)}}),jt=O({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...$t(),...At()},"VSwitch"),qt=U()({name:"VSwitch",inheritAttrs:!1,props:jt(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,n){let{attrs:t,slots:l}=n;const s=ie(e,"indeterminate"),o=ie(e,"modelValue"),{loaderClasses:c}=gt(e),{isFocused:i,focus:d,blur:h}=Rt(e),b=N(),v=Fe&&window.matchMedia("(forced-colors: active)").matches,T=x(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),_=Ye(),w=x(()=>e.id||`switch-${_}`);function u(){s.value&&(s.value=!1)}function $(r){var k,C;r.stopPropagation(),r.preventDefault(),(C=(k=b.value)==null?void 0:k.input)==null||C.click()}return F(()=>{const[r,k]=je(t),C=_e.filterProps(e),z=Se.filterProps(e);return a(_e,K({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":s.value},c.value,e.class]},r,C,{modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,id:w.value,focused:i.value,style:e.style}),{...l,default:g=>{let{id:I,messagesId:f,isDisabled:R,isReadonly:V,isValid:m}=g;const S={model:o,isValid:m};return a(Se,K({ref:b},z,{modelValue:o.value,"onUpdate:modelValue":[P=>o.value=P,u],id:I.value,"aria-describedby":f.value,type:"checkbox","aria-checked":s.value?"mixed":void 0,disabled:R.value,readonly:V.value,onFocus:d,onBlur:h},k),{...l,default:P=>{let{backgroundColorClasses:L,backgroundColorStyles:B}=P;return a("div",{class:["v-switch__track",v?void 0:L.value],style:B.value,onClick:$},[l["track-true"]&&a("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](S)]),l["track-false"]&&a("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](S)])])},input:P=>{let{inputNode:L,icon:B,backgroundColorClasses:ye,backgroundColorStyles:W}=P;return a(J,null,[L,a("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":B||e.loading},e.inset||v?void 0:ye.value],style:e.inset?void 0:W.value},[l.thumb?a(q,{defaults:{VIcon:{icon:B,size:"x-small"}}},{default:()=>[l.thumb({...S,icon:B})]}):a(Bt,null,{default:()=>[e.loading?a(yt,{name:"v-switch",active:!0,color:m.value===!1?void 0:T.value},{default:H=>l.loader?l.loader(H):a(bt,{active:H.isActive,color:H.color,indeterminate:!0,size:"16",width:"2"},null)}):B&&a(re,{key:String(B),icon:B,size:"x-small"},null)]})])])}})}})}),{}}}),Kt=O({text:String,...te(),...ge()},"VToolbarTitle"),Wt=U()({name:"VToolbarTitle",props:Kt(),setup(e,n){let{slots:t}=n;return F(()=>{const l=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[l&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),Xt=[null,"prominent","default","comfortable","compact"],Zt=O({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Xt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ht(),...te(),...kt(),...Te(),...ge({tag:"header"}),...me()},"VToolbar"),Jt=U()({name:"VToolbar",props:Zt(),setup(e,n){var _;let{slots:t}=n;const{backgroundColorClasses:l,backgroundColorStyles:s}=wt(qe(e,"color")),{borderClasses:o}=pt(e),{elevationClasses:c}=Vt(e),{roundedClasses:i}=Pe(e),{themeClasses:d}=ve(e),{rtlClasses:h}=we(),b=Z(!!(e.extended||(_=t.extension)!=null&&_.call(t))),v=x(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),T=x(()=>b.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ke({VBtn:{variant:"text"}}),F(()=>{var r;const w=!!(e.title||t.title),u=!!(t.image||e.image),$=(r=t.extension)==null?void 0:r.call(t);return b.value=!!(e.extended||$),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,o.value,c.value,i.value,d.value,h.value,e.class],style:[s.value,e.style]},{default:()=>[u&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(q,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(_t,{key:"image-img",cover:!0,src:e.image},null)]),a(q,{defaults:{VTabs:{height:M(v.value)}}},{default:()=>{var k,C,z;return[a("div",{class:"v-toolbar__content",style:{height:M(v.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(k=t.prepend)==null?void 0:k.call(t)]),w&&a(Wt,{key:"title",text:e.title},{text:t.title}),(C=t.default)==null?void 0:C.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(z=t.append)==null?void 0:z.call(t)])])]}}),a(q,{defaults:{VTabs:{height:M(T.value)}}},{default:()=>[a(Lt,null,{default:()=>[b.value&&a("div",{class:"v-toolbar__extension",style:{height:M(T.value)}},[$])]})]})]})}),{contentHeight:v,extensionHeight:T}}}),Qt={class:"navbar"},ea={class:"box-menu"},ta={class:"box-link"},aa={class:"copy-link"},la={class:"box-link"},oa={class:"copy-link"},na={class:"box-route"},sa={__name:"Navbar",setup(e){const n=We();document.title="Hoome";const t=Xe(),l=Ze(),s=t.getRoutes(),o=Ce(),c=N(localStorage.defaultTheme?JSON.parse(localStorage.defaultTheme):!1),i=N(!0),d=N(!1),h=N("");function b(w){navigator.clipboard.writeText(w).then(()=>{h.value="تم نسخ الرابط إلى الحافظة!",d.value=!0}).catch(u=>{console.error("حدث خطأ أثناء نسخ الرابط:",u)})}function v(){return window.location.origin}fe(()=>{});function T(){c.value?(n.global.name.value="dark",localStorage.setItem("defaultTheme",!0)):(n.global.name.value="light",localStorage.setItem("defaultTheme",!1))}function _(){o.loadengApi=!0,et.post("logout").then(w=>{o.loadengApi=!1,localStorage.removeItem("token"),localStorage.removeItem("user"),location.reload(!0),o.setAuthHeaderNew(localStorage.token),o.isAuth=!1}).catch(w=>{o.loadengApi=!1})}return(w,u)=>{const $=Ie("router-link");return D(),ne(J,null,[y(i)?ue("",!0):(D(),ne("div",{key:0,onClick:u[0]||(u[0]=r=>i.value=!y(i)),class:"toggleIconmMnu"})),a(Jt,{density:"comfortable",elevation:8},{default:p(()=>[E("div",Qt,[a(Yt,{modelValue:y(d),"onUpdate:modelValue":u[1]||(u[1]=r=>ke(d)?d.value=r:null),location:"top center",color:"primary",timeout:"1000"},{default:p(()=>[X(pe(y(h)),1)]),_:1},8,["modelValue"]),E("div",ea,[a(Ct,{onClick:u[6]||(u[6]=r=>i.value=!y(i))},{activator:p(({props:r})=>[a(se,K({style:{"z-index":"199"},onClick:u[2]||(u[2]=k=>i.value=!y(i)),icon:y(i)?"mdi-menu":"mdi-close"},r),null,16,["icon"])]),default:p(()=>[a(It,null,{default:p(()=>[a(G,{to:"/admin/user","prepend-avatar":y(o).user.profile_image,subtitle:y(o).user.email,title:y(o).user.username},null,8,["prepend-avatar","subtitle","title"]),E("div",ta,[E("div",aa,[a(se,{icon:"",onClick:u[3]||(u[3]=r=>b(`${v()}/ar/${y(o).user.username}`))},{default:p(()=>[a(re,null,{default:p(()=>[X("mdi-content-copy")]),_:1})]),_:1})]),a(G,{href:`${v()}/ar/${y(o).user.username}`,target:"_blank","prepend-icon":"mdi-web",subtitle:`${v()}/ar/${y(o).user.username}`,title:"النسخة العربية"},null,8,["href","subtitle"])]),E("div",la,[E("div",oa,[a(se,{icon:"",onClick:u[4]||(u[4]=r=>b(`${v()}/ar/${y(o).user.username}`))},{default:p(()=>[a(re,null,{default:p(()=>[X("mdi-content-copy")]),_:1})]),_:1})]),a(G,{href:`${v()}/en/${y(o).user.username}`,target:"_blank","prepend-icon":"mdi-web",subtitle:`${v()}/en/${y(o).user.username}`,title:"النسخة الانجليزية"},null,8,["href","subtitle"])]),a(G,{to:"/admin/contact","prepend-icon":"mdi-message-badge-outline",subtitle:"تفقده رسائلك باستمرار ",title:"الرسائل"}),a(G,null,{default:p(()=>[a(Tt,null,{default:p(()=>[a(qt,{onChange:T,modelValue:y(c),"onUpdate:modelValue":u[5]||(u[5]=r=>ke(c)?c.value=r:null),color:"info",label:"الوضع المظلم","hide-details":""},null,8,["modelValue"])]),_:1})]),_:1}),a(G,{onClick:_,"prepend-icon":"mdi-logout",title:"خروج"})]),_:1})]),_:1})]),E("div",na,[a(zt,{"show-arrows":""},{default:p(()=>[(D(!0),ne(J,null,Je(y(s),(r,k)=>(D(),Q(Ut,{key:k},{default:p(()=>[r.meta.show?(D(),Q($,{key:0,class:Qe({"active-chip":y(l).path===r.path}),to:r.path},{default:p(()=>[a(Mt,{color:"primary",variant:"outlined",class:"my-1 mx-1"},{default:p(()=>[X(pe(r.meta.title),1)]),_:2},1024)]),_:2},1032,["class","to"])):ue("",!0)]),_:2},1024))),128))]),_:1})])])]),_:1})],64)}}},ia=O({...te(),...Et({fullHeight:!0}),...me()},"VApp"),ua=U()({name:"VApp",props:ia(),setup(e,n){let{slots:t}=n;const l=ve(e),{layoutClasses:s,getLayoutItem:o,items:c,layoutRef:i}=Ot(e),{rtlClasses:d}=we();return F(()=>a("div",{ref:i,class:["v-application",l.themeClasses.value,s.value,d.value,e.class],style:[e.style]},[a("div",{class:"v-application__wrap"},[a(tt,null,{default:()=>{var h;return[a(J,null,[(h=t.default)==null?void 0:h.call(t)])]}})])])),{getLayoutItem:o,items:c,theme:l}}}),ra=O({scrollable:Boolean,...te(),...St(),...ge({tag:"main"})},"VMain"),ca=U()({name:"VMain",props:ra(),setup(e,n){let{slots:t}=n;const{dimensionStyles:l}=xt(e),{mainStyles:s,layoutIsReady:o}=$e(),{ssrBootStyles:c}=Pt();return F(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,c.value,l.value,e.style]},{default:()=>{var i,d;return[e.scrollable?a("div",{class:"v-main__scroller"},[(i=t.default)==null?void 0:i.call(t)]):(d=t.default)==null?void 0:d.call(t)]}})),o}}),pa={__name:"default",setup(e){const n=Ce();return fe(()=>{localStorage.token&&(n.isLoader=!1,n.loadengApi=!1),n.setAuthHeaderNew(localStorage.token).then(()=>{n.isAuth=!0,n.fetchUser()})}),(t,l)=>{const s=sa,o=Ie("router-view");return D(),Q(ua,null,{default:p(()=>[y(n).isAuth?(D(),Q(s,{key:0})):ue("",!0),a(ca,null,{default:p(()=>[a(o)]),_:1})]),_:1})}}};export{pa as default};
