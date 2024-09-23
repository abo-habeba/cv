import{p as C,l as k,m as i,c as g,a9 as S,t as m,w as I,I as R,D as p,M as w,N as x,r as A,P as N,Q as T,$ as L,S as P,U,V as $}from"./index-ChxtWFXL.js";import{m as y,b as B,T as F,a as h,U as j,P as E,D as M,f as Q,g as q,E as z,j as G,x as H,k as J}from"./VLabel-86a35s0f.js";const K=C({divider:[Number,String],...y()},"VBreadcrumbsDivider"),O=k()({name:"VBreadcrumbsDivider",props:K(),setup(e,d){let{slots:t}=d;return B(()=>{var n;return i("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=t==null?void 0:t.default)==null?void 0:n.call(t))??e.divider])}),{}}}),W=C({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...y(),...F(),...h({tag:"li"})},"VBreadcrumbsItem"),X=k()({name:"VBreadcrumbsItem",props:W(),setup(e,d){let{slots:t,attrs:n}=d;const c=j(e,n),r=g(()=>{var l;return e.active||((l=c.isActive)==null?void 0:l.value)}),u=g(()=>r.value?e.activeColor:e.color),{textColorClasses:s,textColorStyles:a}=E(u);return B(()=>i(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":r.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:r.value&&e.activeClass},s.value,e.class],style:[a.value,e.style],"aria-current":r.value?"page":void 0},{default:()=>{var l,f;return[c.isLink.value?i("a",{class:"v-breadcrumbs-item--link",href:c.href.value,"aria-current":r.value?"page":void 0,onClick:c.navigate},[((f=t.default)==null?void 0:f.call(t))??e.title]):((l=t.default)==null?void 0:l.call(t))??e.title]}})),{}}}),Y=C({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:S,items:{type:Array,default:()=>[]},...y(),...M(),...Q(),...h({tag:"ul"})},"VBreadcrumbs"),Z=k()({name:"VBreadcrumbs",props:Y(),setup(e,d){let{slots:t}=d;const{backgroundColorClasses:n,backgroundColorStyles:c}=q(m(e,"bgColor")),{densityClasses:r}=z(e),{roundedClasses:u}=G(e);I({VBreadcrumbsDivider:{divider:m(e,"divider")},VBreadcrumbsItem:{activeClass:m(e,"activeClass"),activeColor:m(e,"activeColor"),color:m(e,"color"),disabled:m(e,"disabled")}});const s=g(()=>e.items.map(a=>typeof a=="string"?{item:{title:a},raw:a}:{item:a,raw:a}));return B(()=>{const a=!!(t.prepend||e.icon);return i(e.tag,{class:["v-breadcrumbs",n.value,r.value,u.value,e.class],style:[c.value,e.style]},{default:()=>{var l;return[a&&i("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?i(J,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):i(H,{key:"prepend-icon",start:!0,icon:e.icon},null)]),s.value.map((f,o,V)=>{var _;let{item:v,raw:D}=f;return i(R,null,[((_=t.item)==null?void 0:_.call(t,{item:v,index:o}))??i(X,p({key:o,disabled:o>=V.length-1},typeof v=="string"?{title:v}:v),{default:t.title?()=>{var b;return(b=t.title)==null?void 0:b.call(t,{item:v,index:o})}:void 0}),o<V.length-1&&i(O,null,{default:t.divider?()=>{var b;return(b=t.divider)==null?void 0:b.call(t,{item:D,index:o})}:void 0})])}),(l=t.default)==null?void 0:l.call(t)]}})}),{}}}),ae={__name:"Breadcrumbs",setup(e){const d=w(),t=x(),n=A(d.getRoutes().filter(r=>r.meta&&r.meta.title)),c=g(()=>{const r=t.path.split("/").filter(s=>s);let u="";return r.map(s=>{u+=`/${s}`;const a=n.value.find(l=>l.path===u);return{text:a?a.meta.title:s.charAt(0).toUpperCase()+s.slice(1),href:u}})});return(r,u)=>{const s=N("router-link");return T(),L(Z,{items:c.value,divider:"/"},{item:P(({item:a})=>[i(s,{to:a.href},{default:P(()=>[U($(a.text),1)]),_:2},1032,["to"])]),_:1},8,["items"])}}};export{ae as _};
