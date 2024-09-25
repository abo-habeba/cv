import{p as Z,l as ee,A as te,c as y,r as v,s as ae,C as ne,z as le,y as m,k as oe,ak as ue,m as l,D as b,I as R,a5 as _,ac as ie,au as re,n as S,av as se,b as ce,x as de}from"./index-B_INyi6s.js";import{a as fe,f as ve,b as me,c as xe}from"./VTextField-B_LHzmYe.js";import{m as ge,u as he,V as D}from"./VInput-3Ijvp9PA.js";import{f as we}from"./VLabel-CI5_faWj.js";import{N as Ve,b as ye}from"./VGrid-B2erfyjZ.js";const Ce=Z({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ge(),...fe()},"VTextarea"),Re=ee()({name:"VTextarea",directives:{Intersect:Ve},inheritAttrs:!1,props:Ce(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,G){let{attrs:C,emit:M,slots:i}=G;const o=te(e,"modelValue"),{isFocused:f,focus:E,blur:U}=he(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),$=y(()=>{if(C.maxlength)return C.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function j(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const N=v(),x=v(),z=ae(""),g=v(),p=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function q(t){F(),M("click:control",t)}function J(t){M("mousedown:control",t)}function K(t){t.stopPropagation(),F(),S(()=>{o.value="",se(e["onClick:clear"],t)})}function L(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ne(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),k=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),I=parseFloat(e.maxRows)*w+a||1/0,s=de(u??0,k,I);h.value=Math.floor((s-a)/w),z.value=ce(s)})}le(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),oe(()=>{r==null||r.disconnect()}),ye(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=ue(C),{modelValue:w,...k}=D.filterProps(e),I=ve(e);return l(D,b({ref:N,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,k,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:A,isDirty:B,isReadonly:Q,isValid:W}=s;return l(me,b({ref:x,style:{"--v-textarea-control-height":z.value},onClick:q,onMousedown:J,"onClick:clear":K,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},I,{id:V.value,active:p.value||B.value,centerAffix:h.value===1&&!P.value,dirty:B.value||e.dirty,disabled:A.value,focused:f.value,error:W.value===!1}),{...i,default:X=>{let{props:{class:H,...T}}=X;return l(R,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),_(l("textarea",b({ref:g,class:H,value:o.value,onInput:L,autofocus:e.autofocus,readonly:Q.value,disabled:A.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},T,u),null),[[ie("intersect"),{handler:j},null,{once:!0}]]),e.autoGrow&&_(l("textarea",{class:[H,"v-textarea__sizer"],id:`${T.id}-sizer`,"onUpdate:modelValue":Y=>o.value=Y,ref:c,readonly:!0,"aria-hidden":"true"},null),[[re,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(R,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(R,null,[l("span",null,null),l(xe,{active:e.persistentCounter||f.value,value:O.value,max:$.value,disabled:e.disabled},i.counter)])])}:void 0})}),we({},N,x,g)}});export{Re as V};
