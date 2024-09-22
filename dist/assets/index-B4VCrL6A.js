import{n as D,s as O,f as z,d as E}from"./apiService-DL5tmLvK.js";import{W as J,F as N,r as i,H as f,I as F,v as e,L as a,O as I,M as t,P as p,J as b,q as R,S as T,K as q,R as M,Q as j}from"./index-CkL1yrF3.js";import{w as H,v as g}from"./VBtn-aeKicQdE.js";import{V as S,d as K,e as y}from"./VRow-CTvI5zTP.js";import{V as P}from"./VForm-tGP27xgU.js";import{V as C}from"./VTextField-DhiU_14k.js";import{V as U}from"./VDialog-TraUWvzo.js";import{_ as Q}from"./ThemeSettings-CNXTLf4o.js";import{_ as W}from"./Breadcrumbs-9KCcXAry.js";import{V as G}from"./VTable-D-2tfF1e.js";import{V as X}from"./VContainer-D8dFrh0M.js";import"./VInput-Ch30y2bn.js";import"./forwardRefs-D3320nNK.js";import"./VOverlay-CxNd9H5J.js";import"./VSwitch-DUj_Ow0u.js";const Y={class:"ma-5"},Z={__name:"LanguageForm",emits:["runItems"],setup($,{expose:k,emit:x}){const{xs:c}=J(),v=N(),_=x,V=i(!1),m=i({}),u=i({}),o=i({});function h(){u.value={ar:"",en:""},o.value={ar:"",en:""},V.value=!1,m.value="",_("runItems")}function w(){if(!u.value.ar&&!u.value.en){D("حقل الاسم مطلوب عربي او انجليزي");return}if(!o.value.ar&&!o.value.en){D("حقل المستوي مطلوب عربي او انجليزي");return}v.loadengApi=!0;const l=new FormData;l.append("name",JSON.stringify(u.value)),l.append("level",JSON.stringify(o.value)),l.append("user_id",v.user.id),m.value.id&&l.append("_method","put"),O("languages",l,m.value.id).then(n=>{m.value=n.data,_("runItems"),h()})}const d=(l={})=>{Object.keys(l).length!==0&&(u.value=l.name,o.value=l.level),V.value=!0,m.value=l};return k({addNew:d}),(l,n)=>(f(),F("div",null,[e(H,{onClick:n[0]||(n[0]=s=>d()),color:"info",size:"35",icon:"mdi-plus-outline"}),e(U,{class:"text-center",modelValue:V.value,"onUpdate:modelValue":n[5]||(n[5]=s=>V.value=s),"max-width":"900",fullscreen:b(c)},{default:a(()=>[e(S,{class:"pa-5"},{actions:a(()=>[e(g,{onClick:h},{default:a(()=>[I(" اغلاق ")]),_:1}),e(g,{onClick:w},{default:a(()=>[I(" موافق ")]),_:1})]),default:a(()=>[t("h2",Y,p(m.value.id?"تعديل ":" اضافة "),1),e(P,null,{default:a(()=>[e(K,null,{default:a(()=>[e(y,{cols:"12",md:"6"},{default:a(()=>[e(C,{modelValue:u.value.ar,"onUpdate:modelValue":n[1]||(n[1]=s=>u.value.ar=s),label:"الاسم"},null,8,["modelValue"])]),_:1}),e(y,{cols:"12",md:"6"},{default:a(()=>[e(C,{modelValue:u.value.en,"onUpdate:modelValue":n[2]||(n[2]=s=>u.value.en=s),label:"Name"},null,8,["modelValue"])]),_:1}),e(y,{cols:"12",md:"6"},{default:a(()=>[e(C,{modelValue:o.value.ar,"onUpdate:modelValue":n[3]||(n[3]=s=>o.value.ar=s),label:"المستوي"},null,8,["modelValue"])]),_:1}),e(y,{cols:"12",md:"6"},{default:a(()=>[e(C,{modelValue:o.value.en,"onUpdate:modelValue":n[4]||(n[4]=s=>o.value.en=s),label:"Level"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","fullscreen"])]))}},ee=t("h2",{class:"ma-5"},"هل تريد حذف العنصر بالفعل",-1),le=t("thead",null,[t("tr",null,[t("th",{class:"text-center"},"#"),t("th",{class:"text-center"},"الاسم"),t("th",{class:"text-center"},"name"),t("th",{class:"text-center"},"المستوي"),t("th",{class:"text-center"},"level"),t("th",{class:"text-center"},"تاريخ الانشاء"),t("th",{class:"text-center sticky-column"},". . .")])],-1),te={class:"sticky-column"},ae={key:2,class:"text-alert"},ke={__name:"index",setup($){const k=N(),x=i(null),c=i(!1),v=i([]),_=i("");function V(d){c.value=!0,_.value=d}const m=i(null);function u(){m.value?m.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}R(()=>{o()});function o(){k.loadengApi=!0,z("languages").then(d=>{v.value=d.data,_.value=""})}function h(){k.loadengApi=!0,E("languages/delete",{id:[_.value.id]}).then(()=>{o(),c.value=!1})}const w=d=>{var l;(l=x.value)==null||l.addNew(d)};return(d,l)=>{const n=W,s=Q,B=Z;return f(),T(X,null,{default:a(()=>[e(n),e(U,{class:"text-center",modelValue:c.value,"onUpdate:modelValue":l[1]||(l[1]=r=>c.value=r),"max-width":"400",persistent:""},{default:a(()=>[e(S,{class:"pa-5"},{default:a(()=>[ee,e(g,{class:"ma-1",onClick:h},{default:a(()=>[I(" موافق ")]),_:1}),e(g,{class:"ma-1",onClick:l[0]||(l[0]=r=>c.value=!1)},{default:a(()=>[I(" اغلاق ")]),_:1})]),_:1})]),_:1},8,["modelValue"]),b(k).user?(f(),T(s,{key:0,ref_key:"dialogThemeForm",ref:m,detTheme:{nameEn:"languages",nameAr:"اللغات"},onClick:u},null,512)):q("",!0),e(B,{ref_key:"itemForm",ref:x,onRunItems:o},null,512),v.value.length>0?(f(),T(G,{key:1,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},{default:a(()=>[le,t("tbody",null,[(f(!0),F(j,null,M(v.value,(r,L)=>(f(),F("tr",{key:r.id},[t("td",null,p(L+1),1),t("td",null,p(r.name.ar),1),t("td",null,p(r.name.en),1),t("td",null,p(r.level.ar),1),t("td",null,p(r.level.en),1),t("td",null,p(r.created_at),1),t("td",te,[e(g,{onClick:A=>V(r),class:"mx-3",icon:"mdi-delete",color:"red",size:"small"},null,8,["onClick"]),e(g,{onClick:A=>w(r),icon:"mdi-square-edit-outline",color:"info",size:"small"},null,8,["onClick"])])]))),128))])]),_:1})):(f(),F("p",ae,"لا توجد اي بيانات"))]),_:1})}}};export{ke as default};
