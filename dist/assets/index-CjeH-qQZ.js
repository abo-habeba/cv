import{n as F,s as $,f as B,d as L}from"./apiService-DJhwrnjc.js";import{J as N,r as v,L as _,M as C,v as l,P as a,S as I,Q as t,T as f,q as z,V as w,U as T,F as A}from"./index-BMIPE2aT.js";import{z as p}from"./forwardRefs-b5Bbg4e-.js";import{a as g,V as J}from"./VRow-CPMn7zse.js";import{V as U}from"./VGrid-sGql2Pfr.js";import{V as O}from"./VForm-B4fBCeMx.js";import{V as y}from"./VTextField-CWNyIJf5.js";import{V as b}from"./VDialog-BTQm1QC_.js";import{V as E}from"./VTable-8HK_GobL.js";import{V as M}from"./VContainer-C3HaojmF.js";import"./VInput-BM8s1tyJ.js";import"./index-CT7Bpyv8.js";import"./VOverlay-C4u9Ip57.js";const R={class:"ma-5"},j={__name:"LanguageForm",emits:["runItems"],setup(D,{expose:x,emit:k}){const d=N(),V=k,m=v(!1),i=v({}),n=v({}),u=v({});function h(){n.value={ar:"",en:""},u.value={ar:"",en:""},m.value=!1,i.value="",V("runItems")}function c(){if(!n.value.ar&&!n.value.en){F("حقل الاسم مطلوب عربي او انجليزي");return}if(!u.value.ar&&!u.value.en){F("حقل المستوي مطلوب عربي او انجليزي");return}d.loadengApi=!0;const s=new FormData;s.append("name",JSON.stringify(n.value)),s.append("level",JSON.stringify(u.value)),s.append("user_id",d.user.id),i.value.id&&s.append("_method","put"),$("languages",s,i.value.id).then(e=>{i.value=e.data,V("runItems"),h()})}const r=(s={})=>{Object.keys(s).length!==0&&(n.value=s.name,u.value=s.level),m.value=!0,i.value=s};return x({addNew:r}),(s,e)=>(_(),C("div",null,[l(g,{cols:"auto"},{default:a(()=>[l(p,{onClick:e[0]||(e[0]=o=>r()),icon:"mdi-plus",color:"success",size:"small",to:""})]),_:1}),l(b,{class:"text-center",modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=o=>m.value=o),"max-width":"900",persistent:""},{default:a(()=>[l(U,{class:"pa-5"},{actions:a(()=>[l(p,{onClick:h},{default:a(()=>[I(" اغلاق ")]),_:1}),l(p,{onClick:c},{default:a(()=>[I(" موافق ")]),_:1})]),default:a(()=>[t("h2",R,f(i.value.id?"تعديل ":" اضافة "),1),l(O,null,{default:a(()=>[l(J,null,{default:a(()=>[l(g,{cols:"12",md:"6"},{default:a(()=>[l(y,{modelValue:n.value.ar,"onUpdate:modelValue":e[1]||(e[1]=o=>n.value.ar=o),label:"الاسم"},null,8,["modelValue"])]),_:1}),l(g,{cols:"12",md:"6"},{default:a(()=>[l(y,{modelValue:n.value.en,"onUpdate:modelValue":e[2]||(e[2]=o=>n.value.en=o),label:"Name"},null,8,["modelValue"])]),_:1}),l(g,{cols:"12",md:"6"},{default:a(()=>[l(y,{modelValue:u.value.ar,"onUpdate:modelValue":e[3]||(e[3]=o=>u.value.ar=o),label:"المستوي"},null,8,["modelValue"])]),_:1}),l(g,{cols:"12",md:"6"},{default:a(()=>[l(y,{modelValue:u.value.en,"onUpdate:modelValue":e[4]||(e[4]=o=>u.value.en=o),label:"Level"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},q=t("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),P=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"#"),t("th",{class:"text-center"},"الاسم"),t("th",{class:"text-center"},"name"),t("th",{class:"text-center"},"المستوي"),t("th",{class:"text-center"},"level"),t("th",{class:"text-center"},"تاريخ الانشاء"),t("th",{class:"text-center sticky-column"},". . .")])],-1),Q={class:"sticky-column"},G={key:1,class:"text-alert"},ue={__name:"index",setup(D){const x=N(),k=v(null),d=v(!1),V=v([]),m=v("");function i(c){d.value=!0,m.value=c}z(()=>{n()});function n(){x.loadengApi=!0,B("languages").then(c=>{V.value=c.data,m.value=""})}function u(){x.loadengApi=!0,L("languages/delete",{id:[m.value.id]}).then(()=>{n(),d.value=!1})}const h=c=>{var r;(r=k.value)==null||r.addNew(c)};return(c,r)=>{const s=j;return _(),w(M,null,{default:a(()=>[l(b,{class:"text-center",modelValue:d.value,"onUpdate:modelValue":r[1]||(r[1]=e=>d.value=e),"max-width":"400",persistent:""},{default:a(()=>[l(U,{class:"pa-5"},{default:a(()=>[q,l(p,{class:"ma-1",onClick:u},{default:a(()=>[I(" موافق ")]),_:1}),l(p,{class:"ma-1",onClick:r[0]||(r[0]=e=>d.value=!1)},{default:a(()=>[I(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(s,{ref_key:"itemForm",ref:k,onRunItems:n},null,512),V.value.length>0?(_(),w(E,{key:0,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:a(()=>[P,t("tbody",null,[(_(!0),C(A,null,T(V.value,(e,o)=>(_(),C("tr",{key:e.id},[t("td",null,f(o+1),1),t("td",null,f(e.name.ar),1),t("td",null,f(e.name.en),1),t("td",null,f(e.level.ar),1),t("td",null,f(e.level.en),1),t("td",null,f(e.created_at),1),t("td",Q,[l(p,{onClick:S=>i(e),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),l(p,{onClick:S=>h(e),icon:"mdi-pencil",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(_(),C("p",G,"لا توجد اي بيانات"))]),_:1})}}};export{ue as default};
