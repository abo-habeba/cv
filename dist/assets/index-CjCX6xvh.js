import{F as O,r as i,q as w,U as v,H as r,S as g,L as n,v as o,O as V,M as e,I as h,R as b,Q as B,a8 as m,P as a}from"./index-DfadTX57.js";import{V as F}from"./VGrid-C3v5sTd1.js";import{w as p}from"./forwardRefs-CyqLJbN2.js";import{V as P}from"./VDialog-B6cUOWNn.js";import{V as A}from"./VTable-k1XzeAiR.js";import{V as D}from"./VContainer-B1Cu-6eB.js";import"./VOverlay-Dr-Ac-Z1.js";const E=e("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),L=e("thead",null,[e("tr",null,[e("th",{class:"text-center"},"#"),e("th",{class:"text-center"},"الاسم"),e("th",{class:"text-center"},"Name"),e("th",{class:"text-center"},"البريد الإلكتروني"),e("th",{class:"text-center"},"الهاتف"),e("th",{class:"text-center"},"الرسالة"),e("th",{class:"text-center"},"Message"),e("th",{class:"text-center"},"الموضوع"),e("th",{class:"text-center"},"Subject"),e("th",{class:"text-center"},"تاريخ الإنشاء"),e("th",{class:"text-center"})])],-1),j={key:1,class:"text-alert mt-10"},G={__name:"index",setup(M){const d=O(),k=l=>{m.success(l,{theme:"colored",position:m.POSITION.TOP_LEFT})},x=l=>{m.error(l,{theme:"colored",position:m.POSITION.TOP_LEFT})},C=i(null),c=i(!1),u=i([]),f=i("");function y(l){c.value=!0,f.value=l}w(()=>{_()});function _(){d.loadengApi=!0,v.get("contacts",u.value).then(l=>{u.value=l.data.data,d.loadengApi=!1,f.value=""}).catch(()=>{x("هناك خطا ما حاول مره اخري")})}function I(){d.loadengApi=!0,v.post("contacts/delete",{id:[f.value.id]}).then(()=>{_(),c.value=!1,d.loadengApi=!1,k(" تم الحذف")}).catch(l=>{x(l.response.data.message)})}const S=l=>{var s;(s=C.value)==null||s.addNew(l)};return(l,s)=>(r(),g(D,null,{default:n(()=>[o(P,{class:"text-center",modelValue:c.value,"onUpdate:modelValue":s[1]||(s[1]=t=>c.value=t),"max-width":"400",persistent:""},{default:n(()=>[o(F,{class:"pa-5"},{default:n(()=>[E,o(p,{class:"ma-1",onClick:I},{default:n(()=>[V(" موافق ")]),_:1}),o(p,{class:"ma-1",onClick:s[0]||(s[0]=t=>c.value=!1)},{default:n(()=>[V(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),u.value.length>0?(r(),g(A,{key:0,style:{"white-space":"nowrap"},dir:"rtl",class:"h mt-10"},{default:n(()=>[L,e("tbody",null,[(r(!0),h(B,null,b(u.value,(t,T)=>(r(),h("tr",{key:t.id},[e("td",null,a(T+1),1),e("td",null,a(t.name.ar),1),e("td",null,a(t.name.en),1),e("td",null,a(t.email),1),e("td",null,a(t.phone),1),e("td",null,a(t.message.ar),1),e("td",null,a(t.message.en),1),e("td",null,a(t.subject.ar),1),e("td",null,a(t.subject.en),1),e("td",null,a(t.created_at),1),e("td",null,[o(p,{onClick:N=>y(t),class:"ml-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),o(p,{onClick:N=>S(t),icon:"mdi-pencil",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(r(),h("p",j,"لا توجد اي بيانات"))]),_:1}))}};export{G as default};
