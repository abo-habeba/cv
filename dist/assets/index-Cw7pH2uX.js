import{_ as V}from"./ThemeSettings-qGqWhuyS.js";import{F as C,r as n,q as b,H as a,I as c,J as y,S as u,K as p,M as x,v as T,L as F,O as N,Q as S}from"./index-CXmFn8O1.js";import"./apiService-D1RLE6Js.js";import{V as w}from"./VTextField-W1oRzcG_.js";import{w as B}from"./forwardRefs-D-00fzee.js";import{V as U}from"./VSelect-BuU1Gbz3.js";import"./VGrid-BjSnKrFb.js";import"./VDialog-Bejhosfh.js";import"./VOverlay-DibZHTSk.js";import"./index-BWjcvxVK.js";import"./VLabel-hr7QaGLg.js";import"./VForm-BcAJk0Zk.js";import"./VRow-B6A5IfsM.js";import"./VSwitch-CAj7IEyH.js";import"./VSelectionControl-BtzpSxKz.js";import"./VList-Dj_Zfc4L.js";import"./ssrBoot-BkoMQRNo.js";import"./VMenu-DQAILyfD.js";import"./VCheckboxBtn-DYAB88vi.js";import"./VChip-BsDgm73r.js";const D={key:1,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},E={key:2,class:"text-alert"},te={__name:"index",setup(M){const f=C(),g=n([]),m=n(null);function _(){m.value?m.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}const d=n(null);b(()=>{navigator.contacts&&(d.value=!0),console.log("navigator",navigator),console.log("navigator.contacts",navigator.contacts)});const l=n(""),r=n(""),i=n([]);async function v(){try{const t=await navigator.contacts.select(["name","tel"],{multiple:!1});t.length>0&&(r.value=t[0].name[0],i.value=t[0].tel.map(e=>{let s=e.replace(/\D/g,"");const o=s.indexOf("01");return o!==-1?{number:s.substring(o),type:e}:null}).filter(e=>e!==null))}catch(t){console.error("حدث خطأ:",t)}}function h(){l.value="",r.value="",i.value=[]}function k(){}return(t,e)=>{const s=V;return a(),c(S,null,[y(f).user?(a(),u(s,{key:0,ref_key:"dialogThemeForm",ref:m,detTheme:{nameEn:"about",nameAr:"عني"},onClick:_},null,512)):p("",!0),g.value.length>0?(a(),c("div",D)):(a(),c("p",E,"لا توجد اي بيانات")),x("div",null,[T(w,{"append-icon":"mdi-close","prepend-icon":"mdi-phone","onClick:append":h,"onClick:prepend":v,type:"number",modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value=o),label:r.value?r.value:"ادخل رقم",readonly:""},null,8,["modelValue","label"]),d.value?(a(),u(B,{key:0,onClick:v},{default:F(()=>[N(" اختر جهة اتصال ")]),_:1})):p("",!0),i.value.length>0?(a(),u(U,{key:1,modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),items:i.value,"item-text":"number","item-value":"number",label:"اختر رقم الهاتف",onChange:k},null,8,["modelValue","items"])):p("",!0)])],64)}}};export{te as default};
