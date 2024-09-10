import{_ as R}from"./imageInput-CnZecyl4.js";import{J,r as i,L as C,M as N,v as l,P as n,S as $,Q as t,T as u,q as A,V as D,U as T,F as E}from"./index-BMIPE2aT.js";import{n as F,s as L,f as M,d as j}from"./apiService-DJhwrnjc.js";import{z as y}from"./forwardRefs-b5Bbg4e-.js";import{a as r,V as q}from"./VRow-CPMn7zse.js";import{V as O}from"./VGrid-sGql2Pfr.js";import{V as P}from"./VForm-B4fBCeMx.js";import{V as m}from"./VTextField-CWNyIJf5.js";import{V as z}from"./VDialog-BTQm1QC_.js";import{_ as Q}from"./ShowImages-TIre7iu3.js";import{V as G}from"./VTable-8HK_GobL.js";import{V as H}from"./VContainer-C3HaojmF.js";import"./VInput-BM8s1tyJ.js";import"./index-CT7Bpyv8.js";import"./VChip-BSvqXooa.js";import"./VOverlay-C4u9Ip57.js";const K={class:"ma-5"},W={__name:"AcademicsForm",emits:["runItems"],setup(B,{expose:b,emit:S}){const k=J(),I=S,g=i(!1),d=i({}),p=i({ar:"",en:""}),v=i({}),c=i({}),V=i({}),x=i({});function f(){g.value=!1,I("runItems")}function _(s){const e=new FormData;e.append("institution",JSON.stringify(p.value)),e.append("field_of_study",JSON.stringify(V.value)),e.append("description",JSON.stringify(x.value)),e.append("degree",JSON.stringify(v.value)),e.append("grade",JSON.stringify(c.value)),e.append("end_date",d.value.end_date||""),e.append("start_date",d.value.start_date),e.append("user_id",k.user.id),s.length&&s.forEach(w=>{e.append("photos[]",w,w.name)}),d.value.id&&e.append("_method","put"),L("academics",e,d.value.id).then(()=>{I("runItems"),f()})}const h=(s={})=>{Object.keys(s).length!==0&&(p.value=s.institution,v.value=s.degree,c.value=s.grade,V.value=s.field_of_study,x.value=s.description),g.value=!0,d.value=s},U=i(null),o=()=>{if(!p.value.ar&&!p.value.en){F("حقل المؤسسة التعليمية مطلوب عربي او انجليزي");return}if(!v.value.ar&&!v.value.en){F("حقل الدرجة العلمية مطلوب عربي او انجليزي");return}if(!V.value.ar&&!V.value.en){F("حقل مجال الدراسة مطلوب عربي او انجليزي");return}if(!d.value.start_date){F("حقل تاريخ البدء مطلوب ");return}U.value&&U.value.compressImages().then(s=>{_(s)})};return b({addNew:h}),(s,e)=>{const w=R;return C(),N("div",null,[l(r,{cols:"auto"},{default:n(()=>[l(y,{onClick:e[0]||(e[0]=a=>h()),icon:"mdi-plus",color:"success",size:"small",to:""})]),_:1}),l(z,{class:"text-center",modelValue:g.value,"onUpdate:modelValue":e[13]||(e[13]=a=>g.value=a),"max-width":"900",persistent:""},{default:n(()=>[l(O,{class:"pa-5"},{actions:n(()=>[l(y,{onClick:f},{default:n(()=>[$(" اغلاق ")]),_:1}),l(y,{onClick:o},{default:n(()=>[$(" موافق ")]),_:1})]),default:n(()=>[t("h2",K,u(d.value.id?"تعديل ":" اضافة "),1),l(P,null,{default:n(()=>[l(q,null,{default:n(()=>[l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:p.value.ar,"onUpdate:modelValue":e[1]||(e[1]=a=>p.value.ar=a),label:"المؤسسة التعليمية"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:p.value.en,"onUpdate:modelValue":e[2]||(e[2]=a=>p.value.en=a),label:"institution"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:v.value.ar,"onUpdate:modelValue":e[3]||(e[3]=a=>v.value.ar=a),label:"الدرجه العلمية"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:v.value.en,"onUpdate:modelValue":e[4]||(e[4]=a=>v.value.en=a),label:"degree"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:c.value.ar,"onUpdate:modelValue":e[5]||(e[5]=a=>c.value.ar=a),label:"التقدير"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:c.value.en,"onUpdate:modelValue":e[6]||(e[6]=a=>c.value.en=a),label:"Score"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:V.value.ar,"onUpdate:modelValue":e[7]||(e[7]=a=>V.value.ar=a),label:"مجال الدراسة"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:V.value.en,"onUpdate:modelValue":e[8]||(e[8]=a=>V.value.en=a),label:"field_of_study"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{type:"date",modelValue:d.value.start_date,"onUpdate:modelValue":e[9]||(e[9]=a=>d.value.start_date=a),label:"تاريخ البدء"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{type:"date",modelValue:d.value.end_date,"onUpdate:modelValue":e[10]||(e[10]=a=>d.value.end_date=a),label:"تاريخ الانتهاء"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:x.value.ar,"onUpdate:modelValue":e[11]||(e[11]=a=>x.value.ar=a),label:"الوصف"},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:n(()=>[l(m,{modelValue:x.value.en,"onUpdate:modelValue":e[12]||(e[12]=a=>x.value.en=a),label:"description"},null,8,["modelValue"])]),_:1}),l(w,{ref_key:"imageInputRef",ref:U},null,512)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])}}},X=t("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),Y=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"#"),t("th",{class:"text-center"},"المؤسسة التعليمية"),t("th",{class:"text-center"},"institution"),t("th",{class:"text-center"},"الدرجة العلمية"),t("th",{class:"text-center"},"degree"),t("th",{class:"text-center"},"التقدير"),t("th",{class:"text-center"},"Score"),t("th",{class:"text-center"},"مجال الدراسة"),t("th",{class:"text-center"},"field of study"),t("th",{class:"text-center"},"تاريخ البدء"),t("th",{class:"text-center"},"تاريخ الانتهاء"),t("th",{class:"text-center"},"الوصف"),t("th",{class:"text-center"},"description"),t("th",{class:"text-center"},"تاريخ الانشاء"),t("th",{class:"text-center sticky-column"},"...")])],-1),Z={class:"sticky-column"},ee={key:1,class:"text-alert"},_e={__name:"index",setup(B){const b=J(),S=i(null),k=i(!1),I=i([]),g=i(""),d=i(null);A(()=>{c()});const p=f=>{d.value.opaenDialog(f)};function v(f){k.value=!0,g.value=f}function c(){b.loadengApi=!0,M("academics").then(f=>{I.value=f.data,g.value=""})}function V(){b.loadengApi=!0,j("academics/delete",{id:[g.value.id]}).then(()=>{c(),k.value=!1})}const x=f=>{var _;(_=S.value)==null||_.addNew(f)};return(f,_)=>{const h=Q,U=W;return C(),D(H,null,{default:n(()=>[l(z,{class:"text-center",modelValue:k.value,"onUpdate:modelValue":_[1]||(_[1]=o=>k.value=o),"max-width":"400",persistent:""},{default:n(()=>[l(O,{class:"pa-5"},{default:n(()=>[X,l(y,{class:"ma-1",onClick:V},{default:n(()=>[$(" موافق ")]),_:1}),l(y,{class:"ma-1",onClick:_[0]||(_[0]=o=>k.value=!1)},{default:n(()=>[$(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(h,{ref_key:"isShowImage",ref:d,onRunItems:c},null,512),l(U,{ref_key:"itemForm",ref:S,onRunItems:c},null,512),I.value.length>0?(C(),D(G,{key:0,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:n(()=>[Y,t("tbody",null,[(C(!0),N(E,null,T(I.value,(o,s)=>(C(),N("tr",{key:o.id},[t("td",null,u(s+1),1),t("td",null,u(o.institution.ar),1),t("td",null,u(o.institution.en),1),t("td",null,u(o.degree.ar),1),t("td",null,u(o.degree.en),1),t("td",null,u(o.grade.ar),1),t("td",null,u(o.grade.en),1),t("td",null,u(o.field_of_study.ar),1),t("td",null,u(o.field_of_study.en),1),t("td",null,u(o.start_date),1),t("td",null,u(o.end_date),1),t("td",null,u(o.description.ar),1),t("td",null,u(o.description.en),1),t("td",null,u(o.created_at),1),t("td",Z,[l(y,{onClick:e=>p(o.photos),icon:"mdi-image-edit-outline",color:"info",size:"small"},null,8,["onClick"]),l(y,{onClick:e=>v(o),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),l(y,{onClick:e=>x(o),icon:"mdi-pencil",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(C(),N("p",ee,"لا توجد اي بيانات"))]),_:1})}}};export{_e as default};
