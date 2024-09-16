import{_ as E}from"./imageInput-DrJt6mwd.js";import{s as J,n as D,f as A,d as L,_ as M}from"./ThemeSettings-DRdEUUWQ.js";import{F as $,r as i,H as y,I as b,v as e,L as a,O as w,M as t,P as d,q as j,S as N,J as q,K as H,R as K,Q as P}from"./index-CTZIvFHE.js";import{x as g}from"./forwardRefs-D4cyrmBm.js";import{e as p,V as R,d as Q}from"./VRow-B2a_pzm7.js";import{V as G}from"./VForm-lrdTen5H.js";import{V as v,a as W}from"./VTextField-CmJuGy6Y.js";import{V as B}from"./VDialog-RZ1VBsiG.js";import{_ as X}from"./ShowImages-fXT5nCn8.js";import{V as Y}from"./VTable-DgYLhXms.js";import"./VInput-BVlugDXU.js";import"./VChip-__5tyFae.js";import"./VSwitch-SKcbN60r.js";import"./VSelectionControl-BZN2FF6b.js";import"./VOverlay-SrWR4M6n.js";const Z={class:"ma-5"},ee={__name:"CredentialForm",emits:["runItems"],setup(O,{expose:I,emit:F}){const x=$(),h=F,_=i(!1),s=i({}),m=i({}),r=i({}),f=i({});function k(){m.value={ar:"",en:""},r.value={ar:"",en:""},f.value={ar:"",en:""},s.value={credential_id:"",issue_date:"",expiry_date:!1,id:null},_.value=!1,h("runItems")}function S(u){const l=new FormData;l.append("name",JSON.stringify(m.value)),l.append("issuer",JSON.stringify(r.value)),l.append("description",JSON.stringify(f.value)),l.append("credential_id",s.value.credential_id),l.append("issue_date",s.value.issue_date),l.append("expiry_date",s.value.expiry_date||""),l.append("user_id",x.user.id),u.length&&u.forEach(V=>{l.append("photos[]",V,V.name)}),s.value.id&&l.append("_method","put"),J("credentials",l,s.value.id).then(V=>{s.value=V.data,h("runItems"),k()})}const C=i(null),U=()=>{if(!m.value.ar&&!m.value.en){D("حقل الاسم مطلوب عربي او انجليزي");return}if(!r.value.ar&&!r.value.en){D("حقل اسم المنظمة مطلوب عربي او انجليزي");return}if(!s.value.issue_date){D("حقل تاريخ الاصدار مطلوب ");return}C.value&&C.value.compressImages()},c=(u={})=>{Object.keys(u).length!==0&&(m.value=u.name,r.value=u.issuer,f.value=u.description),_.value=!0,s.value=u};return I({addNew:c}),(u,l)=>{const V=E;return y(),b("div",null,[e(p,{cols:"auto"},{default:a(()=>[e(g,{onClick:l[0]||(l[0]=n=>c()),icon:"mdi-plus",color:"success",size:"small",to:""})]),_:1}),e(B,{class:"text-center",modelValue:_.value,"onUpdate:modelValue":l[10]||(l[10]=n=>_.value=n),"max-width":"900",persistent:""},{default:a(()=>[e(R,{class:"pa-5"},{actions:a(()=>[e(g,{onClick:k},{default:a(()=>[w(" اغلاق ")]),_:1}),e(g,{onClick:U},{default:a(()=>[w(" موافق ")]),_:1})]),default:a(()=>[t("h2",Z,d(s.value.id?"تعديل ":" اضافة "),1),e(G,null,{default:a(()=>[e(Q,null,{default:a(()=>[e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{modelValue:m.value.ar,"onUpdate:modelValue":l[1]||(l[1]=n=>m.value.ar=n),label:" الاسم "},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{modelValue:m.value.en,"onUpdate:modelValue":l[2]||(l[2]=n=>m.value.en=n),label:"Name"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{modelValue:r.value.ar,"onUpdate:modelValue":l[3]||(l[3]=n=>r.value.ar=n),label:" اسم المنظمة "},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{modelValue:r.value.en,"onUpdate:modelValue":l[4]||(l[4]=n=>r.value.en=n),label:"Issuer"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{modelValue:f.value.ar,"onUpdate:modelValue":l[5]||(l[5]=n=>f.value.ar=n),label:" الوصف "},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{modelValue:f.value.en,"onUpdate:modelValue":l[6]||(l[6]=n=>f.value.en=n),label:"Description"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{modelValue:s.value.credential_id,"onUpdate:modelValue":l[7]||(l[7]=n=>s.value.credential_id=n),label:"الرقم التعريفي"},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{type:"date",modelValue:s.value.issue_date,"onUpdate:modelValue":l[8]||(l[8]=n=>s.value.issue_date=n),label:"تاريخ الإصدار  "},null,8,["modelValue"])]),_:1}),e(p,{cols:"12",md:"6"},{default:a(()=>[e(v,{type:"date",modelValue:s.value.expiry_date,"onUpdate:modelValue":l[9]||(l[9]=n=>s.value.expiry_date=n),label:"تاريخ الانتهاء"},null,8,["modelValue"])]),_:1}),e(V,{ref_key:"imageInputRef",ref:C,onSaveCompressedImages:S},null,512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},le=t("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),te=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"#"),t("th",{class:"text-center"},"الاسم"),t("th",{class:"text-center"},"name"),t("th",{class:"text-center"},"اسم المنظمة"),t("th",{class:"text-center"},"issuer"),t("th",{class:"text-center"},"الوصف"),t("th",{class:"text-center"},"Description"),t("th",{class:"text-center"},"تاريخ الإصدار"),t("th",{class:"text-center"},"تاريخ انتهاء"),t("th",{class:"text-center"},"الرقم التعريفي للشهادة"),t("th",{class:"text-center"},"صورة"),t("th",{class:"text-center"},"تاريخ الإنشاء"),t("th",{class:"text-center sticky-column"},". . .")])],-1),ae={class:"sticky-column"},ne={key:2,class:"text-alert"},ke={__name:"index",setup(O){const I=$(),F=i(null),x=i(!1),h=i([]),_=i(""),s=i(null);function m(){s.value?s.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}const r=i(null),f=c=>{r.value.opaenDialog(c)};j(()=>{k()});function k(){I.loadengApi=!0,A("credentials").then(c=>{h.value=c.data,_.value=""})}function S(c){x.value=!0,_.value=c}function C(){I.loadengApi=!0,L("credentials/delete",{id:[_.value.id]}).then(()=>{k(),x.value=!1})}const U=c=>{var u;(u=F.value)==null||u.addNew(c)};return(c,u)=>{const l=M,V=X,n=ee;return y(),N(W,null,{default:a(()=>[e(B,{class:"text-center",modelValue:x.value,"onUpdate:modelValue":u[1]||(u[1]=o=>x.value=o),"max-width":"400",persistent:""},{default:a(()=>[e(R,{class:"pa-5"},{default:a(()=>[le,e(g,{class:"ma-1",onClick:C},{default:a(()=>[w(" موافق ")]),_:1}),e(g,{class:"ma-1",onClick:u[0]||(u[0]=o=>x.value=!1)},{default:a(()=>[w(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),q(I).user?(y(),N(l,{key:0,ref_key:"dialogThemeForm",ref:s,detTheme:{nameEn:"about",nameAr:"عني"},onClick:m},null,512)):H("",!0),e(V,{ref_key:"isShowImage",ref:r,onRunItems:k},null,512),e(n,{ref_key:"itemForm",ref:F,onRunItems:k},null,512),h.value.length>0?(y(),N(Y,{key:1,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:a(()=>[te,t("tbody",null,[(y(!0),b(P,null,K(h.value,(o,z)=>(y(),b("tr",{key:o.id},[t("td",null,d(z+1),1),t("td",null,d(o.name.ar),1),t("td",null,d(o.name.en),1),t("td",null,d(o.issuer.ar),1),t("td",null,d(o.issuer.en),1),t("td",null,d(o.description.ar),1),t("td",null,d(o.description.en),1),t("td",null,d(o.issue_date),1),t("td",null,d(o.expiry_date),1),t("td",null,d(o.credential_id),1),t("td",null,d(o.image),1),t("td",null,d(o.created_at),1),t("td",ae,[e(g,{onClick:T=>f(o.photos),icon:"mdi-image-edit-outline",color:"info",size:"small"},null,8,["onClick"]),e(g,{onClick:T=>S(o),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),e(g,{onClick:T=>U(o),icon:"mdi-pencil",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(y(),b("p",ne,"لا توجد اي بيانات"))]),_:1})}}};export{ke as default};
