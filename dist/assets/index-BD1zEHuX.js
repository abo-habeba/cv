import{_ as z}from"./Breadcrumbs-SXngTK1H.js";import{F as w,D,r as u,q as H,G as N,H as i,S as v,L as t,v as e,M as l,O as a,J as x,I as y,P as d,K as R,R as j,Q as T}from"./index-DtQcfx8t.js";import{V as m,a as f,c as U,d as b,e as h,b as C}from"./VRow-C2DIhZLJ.js";import{x as _,w as F}from"./VLabel-CkSFNWB7.js";import{V as I}from"./VCheckboxBtn-CWgdRSHI.js";import{V as M}from"./VDivider-DZxxFdBi.js";import{V as $}from"./VDialog-D50NuiFB.js";import{V as q}from"./VContainer-Ck0WAG_V.js";import"./VSelectionControl-Fxt8wUfd.js";const E={class:"card-content"},G=l("span",{class:"mdi mdi-lifebuoy"},null,-1),J=l("br",null,null,-1),K=l("br",null,null,-1),O=l("br",null,null,-1),P=l("br",null,null,-1),Q={key:0,class:"text-center text-h4 ma-3"},A={class:"card-content"},L={class:"card-content"},ne={__name:"index",setup(W){const p=w(),k=D(),g=u(k.getRoutes().filter(c=>c.meta&&c.meta.show)),n=u(!1),r=u(!1);function B(){r.value&&(localStorage.hentHome=r.value),n.value=!1}return H(()=>{n.value=!localStorage.hentHome}),(c,s)=>{const S=z,V=N("router-link");return i(),v(q,null,{default:t(()=>[e($,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=o=>n.value=o)},{default:t(()=>[e(m,{class:"elevation-10 text-center card-size"},{default:t(()=>[l("div",E,[e(f,{justify:"center",color:"primary",variant:"outlined",class:"my-1 mx-1"},{default:t(()=>[G,a(" تلميح ")]),_:1}),e(U,{class:"mb-4"},{default:t(()=>[a(" ابدا باضافة بياناتك "),J,a(" عن طريق الضغط على زر "),e(_,{color:"info",size:"35",icon:"mdi-plus-outline"}),a(" داخل كل قسم. "),K,O,a(" باستخدام هذا الزر "),e(_,{color:"info",size:"35",icon:"mdi-palette-outline"}),a(" ، يمكنك التحكم في ترتيب الأقسام، وكذلك إظهارها أو إخفاءها حسب رغبتك. "),P,a(" بالإضافة إلى ذلك، يمكنك تخصيص أحجام وألوان النصوص والأزرار بسهولة. ")]),_:1}),e(I,{style:{width:"fit-content"},class:"text-center ma-auto",color:"info",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=o=>r.value=o),label:" لا تظهر التلميح مره اخري  "},null,8,["modelValue"]),e(M,{class:"my-3"}),e(F,{class:"my-3",text:"شكرا",onClick:B})])]),_:1})]),_:1},8,["modelValue"]),e(S),e(b,{justify:"end"},{default:t(()=>[l("h5",{class:"mx-2",style:{cursor:"pointer"},onClick:s[2]||(s[2]=o=>n.value=!0)},[e(_,{size:"20",class:"mdi mdi-lifebuoy"}),a(" تلميح")])]),_:1}),x(p).user?(i(),y("h1",Q,"مرحبا "+d(x(p).user.first_name.ar),1)):R("",!0),e(b,{justify:"center"},{default:t(()=>[e(h,{cols:"12"},{default:t(()=>[e(V,{to:"admin/user"},{default:t(()=>[e(m,{class:"elevation-10 text-center card-size"},{default:t(()=>[l("div",A,[e(f,{color:"primary",variant:"outlined",class:"my-1 mx-1"},{default:t(()=>[a("البيانات الشخصية")]),_:1}),e(C,{class:"mb-4"},{default:t(()=>[a(" إدارة وتحرير بياناتك الشخصية ")]),_:1})])]),_:1})]),_:1})]),_:1}),(i(!0),y(T,null,j(g.value,o=>(i(),v(h,{cols:"6",key:o},{default:t(()=>[e(V,{to:o.path},{default:t(()=>[e(m,{class:"elevation-10 text-center card-size"},{default:t(()=>[l("div",L,[e(f,{color:"primary",variant:"outlined",class:"my-1 mx-1"},{default:t(()=>[a(d(o.meta.title),1)]),_:2},1024),e(C,{class:"mb-4"},{default:t(()=>[a(d(o.meta.description),1)]),_:2},1024)])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),_:1})}}};export{ne as default};
