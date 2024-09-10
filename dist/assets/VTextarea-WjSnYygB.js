import{p as Z,h as ee,u as te,c as y,r as v,s as ae,w as ne,q as le,l as m,ao as oe,A as ue,v as l,x as R,F as b,_ as T,a4 as ie,ap as re,n as S,aq as se,b as ce,ad as de}from"./index-BMIPE2aT.js";import{a as fe,f as ve,b as me,c as xe}from"./VTextField-CWNyIJf5.js";import{m as ge,u as he,V as G}from"./VInput-BM8s1tyJ.js";import{O as we,i as Ve,l as ye}from"./forwardRefs-b5Bbg4e-.js";const Fe=Z({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ge(),...fe()},"VTextarea"),Re=ee()({name:"VTextarea",directives:{Intersect:we},inheritAttrs:!1,props:Fe(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,D){let{attrs:F,emit:M,slots:i}=D;const o=te(e,"modelValue"),{isFocused:f,focus:E,blur:U}=he(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),q=y(()=>{if(F.maxlength)return F.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const A=v(),x=v(),B=ae(""),g=v(),j=y(()=>e.persistentPlaceholder||f.value||e.active);function C(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||E()}function p(t){C(),M("click:control",t)}function J(t){M("mousedown:control",t)}function K(t){t.stopPropagation(),C(),S(()=>{o.value="",se(e["onClick:clear"],t)})}function L(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ne(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!x.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(x.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),k=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),I=parseFloat(e.maxRows)*w+a||1/0,s=de(u??0,k,I);h.value=Math.floor((s-a)/w),B.value=ce(s)})}le(d),m(o,d),m(()=>e.rows,d),m(()=>e.maxRows,d),m(()=>e.density,d);let r;return m(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),oe(()=>{r==null||r.disconnect()}),Ve(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=ue(F),{modelValue:w,...k}=G.filterProps(e),I=ve(e);return l(G,R({ref:A,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,k,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:H,isDirty:N,isReadonly:Q,isValid:W}=s;return l(me,R({ref:x,style:{"--v-textarea-control-height":B.value},onClick:p,onMousedown:J,"onClick:clear":K,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},I,{id:V.value,active:j.value||N.value,centerAffix:h.value===1&&!P.value,dirty:N.value||e.dirty,disabled:H.value,focused:f.value,error:W.value===!1}),{...i,default:X=>{let{props:{class:_,...z}}=X;return l(b,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),T(l("textarea",R({ref:g,class:_,value:o.value,onInput:L,autofocus:e.autofocus,readonly:Q.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:U},z,u),null),[[ie("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&T(l("textarea",{class:[_,"v-textarea__sizer"],id:`${z.id}-sizer`,"onUpdate:modelValue":Y=>o.value=Y,ref:c,readonly:!0,"aria-hidden":"true"},null),[[re,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(b,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(b,null,[l("span",null,null),l(xe,{active:e.persistentCounter||f.value,value:O.value,max:q.value,disabled:e.disabled},i.counter)])])}:void 0})}),ye({},A,x,g)}});export{Re as V};
