import{p as ne,g as be,q,c as a,F as le,d as j,D as Ce,s as H,n as xe,r as O,f as N,z as Fe,a4 as ve,am as Ue,A as Ae,an as ge,W as Ne,t as Me,l as He,x as Oe,a1 as ue,I as $e,o as ze,u as qe,h as _e,ak as Ke,ao as je,L as W,ap as Ie,E as Re,H as Z,J as ie,K as b,N as x,M as ee,O as Ve,S as ce,al as z,C as We,P as Te,R as Je}from"./index-TxWXM6nm.js";import{m as De,z as Be,h as we,v as Ye,w as Ge,d as Xe,S as Qe,V as de,p as Ze,q as re,s as $}from"./VGrid-C4m5_uAS.js";import{V as el}from"./VForm-2Lx1i61p.js";import{a as ll,V as J}from"./VRow-DTeXBggv.js";import{m as tl,V as ae}from"./VTextField-BsHg5xIq.js";import{c as al,f as nl}from"./VInput-DRG_2TRK.js";import{m as ol,u as sl,V as ul}from"./VList-BTfkpNr8.js";import{g as il,f as rl,a as ye}from"./VDialog-slPx5cd5.js";import{V as cl}from"./VMenu-DzAWoLsu.js";import{V as Pe}from"./VListItem-DQn6h82j.js";import{V as dl}from"./VCheckboxBtn-DJB7NrI1.js";import{V as ml}from"./VChip-DptBLFl5.js";import{_ as fl}from"./Breadcrumbs-BlHXnT9p.js";import{V as pe,s as vl}from"./VSwitch-WJSbuSIR.js";import{V as pl}from"./VTable-DI05AWSl.js";import{V as hl}from"./VContainer-FQdAElRm.js";import"./VDivider-B4OmLtBC.js";import"./VSelectionControl-lDHvwRCp.js";import"./notifyService-tZtkkMC0.js";const gl=ne({renderless:Boolean,...De()},"VVirtualScrollItem"),Vl=be()({name:"VVirtualScrollItem",inheritAttrs:!1,props:gl(),emits:{"update:height":e=>!0},setup(e,v){let{attrs:n,emit:p,slots:i}=v;const{resizeRef:m,contentRect:h}=Be(void 0,"border");q(()=>{var o;return(o=h.value)==null?void 0:o.height},o=>{o!=null&&p("update:height",o)}),we(()=>{var o,l;return e.renderless?a(le,null,[(o=i.default)==null?void 0:o.call(i,{itemRef:m})]):a("div",j({ref:m,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(l=i.default)==null?void 0:l.call(i)])})}}),yl=-1,bl=1,he=100,wl=ne({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function kl(e,v){const n=Ce(),p=H(0);xe(()=>{p.value=parseFloat(e.itemHeight||0)});const i=H(0),m=H(Math.ceil((parseInt(e.height)||n.height.value)/(p.value||16))||1),h=H(0),o=H(0),l=O(),w=O();let T=0;const{resizeRef:B,contentRect:d}=Be();xe(()=>{B.value=l.value});const _=N(()=>{var t;return l.value===document.documentElement?n.height.value:((t=d.value)==null?void 0:t.height)||parseInt(e.height)||0}),P=N(()=>!!(l.value&&w.value&&_.value&&p.value));let C=Array.from({length:v.value.length}),g=Array.from({length:v.value.length});const R=H(0);let r=-1;function s(t){return C[t]||p.value}const f=Ue(()=>{const t=performance.now();g[0]=0;const c=v.value.length;for(let F=1;F<=c-1;F++)g[F]=(g[F-1]||0)+s(F-1);R.value=Math.max(R.value,performance.now()-t)},R),V=q(P,t=>{t&&(V(),T=w.value.offsetTop,f.immediate(),M(),~r&&Ae(()=>{ge&&window.requestAnimationFrame(()=>{se(r),r=-1})}))});Fe(()=>{f.clear()});function k(t,c){const F=C[t],I=p.value;p.value=I?Math.min(p.value,c):c,(F!==c||I!==p.value)&&(C[t]=c,f())}function D(t){return t=ve(t,0,v.value.length-1),g[t]||0}function Y(t){return Sl(g,t)}let G=0,K=0,te=0;q(_,(t,c)=>{c&&(M(),t<c&&requestAnimationFrame(()=>{K=0,M()}))});function me(){if(!l.value||!w.value)return;const t=l.value.scrollTop,c=performance.now();c-te>500?(K=Math.sign(t-G),T=w.value.offsetTop):K=t-G,G=t,te=c,M()}function X(){!l.value||!w.value||(K=0,te=0,M())}let oe=-1;function M(){cancelAnimationFrame(oe),oe=requestAnimationFrame(fe)}function fe(){if(!l.value||!_.value)return;const t=G-T,c=Math.sign(K),F=Math.max(0,t-he),I=ve(Y(F),0,v.value.length),y=t+_.value+he,A=ve(Y(y)+1,I+1,v.value.length);if((c!==yl||I<i.value)&&(c!==bl||A>m.value)){const S=D(i.value)-D(I),L=D(A)-D(m.value);Math.max(S,L)>he?(i.value=I,m.value=A):(I<=0&&(i.value=I),A>=v.value.length&&(m.value=A))}h.value=D(i.value),o.value=D(v.value.length)-D(m.value)}function se(t){const c=D(t);!l.value||t&&!c?r=t:l.value.scrollTop=c}const u=N(()=>v.value.slice(i.value,m.value).map((t,c)=>({raw:t,index:c+i.value})));return q(v,()=>{C=Array.from({length:v.value.length}),g=Array.from({length:v.value.length}),f.immediate(),M()},{deep:!0}),{containerRef:l,markerRef:w,computedItems:u,paddingTop:h,paddingBottom:o,scrollToIndex:se,handleScroll:me,handleScrollend:X,handleItemResize:k}}function Sl(e,v){let n=e.length-1,p=0,i=0,m=null,h=-1;if(e[n]<v)return n;for(;p<=n;)if(i=p+n>>1,m=e[i],m>v)n=i-1;else if(m<v)h=i,p=i+1;else return m===v?i:p;return h}const xl=ne({items:{type:Array,default:()=>[]},renderless:Boolean,...wl(),...De(),...Ye()},"VVirtualScroll"),_l=be()({name:"VVirtualScroll",props:xl(),setup(e,v){let{slots:n}=v;const p=Ne("VVirtualScroll"),{dimensionStyles:i}=Ge(e),{containerRef:m,markerRef:h,handleScroll:o,handleScrollend:l,handleItemResize:w,scrollToIndex:T,paddingTop:B,paddingBottom:d,computedItems:_}=kl(e,Me(e,"items"));return He(()=>e.renderless,()=>{function P(){var R,r;const g=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";m.value===document.documentElement?(document[g]("scroll",o,{passive:!0}),document[g]("scrollend",l)):((R=m.value)==null||R[g]("scroll",o,{passive:!0}),(r=m.value)==null||r[g]("scrollend",l))}Oe(()=>{m.value=il(p.vnode.el,!0),P(!0)}),Fe(P)}),we(()=>{const P=_.value.map(C=>a(Vl,{key:C.index,renderless:e.renderless,"onUpdate:height":g=>w(C.index,g)},{default:g=>{var R;return(R=n.default)==null?void 0:R.call(n,{item:C.raw,index:C.index,...g})}}));return e.renderless?a(le,null,[a("div",{ref:h,class:"v-virtual-scroll__spacer",style:{paddingTop:ue(B.value)}},null),P,a("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ue(d.value)}},null)]):a("div",{ref:m,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:l,style:[i.value,e.style]},[a("div",{ref:h,class:"v-virtual-scroll__container",style:{paddingTop:ue(B.value),paddingBottom:ue(d.value)}},[P])])}),{scrollToIndex:T}}});function Il(e,v){const n=H(!1);let p;function i(o){cancelAnimationFrame(p),n.value=!0,p=requestAnimationFrame(()=>{p=requestAnimationFrame(()=>{n.value=!1})})}async function m(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const l=q(n,()=>{l(),o()})}else o()})}async function h(o){var T,B;if(o.key==="Tab"&&((T=v.value)==null||T.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const l=(B=e.value)==null?void 0:B.$el;if(!l)return;(o.key==="Home"||o.key==="End")&&l.scrollTo({top:o.key==="Home"?0:l.scrollHeight,behavior:"smooth"}),await m();const w=l.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const d=l.getBoundingClientRect().top;for(const _ of w)if(_.getBoundingClientRect().top>=d){_.focus();break}}else{const d=l.getBoundingClientRect().bottom;for(const _ of[...w].reverse())if(_.getBoundingClientRect().bottom<=d){_.focus();break}}}return{onListScroll:i,onListKeydown:h}}const Tl=ne({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:$e,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...ol({itemChildren:!1})},"Select"),Pl=ne({...Tl(),...ze(tl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Xe({transition:{component:rl}})},"VSelect"),Cl=be()({name:"VSelect",props:Pl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,v){let{slots:n}=v;const{t:p}=qe(),i=O(),m=O(),h=O(),o=_e(e,"menu"),l=N({get:()=>o.value,set:u=>{var t;o.value&&!u&&((t=m.value)!=null&&t.ΨopenChildren)||(o.value=u)}}),{items:w,transformIn:T,transformOut:B}=sl(e),d=_e(e,"modelValue",[],u=>T(u===null?[null]:Ke(u)),u=>{const t=B(u);return e.multiple?t:t[0]??null}),_=N(()=>typeof e.counterValue=="function"?e.counterValue(d.value):typeof e.counterValue=="number"?e.counterValue:d.value.length),P=al(),C=N(()=>d.value.map(u=>u.value)),g=H(!1),R=N(()=>l.value?e.closeText:e.openText);let r="",s;const f=N(()=>e.hideSelected?w.value.filter(u=>!d.value.some(t=>e.valueComparator(t,u))):w.value),V=N(()=>e.hideNoData&&!f.value.length||e.readonly||(P==null?void 0:P.isReadonly.value)),k=N(()=>{var u;return{...e.menuProps,activatorProps:{...((u=e.menuProps)==null?void 0:u.activatorProps)||{},"aria-haspopup":"listbox"}}}),D=O(),{onListScroll:Y,onListKeydown:G}=Il(D,i);function K(u){e.openOnClear&&(l.value=!0)}function te(){V.value||(l.value=!l.value)}function me(u){var y,A;if(!u.key||e.readonly||P!=null&&P.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(u.key)&&u.preventDefault(),["Enter","ArrowDown"," "].includes(u.key)&&(l.value=!0),["Escape","Tab"].includes(u.key)&&(l.value=!1),u.key==="Home"?(y=D.value)==null||y.focus("first"):u.key==="End"&&((A=D.value)==null||A.focus("last"));const t=1e3;function c(S){const L=S.key.length===1,E=!S.ctrlKey&&!S.metaKey&&!S.altKey;return L&&E}if(e.multiple||!c(u))return;const F=performance.now();F-s>t&&(r=""),r+=u.key.toLowerCase(),s=F;const I=w.value.find(S=>S.title.toLowerCase().startsWith(r));if(I!==void 0){d.value=[I];const S=f.value.indexOf(I);ge&&window.requestAnimationFrame(()=>{var L;S>=0&&((L=h.value)==null||L.scrollToIndex(S))})}}function X(u){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!u.props.disabled)if(e.multiple){const c=d.value.findIndex(I=>e.valueComparator(I.value,u.value)),F=t??!~c;if(~c){const I=F?[...d.value,u]:[...d.value];I.splice(c,1),d.value=I}else F&&(d.value=[...d.value,u])}else{const c=t!==!1;d.value=c?[u]:[],Ae(()=>{l.value=!1})}}function oe(u){var t;(t=D.value)!=null&&t.$el.contains(u.relatedTarget)||(l.value=!1)}function M(){var u;g.value&&((u=i.value)==null||u.focus())}function fe(u){g.value=!0}function se(u){if(u==null)d.value=[];else if(Ie(i.value,":autofill")||Ie(i.value,":-webkit-autofill")){const t=w.value.find(c=>c.title===u);t&&X(t)}else i.value&&(i.value.value="")}return q(l,()=>{if(!e.hideSelected&&l.value&&d.value.length){const u=f.value.findIndex(t=>d.value.some(c=>e.valueComparator(c.value,t.value)));ge&&window.requestAnimationFrame(()=>{var t;u>=0&&((t=h.value)==null||t.scrollToIndex(u))})}}),q(()=>e.items,(u,t)=>{l.value||g.value&&!t.length&&u.length&&(l.value=!0)}),we(()=>{const u=!!(e.chips||n.chip),t=!!(!e.hideNoData||f.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),c=d.value.length>0,F=ae.filterProps(e),I=c||!g.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return a(ae,j({ref:i},F,{modelValue:d.value.map(y=>y.props.value).join(", "),"onUpdate:modelValue":se,focused:g.value,"onUpdate:focused":y=>g.value=y,validationValue:d.externalValue,counterValue:_.value,dirty:c,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":d.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:I,"onClick:clear":K,"onMousedown:control":te,onBlur:oe,onKeydown:me,"aria-label":p(R.value),title:p(R.value)}),{...n,default:()=>a(le,null,[a(cl,j({ref:m,modelValue:l.value,"onUpdate:modelValue":y=>l.value=y,activator:"parent",contentClass:"v-select__content",disabled:V.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:M},k.value),{default:()=>[t&&a(ul,j({ref:D,selected:C.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:y=>y.preventDefault(),onKeydown:G,onFocusin:fe,onScrollPassive:Y,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var y,A,S;return[(y=n["prepend-item"])==null?void 0:y.call(n),!f.value.length&&!e.hideNoData&&(((A=n["no-data"])==null?void 0:A.call(n))??a(Pe,{title:p(e.noDataText)},null)),a(_l,{ref:h,renderless:!0,items:f.value},{default:L=>{var Se;let{item:E,index:Q,itemRef:U}=L;const ke=j(E.props,{ref:U,key:Q,onClick:()=>X(E,null)});return((Se=n.item)==null?void 0:Se.call(n,{item:E,index:Q,props:ke}))??a(Pe,j(ke,{role:"option"}),{prepend:Le=>{let{isSelected:Ee}=Le;return a(le,null,[e.multiple&&!e.hideSelected?a(dl,{key:E.value,modelValue:Ee,ripple:!1,tabindex:"-1"},null):void 0,E.props.prependAvatar&&a(Qe,{image:E.props.prependAvatar},null),E.props.prependIcon&&a(de,{icon:E.props.prependIcon},null)])}})}}),(S=n["append-item"])==null?void 0:S.call(n)]}})]}),d.value.map((y,A)=>{function S(U){U.stopPropagation(),U.preventDefault(),X(y,!1)}const L={"onClick:close":S,onKeydown(U){U.key!=="Enter"&&U.key!==" "||(U.preventDefault(),U.stopPropagation(),S(U))},onMousedown(U){U.preventDefault(),U.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},E=u?!!n.chip:!!n.selection,Q=E?je(u?n.chip({item:y,index:A,props:L}):n.selection({item:y,index:A})):void 0;if(!(E&&!Q))return a("div",{key:y.value,class:"v-select__selection"},[u?n.chip?a(Ze,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:y.title}}},{default:()=>[Q]}):a(ml,j({key:"chip",closable:e.closableChips,size:"small",text:y.title,disabled:y.props.disabled},L),null):Q??a("span",{class:"v-select__selection-text"},[y.title,e.multiple&&A<d.value.length-1&&a("span",{class:"v-select__selection-comma"},[W(",")])])])})]),"append-inner":function(){var L;for(var y=arguments.length,A=new Array(y),S=0;S<y;S++)A[S]=arguments[S];return a(le,null,[(L=n["append-inner"])==null?void 0:L.call(n,...A),e.menuIcon?a(de,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),nl({isFocused:g,menu:l,select:X},i)}}),Fl={class:"ma-5"},Al={__name:"SocialForm",emits:["runItems"],setup(e,{expose:v,emit:n}){const{xs:p}=Ce(),i=Re(),m=n,h=O(!1),o=O({}),l=O({}),w=O({}),T=O({name:"اختر موقع تواصل",icon:"mdi-web"}),B=[{name:"Facebook",icon:"mdi-facebook",color:"#1877F2",namear:"فيس بوك"},{name:"Twitter",icon:"mdi-twitter",color:"#1DA1F2",namear:"تويتر"},{name:"Instagram",icon:"mdi-instagram",color:"#E4405F",namear:"انستجرام"},{name:"Linked In",icon:"mdi-linkedin",color:"#0077B5",namear:"لينكيد ان"},{name:"YouTube",icon:"mdi-youtube",color:"#FF0000",namear:"يوتيوب"},{name:"Web Site",icon:"mdi-web",color:"#000000",namear:"موقع شخصي"},{name:"GitHub",icon:"mdi-github",color:"#333333",namear:"جيت هب"}];function d(s){l.value.en=s.name,l.value.ar=s.namear,w.value.icon=s.icon,w.value.color=s.color}const _=s=>{z.success(s,{theme:"colored",position:z.POSITION.TOP_LEFT})},P=s=>{z.error(s,{theme:"colored",position:z.POSITION.TOP_LEFT})};function C(){h.value=!1,m("runItems")}function g(s){return s.startsWith("https://")?s:"https://"+s}function R(){i.loadengApi=!0,o.value.name=JSON.stringify(l.value),o.value.icon=JSON.stringify(w.value),o.value.user_id=i.user.id,o.value.url=g(o.value.url),o.value.id?ce.put(`socials/${o.value.id}`,o.value).then(s=>{m("runItems"),C(),i.loadengApi=!1,_(" تم التعديل ")}).catch(s=>{i.loadengApi=!1,P(s.response.data.message)}):ce.post("socials",o.value).then(s=>{m("runItems"),C(),i.loadengApi=!1,_(" تم الحفظ ")}).catch(s=>{i.loadengApi=!1,P(s.response.data.message)})}const r=(s={})=>{Object.keys(s).length!==0&&(l.value=s.name),h.value=!0,o.value=s};return v({addNew:r}),(s,f)=>(Z(),ie("div",null,[a(de,{onClick:f[0]||(f[0]=V=>r()),color:"info",size:"35",icon:"mdi-plus-outline"}),a(ye,{class:"text-center",modelValue:h.value,"onUpdate:modelValue":f[6]||(f[6]=V=>h.value=V),"max-width":"900",fullscreen:Ve(p)},{default:b(()=>[a(re,{class:"pa-5"},{actions:b(()=>[a($,{onClick:C},{default:b(()=>[W(" اغلاق ")]),_:1}),a($,{onClick:R},{default:b(()=>[W(" موافق ")]),_:1})]),default:b(()=>[x("h2",Fl,ee(o.value.id?"تعديل ":" اضافة "),1),a(el,null,{default:b(()=>[a(ll,null,{default:b(()=>[a(J,{cols:"12",md:"6"},{default:b(()=>[a(Cl,{modelValue:T.value,"onUpdate:modelValue":[f[1]||(f[1]=V=>T.value=V),f[2]||(f[2]=V=>d(T.value))],items:B,"item-title":"name","prepend-icon":T.value.icon,"item-value":"icon",label:"Select Social","single-line":"","return-object":"","prepend-item":""},null,8,["modelValue","prepend-icon"])]),_:1}),a(J,{cols:"12",md:"6"},{default:b(()=>[a(ae,{modelValue:l.value.ar,"onUpdate:modelValue":f[3]||(f[3]=V=>l.value.ar=V),label:"الاسم"},null,8,["modelValue"])]),_:1}),a(J,{cols:"12",md:"6"},{default:b(()=>[a(ae,{modelValue:l.value.en,"onUpdate:modelValue":f[4]||(f[4]=V=>l.value.en=V),label:"name"},null,8,["modelValue"])]),_:1}),a(J,{cols:"12",md:"6"},{default:b(()=>[a(ae,{modelValue:o.value.url,"onUpdate:modelValue":f[5]||(f[5]=V=>o.value.url=V),label:"URL"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","fullscreen"])]))}},Ol=x("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),Rl=x("h2",{class:"sticky-header pa-4"},"تفعيل مواقع التواصل في الاقسام",-1),Dl=x("hr",null,null,-1),Bl=x("hr",null,null,-1),Ll=x("hr",null,null,-1),El={style:{position:"sticky",bottom:"0px","z-index":"100",width:"100%","max-width":"600px",margin:"auto","border-radius":"7px"}},Ul=x("thead",null,[x("tr",null,[x("th",{class:"text-center"},"#"),x("th",{class:"text-center"},"الاسم"),x("th",{class:"text-center"},"name"),x("th",{class:"text-center"},"URL"),x("th",{class:"text-center"},"تاريخ الانشاء"),x("th",{class:"text-center sticky-column"},". . .")])],-1),Nl={class:"sticky-column"},Ml={key:1,class:"text-alert"},st={__name:"index",setup(e){const v=We(),n=Re(),p=r=>{z.success(r,{theme:"colored",position:z.POSITION.TOP_LEFT})},i=r=>{z.error(r,{theme:"colored",position:z.POSITION.TOP_LEFT})},m=O(null),h=O(!1),o=O(!1),l=O({hero:{enabled:!0},aside:{enabled:!0},about:{enabled:!0}}),w=O([]),T=O("");function B(r,s){const f={...r};for(const V in s)Object.prototype.hasOwnProperty.call(s,V)&&(typeof s[V]=="object"&&s[V]!==null?f[V]=B(r[V]||{},s[V]):f[V]=s[V]);return f}function d(r){h.value=!0,T.value=r}Oe(()=>{_()}),q(()=>n.user,r=>{r.theme.socials?l.value=B(l.value,r.theme.socials):l.value={hero:{enabled:!0},aside:{enabled:!0},about:{enabled:!0}}},{immediate:!1,deep:!1});function _(){n.loadengApi=!0,ce.get("socials",w.value).then(r=>{w.value=r.data.data,n.loadengApi=!1,T.value=""}).catch(()=>{i("هناك خطا ما حاول مره اخري")})}function P(){n.user.theme.socials={...l.value},console.log("userStore.user.theme",n.user.theme),vl("users-theme",{theme:n.user.theme,_method:"put"},n.user.id).then(r=>{console.log("res.data",r.data),C()})}function C(){o.value=!1}function g(){n.loadengApi=!0,ce.post("socials/delete",{id:[T.value.id]}).then(()=>{_(),h.value=!1,n.loadengApi=!1,p(" تم الحذف")}).catch(r=>{i(r.response.data.message)})}const R=r=>{var s;(s=m.value)==null||s.addNew(r)};return(r,s)=>{const f=fl,V=Al;return Z(),Te(hl,null,{default:b(()=>[a(f),a(ye,{class:"text-center",modelValue:h.value,"onUpdate:modelValue":s[1]||(s[1]=k=>h.value=k),"max-width":"400",persistent:""},{default:b(()=>[a(re,{class:"pa-5"},{default:b(()=>[Ol,a($,{class:"ma-1",onClick:g},{default:b(()=>[W(" موافق ")]),_:1}),a($,{class:"ma-1",onClick:s[0]||(s[0]=k=>h.value=!1)},{default:b(()=>[W(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(re,{"max-width":"500px",class:"text-center my-5 mx-auto",subtitle:Ve(v).meta.description,title:Ve(v).meta.title},{append:b(()=>[a(de,{onClick:s[2]||(s[2]=k=>o.value=!0),color:"info",size:"35",icon:"mdi-pencil-outline"})]),prepend:b(()=>[a(V,{ref_key:"itemForm",ref:m,onRunItems:_},null,512)]),_:1},8,["subtitle","title"]),a(ye,{class:"text-center",modelValue:o.value,"onUpdate:modelValue":s[6]||(s[6]=k=>o.value=k),"max-width":"900"},{default:b(()=>[a(re,{cols:"12",class:"elevation-5"},{default:b(()=>[Rl,a(J,null,{default:b(()=>[a(pe,{style:{width:"fit-content"},class:"ma-auto",color:"info",modelValue:l.value.hero.enabled,"onUpdate:modelValue":s[3]||(s[3]=k=>l.value.hero.enabled=k),label:"تفعيل في الصفحة الرئيسية"},null,8,["modelValue"]),Dl]),_:1}),a(J,null,{default:b(()=>[a(pe,{style:{width:"fit-content"},class:"ma-auto",color:"info",modelValue:l.value.aside.enabled,"onUpdate:modelValue":s[4]||(s[4]=k=>l.value.aside.enabled=k),label:"تفعيل في القائمة الجانبية"},null,8,["modelValue"]),Bl]),_:1}),a(J,null,{default:b(()=>[a(pe,{style:{width:"fit-content"},class:"ma-auto",color:"info",modelValue:l.value.about.enabled,"onUpdate:modelValue":s[5]||(s[5]=k=>l.value.about.enabled=k),label:"تفعيل في صفحة عني"},null,8,["modelValue"]),Ll]),_:1}),x("div",El,[a($,{style:{color:"white","background-color":"red","font-weight":"bold"},class:"ma-4",onClick:C},{default:b(()=>[W("اغلاق")]),_:1}),a($,{style:{color:"white","background-color":"blue","font-weight":"bold"},class:"ma-4",onClick:P},{default:b(()=>[W("موافق")]),_:1})])]),_:1})]),_:1},8,["modelValue"]),w.value.length>0?(Z(),Te(pl,{key:0,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:b(()=>[Ul,x("tbody",null,[(Z(!0),ie(le,null,Je(w.value,(k,D)=>(Z(),ie("tr",{key:k.id},[x("td",null,ee(D+1),1),x("td",null,ee(k.name.ar),1),x("td",null,ee(k.name.en),1),x("td",null,ee(k.url),1),x("td",null,ee(k.created_at),1),x("td",Nl,[a($,{onClick:Y=>d(k),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),a($,{onClick:Y=>R(k),icon:"mdi-square-edit-outline",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(Z(),ie("p",Ml,"لا توجد اي بيانات"))]),_:1})}}};export{st as default};
