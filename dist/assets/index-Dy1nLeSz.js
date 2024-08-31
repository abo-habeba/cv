import{_ as z}from"./imageInput-CnFkfPBa.js";import{s as J,n as D,f as O,d as T}from"./apiService-Beodnh_G.js";import{J as N,r as m,L as k,M as w,v as l,P as n,S as U,Q as t,T as u,q as E,V as F,U as A,F as L}from"./index-CvTNCW6j.js";import{y as x}from"./VImg-SuID-r8P.js";import{V as c,a as M,b as v}from"./VTextField-NIue9zOk.js";import{V as $,a as j}from"./VCard-CtC90-vn.js";import{V as q}from"./VForm-BlMqtkcG.js";import{V as B}from"./VDialog-B7bcmGWY.js";import{_ as P}from"./ShowImages-CIfFTsx0.js";import{V as Q}from"./VTable-Cn9bAOTX.js";import"./VInput-Du0muv8n.js";import"./forwardRefs-BHDJfBC2.js";import"./VChip-BOIknAs6.js";import"./VOverlay-CDfqK3Gf.js";import"./lazy-DWFxPyKs.js";const G={class:"ma-5"},H={__name:"CredentialForm",emits:["runItems"],setup(R,{expose:I,emit:C}){const g=N(),y=C,_=m(!1),s=m({}),r=m({}),o=m({}),p=m({});function h(){r.value={ar:"",en:""},o.value={ar:"",en:""},p.value={ar:"",en:""},s.value={credential_id:"",issue_date:"",expiry_date:!1,id:null},_.value=!1,y("runItems")}function S(i){const e=new FormData;e.append("name",JSON.stringify(r.value)),e.append("issuer",JSON.stringify(o.value)),e.append("description",JSON.stringify(p.value)),e.append("credential_id",s.value.credential_id),e.append("issue_date",s.value.issue_date),e.append("expiry_date",s.value.expiry_date||""),e.append("user_id",g.user.id),i.length&&i.forEach(V=>{e.append("photos[]",V,V.name)}),s.value.id&&e.append("_method","put"),J("credentials",e,s.value.id).then(V=>{s.value=V.data,y("runItems"),h()})}const d=m(null),f=()=>{if(!r.value.ar&&!r.value.en){D("حقل الاسم مطلوب عربي او انجليزي");return}if(!o.value.ar&&!o.value.en){D("حقل اسم المنظمة مطلوب عربي او انجليزي");return}if(!s.value.issue_date){D("حقل تاريخ الاصدار مطلوب ");return}d.value&&d.value.compressImages()},b=(i={})=>{Object.keys(i).length!==0&&(r.value=i.name,o.value=i.issuer,p.value=i.description),_.value=!0,s.value=i};return I({addNew:b}),(i,e)=>{const V=z;return k(),w("div",null,[l(c,{cols:"auto"},{default:n(()=>[l(x,{onClick:e[0]||(e[0]=a=>b()),icon:"mdi-plus",color:"success",size:"small",to:""})]),_:1}),l(B,{class:"text-center",modelValue:_.value,"onUpdate:modelValue":e[10]||(e[10]=a=>_.value=a),"max-width":"900",persistent:""},{default:n(()=>[l($,{class:"pa-5"},{actions:n(()=>[l(x,{onClick:h},{default:n(()=>[U(" اغلاق ")]),_:1}),l(x,{onClick:f},{default:n(()=>[U(" موافق ")]),_:1})]),default:n(()=>[t("h2",G,u(s.value.id?"تعديل ":" اضافة "),1),l(q,null,{default:n(()=>[l(M,null,{default:n(()=>[l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{modelValue:r.value.ar,"onUpdate:modelValue":e[1]||(e[1]=a=>r.value.ar=a),label:" الاسم "},null,8,["modelValue"])]),_:1}),l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{modelValue:r.value.en,"onUpdate:modelValue":e[2]||(e[2]=a=>r.value.en=a),label:"Name"},null,8,["modelValue"])]),_:1}),l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{modelValue:o.value.ar,"onUpdate:modelValue":e[3]||(e[3]=a=>o.value.ar=a),label:" اسم المنظمة "},null,8,["modelValue"])]),_:1}),l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{modelValue:o.value.en,"onUpdate:modelValue":e[4]||(e[4]=a=>o.value.en=a),label:"Issuer"},null,8,["modelValue"])]),_:1}),l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{modelValue:p.value.ar,"onUpdate:modelValue":e[5]||(e[5]=a=>p.value.ar=a),label:" الوصف "},null,8,["modelValue"])]),_:1}),l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{modelValue:p.value.en,"onUpdate:modelValue":e[6]||(e[6]=a=>p.value.en=a),label:"Description"},null,8,["modelValue"])]),_:1}),l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{modelValue:s.value.credential_id,"onUpdate:modelValue":e[7]||(e[7]=a=>s.value.credential_id=a),label:"الرقم التعريفي"},null,8,["modelValue"])]),_:1}),l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{type:"date",modelValue:s.value.issue_date,"onUpdate:modelValue":e[8]||(e[8]=a=>s.value.issue_date=a),label:"تاريخ الإصدار  "},null,8,["modelValue"])]),_:1}),l(c,{cols:"12",md:"6"},{default:n(()=>[l(v,{type:"date",modelValue:s.value.expiry_date,"onUpdate:modelValue":e[9]||(e[9]=a=>s.value.expiry_date=a),label:"تاريخ الانتهاء"},null,8,["modelValue"])]),_:1}),l(V,{ref_key:"imageInputRef",ref:d,onSaveCompressedImages:S},null,512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},K=t("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),W=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"#"),t("th",{class:"text-center"},"الاسم"),t("th",{class:"text-center"},"name"),t("th",{class:"text-center"},"اسم المنظمة"),t("th",{class:"text-center"},"issuer"),t("th",{class:"text-center"},"الوصف"),t("th",{class:"text-center"},"Description"),t("th",{class:"text-center"},"تاريخ الإصدار"),t("th",{class:"text-center"},"تاريخ انتهاء"),t("th",{class:"text-center"},"الرقم التعريفي للشهادة"),t("th",{class:"text-center"},"صورة"),t("th",{class:"text-center"},"تاريخ الإنشاء"),t("th",{class:"text-center sticky-column"},". . .")])],-1),X={class:"sticky-column"},Y={key:1,class:"text-alert"},fe={__name:"index",setup(R){const I=N(),C=m(null),g=m(!1),y=m([]),_=m(""),s=m(null),r=d=>{s.value.opaenDialog(d)};E(()=>{o()});function o(){I.loadengApi=!0,O("credentials").then(d=>{y.value=d.data,_.value=""})}function p(d){g.value=!0,_.value=d}function h(){I.loadengApi=!0,T("credentials/delete",{id:[_.value.id]}).then(()=>{o(),g.value=!1})}const S=d=>{var f;(f=C.value)==null||f.addNew(d)};return(d,f)=>{const b=P,i=H;return k(),F(j,null,{default:n(()=>[l(B,{class:"text-center",modelValue:g.value,"onUpdate:modelValue":f[1]||(f[1]=e=>g.value=e),"max-width":"400",persistent:""},{default:n(()=>[l($,{class:"pa-5"},{default:n(()=>[K,l(x,{class:"ma-1",onClick:h},{default:n(()=>[U(" موافق ")]),_:1}),l(x,{class:"ma-1",onClick:f[0]||(f[0]=e=>g.value=!1)},{default:n(()=>[U(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(b,{ref_key:"isShowImage",ref:s,onRunItems:o},null,512),l(i,{ref_key:"itemForm",ref:C,onRunItems:o},null,512),y.value.length>0?(k(),F(Q,{key:0,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:n(()=>[W,t("tbody",null,[(k(!0),w(L,null,A(y.value,(e,V)=>(k(),w("tr",{key:e.id},[t("td",null,u(V+1),1),t("td",null,u(e.name.ar),1),t("td",null,u(e.name.en),1),t("td",null,u(e.issuer.ar),1),t("td",null,u(e.issuer.en),1),t("td",null,u(e.description.ar),1),t("td",null,u(e.description.en),1),t("td",null,u(e.issue_date),1),t("td",null,u(e.expiry_date),1),t("td",null,u(e.credential_id),1),t("td",null,u(e.image),1),t("td",null,u(e.created_at),1),t("td",X,[l(x,{onClick:a=>r(e.photos),icon:"mdi-image-edit-outline",color:"info",size:"small"},null,8,["onClick"]),l(x,{onClick:a=>p(e),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),l(x,{onClick:a=>S(e),icon:"mdi-pencil",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(k(),w("p",Y,"لا توجد اي بيانات"))]),_:1})}}};export{fe as default};
