import{p as s,q as g,i as d,E as x,n as p,k as V,r as z,z as J,s as Y,Z,b as G,c as K,d as Q,H as U,e as W,R as X,v as $,g as ee,F as ae,A as te,w as ne,l as le,Y as ie,f as se,h as de,J as ce,x as re,L as ue,j as oe}from"./VImg-DcZmsifI.js";import{p as r,h as c,C as ve,v as n,D as me,a5 as y,F as h,m as ye,j as ge,c as P,_ as ke,a4 as be}from"./index-DlKBL2qu.js";import{c as fe,V as S}from"./forwardRefs-CMpIl6yz.js";const Ce=r({fluid:{type:Boolean,default:!1},...s(),...g()},"VContainer"),_e=c()({name:"VContainer",props:Ce(),setup(e,l){let{slots:t}=l;const{rtlClasses:a}=ve();return d(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),Ve=c()({name:"VCardActions",props:s(),setup(e,l){let{slots:t}=l;return me({VBtn:{slim:!0,variant:"text"}}),d(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=r({opacity:[Number,String],...s(),...g()},"VCardSubtitle"),Ae=c()({name:"VCardSubtitle",props:Ie(),setup(e,l){let{slots:t}=l;return d(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),pe=fe("v-card-title"),he=r({appendAvatar:String,appendIcon:y,prependAvatar:String,prependIcon:y,subtitle:[String,Number],title:[String,Number],...s(),...x()},"VCardItem"),Pe=c()({name:"VCardItem",props:he(),setup(e,l){let{slots:t}=l;return d(()=>{var o;const a=!!(e.prependAvatar||e.prependIcon),k=!!(a||t.prepend),u=!!(e.appendAvatar||e.appendIcon),b=!!(u||t.append),f=!!(e.title!=null||t.title),C=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[k&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(h,null,[e.prependAvatar&&n(S,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(p,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[f&&n(pe,{key:"title"},{default:()=>{var i;return[((i=t.title)==null?void 0:i.call(t))??e.title]}}),C&&n(Ae,{key:"subtitle"},{default:()=>{var i;return[((i=t.subtitle)==null?void 0:i.call(t))??e.subtitle]}}),(o=t.default)==null?void 0:o.call(t)]),b&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(h,null,[e.appendIcon&&n(p,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(S,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Se=r({opacity:[Number,String],...s(),...g()},"VCardText"),xe=c()({name:"VCardText",props:Se(),setup(e,l){let{slots:t}=l;return d(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Te=r({appendAvatar:String,appendIcon:y,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:y,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...z(),...s(),...x(),...J(),...Y(),...Z(),...G(),...K(),...Q(),...U(),...g(),...ye(),...W({variant:"elevated"})},"VCard"),Ne=c()({name:"VCard",directives:{Ripple:X},props:Te(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:k}=ge(e),{borderClasses:u}=$(e),{colorClasses:b,colorStyles:f,variantClasses:C}=ee(e),{densityClasses:o}=ae(e),{dimensionStyles:i}=te(e),{elevationClasses:T}=ne(e),{loaderClasses:B}=le(e),{locationStyles:D}=ie(e),{positionClasses:L}=se(e),{roundedClasses:_}=de(e),v=ce(e,t),N=P(()=>e.link!==!1&&v.isLink.value),m=P(()=>!e.disabled&&e.link!==!1&&(e.link||v.isClickable.value));return d(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),j=!!(a.subtitle||e.subtitle!=null),E=F||j,w=!!(a.append||e.appendAvatar||e.appendIcon),H=!!(a.prepend||e.prependAvatar||e.prependIcon),M=!!(a.image||e.image),O=E||H||w,q=!!(a.text||e.text!=null);return ke(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":m.value},k.value,u.value,b.value,o.value,T.value,B.value,L.value,_.value,C.value,e.class],style:[f.value,i.value,D.value,e.style],href:v.href.value,onClick:m.value&&v.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var I;return[M&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(re,{key:"image-img",cover:!0,src:e.image},null)]),n(ue,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),O&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&n(xe,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ve,null,{default:a.actions}),oe(m.value,"v-card")]}}),[[be("ripple"),m.value&&e.ripple]])}),{}}});export{Ne as V,_e as a,Ae as b,xe as c};
