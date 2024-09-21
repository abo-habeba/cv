import{r as $,h as z,b as D,c as L,e as j,j as p,d as F,g as R,k as w}from"./VBtn-ByDIVYCH.js";import{d as E,l as O,h as q,m as M,a as N,e as G,n as H,i as J,q as K,u as Q,p as U,g as W,c as d}from"./index-CPodMjtC.js";import{p as X,$ as Y,m as Z,h as ee,u as ae,c as o,j as te,z as le,a7 as ne,v as t,x as se}from"./index-DoUa79Mj.js";const oe=$("v-alert-title"),re=["success","info","warning","error"],ie=X({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Y,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...E(),...O(),...q(),...z(),...M(),...D(),...N(),...G(),...Z(),...L({variant:"flat"})},"VAlert"),ve=ee()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=ae(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=te(e),{colorClasses:k,colorStyles:b,variantClasses:P}=j(y),{densityClasses:V}=H(e),{dimensionStyles:C}=J(e),{elevationClasses:g}=p(e),{locationStyles:x}=K(e),{positionClasses:S}=F(e),{roundedClasses:_}=Q(e),{textColorClasses:h,textColorStyles:B}=U(le(e,"borderColor")),{t:T}=ne(),i=o(()=>({"aria-label":T(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),A=!!(a.title||e.title),I=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,k.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[b.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[R(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",h.value],style:B.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(W,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[A&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),I&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(w,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{ve as V};
