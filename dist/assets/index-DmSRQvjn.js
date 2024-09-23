import{_ as M}from"./ShowImages-CmSV2t2n.js";import{_ as q}from"./imageInput-BAGPHBaD.js";import{W as L,F as J,r as d,H as y,I as U,v as l,L as n,O as D,M as a,P as s,J as N,E as j,q as H,S as O,K,R as P,Q}from"./index-DtQcfx8t.js";import{n as F,s as W,f as G,d as X}from"./apiService-B3runN_o.js";import{x as Y,w as k}from"./VLabel-CkSFNWB7.js";import{V as R,d as Z,e as i}from"./VRow-C2DIhZLJ.js";import{V as ee}from"./VForm-BtTEtaZn.js";import{V as m}from"./VTextField-Dci2uKgt.js";import{V as A}from"./VDialog-D50NuiFB.js";import{_ as le}from"./ThemeSettings-1gkEvBRP.js";import{_ as te}from"./Breadcrumbs-SXngTK1H.js";import{V as ae}from"./VTable-X8gfVJJS.js";import{V as ne}from"./VContainer-Ck0WAG_V.js";import"./VInput-BmQlCnqx.js";import"./index-bnlhJkJd.js";import"./VChip-Cl7VGUL9.js";import"./VSelectionControl-Fxt8wUfd.js";import"./VSwitch-CZDtR7Mt.js";const oe={class:"ma-5"},se={__name:"AcademicsForm",emits:["runItems"],setup(E,{expose:b,emit:C}){const{xs:S}=L(),x=J(),I=C,V=d(!1),u=d({}),r=d({ar:"",en:""}),v=d({}),g=d({}),_=d({}),c=d({});function w(){V.value=!1,I("runItems")}function T(o){const t=new FormData;t.append("institution",JSON.stringify(r.value)),t.append("field_of_study",JSON.stringify(_.value)),t.append("description",JSON.stringify(c.value)),t.append("degree",JSON.stringify(v.value)),t.append("grade",JSON.stringify(g.value)),t.append("end_date",u.value.end_date||""),t.append("start_date",u.value.start_date),t.append("user_id",x.user.id),o.length&&o.forEach(h=>{t.append("photos[]",h,h.name)}),u.value.id&&t.append("_method","put"),W("academics",t,u.value.id).then(()=>{I("runItems"),w()})}const p=(o={})=>{Object.keys(o).length!==0&&(r.value=o.institution,v.value=o.degree,g.value=o.grade,_.value=o.field_of_study,c.value=o.description),V.value=!0,u.value=o},f=d(null),$=()=>{if(console.log("runCompressImages"),!r.value.ar&&!r.value.en){F("حقل المؤسسة التعليمية مطلوب عربي او انجليزي");return}if(!v.value.ar&&!v.value.en){F("حقل الدرجة العلمية مطلوب عربي او انجليزي");return}if(!_.value.ar&&!_.value.en){F("حقل مجال الدراسة مطلوب عربي او انجليزي");return}if(!u.value.start_date){F("حقل تاريخ البدء مطلوب ");return}f.value&&f.value.compressImages().then(o=>{T(o)})};return b({addNew:p}),(o,t)=>{const h=q;return y(),U("div",null,[l(Y,{onClick:t[0]||(t[0]=e=>p()),color:"info",size:"35",icon:"mdi-plus-outline"}),l(A,{fullscreen:N(S),class:"text-center",modelValue:V.value,"onUpdate:modelValue":t[13]||(t[13]=e=>V.value=e),"max-width":"900"},{default:n(()=>[l(R,{class:"pa-5"},{actions:n(()=>[l(k,{onClick:w},{default:n(()=>[D(" اغلاق ")]),_:1}),l(k,{onClick:$},{default:n(()=>[D(" موافق ")]),_:1})]),default:n(()=>[a("h2",oe,s(u.value.id?"تعديل ":" اضافة "),1),l(ee,null,{default:n(()=>[l(Z,null,{default:n(()=>[l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:r.value.ar,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value.ar=e),label:"المؤسسة التعليمية"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:r.value.en,"onUpdate:modelValue":t[2]||(t[2]=e=>r.value.en=e),label:"institution"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:v.value.ar,"onUpdate:modelValue":t[3]||(t[3]=e=>v.value.ar=e),label:"الدرجه العلمية"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:v.value.en,"onUpdate:modelValue":t[4]||(t[4]=e=>v.value.en=e),label:"degree"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:g.value.ar,"onUpdate:modelValue":t[5]||(t[5]=e=>g.value.ar=e),label:"التقدير"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:g.value.en,"onUpdate:modelValue":t[6]||(t[6]=e=>g.value.en=e),label:"Score"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:_.value.ar,"onUpdate:modelValue":t[7]||(t[7]=e=>_.value.ar=e),label:"مجال الدراسة"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:_.value.en,"onUpdate:modelValue":t[8]||(t[8]=e=>_.value.en=e),label:"field_of_study"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{type:"date",modelValue:u.value.start_date,"onUpdate:modelValue":t[9]||(t[9]=e=>u.value.start_date=e),label:"تاريخ البدء"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{type:"date",modelValue:u.value.end_date,"onUpdate:modelValue":t[10]||(t[10]=e=>u.value.end_date=e),label:"تاريخ الانتهاء"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:c.value.ar,"onUpdate:modelValue":t[11]||(t[11]=e=>c.value.ar=e),label:"الوصف"},null,8,["modelValue"])]),_:1}),l(i,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:c.value.en,"onUpdate:modelValue":t[12]||(t[12]=e=>c.value.en=e),label:"description"},null,8,["modelValue"])]),_:1}),l(h,{ref_key:"imageInputRef",ref:f,isMultiple:!0},null,512)]),_:1})]),_:1})]),_:1})]),_:1},8,["fullscreen","modelValue"])])}}},ue=a("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),de=a("thead",null,[a("tr",null,[a("th",{class:"text-center"},"#"),a("th",{class:"text-center"},"المؤسسة التعليمية"),a("th",{class:"text-center"},"institution"),a("th",{class:"text-center"},"الدرجة العلمية"),a("th",{class:"text-center"},"degree"),a("th",{class:"text-center"},"التقدير"),a("th",{class:"text-center"},"Score"),a("th",{class:"text-center"},"مجال الدراسة"),a("th",{class:"text-center"},"field of study"),a("th",{class:"text-center"},"تاريخ البدء"),a("th",{class:"text-center"},"تاريخ الانتهاء"),a("th",{class:"text-center"},"الوصف"),a("th",{class:"text-center"},"description"),a("th",{class:"text-center"},"تاريخ الانشاء"),a("th",{class:"text-center sticky-column"},"...")])],-1),re={class:"sticky-column"},ie={key:1,class:"text-alert"},Ue={__name:"index",setup(E){const b=j(),C=J(),S=d(null),x=d(!1),I=d([]),V=d(""),u=d(null);H(()=>{c()});const r=d(null);function v(){r.value?r.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}const g=p=>{u.value.opaenDialog(p)};function _(p){x.value=!0,V.value=p}function c(){C.loadengApi=!0,G("academics").then(p=>{I.value=p.data,V.value=""})}function w(){C.loadengApi=!0,X("academics/delete",{id:[V.value.id]}).then(()=>{c(),x.value=!1})}const T=p=>{var f;(f=S.value)==null||f.addNew(p)};return(p,f)=>{const $=te,o=le,t=se,h=M;return y(),O(ne,null,{default:n(()=>[l($),l(A,{class:"text-center",modelValue:x.value,"onUpdate:modelValue":f[1]||(f[1]=e=>x.value=e),"max-width":"400",persistent:""},{default:n(()=>[l(R,{class:"pa-5"},{default:n(()=>[ue,l(k,{class:"ma-1",onClick:w},{default:n(()=>[D(" موافق ")]),_:1}),l(k,{class:"ma-1",onClick:f[0]||(f[0]=e=>x.value=!1)},{default:n(()=>[D(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(R,{"max-width":"500px",class:"text-center my-5 mx-auto",subtitle:N(b).meta.description,title:N(b).meta.title},{append:n(()=>[N(C).user?(y(),O(o,{key:0,ref_key:"dialogThemeForm",ref:r,detTheme:{nameEn:"academics",nameAr:"التعليم",imag:!0},onClick:v},null,512)):K("",!0)]),prepend:n(()=>[l(t,{ref_key:"itemForm",ref:S,onRunItems:c},null,512)]),_:1},8,["subtitle","title"]),l(h,{ref_key:"isShowImage",ref:u,onRunItems:c},null,512),I.value.length>0?(y(),O(ae,{key:0,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:n(()=>[de,a("tbody",null,[(y(!0),U(Q,null,P(I.value,(e,z)=>(y(),U("tr",{key:e.id},[a("td",null,s(z+1),1),a("td",null,s(e.institution.ar),1),a("td",null,s(e.institution.en),1),a("td",null,s(e.degree.ar),1),a("td",null,s(e.degree.en),1),a("td",null,s(e.grade.ar),1),a("td",null,s(e.grade.en),1),a("td",null,s(e.field_of_study.ar),1),a("td",null,s(e.field_of_study.en),1),a("td",null,s(e.start_date),1),a("td",null,s(e.end_date),1),a("td",null,s(e.description.ar),1),a("td",null,s(e.description.en),1),a("td",null,s(e.created_at),1),a("td",re,[l(k,{onClick:B=>g(e.photos),icon:"mdi-image-edit-outline",color:"info",size:"small"},null,8,["onClick"]),l(k,{onClick:B=>_(e),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),l(k,{onClick:B=>T(e),icon:"mdi-square-edit-outline",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(y(),U("p",ie,"لا توجد اي بيانات"))]),_:1})}}};export{Ue as default};
