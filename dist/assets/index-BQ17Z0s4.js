import{_ as $}from"./ThemeSettings-CcgZ38KH.js";import{_ as j}from"./Breadcrumbs-CTcUIaFV.js";import{U as z,r as d,c as L,z as M,a5 as C,W as c,a2 as A,Y as l,m as o,Z as p,$ as b,a7 as h,a1 as e,X as g,a4 as W,O as X,al as v,a8 as Y,_ as s}from"./index-vFpLgE2_.js";import{b as Z,a as F}from"./VRow-zlYzCjA-.js";import{A as i}from"./VGrid-B7eE75cB.js";import{V as q}from"./VDialog-B6NJalFf.js";import{V as G}from"./VTable-CTaVcBZe.js";import{V as H}from"./VContainer-CTjKd7Ne.js";import"./apiService-bWX6WkAy.js";import"./VTextField-BoRatFUh.js";import"./VInput-l9Uq8TgG.js";import"./VLabel-DIKjNQJ0.js";import"./VForm-WxrNBeRA.js";import"./VSwitch-fXr5Jjle.js";import"./VSelectionControl-DOpwsZG5.js";const J=e("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),K=e("thead",null,[e("tr",null,[e("th",{class:"text-center"},"#"),e("th",{class:"text-center"},"الاسم"),e("th",{class:"text-center"},"Name"),e("th",{class:"text-center"},"البريد الإلكتروني"),e("th",{class:"text-center"},"الهاتف"),e("th",{class:"text-center"},"الرسالة"),e("th",{class:"text-center"},"Message"),e("th",{class:"text-center"},"الموضوع"),e("th",{class:"text-center"},"Subject"),e("th",{class:"text-center"},"تاريخ الإنشاء"),e("th",{class:"text-center"})])],-1),Q={key:1,class:"text-alert mt-10"},R={key:2,class:"text-alert mt-10"},ge={__name:"index",setup(ee){const r=z(),w=a=>{v.success(a,{theme:"colored",position:v.POSITION.TOP_LEFT})},x=a=>{v.error(a,{theme:"colored",position:v.POSITION.TOP_LEFT})},m=d(!1),n=d([]),k=d([]),f=L(()=>k.value.filter(a=>a.read==="0")),y=d(""),u=d(!0);function I(a){m.value=!0,y.value=a}M(()=>{V()});function N(){u.value=!1,n.value=k.value}function S(){u.value=!0,console.log(f.value),n.value=f.value}function V(){r.loadengApi=!0,C.get("contacts",n.value).then(a=>{n.value=a.data.data,k.value=a.data.data,S(),r.loadengApi=!1,y.value=""}).catch(()=>{x("هناك خطا ما حاول مره اخري")})}function O(){r.loadengApi=!0,C.get("contacts-mark-all-read").then(()=>{r.user.unread_contacts_count=0,V()}).catch(()=>{x("هناك خطا ما حاول مره اخري")})}const T=d(null);function U(){T.value?T.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}function B(){r.loadengApi=!0,C.post("contacts/delete",{id:[y.value.id]}).then(()=>{V(),m.value=!1,r.loadengApi=!1,w(" تم الحذف")}).catch(a=>{x(a.response.data.message)})}return(a,_)=>{const D=j,E=$;return c(),A(H,null,{default:l(()=>[o(D),o(q,{class:"text-center",modelValue:m.value,"onUpdate:modelValue":_[1]||(_[1]=t=>m.value=t),"max-width":"400",persistent:""},{default:l(()=>[o(Z,{class:"pa-5"},{default:l(()=>[J,o(i,{class:"ma-1",onClick:B},{default:l(()=>[p(" موافق ")]),_:1}),o(i,{class:"ma-1",onClick:_[0]||(_[0]=t=>m.value=!1)},{default:l(()=>[p(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),o(F,{col:"12"},{default:l(()=>[b(r).user?(c(),A(E,{key:0,ref_key:"dialogThemeForm",ref:T,detTheme:{nameEn:"contacts",nameAr:"الرسائل"},onClick:U},null,512)):h("",!0)]),_:1}),o(F,{col:"12"},{default:l(()=>[o(i,{onClick:O,disabled:b(f).length<=0,color:b(f).length>0?"primary":"grey"},{default:l(()=>[p(" تعين الكل ك مقروء ")]),_:1},8,["disabled","color"])]),_:1}),o(F,null,{default:l(()=>[o(i,{class:"ma-1",onClick:N,color:u.value?"primary":"grey"},{default:l(()=>[p(" عرض الكل ")]),_:1},8,["color"]),o(i,{class:"ma-1",onClick:S,color:u.value?"grey":"primary"},{default:l(()=>[p(" عرض الغير مقروء ")]),_:1},8,["color"])]),_:1}),n.value.length>0?(c(),A(G,{key:0,style:{"white-space":"nowrap"},dir:"rtl",class:"h mt-10"},{default:l(()=>[K,e("tbody",null,[(c(!0),g(X,null,W(n.value,(t,P)=>(c(),g("tr",{key:t.id,style:Y({color:t.read==="0"?"#2196F3":""})},[e("td",null,s(P+1),1),e("td",null,s(t.name.ar),1),e("td",null,s(t.name.en),1),e("td",null,s(t.email),1),e("td",null,s(t.phone),1),e("td",null,s(t.message.ar),1),e("td",null,s(t.message.en),1),e("td",null,s(t.subject.ar),1),e("td",null,s(t.subject.en),1),e("td",null,s(t.created_at),1),e("td",null,[o(i,{onClick:te=>I(t),class:"ml-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"])])],4))),128))])]),_:1})):h("",!0),!u.value&&n.value.length<0?(c(),g("p",Q,"لا توجد اي رسائل")):h("",!0),u.value&&n.value.length<=0?(c(),g("p",R,"لا توجد أي رسائل غير مقروءة")):h("",!0)]),_:1})}}};export{ge as default};
