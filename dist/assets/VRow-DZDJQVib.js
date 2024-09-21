import{d as v,b as y,e as g,l as $,g as j,c as h,h as ie,C as de,m as ce,a as re,r as ue,n as oe,i as ve,t as fe,q as me,u as ye,s as ge,L as be}from"./index-CPodMjtC.js";import{h as f,B as ke,v as l,p as m,$ as C,Q as x,m as Ce,j as Ve,c as V,Y as Se,a2 as he,b4 as S,b5 as A,b2 as w}from"./index-DoUa79Mj.js";import{r as Ae,l as T,f as Ie,h as Pe,b as Ne,c as Le,R as je,i as xe,e as Te,j as pe,d as _e,V as $e,g as we}from"./VBtn-ByDIVYCH.js";const Be=f()({name:"VCardActions",props:v(),setup(e,n){let{slots:t}=n;return ke({VBtn:{slim:!0,variant:"text"}}),y(()=>{var a;return l("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ee=m({opacity:[Number,String],...v(),...g()},"VCardSubtitle"),Re=f()({name:"VCardSubtitle",props:Ee(),setup(e,n){let{slots:t}=n;return y(()=>l(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Oe=Ae("v-card-title"),De=m({appendAvatar:String,appendIcon:C,prependAvatar:String,prependIcon:C,subtitle:[String,Number],title:[String,Number],...v(),...$()},"VCardItem"),Ge=f()({name:"VCardItem",props:De(),setup(e,n){let{slots:t}=n;return y(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||t.append),d=!!(e.title!=null||t.title),r=!!(e.subtitle!=null||t.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[s&&l("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?l(h,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):l(x,null,[e.prependAvatar&&l(T,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&l(j,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),l("div",{class:"v-card-item__content"},[d&&l(Oe,{key:"title"},{default:()=>{var o;return[((o=t.title)==null?void 0:o.call(t))??e.title]}}),r&&l(Re,{key:"subtitle"},{default:()=>{var o;return[((o=t.subtitle)==null?void 0:o.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),c&&l("div",{key:"append",class:"v-card-item__append"},[t.append?l(h,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):l(x,null,[e.appendIcon&&l(j,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&l(T,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Me=m({opacity:[Number,String],...v(),...g()},"VCardText"),Fe=f()({name:"VCardText",props:Me(),setup(e,n){let{slots:t}=n;return y(()=>l(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Ue=m({appendAvatar:String,appendIcon:C,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Ie(),...v(),...$(),...ie(),...Pe(),...de(),...ce(),...Ne(),...re(),...ue(),...g(),...Ce(),...Le({variant:"elevated"})},"VCard"),at=f()({name:"VCard",directives:{Ripple:je},props:Ue(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:s}=Ve(e),{borderClasses:i}=xe(e),{colorClasses:c,colorStyles:d,variantClasses:r}=Te(e),{densityClasses:u}=oe(e),{dimensionStyles:o}=ve(e),{elevationClasses:Y}=pe(e),{loaderClasses:q}=fe(e),{locationStyles:z}=me(e),{positionClasses:H}=_e(e),{roundedClasses:J}=ye(e),b=ge(e,t),Q=V(()=>e.link!==!1&&b.isLink.value),k=V(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return y(()=>{const W=Q.value?"a":e.tag,X=!!(a.title||e.title!=null),Z=!!(a.subtitle||e.subtitle!=null),ee=X||Z,te=!!(a.append||e.appendAvatar||e.appendIcon),ae=!!(a.prepend||e.prependAvatar||e.prependIcon),ne=!!(a.image||e.image),le=ee||ae||te,se=!!(a.text||e.text!=null);return Se(l(W,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},s.value,i.value,c.value,u.value,Y.value,q.value,H.value,J.value,r.value,e.class],style:[d.value,o.value,z.value,e.style],href:b.href.value,onClick:k.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var N;return[ne&&l("div",{key:"image",class:"v-card__image"},[a.image?l(h,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l($e,{key:"image-img",cover:!0,src:e.image},null)]),l(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),le&&l(Ge,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),se&&l(Fe,{key:"text"},{default:()=>{var L;return[((L=a.text)==null?void 0:L.call(a))??e.text]}}),(N=a.default)==null?void 0:N.call(a),a.actions&&l(Be,null,{default:a.actions}),we(k.value,"v-card")]}}),[[he("ripple"),k.value&&e.ripple]])}),{}}}),B=S.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),E=S.reduce((e,n)=>{const t="offset"+A(n);return e[t]={type:[String,Number],default:null},e},{}),R=S.reduce((e,n)=>{const t="order"+A(n);return e[t]={type:[String,Number],default:null},e},{}),p={col:Object.keys(B),offset:Object.keys(E),order:Object.keys(R)};function Ke(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Ye=["auto","start","end","center","baseline","stretch"],qe=m({cols:{type:[Boolean,String,Number],default:!1},...B,offset:{type:[String,Number],default:null},...E,order:{type:[String,Number],default:null},...R,alignSelf:{type:String,default:null,validator:e=>Ye.includes(e)},...v(),...g()},"VCol"),nt=f()({name:"VCol",props:qe(),setup(e,n){let{slots:t}=n;const a=V(()=>{const s=[];let i;for(i in p)p[i].forEach(d=>{const r=e[d],u=Ke(i,d,r);u&&s.push(u)});const c=s.some(d=>d.startsWith("v-col-"));return s.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return w(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),I=["start","end","center"],O=["space-between","space-around","space-evenly"];function P(e,n){return S.reduce((t,a)=>{const s=e+A(a);return t[s]=n(),t},{})}const ze=[...I,"baseline","stretch"],D=e=>ze.includes(e),G=P("align",()=>({type:String,default:null,validator:D})),He=[...I,...O],M=e=>He.includes(e),F=P("justify",()=>({type:String,default:null,validator:M})),Je=[...I,...O,"stretch"],U=e=>Je.includes(e),K=P("alignContent",()=>({type:String,default:null,validator:U})),_={align:Object.keys(G),justify:Object.keys(F),alignContent:Object.keys(K)},Qe={align:"align",justify:"justify",alignContent:"align-content"};function We(e,n,t){let a=Qe[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const Xe=m({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:D},...G,justify:{type:String,default:null,validator:M},...F,alignContent:{type:String,default:null,validator:U},...K,...v(),...g()},"VRow"),lt=f()({name:"VRow",props:Xe(),setup(e,n){let{slots:t}=n;const a=V(()=>{const s=[];let i;for(i in _)_[i].forEach(c=>{const d=e[c],r=We(i,c,d);r&&s.push(r)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return w(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}});export{at as V,Oe as a,Re as b,Fe as c,lt as d,nt as e,Be as f};
