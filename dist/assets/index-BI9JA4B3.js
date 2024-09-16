import{_ as O}from"./ShowImages-fXT5nCn8.js";import{_ as A}from"./imageInput-DrJt6mwd.js";import{n as J,s as L,f as M,d as j,_ as q}from"./ThemeSettings-DRdEUUWQ.js";import{F as U,r as i,H as _,I as F,v as l,L as o,O as S,M as t,P as f,q as H,S as T,J as K,K as P,R as Q,Q as G}from"./index-CTZIvFHE.js";import{x as v}from"./forwardRefs-D4cyrmBm.js";import{e as g,V as R,d as W}from"./VRow-B2a_pzm7.js";import{V as X}from"./VForm-lrdTen5H.js";import{V as b,a as Y}from"./VTextField-CmJuGy6Y.js";import{V as $}from"./VTextarea-BGSbCik3.js";import{V as B}from"./VDialog-RZ1VBsiG.js";import{V as Z}from"./VTable-DgYLhXms.js";import"./VInput-BVlugDXU.js";import"./VChip-__5tyFae.js";import"./VSwitch-SKcbN60r.js";import"./VSelectionControl-BZN2FF6b.js";import"./VOverlay-SrWR4M6n.js";const ee={class:"ma-5"},le={__name:"SkillsForm",emits:["runItems"],setup(z,{expose:k,emit:I}){const d=U(),c=i(!1),s=i({}),u=i({}),m=i({}),h=I;function y(){u.value={ar:"",en:""},m.value={ar:"",en:""},s.value.level="",s.value.id="",c.value=!1,h("runItems")}function V(a){const e=new FormData;e.append("name",JSON.stringify(u.value)),e.append("description",JSON.stringify(m.value)),s.value.level&&e.append("level",s.value.level),console.log("item.value.level",s.value.level||null),e.append("user_id",d.user.id),console.log("userStore.user.id",d.user.id),a.length&&a.forEach(p=>{e.append("photos[]",p,p.name)}),s.value.id&&e.append("_method","put"),L("skills",e,s.value.id).then(p=>{s.value=p.data,h("runItems"),y()})}const x=i(null),w=()=>{if(!u.value.ar&&!u.value.en){J("حقل الاسم مطلوب عربي او انجليزي");return}x.value&&x.value.compressImages().then(a=>{V(a)})},C=(a={})=>{Object.keys(a).length!==0&&(u.value=a.name,m.value=a.description),c.value=!0,s.value=a};return k({addNew:C}),(a,e)=>{const p=A;return _(),F("div",null,[l(g,{cols:"auto"},{default:o(()=>[l(v,{onClick:e[0]||(e[0]=n=>C()),icon:"mdi-plus",color:"success",size:"small",to:""})]),_:1}),l(B,{class:"text-center",modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=n=>c.value=n),"max-width":"900",persistent:""},{default:o(()=>[l(R,{class:"pa-5"},{actions:o(()=>[l(v,{onClick:y},{default:o(()=>[S(" اغلاق ")]),_:1}),l(v,{onClick:w},{default:o(()=>[S(" موافق ")]),_:1})]),default:o(()=>[t("h2",ee,f(s.value.id?"تعديل ":" اضافة "),1),l(X,null,{default:o(()=>[l(W,null,{default:o(()=>[l(g,{cols:"12",md:"6"},{default:o(()=>[l(b,{modelValue:u.value.ar,"onUpdate:modelValue":e[1]||(e[1]=n=>u.value.ar=n),label:"الاسم"},null,8,["modelValue"])]),_:1}),l(g,{cols:"12",md:"6"},{default:o(()=>[l(b,{modelValue:u.value.en,"onUpdate:modelValue":e[2]||(e[2]=n=>u.value.en=n),label:"name"},null,8,["modelValue"])]),_:1}),l(g,{cols:"12",md:"6"},{default:o(()=>[l($,{modelValue:m.value.ar,"onUpdate:modelValue":e[3]||(e[3]=n=>m.value.ar=n),label:"الوصف"},null,8,["modelValue"])]),_:1}),l(g,{cols:"12",md:"6"},{default:o(()=>[l($,{modelValue:m.value.en,"onUpdate:modelValue":e[4]||(e[4]=n=>m.value.en=n),label:"description"},null,8,["modelValue"])]),_:1}),l(g,{cols:"12",md:"6"},{default:o(()=>[l(b,{modelValue:s.value.level,"onUpdate:modelValue":e[5]||(e[5]=n=>s.value.level=n),type:"number",label:"المستوي",rules:[n=>n>=1&&n<=100||"يجب أن يكون الرقم بين 1 الي 100"]},null,8,["modelValue","rules"])]),_:1}),l(p,{ref_key:"imageInputRef",ref:x},null,512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},te=t("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),ae=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"#"),t("th",{class:"text-center"},"الاسم"),t("th",{class:"text-center"},"name"),t("th",{class:"text-center"},"الوصف"),t("th",{class:"text-center"},"description"),t("th",{class:"text-center"},"المستوي"),t("th",{class:"text-center"},"تاريخ الانشا"),t("th",{class:"text-center sticky-column"},". . .")])],-1),oe={class:"sticky-column"},ne={key:2,class:"text-alert"},Ie={__name:"index",setup(z){const k=U(),I=i(null),d=i(!1),c=i([]),s=i(""),u=i(null);function m(){u.value?u.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}const h=i(null),y=a=>{h.value.opaenDialog(a)};H(()=>{V()});function V(){k.loadengApi=!0,M("skills").then(a=>{c.value=a.data,s.value=""})}function x(a){d.value=!0,s.value=a}function w(){k.loadengApi=!0,j("skills/delete",{id:[s.value.id]}).then(()=>{V(),d.value=!1})}const C=a=>{var e;(e=I.value)==null||e.addNew(a)};return(a,e)=>{const p=q,n=le,E=O;return _(),T(Y,null,{default:o(()=>[l(B,{class:"text-center",modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=r=>d.value=r),"max-width":"400",persistent:""},{default:o(()=>[l(R,{class:"pa-5"},{default:o(()=>[te,l(v,{class:"ma-1",onClick:w},{default:o(()=>[S(" موافق ")]),_:1}),l(v,{class:"ma-1",onClick:e[0]||(e[0]=r=>d.value=!1)},{default:o(()=>[S(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),K(k).user?(_(),T(p,{key:0,ref_key:"dialogThemeForm",ref:u,detTheme:{nameEn:"about",nameAr:"عني"},onClick:m},null,512)):P("",!0),l(n,{ref_key:"itemForm",ref:I,onRunItems:V},null,512),l(E,{ref_key:"isShowImage",ref:h,onRunItems:V},null,512),c.value.length>0?(_(),T(Z,{key:1,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:o(()=>[ae,t("tbody",null,[(_(!0),F(G,null,Q(c.value,(r,D)=>(_(),F("tr",{key:D},[t("td",null,f(D+1),1),t("td",null,f(r.name.ar),1),t("td",null,f(r.name.en),1),t("td",null,f(r.description.ar),1),t("td",null,f(r.description.en),1),t("td",null,f(r.level),1),t("td",null,f(r.created_at),1),t("td",oe,[l(v,{onClick:N=>y(r.photos),icon:"mdi-image-edit-outline",color:"info",size:"small"},null,8,["onClick"]),l(v,{onClick:N=>x(r),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),l(v,{onClick:N=>C(r),icon:"mdi-pencil",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(_(),F("p",ne,"لا توجد اي بيانات"))]),_:1})}}};export{Ie as default};
