import{_ as w}from"./ThemeSettings-C9Kh93Up.js";import{_ as A}from"./Breadcrumbs-we7SAN3u.js";import{O as D,r as i,z as E,a0 as V,Q as n,$ as h,S as r,m as o,U as k,W as $,a2 as j,Y as e,R as g,_ as P,I as z,aj as m,V as l}from"./index-ChxtWFXL.js";import{V as L}from"./VRow-ikdiUNEE.js";import{y as p}from"./VLabel-86a35s0f.js";import{V as U}from"./VDialog-oLnl67xC.js";import{V as M}from"./VTable-DYUb71zL.js";import{V as q}from"./VContainer-BTGkOpRJ.js";import"./apiService-D_ifhQ_Q.js";import"./VTextField-dYthJQMR.js";import"./index-CUSXw9Lg.js";import"./VInput-B2xPres-.js";import"./VForm-DH_37C_x.js";import"./VSwitch-Nb1fgJoj.js";import"./VSelectionControl-CYwPMwAT.js";const Q=e("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),R=e("thead",null,[e("tr",null,[e("th",{class:"text-center"},"#"),e("th",{class:"text-center"},"الاسم"),e("th",{class:"text-center"},"Name"),e("th",{class:"text-center"},"البريد الإلكتروني"),e("th",{class:"text-center"},"الهاتف"),e("th",{class:"text-center"},"الرسالة"),e("th",{class:"text-center"},"Message"),e("th",{class:"text-center"},"الموضوع"),e("th",{class:"text-center"},"Subject"),e("th",{class:"text-center"},"تاريخ الإنشاء"),e("th",{class:"text-center"})])],-1),W={key:2,class:"text-alert mt-10"},ue={__name:"index",setup(Y){const c=D(),T=a=>{m.success(a,{theme:"colored",position:m.POSITION.TOP_LEFT})},x=a=>{m.error(a,{theme:"colored",position:m.POSITION.TOP_LEFT})},y=i(null),u=i(!1),d=i([]),f=i("");function C(a){u.value=!0,f.value=a}E(()=>{v()});function v(){c.loadengApi=!0,V.get("contacts",d.value).then(a=>{d.value=a.data.data,c.loadengApi=!1,f.value=""}).catch(()=>{x("هناك خطا ما حاول مره اخري")})}const _=i(null);function F(){_.value?_.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}function S(){c.loadengApi=!0,V.post("contacts/delete",{id:[f.value.id]}).then(()=>{v(),u.value=!1,c.loadengApi=!1,T(" تم الحذف")}).catch(a=>{x(a.response.data.message)})}const I=a=>{var s;(s=y.value)==null||s.addNew(a)};return(a,s)=>{const N=A,O=w;return n(),h(q,null,{default:r(()=>[o(N),o(U,{class:"text-center",modelValue:u.value,"onUpdate:modelValue":s[1]||(s[1]=t=>u.value=t),"max-width":"400",persistent:""},{default:r(()=>[o(L,{class:"pa-5"},{default:r(()=>[Q,o(p,{class:"ma-1",onClick:S},{default:r(()=>[k(" موافق ")]),_:1}),o(p,{class:"ma-1",onClick:s[0]||(s[0]=t=>u.value=!1)},{default:r(()=>[k(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),$(c).user?(n(),h(O,{key:0,ref_key:"dialogThemeForm",ref:_,detTheme:{nameEn:"contacts",nameAr:"الرسائل"},onClick:F},null,512)):j("",!0),d.value.length>0?(n(),h(M,{key:1,style:{"white-space":"nowrap"},dir:"rtl",class:"h mt-10"},{default:r(()=>[R,e("tbody",null,[(n(!0),g(z,null,P(d.value,(t,b)=>(n(),g("tr",{key:t.id},[e("td",null,l(b+1),1),e("td",null,l(t.name.ar),1),e("td",null,l(t.name.en),1),e("td",null,l(t.email),1),e("td",null,l(t.phone),1),e("td",null,l(t.message.ar),1),e("td",null,l(t.message.en),1),e("td",null,l(t.subject.ar),1),e("td",null,l(t.subject.en),1),e("td",null,l(t.created_at),1),e("td",null,[o(p,{onClick:B=>C(t),class:"ml-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),o(p,{onClick:B=>I(t),icon:"mdi-square-edit-outline",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(n(),g("p",W,"لا توجد اي رسائل"))]),_:1})}}};export{ue as default};
