import{n as w,s as L,f as A,d as O}from"./apiService-B5u5nzJQ.js";import{F as N,r as m,H as f,I as C,v as e,L as n,O as F,M as t,P as p,q as z,S as T,J as E,K as J,R,Q as M}from"./index-BoEzT4Gr.js";import{v}from"./VBtn-v23qFlAA.js";import{e as k,V as D,d as j}from"./VRow-BzxPQaSZ.js";import{V as q}from"./VForm-Bq2qMyP-.js";import{V as y}from"./VTextField-DyXI34cL.js";import{V as S}from"./VDialog-DEKFdcKk.js";import{_ as H}from"./ThemeSettings-DFviMYQn.js";import{V as K}from"./VTable-MJdOgoLV.js";import{V as P}from"./VContainer-DzqoZwHa.js";import"./VInput-CBf0q4nF.js";import"./forwardRefs-DlZBHvxw.js";import"./VOverlay-BjGOG3U4.js";import"./VSwitch-BGb02ebQ.js";const Q={class:"ma-5"},G={__name:"LanguageForm",emits:["runItems"],setup(b,{expose:g,emit:x}){const d=N(),_=x,i=m(!1),c=m({}),o=m({}),u=m({});function V(){o.value={ar:"",en:""},u.value={ar:"",en:""},i.value=!1,c.value="",_("runItems")}function I(){if(!o.value.ar&&!o.value.en){w("حقل الاسم مطلوب عربي او انجليزي");return}if(!u.value.ar&&!u.value.en){w("حقل المستوي مطلوب عربي او انجليزي");return}d.loadengApi=!0;const a=new FormData;a.append("name",JSON.stringify(o.value)),a.append("level",JSON.stringify(u.value)),a.append("user_id",d.user.id),c.value.id&&a.append("_method","put"),L("languages",a,c.value.id).then(l=>{c.value=l.data,_("runItems"),V()})}const h=(a={})=>{Object.keys(a).length!==0&&(o.value=a.name,u.value=a.level),i.value=!0,c.value=a};return g({addNew:h}),(a,l)=>(f(),C("div",null,[e(k,{cols:"auto"},{default:n(()=>[e(v,{onClick:l[0]||(l[0]=s=>h()),icon:"mdi-plus",color:"success",size:"small",to:""})]),_:1}),e(S,{class:"text-center",modelValue:i.value,"onUpdate:modelValue":l[5]||(l[5]=s=>i.value=s),"max-width":"900",persistent:""},{default:n(()=>[e(D,{class:"pa-5"},{actions:n(()=>[e(v,{onClick:V},{default:n(()=>[F(" اغلاق ")]),_:1}),e(v,{onClick:I},{default:n(()=>[F(" موافق ")]),_:1})]),default:n(()=>[t("h2",Q,p(c.value.id?"تعديل ":" اضافة "),1),e(q,null,{default:n(()=>[e(j,null,{default:n(()=>[e(k,{cols:"12",md:"6"},{default:n(()=>[e(y,{modelValue:o.value.ar,"onUpdate:modelValue":l[1]||(l[1]=s=>o.value.ar=s),label:"الاسم"},null,8,["modelValue"])]),_:1}),e(k,{cols:"12",md:"6"},{default:n(()=>[e(y,{modelValue:o.value.en,"onUpdate:modelValue":l[2]||(l[2]=s=>o.value.en=s),label:"Name"},null,8,["modelValue"])]),_:1}),e(k,{cols:"12",md:"6"},{default:n(()=>[e(y,{modelValue:u.value.ar,"onUpdate:modelValue":l[3]||(l[3]=s=>u.value.ar=s),label:"المستوي"},null,8,["modelValue"])]),_:1}),e(k,{cols:"12",md:"6"},{default:n(()=>[e(y,{modelValue:u.value.en,"onUpdate:modelValue":l[4]||(l[4]=s=>u.value.en=s),label:"Level"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}},W=t("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),X=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"#"),t("th",{class:"text-center"},"الاسم"),t("th",{class:"text-center"},"name"),t("th",{class:"text-center"},"المستوي"),t("th",{class:"text-center"},"level"),t("th",{class:"text-center"},"تاريخ الانشاء"),t("th",{class:"text-center sticky-column"},". . .")])],-1),Y={class:"sticky-column"},Z={key:2,class:"text-alert"},pe={__name:"index",setup(b){const g=N(),x=m(null),d=m(!1),_=m([]),i=m("");function c(a){d.value=!0,i.value=a}const o=m(null);function u(){o.value?o.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}z(()=>{V()});function V(){g.loadengApi=!0,A("languages").then(a=>{_.value=a.data,i.value=""})}function I(){g.loadengApi=!0,O("languages/delete",{id:[i.value.id]}).then(()=>{V(),d.value=!1})}const h=a=>{var l;(l=x.value)==null||l.addNew(a)};return(a,l)=>{const s=H,U=G;return f(),T(P,null,{default:n(()=>[e(S,{class:"text-center",modelValue:d.value,"onUpdate:modelValue":l[1]||(l[1]=r=>d.value=r),"max-width":"400",persistent:""},{default:n(()=>[e(D,{class:"pa-5"},{default:n(()=>[W,e(v,{class:"ma-1",onClick:I},{default:n(()=>[F(" موافق ")]),_:1}),e(v,{class:"ma-1",onClick:l[0]||(l[0]=r=>d.value=!1)},{default:n(()=>[F(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),E(g).user?(f(),T(s,{key:0,ref_key:"dialogThemeForm",ref:o,detTheme:{nameEn:"languages",nameAr:"اللغات"},onClick:u},null,512)):J("",!0),e(U,{ref_key:"itemForm",ref:x,onRunItems:V},null,512),_.value.length>0?(f(),T(K,{key:1,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:n(()=>[X,t("tbody",null,[(f(!0),C(M,null,R(_.value,(r,$)=>(f(),C("tr",{key:r.id},[t("td",null,p($+1),1),t("td",null,p(r.name.ar),1),t("td",null,p(r.name.en),1),t("td",null,p(r.level.ar),1),t("td",null,p(r.level.en),1),t("td",null,p(r.created_at),1),t("td",Y,[e(v,{onClick:B=>c(r),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),e(v,{onClick:B=>h(r),icon:"mdi-pencil",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(f(),C("p",Z,"لا توجد اي بيانات"))]),_:1})}}};export{pe as default};
