import{m as c,O as u,b as m}from"./VGrid-B2erfyjZ.js";import{p as h,q as g,l as f,u as y,t as b,c as _,m as r,b as s}from"./index-B_INyi6s.js";const C=h({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...c(),...g()},"VDivider"),V=f()({name:"VDivider",props:C(),setup(e,l){let{attrs:i,slots:a}=l;const{themeClasses:o}=y(e),{textColorClasses:n,textColorStyles:d}=u(b(e,"color")),v=_(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=s(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),t});return m(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,n.value,e.class],style:[v.value,d.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null);return a.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[a.default()]),t]):t}),{}}});export{V};
