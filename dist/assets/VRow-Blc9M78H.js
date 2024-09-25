import{m as v,b as y,a as g,c as ie,C as _,E as j,w as x,k as h,d as de,y as ce,e as re,a0 as ue,n as oe,o as ve,f as fe,Q as me,p as ye,R as ge,h as be,r as ke,D as Ce,z as Ve,i as Se,T as he,P as Ie,q as Ae,j as Pe,S as Ne,V as Le,U as je,s as xe}from"./VGrid-B2erfyjZ.js";import{l as f,w as Te,m as l,p as m,a9 as C,I as T,q as we,u as pe,c as V,a5 as _e,ac as Ee,b8 as S,b9 as I,b6 as E}from"./index-B_INyi6s.js";const $e=f()({name:"VCardActions",props:v(),setup(e,n){let{slots:t}=n;return Te({VBtn:{slim:!0,variant:"text"}}),y(()=>{var a;return l("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Be=m({opacity:[Number,String],...v(),...g()},"VCardSubtitle"),Re=f()({name:"VCardSubtitle",props:Be(),setup(e,n){let{slots:t}=n;return y(()=>l(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),De=ie("v-card-title"),Oe=m({appendAvatar:String,appendIcon:C,prependAvatar:String,prependIcon:C,subtitle:[String,Number],title:[String,Number],...v(),..._()},"VCardItem"),Ge=f()({name:"VCardItem",props:Oe(),setup(e,n){let{slots:t}=n;return y(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||t.append),d=!!(e.title!=null||t.title),r=!!(e.subtitle!=null||t.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[s&&l("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?l(h,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):l(T,null,[e.prependAvatar&&l(j,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&l(x,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),l("div",{class:"v-card-item__content"},[d&&l(De,{key:"title"},{default:()=>{var o;return[((o=t.title)==null?void 0:o.call(t))??e.title]}}),r&&l(Re,{key:"subtitle"},{default:()=>{var o;return[((o=t.subtitle)==null?void 0:o.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),c&&l("div",{key:"append",class:"v-card-item__append"},[t.append?l(h,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):l(T,null,[e.appendIcon&&l(x,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&l(j,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),Me=m({opacity:[Number,String],...v(),...g()},"VCardText"),Ue=f()({name:"VCardText",props:Me(),setup(e,n){let{slots:t}=n;return y(()=>l(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),Fe=m({appendAvatar:String,appendIcon:C,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:C,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...de(),...v(),..._(),...ce(),...re(),...ue(),...oe(),...ve(),...fe(),...me(),...g(),...we(),...ye({variant:"elevated"})},"VCard"),tt=f()({name:"VCard",directives:{Ripple:ge},props:Fe(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:s}=pe(e),{borderClasses:i}=be(e),{colorClasses:c,colorStyles:d,variantClasses:r}=ke(e),{densityClasses:u}=Ce(e),{dimensionStyles:o}=Ve(e),{elevationClasses:q}=Se(e),{loaderClasses:z}=he(e),{locationStyles:H}=Ie(e),{positionClasses:J}=Ae(e),{roundedClasses:Q}=Pe(e),b=Ne(e,t),W=V(()=>e.link!==!1&&b.isLink.value),k=V(()=>!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value));return y(()=>{const Y=W.value?"a":e.tag,X=!!(a.title||e.title!=null),Z=!!(a.subtitle||e.subtitle!=null),ee=X||Z,te=!!(a.append||e.appendAvatar||e.appendIcon),ae=!!(a.prepend||e.prependAvatar||e.prependIcon),ne=!!(a.image||e.image),le=ee||ae||te,se=!!(a.text||e.text!=null);return _e(l(Y,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k.value},s.value,i.value,c.value,u.value,q.value,z.value,J.value,Q.value,r.value,e.class],style:[d.value,o.value,H.value,e.style],href:b.href.value,onClick:k.value&&b.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var N;return[ne&&l("div",{key:"image",class:"v-card__image"},[a.image?l(h,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l(Le,{key:"image-img",cover:!0,src:e.image},null)]),l(je,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),le&&l(Ge,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),se&&l(Ue,{key:"text"},{default:()=>{var L;return[((L=a.text)==null?void 0:L.call(a))??e.text]}}),(N=a.default)==null?void 0:N.call(a),a.actions&&l($e,null,{default:a.actions}),xe(k.value,"v-card")]}}),[[Ee("ripple"),k.value&&e.ripple]])}),{}}}),$=S.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),B=S.reduce((e,n)=>{const t="offset"+I(n);return e[t]={type:[String,Number],default:null},e},{}),R=S.reduce((e,n)=>{const t="order"+I(n);return e[t]={type:[String,Number],default:null},e},{}),w={col:Object.keys($),offset:Object.keys(B),order:Object.keys(R)};function Ke(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const qe=["auto","start","end","center","baseline","stretch"],ze=m({cols:{type:[Boolean,String,Number],default:!1},...$,offset:{type:[String,Number],default:null},...B,order:{type:[String,Number],default:null},...R,alignSelf:{type:String,default:null,validator:e=>qe.includes(e)},...v(),...g()},"VCol"),at=f()({name:"VCol",props:ze(),setup(e,n){let{slots:t}=n;const a=V(()=>{const s=[];let i;for(i in w)w[i].forEach(d=>{const r=e[d],u=Ke(i,d,r);u&&s.push(u)});const c=s.some(d=>d.startsWith("v-col-"));return s.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return E(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),A=["start","end","center"],D=["space-between","space-around","space-evenly"];function P(e,n){return S.reduce((t,a)=>{const s=e+I(a);return t[s]=n(),t},{})}const He=[...A,"baseline","stretch"],O=e=>He.includes(e),G=P("align",()=>({type:String,default:null,validator:O})),Je=[...A,...D],M=e=>Je.includes(e),U=P("justify",()=>({type:String,default:null,validator:M})),Qe=[...A,...D,"stretch"],F=e=>Qe.includes(e),K=P("alignContent",()=>({type:String,default:null,validator:F})),p={align:Object.keys(G),justify:Object.keys(U),alignContent:Object.keys(K)},We={align:"align",justify:"justify",alignContent:"align-content"};function Ye(e,n,t){let a=We[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const Xe=m({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O},...G,justify:{type:String,default:null,validator:M},...U,alignContent:{type:String,default:null,validator:F},...K,...v(),...g()},"VRow"),nt=f()({name:"VRow",props:Xe(),setup(e,n){let{slots:t}=n;const a=V(()=>{const s=[];let i;for(i in p)p[i].forEach(c=>{const d=e[c],r=Ye(i,c,d);r&&s.push(r)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return E(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}});export{nt as V,at as a,tt as b,De as c,Re as d,Ue as e,$e as f};
