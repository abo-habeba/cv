import{_ as h}from"./ThemeSettings-LesNxhgn.js";import{F as k,r,q as V,H as t,S as l,L as s,J as g,K as v,I as i,M as C,v as c,O as T}from"./index-Cj45gMbq.js";import"./apiService-OeeHQzji.js";import{V as y}from"./VTextField-Ih3WMRGv.js";import{w}from"./forwardRefs-CRz-KelO.js";import{V as x}from"./VContainer-BBAt2_po.js";import"./VGrid-Bm3ehBrD.js";import"./VDialog-ytawwysV.js";import"./VOverlay-CX0IGF7f.js";import"./index-BG4q5eR4.js";import"./VLabel-CjMP0Ycb.js";import"./VForm-CsBbzY6c.js";import"./VRow-c8-K2LK7.js";import"./VSwitch-CY_1rkGZ.js";import"./VSelectionControl-YB2j_w1r.js";const F={key:1,style:{"white-space":"nowrap"},dir:"rtl",class:"h"},B={key:2,class:"text-alert"},O={__name:"index",setup(S){const m=k(),u=r([]),o=r(null);function p(){o.value?o.value.opendialogThemeForm():console.error("opendialogThemeForm is not a function")}V(()=>{});const a=r("");async function d(){if(!window.contactPicker){alert("Contact Picker API غير مدعومة في هذا المتصفح.");return}try{const e=await navigator.contacts.select(["name","tel"],{multiple:!1});e.length>0&&(a.value=`${e[0].name[0]} - ${e[0].tel[0]}`)}catch(e){console.error("حدث خطأ:",e)}}return(e,n)=>{const f=h;return t(),l(x,null,{default:s(()=>[g(m).user?(t(),l(f,{key:0,ref_key:"dialogThemeForm",ref:o,detTheme:{nameEn:"about",nameAr:"عني"},onClick:p},null,512)):v("",!0),u.value.length>0?(t(),i("div",F)):(t(),i("p",B,"لا توجد اي بيانات")),C("div",null,[c(y,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=_=>a.value=_),label:"Selected Contact",readonly:""},null,8,["modelValue"]),c(w,{onClick:d},{default:s(()=>[T(" اختر جهة اتصال ")]),_:1})])]),_:1})}}};export{O as default};
