import{_ as j}from"./ShowImages-BnZjdONw.js";import{_ as q}from"./imageInput-DB73anOz.js";import{n as H,s as L,f as M,d as Q}from"./apiService-TFQ8nE3r.js";import{H as W,O as z,r as i,Q as v,R as F,m as l,S as a,U as b,Y as t,V as f,W as S,N as Y,z as G,$ as T,a2 as K,_ as P,I as X}from"./index-BncGg9FV.js";import{w as Z,x as _}from"./VGrid-nb7C4rp2.js";import{b as N,V as ee,a as x}from"./VRow-D70Kzid9.js";import{V as le}from"./VForm-f_vdGBsH.js";import{V as $}from"./VTextField-Bn--kAOx.js";import{V as B}from"./VTextarea-StayBb2q.js";import{V as E}from"./VDialog-DWLSTxjY.js";import{_ as te}from"./ThemeSettings-Cap92AIx.js";import{_ as ae}from"./Breadcrumbs-Bre_vSCV.js";import{V as oe}from"./VTable-tMJQzZv_.js";import{V as ne}from"./VContainer-BhJ3kjaz.js";import"./VInput-D67ZAAbO.js";import"./VLabel-Bec2Bxp_.js";import"./VChip-C06EaqND.js";import"./VSelectionControl-BlNThGpR.js";import"./VSwitch-BhDfgU8R.js";const se={class:"ma-5"},ue={__name:"SkillsForm",emits:["runItems"],setup(O,{expose:I,emit:g}){const{xs:y}=W(),d=z(),c=i(!1),s=i({}),u=i({}),m=i({}),k=g;function C(){u.value={ar:"",en:""},m.value={ar:"",en:""},s.value.level="",s.value.id="",c.value=!1,k("runItems")}function V(o){const e=new FormData;e.append("name",JSON.stringify(u.value)),e.append("description",JSON.stringify(m.value)),s.value.level&&e.append("level",s.value.level),console.log("item.value.level",s.value.level||null),e.append("user_id",d.user.id),console.log("userStore.user.id",d.user.id),o.length&&o.forEach(p=>{e.append("photos[]",p,p.name)}),s.value.id&&e.append("_method","put"),L("skills",e,s.value.id).then(p=>{s.value=p.data,k("runItems"),C()})}const h=i(null),D=()=>{if(!u.value.ar&&!u.value.en){H("حقل الاسم مطلوب عربي او انجليزي");return}h.value&&h.value.compressImages().then(o=>{V(o)})},w=(o={})=>{Object.keys(o).length!==0&&(u.value=o.name,m.value=o.description),c.value=!0,s.value=o};return I({addNew:w}),(o,e)=>{const p=q;return v(),F("div",null,[l(Z,{onClick:e[0]||(e[0]=n=>w()),color:"info",size:"35",icon:"mdi-plus-outline"}),l(E,{fullscreen:S(y),class:"text-center",modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=n=>c.value=n),"max-width":"900"},{default:a(()=>[l(N,{class:"pa-5"},{actions:a(()=>[l(_,{onClick:C},{default:a(()=>[b(" اغلاق ")]),_:1}),l(_,{onClick:D},{default:a(()=>[b(" موافق ")]),_:1})]),default:a(()=>[t("h2",se,f(s.value.id?"تعديل ":" اضافة "),1),l(le,null,{default:a(()=>[l(ee,null,{default:a(()=>[l(x,{cols:"12",md:"6"},{default:a(()=>[l($,{modelValue:u.value.ar,"onUpdate:modelValue":e[1]||(e[1]=n=>u.value.ar=n),label:"الاسم"},null,8,["modelValue"])]),_:1}),l(x,{cols:"12",md:"6"},{default:a(()=>[l($,{modelValue:u.value.en,"onUpdate:modelValue":e[2]||(e[2]=n=>u.value.en=n),label:"name"},null,8,["modelValue"])]),_:1}),l(x,{cols:"12",md:"6"},{default:a(()=>[l(B,{modelValue:m.value.ar,"onUpdate:modelValue":e[3]||(e[3]=n=>m.value.ar=n),label:"الوصف"},null,8,["modelValue"])]),_:1}),l(x,{cols:"12",md:"6"},{default:a(()=>[l(B,{modelValue:m.value.en,"onUpdate:modelValue":e[4]||(e[4]=n=>m.value.en=n),label:"description"},null,8,["modelValue"])]),_:1}),l(x,{cols:"12",md:"6"},{default:a(()=>[l($,{modelValue:s.value.level,"onUpdate:modelValue":e[5]||(e[5]=n=>s.value.level=n),type:"number",label:"المستوي",rules:[n=>n>=1&&n<=100||"يجب أن يكون الرقم بين 1 الي 100"]},null,8,["modelValue","rules"])]),_:1}),l(p,{ref_key:"imageInputRef",ref:h},null,512)]),_:1})]),_:1})]),_:1})]),_:1},8,["fullscreen","modelValue"])])}}},re=t("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),ie=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"#"),t("th",{class:"text-center"},"الاسم"),t("th",{class:"text-center"},"name"),t("th",{class:"text-center"},"الوصف"),t("th",{class:"text-center"},"description"),t("th",{class:"text-center"},"المستوي"),t("th",{class:"text-center"},"تاريخ الانشا"),t("th",{class:"text-center sticky-column"},". . .")])],-1),me={class:"sticky-column"},de={key:1,class:"text-alert"},$e={__name:"index",setup(O){const I=Y(),g=z(),y=i(null),d=i(!1),c=i([]),s=i(""),u=i(null);function m(){u.value?u.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}const k=i(null),C=o=>{k.value.opaenDialog(o)};G(()=>{V()});function V(){g.loadengApi=!0,M("skills").then(o=>{c.value=o.data,s.value=""})}function h(o){d.value=!0,s.value=o}function D(){g.loadengApi=!0,Q("skills/delete",{id:[s.value.id]}).then(()=>{V(),d.value=!1})}const w=o=>{var e;(e=y.value)==null||e.addNew(o)};return(o,e)=>{const p=ae,n=te,A=ue,J=j;return v(),T(ne,null,{default:a(()=>[l(p),l(E,{class:"text-center",modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=r=>d.value=r),"max-width":"400",persistent:""},{default:a(()=>[l(N,{class:"pa-5"},{default:a(()=>[re,l(_,{class:"ma-1",onClick:D},{default:a(()=>[b(" موافق ")]),_:1}),l(_,{class:"ma-1",onClick:e[0]||(e[0]=r=>d.value=!1)},{default:a(()=>[b(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(N,{"max-width":"500px",class:"text-center my-5 mx-auto",subtitle:S(I).meta.description,title:S(I).meta.title},{append:a(()=>[S(g).user?(v(),T(n,{key:0,ref_key:"dialogThemeForm",ref:u,detTheme:{nameEn:"skills",nameAr:"المهارات",h2:!0,h4:!0,imag:!0,progress:!0},onClick:m},null,512)):K("",!0)]),prepend:a(()=>[l(A,{ref_key:"itemForm",ref:y,onRunItems:V},null,512)]),_:1},8,["subtitle","title"]),l(J,{ref_key:"isShowImage",ref:k,onRunItems:V},null,512),c.value.length>0?(v(),T(oe,{key:0,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:a(()=>[ie,t("tbody",null,[(v(!0),F(X,null,P(c.value,(r,U)=>(v(),F("tr",{key:U},[t("td",null,f(U+1),1),t("td",null,f(r.name.ar),1),t("td",null,f(r.name.en),1),t("td",null,f(r.description.ar),1),t("td",null,f(r.description.en),1),t("td",null,f(r.level),1),t("td",null,f(r.created_at),1),t("td",me,[l(_,{onClick:R=>C(r.photos),icon:"mdi-image-edit-outline",color:"info",size:"small"},null,8,["onClick"]),l(_,{onClick:R=>h(r),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),l(_,{onClick:R=>w(r),icon:"mdi-square-edit-outline",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(v(),F("p",de,"لا توجد اي بيانات"))]),_:1})}}};export{$e as default};
