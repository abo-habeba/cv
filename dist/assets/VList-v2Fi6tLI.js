import{i as U,s as G,d as K,aJ as I,af as Se,r as w,p as P,u as Y,c as v,an as he,g as Je,z as C,aa as Qe,ar as Xe,$ as T,h as x,v as d,Y as be,Z as Ye,aK as N,m as ne,l as Ze,j as ae,aL as et,a2 as tt,Q as oe,b as de,x as ve,aH as nt,aM as A,o as Ce,B as at,al as lt}from"./index-DoUa79Mj.js";import{V as it}from"./forwardRefs-ByVqR1CM.js";import{d as j,e as $,b as F,c as Z,M as st,l as ke,h as pe,a as we,r as rt,s as ut,n as Ie,i as Ve,u as Ae,g as fe,p as Pe,f as ct}from"./index-CPodMjtC.js";import{u as ot}from"./ssrBoot-DhW1gQz3.js";import{r as dt,f as Le,h as Oe,c as Be,R as vt,i as _e,e as ft,j as xe,g as yt,l as ye}from"./VBtn-ByDIVYCH.js";const ee=Symbol.for("vuetify:list");function Me(){const e=U(ee,{hasPrepend:G(!1),updateHasPrepend:()=>null}),i={hasPrepend:G(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return K(ee,i),e}function Te(){return U(ee,null)}const le=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=I(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;if(t!=null)for(const s of Se(t))a=i.activate({id:s,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},je=e=>{const i=le(e);return{activate:n=>{let{activated:l,id:a,...s}=n;a=I(a);const r=l.has(a)?new Set([a]):new Set;return i.activate({...s,id:a,activated:r})},in:(n,l,a)=>{let s=new Set;if(n!=null){const r=Se(n);r.length&&(s=i.in(r.slice(0,1),l,a))}return s},out:(n,l,a)=>i.out(n,l,a)}},mt=e=>{const i=le(e);return{activate:n=>{let{id:l,activated:a,children:s,...r}=n;return l=I(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},gt=e=>{const i=je(e);return{activate:n=>{let{id:l,activated:a,children:s,...r}=n;return l=I(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},St={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return n.delete(i),n},select:()=>null},Fe={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},ht={open:Fe.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},ie=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=I(n),e&&!l){const s=Array.from(a.entries()).reduce((r,m)=>{let[y,g]=m;return g==="on"&&r.push(y),r},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},De=e=>{const i=ie(e);return{select:n=>{let{selected:l,id:a,...s}=n;a=I(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:r})},in:(n,l,a)=>{let s=new Map;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},bt=e=>{const i=ie(e);return{select:n=>{let{id:l,selected:a,children:s,...r}=n;return l=I(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},Ct=e=>{const i=De(e);return{select:n=>{let{id:l,selected:a,children:s,...r}=n;return l=I(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},kt=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:s,parents:r}=t;n=I(n);const m=new Map(a),y=[n];for(;y.length;){const h=y.shift();a.set(h,l?"on":"off"),s.has(h)&&y.push(...s.get(h))}let g=r.get(n);for(;g;){const h=s.get(g),b=h.every(c=>a.get(c)==="on"),u=h.every(c=>!a.has(c)||a.get(c)==="off");a.set(g,b?"on":u?"off":"indeterminate"),g=r.get(g)}return e&&!l&&Array.from(a.entries()).reduce((b,u)=>{let[c,o]=u;return o==="on"&&b.push(c),b},[]).length===0?m:a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&l.push(a);return l}};return i},R=Symbol.for("vuetify:nested"),Ne={id:G(),root:{register:()=>null,unregister:()=>null,parents:w(new Map),children:w(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:w(!1),selectable:w(!1),opened:w(new Set),activated:w(new Set),selected:w(new Map),selectedValues:w([])}},pt=P({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),wt=e=>{let i=!1;const t=w(new Map),n=w(new Map),l=Y(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return mt(e.mandatory);case"single-leaf":return gt(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":default:return je(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Ct(e.mandatory);case"leaf":return bt(e.mandatory);case"independent":return ie(e.mandatory);case"single-independent":return De(e.mandatory);case"classic":default:return kt(e.mandatory)}}),r=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return ht;case"single":return St;case"multiple":default:return Fe}}),m=Y(e,"activated",e.activated,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value)),y=Y(e,"selected",e.selected,u=>s.value.in(u,t.value,n.value),u=>s.value.out(u,t.value,n.value));he(()=>{i=!0});function g(u){const c=[];let o=u;for(;o!=null;)c.unshift(o),o=n.value.get(o);return c}const h=Je("nested"),b={id:G(),root:{opened:l,activatable:C(e,"activatable"),selectable:C(e,"selectable"),activated:m,selected:y,selectedValues:v(()=>{const u=[];for(const[c,o]of y.value.entries())o==="on"&&u.push(c);return u}),register:(u,c,o)=>{c&&u!==c&&n.value.set(u,c),o&&t.value.set(u,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],u])},unregister:u=>{if(i)return;t.value.delete(u);const c=n.value.get(u);if(c){const o=t.value.get(c)??[];t.value.set(c,o.filter(f=>f!==u))}n.value.delete(u),l.value.delete(u)},open:(u,c,o)=>{h.emit("click:open",{id:u,value:c,path:g(u),event:o});const f=r.value.open({id:u,value:c,opened:new Set(l.value),children:t.value,parents:n.value,event:o});f&&(l.value=f)},openOnSelect:(u,c,o)=>{const f=r.value.select({id:u,value:c,selected:new Map(y.value),opened:new Set(l.value),children:t.value,parents:n.value,event:o});f&&(l.value=f)},select:(u,c,o)=>{h.emit("click:select",{id:u,value:c,path:g(u),event:o});const f=s.value.select({id:u,value:c,selected:new Map(y.value),children:t.value,parents:n.value,event:o});f&&(y.value=f),b.root.openOnSelect(u,c,o)},activate:(u,c,o)=>{if(!e.activatable)return b.root.select(u,!0,o);h.emit("click:activate",{id:u,value:c,path:g(u),event:o});const f=a.value.activate({id:u,value:c,activated:new Set(m.value),children:t.value,parents:n.value,event:o});f&&(m.value=f)},children:t,parents:n}};return K(R,b),b.root},Ge=(e,i)=>{const t=U(R,Ne),n=Symbol(Qe()),l=v(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(s,r)=>t.root.open(l.value,s,r),openOnSelect:(s,r)=>t.root.openOnSelect(l.value,s,r),isOpen:v(()=>t.root.opened.value.has(l.value)),parent:v(()=>t.root.parents.value.get(l.value)),activate:(s,r)=>t.root.activate(l.value,s,r),isActivated:v(()=>t.root.activated.value.has(I(l.value))),select:(s,r)=>t.root.select(l.value,s,r),isSelected:v(()=>t.root.selected.value.get(I(l.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),he(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&K(R,a),a},It=()=>{const e=U(R,Ne);K(R,{...e,isGroupActivator:!0})},Vt=Xe({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return It(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),At=P({activeColor:String,baseColor:String,color:String,collapseIcon:{type:T,default:"$collapse"},expandIcon:{type:T,default:"$expand"},prependIcon:T,appendIcon:T,fluid:Boolean,subgroup:Boolean,title:String,value:null,...j(),...$()},"VListGroup"),me=x()({name:"VListGroup",props:At(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=Ge(C(e,"value"),!0),s=v(()=>`v-list-group--id-${String(a.value)}`),r=Te(),{isBooted:m}=ot();function y(u){u.stopPropagation(),l(!n.value,u)}const g=v(()=>({onClick:y,class:"v-list-group__header",id:s.value})),h=v(()=>n.value?e.collapseIcon:e.expandIcon),b=v(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&h.value,appendIcon:e.appendIcon||!e.subgroup&&h.value,title:e.title,value:e.value}}));return F(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&d(Z,{defaults:b.value},{default:()=>[d(Vt,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),d(st,{transition:{component:it},disabled:!m.value},{default:()=>{var u;return[be(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(u=t.default)==null?void 0:u.call(t)]),[[Ye,n.value]])]}})]})),{isOpen:n}}}),Pt=P({opacity:[Number,String],...j(),...$()},"VListItemSubtitle"),Lt=x()({name:"VListItemSubtitle",props:Pt(),setup(e,i){let{slots:t}=i;return F(()=>d(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Ot=dt("v-list-item-title"),Bt=P({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:T,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:T,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:N(),onClickOnce:N(),...Le(),...j(),...ke(),...pe(),...Oe(),...we(),...rt(),...$(),...ne(),...Be({variant:"text"})},"VListItem"),ge=x()({name:"VListItem",directives:{Ripple:vt},props:Bt(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=ut(e,t),s=v(()=>e.value===void 0?a.href.value:e.value),{activate:r,isActivated:m,select:y,isSelected:g,isIndeterminate:h,isGroupActivator:b,root:u,parent:c,openOnSelect:o}=Ge(s,!1),f=Te(),L=v(()=>{var S;return e.active!==!1&&(e.active||((S=a.isActive)==null?void 0:S.value)||(u.activatable.value?m.value:g.value))}),D=v(()=>e.link!==!1&&a.isLink.value),V=v(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!f&&(u.selectable.value||u.activatable.value||e.value!=null))),B=v(()=>e.rounded||e.nav),_=v(()=>e.color??e.activeColor),H=v(()=>({color:L.value?_.value??e.baseColor:e.baseColor,variant:e.variant}));Ze(()=>{var S;return(S=a.isActive)==null?void 0:S.value},S=>{S&&c.value!=null&&u.open(c.value,!0),S&&o(S)},{immediate:!0});const{themeClasses:z}=ae(e),{borderClasses:W}=_e(e),{colorClasses:q,colorStyles:J,variantClasses:O}=ft(H),{densityClasses:k}=Ie(e),{dimensionStyles:M}=Ve(e),{elevationClasses:Ue}=xe(e),{roundedClasses:Ke}=Ae(B),He=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Q=v(()=>({isActive:L.value,select:y,isSelected:g.value,isIndeterminate:h.value}));function se(S){var E;l("click",S),V.value&&((E=a.navigate)==null||E.call(a,S),!b&&(u.activatable.value?r(!m.value,S):(u.selectable.value||e.value!=null)&&y(!g.value,S)))}function ze(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),se(S))}return F(()=>{const S=D.value?"a":e.tag,E=n.title||e.title!=null,We=n.subtitle||e.subtitle!=null,re=!!(e.appendAvatar||e.appendIcon),qe=!!(re||n.append),ue=!!(e.prependAvatar||e.prependIcon),X=!!(ue||n.prepend);return f==null||f.updateHasPrepend(X),e.activeColor&&et("active-color",["color","base-color"]),be(d(S,{class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!X&&(f==null?void 0:f.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},z.value,W.value,q.value,k.value,Ue.value,He.value,Ke.value,O.value,e.class],style:[J.value,M.value,e.style],href:a.href.value,tabindex:V.value?f?-2:0:void 0,onClick:se,onKeydown:V.value&&!D.value&&ze},{default:()=>{var ce;return[yt(V.value||L.value,"v-list-item"),X&&d("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?d(Z,{key:"prepend-defaults",disabled:!ue,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var p;return[(p=n.prepend)==null?void 0:p.call(n,Q.value)]}}):d(oe,null,[e.prependAvatar&&d(ye,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[E&&d(Ot,{key:"title"},{default:()=>{var p;return[((p=n.title)==null?void 0:p.call(n,{title:e.title}))??e.title]}}),We&&d(Lt,{key:"subtitle"},{default:()=>{var p;return[((p=n.subtitle)==null?void 0:p.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ce=n.default)==null?void 0:ce.call(n,Q.value)]),qe&&d("div",{key:"append",class:"v-list-item__append"},[n.append?d(Z,{key:"append-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var p;return[(p=n.append)==null?void 0:p.call(n,Q.value)]}}):d(oe,null,[e.appendIcon&&d(fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(ye,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[tt("ripple"),V.value&&e.ripple]])}),{activate:r,isActivated:m,isGroupActivator:b,isSelected:g,list:f,select:y}}}),_t=P({color:String,inset:Boolean,sticky:Boolean,title:String,...j(),...$()},"VListSubheader"),xt=x()({name:"VListSubheader",props:_t(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=Pe(C(e,"color"));return F(()=>{const a=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[a&&d("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Mt=P({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...j(),...ne()},"VDivider"),Tt=x()({name:"VDivider",props:Mt(),setup(e,i){let{attrs:t,slots:n}=i;const{themeClasses:l}=ae(e),{textColorClasses:a,textColorStyles:s}=Pe(C(e,"color")),r=v(()=>{const m={};return e.length&&(m[e.vertical?"height":"width"]=de(e.length)),e.thickness&&(m[e.vertical?"borderRightWidth":"borderTopWidth"]=de(e.thickness)),m});return F(()=>{const m=d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,a.value,e.class],style:[r.value,s.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null);return n.default?d("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[m,d("div",{class:"v-divider__content"},[n.default()]),m]):m}),{}}}),jt=P({items:Array,returnObject:Boolean},"VListChildren"),Re=x()({name:"VListChildren",props:jt(),setup(e,i){let{slots:t}=i;return Me(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var b,u;let{children:s,props:r,type:m,raw:y}=a;if(m==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:r}))??d(Tt,r,null);if(m==="subheader")return((u=t.subheader)==null?void 0:u.call(t,{props:r}))??d(xt,r,null);const g={subtitle:t.subtitle?c=>{var o;return(o=t.subtitle)==null?void 0:o.call(t,{...c,item:y})}:void 0,prepend:t.prepend?c=>{var o;return(o=t.prepend)==null?void 0:o.call(t,{...c,item:y})}:void 0,append:t.append?c=>{var o;return(o=t.append)==null?void 0:o.call(t,{...c,item:y})}:void 0,title:t.title?c=>{var o;return(o=t.title)==null?void 0:o.call(t,{...c,item:y})}:void 0},h=me.filterProps(r);return s?d(me,ve({value:r==null?void 0:r.value},h),{activator:c=>{let{props:o}=c;const f={...r,...o,value:e.returnObject?y:r.value};return t.header?t.header({props:f}):d(ge,f,g)},default:()=>d(Re,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:r}):d(ge,ve(r,{value:e.returnObject?y:r.value}),g)}))}}}),Ft=P({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:nt}},"list-items");function te(e,i){const t=A(i,e.itemTitle,i),n=A(i,e.itemValue,t),l=A(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?Ce(i,["children"]):i:void 0:A(i,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?$e(e,l):void 0,raw:i}}function $e(e,i){const t=[];for(const n of i)t.push(te(e,n));return t}function zt(e){const i=v(()=>$e(e,e.items)),t=v(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?te(e,s):i.value.find(r=>e.valueComparator(s,r.value))||te(e,s))}function l(a){return e.returnObject?a.map(s=>{let{raw:r}=s;return r}):a.map(s=>{let{value:r}=s;return r})}return{items:i,transformIn:n,transformOut:l}}function Dt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Nt(e,i){const t=A(i,e.itemType,"item"),n=Dt(i)?i:A(i,e.itemTitle),l=A(i,e.itemValue,void 0),a=A(i,e.itemChildren),s=e.itemProps===!0?Ce(i,["children"]):A(i,e.itemProps),r={title:n,value:l,...s};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?Ee(e,a):void 0,raw:i}}function Ee(e,i){const t=[];for(const n of i)t.push(Nt(e,n));return t}function Gt(e){return{items:v(()=>Ee(e,e.items))}}const Rt=P({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":N(),"onClick:select":N(),"onUpdate:opened":N(),...pt({selectStrategy:"single-leaf",openStrategy:"list"}),...Le(),...j(),...ke(),...pe(),...Oe(),itemType:{type:String,default:"type"},...Ft(),...we(),...$(),...ne(),...Be({variant:"text"})},"VList"),Wt=x()({name:"VList",props:Rt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Gt(e),{themeClasses:l}=ae(e),{backgroundColorClasses:a,backgroundColorStyles:s}=ct(C(e,"bgColor")),{borderClasses:r}=_e(e),{densityClasses:m}=Ie(e),{dimensionStyles:y}=Ve(e),{elevationClasses:g}=xe(e),{roundedClasses:h}=Ae(e),{children:b,open:u,parents:c,select:o}=wt(e),f=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),L=C(e,"activeColor"),D=C(e,"baseColor"),V=C(e,"color");Me(),at({VListGroup:{activeColor:L,baseColor:D,color:V,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:L,baseColor:D,color:V,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const B=G(!1),_=w();function H(k){B.value=!0}function z(k){B.value=!1}function W(k){var M;!B.value&&!(k.relatedTarget&&((M=_.value)!=null&&M.contains(k.relatedTarget)))&&O()}function q(k){const M=k.target;if(!(!_.value||["INPUT","TEXTAREA"].includes(M.tagName))){if(k.key==="ArrowDown")O("next");else if(k.key==="ArrowUp")O("prev");else if(k.key==="Home")O("first");else if(k.key==="End")O("last");else return;k.preventDefault()}}function J(k){B.value=!0}function O(k){if(_.value)return lt(_.value,k)}return F(()=>d(e.tag,{ref:_,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,r.value,m.value,g.value,f.value,h.value,e.class],style:[s.value,y.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:H,onFocusout:z,onFocus:W,onKeydown:q,onMousedown:J},{default:()=>[d(Re,{items:n.value,returnObject:e.returnObject},t)]})),{open:u,select:o,focus:O,children:b,parents:c}}});export{Wt as V,ge as a,Ot as b,Ft as m,zt as u};
