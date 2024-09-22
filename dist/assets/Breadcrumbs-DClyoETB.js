import{p as C,h as k,v as i,c as g,a1 as D,z as m,B as R,Q as I,x as p,D as w,E as x,r as A,G as L,H as N,S as T,L as h,O as F,P as O}from"./index-Cs96efw_.js";import{l as B,i as y,O as $,n as P,P as q,K as z,B as E,d as G,q as H,C as K,h as Q,w as U,k as j}from"./VBtn-DcRy-n2K.js";const J=C({divider:[Number,String],...B()},"VBreadcrumbsDivider"),M=k()({name:"VBreadcrumbsDivider",props:J(),setup(e,d){let{slots:t}=d;return y(()=>{var n;return i("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((n=t==null?void 0:t.default)==null?void 0:n.call(t))??e.divider])}),{}}}),W=C({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...B(),...$(),...P({tag:"li"})},"VBreadcrumbsItem"),X=k()({name:"VBreadcrumbsItem",props:W(),setup(e,d){let{slots:t,attrs:n}=d;const c=q(e,n),r=g(()=>{var l;return e.active||((l=c.isActive)==null?void 0:l.value)}),u=g(()=>r.value?e.activeColor:e.color),{textColorClasses:s,textColorStyles:a}=z(u);return y(()=>i(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":r.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:r.value&&e.activeClass},s.value,e.class],style:[a.value,e.style],"aria-current":r.value?"page":void 0},{default:()=>{var l,f;return[c.isLink.value?i("a",{class:"v-breadcrumbs-item--link",href:c.href.value,"aria-current":r.value?"page":void 0,onClick:c.navigate},[((f=t.default)==null?void 0:f.call(t))??e.title]):((l=t.default)==null?void 0:l.call(t))??e.title]}})),{}}}),Y=C({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:D,items:{type:Array,default:()=>[]},...B(),...E(),...G(),...P({tag:"ul"})},"VBreadcrumbs"),Z=k()({name:"VBreadcrumbs",props:Y(),setup(e,d){let{slots:t}=d;const{backgroundColorClasses:n,backgroundColorStyles:c}=H(m(e,"bgColor")),{densityClasses:r}=K(e),{roundedClasses:u}=Q(e);R({VBreadcrumbsDivider:{divider:m(e,"divider")},VBreadcrumbsItem:{activeClass:m(e,"activeClass"),activeColor:m(e,"activeColor"),color:m(e,"color"),disabled:m(e,"disabled")}});const s=g(()=>e.items.map(a=>typeof a=="string"?{item:{title:a},raw:a}:{item:a,raw:a}));return y(()=>{const a=!!(t.prepend||e.icon);return i(e.tag,{class:["v-breadcrumbs",n.value,r.value,u.value,e.class],style:[c.value,e.style]},{default:()=>{var l;return[a&&i("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?i(j,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):i(U,{key:"prepend-icon",start:!0,icon:e.icon},null)]),s.value.map((f,o,V)=>{var _;let{item:v,raw:S}=f;return i(I,null,[((_=t.item)==null?void 0:_.call(t,{item:v,index:o}))??i(X,p({key:o,disabled:o>=V.length-1},typeof v=="string"?{title:v}:v),{default:t.title?()=>{var b;return(b=t.title)==null?void 0:b.call(t,{item:v,index:o})}:void 0}),o<V.length-1&&i(M,null,{default:t.divider?()=>{var b;return(b=t.divider)==null?void 0:b.call(t,{item:S,index:o})}:void 0})])}),(l=t.default)==null?void 0:l.call(t)]}})}),{}}}),ae={__name:"Breadcrumbs",setup(e){const d=w(),t=x(),n=A(d.getRoutes().filter(r=>r.meta&&r.meta.title)),c=g(()=>{const r=t.path.split("/").filter(s=>s);let u="";return r.map(s=>{u+=`/${s}`;const a=n.value.find(l=>l.path===u);return{text:a?a.meta.title:s.charAt(0).toUpperCase()+s.slice(1),href:u}})});return(r,u)=>{const s=L("router-link");return N(),T(Z,{items:c.value,divider:"/"},{item:h(({item:a})=>[i(s,{to:a.href},{default:h(()=>[F(O(a.text),1)]),_:2},1032,["to"])]),_:1},8,["items"])}}};export{ae as _};
