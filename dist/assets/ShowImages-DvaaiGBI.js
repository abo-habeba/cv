import{a as h}from"./VSwitch-WJSbuSIR.js";import{a as v,V as x}from"./VRow-DTeXBggv.js";import{E as V,V as _}from"./VGrid-C4m5_uAS.js";import{a as k}from"./VDialog-slPx5cd5.js";import{r as m,H as l,P as n,K as s,J as c,F as I,R as w,c as i,V as u}from"./index-TxWXM6nm.js";const y={key:1,class:"text-alert"},H={__name:"ShowImages",emits:["runItems"],setup(C,{expose:d,emit:p}){const r=m(!1),e=m([]),f=p,g=t=>{h("photo",t).then(()=>{e.value=e.value.filter(o=>o.id!==t),f("runItems")})};return d({opaenDialog:(t=!1)=>{e.value=t,r.value=!0}}),(t,o)=>(l(),n(k,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),"max-height":"80vh"},{default:s(()=>[e.value.length?(l(),n(v,{key:0,style:{"background-color":"#ada7a0","text-align":"center","overflow-x":"auto"}},{default:s(()=>[(l(!0),c(I,null,w(e.value,a=>(l(),n(x,{key:a,class:"d-flex child-flex"},{default:s(()=>[i(V,{"min-width":"150px","max-width":"300px",src:a.path,"aspect-ratio":"1",class:"bg-grey-lighten-2",cover:""},{default:s(()=>[i(_,{onClick:D=>g(a.id),class:"icon-delete-image",icon:"mdi-delete-outline"},null,8,["onClick"])]),_:2},1032,["src"])]),_:2},1024))),128))]),_:1})):u("",!0),e.value.length?u("",!0):(l(),c("p",y,"لا توجد صور"))]),_:1},8,["modelValue"]))}};export{H as _};
