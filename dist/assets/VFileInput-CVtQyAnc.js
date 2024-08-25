import{c as X,f as Y,d as Z,e as ee}from"./VTextField-DxDKN-pA.js";import{m as le,u as te,V as B}from"./VInput-68thhHEQ.js";import{k as ne}from"./VBtn-CcYQ1lSM.js";import{p as ae,a9 as M,h as ue,a6 as ie,u as oe,c as r,ah as x,r as h,l as re,A as se,v as u,x as V,F as k,n as ce,ai as de}from"./index-9PVhDJqA.js";import{b as fe}from"./VChip-DKyZdwSR.js";import{u as ve}from"./VIcon-C79UM_55.js";const me=ae({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,showSize:{type:[Boolean,Number,String],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(Number(e))},...le({prependIcon:"$file"}),modelValue:{type:[Array,Object],default:e=>e.multiple?[]:null,validator:e=>M(e).every(f=>f!=null&&typeof f=="object")},...X({clearable:!0})},"VFileInput"),Ie=ue()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:N,emit:C,slots:n}=f;const{t:g}=ie(),a=oe(e,"modelValue",e.modelValue,l=>M(l),l=>e.multiple||Array.isArray(e.modelValue)?l:l[0]??null),{isFocused:v,focus:$,blur:D}=te(e),I=r(()=>typeof e.showSize!="boolean"?e.showSize:void 0),b=r(()=>(a.value??[]).reduce((l,t)=>{let{size:s=0}=t;return l+s},0)),F=r(()=>x(b.value,I.value)),p=r(()=>(a.value??[]).map(l=>{const{name:t="",size:s=0}=l;return e.showSize?`${t} (${x(s,I.value)})`:t})),j=r(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?g(e.counterSizeString,l,F.value):g(e.counterString,l)}),S=h(),P=h(),i=h(),E=r(()=>v.value||e.active),A=r(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||$()}function O(l){var t;(t=i.value)==null||t.click()}function U(l){C("mousedown:control",l)}function L(l){var t;(t=i.value)==null||t.click(),C("click:control",l)}function T(l){l.stopPropagation(),y(),ce(()=>{a.value=[],de(e["onClick:clear"],l)})}return re(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),ve(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[s,_]=se(N),{modelValue:pe,...q}=B.filterProps(e),G=Y(e);return u(B,V({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-file-input--hide":e.hideInput,"v-input--plain-underlined":A.value},e.class],style:e.style,"onClick:prepend":O},s,q,{centerAffix:!A.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:z,isReadonly:w,isValid:H}=c;return u(Z,V({ref:P,"prepend-icon":e.prependIcon,onMousedown:U,onClick:L,"onClick:clear":T,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},G,{id:m.value,active:E.value||z.value,dirty:z.value||e.dirty,disabled:d.value,focused:v.value,error:H.value===!1}),{...n,default:J=>{var R;let{props:{class:K,...Q}}=J;return u(k,null,[u("input",V({ref:i,type:"file",readonly:w.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:o=>{o.stopPropagation(),w.value&&o.preventDefault(),y()},onChange:o=>{if(!o.target)return;const W=o.target;a.value=[...W.files??[]]},onFocus:y,onBlur:D},Q,_),null),u("div",{class:K},[!!((R=a.value)!=null&&R.length)&&!e.hideInput&&(n.selection?n.selection({fileNames:p.value,totalBytes:b.value,totalBytesReadable:F.value}):e.chips?p.value.map(o=>u(fe,{key:o,size:"small",text:o},null)):p.value.join(", "))])])}})},details:t?c=>{var m,d;return u(k,null,[(m=n.details)==null?void 0:m.call(n,c),l&&u(k,null,[u("span",null,null),u(ee,{active:!!((d=a.value)!=null&&d.length),value:j.value,disabled:e.disabled},n.counter)])])}:void 0})}),ne({},S,P,i)}});export{Ie as V};
