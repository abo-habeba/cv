import{a8 as Q,v as m,p as x,h as j,c as d,ah as w,a$ as H,u as R,aL as A,s as z,r as F,l as $,d as X,b0 as Z,z as ee,i as ae,ab as J,g as ne,J as te,b1 as se,ao as le,q as ie,k as N,n as ue,a1 as U,a2 as re,m as oe,j as de,A as ce}from"./index-DtQcfx8t.js";import{x as ve,n as K,J as fe,L as ge,i as W,M as me,C as ye,y as he,D as pe,z as Ve}from"./VLabel-CkSFNWB7.js";import{d as be}from"./index-bnlhJkJd.js";function Me(e){const{t:c}=Q();function v(n){let{name:r}=n;const a={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[r],l=e[`onClick:${r}`],g=l&&a?c(`$vuetify.input.${a}`,e.label??""):void 0;return m(ve,{icon:e[`${r}Icon`],"aria-label":g,onClick:l},null)}return{InputIcon:v}}const Ie=x({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...K(),...fe({transition:{component:be,leaveAbsolute:!0,group:!0}})},"VMessages"),ke=j()({name:"VMessages",props:Ie(),setup(e,c){let{slots:v}=c;const n=d(()=>w(e.messages)),{textColorClasses:r,textColorStyles:a}=ge(d(()=>e.color));return W(()=>m(me,{transition:e.transition,tag:"div",class:["v-messages",r.value,e.class],style:[a.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&n.value.map((l,g)=>m("div",{class:"v-messages__message",key:`${g}-${n.value}`},[v.message?v.message({message:l}):l]))]})),{}}}),Se=x({focused:Boolean,"onUpdate:focused":A()},"focus");function Ae(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H();const v=R(e,"focused"),n=d(()=>({[`${c}--focused`]:v.value}));function r(){v.value=!0}function a(){v.value=!1}return{focusClasses:n,isFocused:v,focus:r,blur:a}}const q=Symbol.for("vuetify:form"),ze=x({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function Fe(e){const c=R(e,"modelValue"),v=d(()=>e.disabled),n=d(()=>e.readonly),r=z(!1),a=F([]),l=F([]);async function g(){const i=[];let s=!0;l.value=[],r.value=!0;for(const o of a.value){const t=await o.validate();if(t.length>0&&(s=!1,i.push({id:o.id,errorMessages:t})),!s&&e.fastFail)break}return l.value=i,r.value=!1,{valid:s,errors:l.value}}function M(){a.value.forEach(i=>i.reset())}function V(){a.value.forEach(i=>i.resetValidation())}return $(a,()=>{let i=0,s=0;const o=[];for(const t of a.value)t.isValid===!1?(s++,o.push({id:t.id,errorMessages:t.errorMessages})):t.isValid===!0&&i++;l.value=o,c.value=s>0?!1:i===a.value.length?!0:null},{deep:!0,flush:"post"}),X(q,{register:i=>{let{id:s,vm:o,validate:t,reset:h,resetValidation:I}=i;a.value.some(k=>k.id===s),a.value.push({id:s,validate:t,reset:h,resetValidation:I,vm:Z(o),isValid:null,errorMessages:[]})},unregister:i=>{a.value=a.value.filter(s=>s.id!==i)},update:(i,s,o)=>{const t=a.value.find(h=>h.id===i);t&&(t.isValid=s,t.errorMessages=o)},isDisabled:v,isReadonly:n,isValidating:r,isValid:c,items:a,validateOn:ee(e,"validateOn")}),{errors:l,isDisabled:v,isReadonly:n,isValidating:r,isValid:c,items:a,validate:g,reset:M,resetValidation:V}}function Ce(){return ae(q,null)}const Be=x({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Se()},"validation");function Pe(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:H(),v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:J();const n=R(e,"modelValue"),r=d(()=>e.validationValue===void 0?n.value:e.validationValue),a=Ce(),l=F([]),g=z(!0),M=d(()=>!!(w(n.value===""?null:n.value).length||w(r.value===""?null:r.value).length)),V=d(()=>!!(e.disabled??(a==null?void 0:a.isDisabled.value))),i=d(()=>!!(e.readonly??(a==null?void 0:a.isReadonly.value))),s=d(()=>{var u;return(u=e.errorMessages)!=null&&u.length?w(e.errorMessages).concat(l.value).slice(0,Math.max(0,+e.maxErrors)):l.value}),o=d(()=>{let u=(e.validateOn??(a==null?void 0:a.validateOn.value))||"input";u==="lazy"&&(u="input lazy");const f=new Set((u==null?void 0:u.split(" "))??[]);return{blur:f.has("blur")||f.has("input"),input:f.has("input"),submit:f.has("submit"),lazy:f.has("lazy")}}),t=d(()=>{var u;return e.error||(u=e.errorMessages)!=null&&u.length?!1:e.rules.length?g.value?l.value.length||o.value.lazy?null:!0:!l.value.length:!0}),h=z(!1),I=d(()=>({[`${c}--error`]:t.value===!1,[`${c}--dirty`]:M.value,[`${c}--disabled`]:V.value,[`${c}--readonly`]:i.value})),k=ne("validation"),b=d(()=>e.name??te(v));se(()=>{a==null||a.register({id:b.value,vm:k,validate:y,reset:S,resetValidation:C})}),le(()=>{a==null||a.unregister(b.value)}),ie(async()=>{o.value.lazy||await y(!0),a==null||a.update(b.value,t.value,s.value)}),N(()=>o.value.input,()=>{$(r,()=>{if(r.value!=null)y();else if(e.focused){const u=$(()=>e.focused,f=>{f||y(),u()})}})}),N(()=>o.value.blur,()=>{$(()=>e.focused,u=>{u||y()})}),$([t,s],()=>{a==null||a.update(b.value,t.value,s.value)});async function S(){n.value=null,await ue(),await C()}async function C(){g.value=!0,o.value.lazy?l.value=[]:await y(!0)}async function y(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const f=[];h.value=!0;for(const B of e.rules){if(f.length>=+(e.maxErrors??1))break;const p=await(typeof B=="function"?B:()=>B)(r.value);if(p!==!0){if(p!==!1&&typeof p!="string"){console.warn(`${p} is not a valid value. Rule functions must return boolean true or a string.`);continue}f.push(p||"")}}return l.value=f,h.value=!1,g.value=u,l.value}return{errorMessages:s,isDirty:M,isDisabled:V,isReadonly:i,isPristine:g,isValid:t,isValidating:h,reset:S,resetValidation:C,validate:y,validationClasses:I}}const $e=x({id:String,appendIcon:U,centerAffix:{type:Boolean,default:!0},prependIcon:U,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":A(),"onClick:append":A(),...K(),...ye(),...re(he(),["maxWidth","minWidth","width"]),...oe(),...Be()},"VInput"),Re=j()({name:"VInput",props:{...$e()},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:v,slots:n,emit:r}=c;const{densityClasses:a}=pe(e),{dimensionStyles:l}=Ve(e),{themeClasses:g}=de(e),{rtlClasses:M}=ce(),{InputIcon:V}=Me(e),i=J(),s=d(()=>e.id||`input-${i}`),o=d(()=>`${s.value}-messages`),{errorMessages:t,isDirty:h,isDisabled:I,isReadonly:k,isPristine:b,isValid:S,isValidating:C,reset:y,resetValidation:u,validate:f,validationClasses:B}=Pe(e,"v-input",s),P=d(()=>({id:s,messagesId:o,isDirty:h,isDisabled:I,isReadonly:k,isPristine:b,isValid:S,isValidating:C,reset:y,resetValidation:u,validate:f})),p=d(()=>{var D;return(D=e.errorMessages)!=null&&D.length||!b.value&&t.value.length?t.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return W(()=>{var E,T,O,L;const D=!!(n.prepend||e.prependIcon),Y=!!(n.append||e.appendIcon),_=p.value.length>0,G=!e.hideDetails||e.hideDetails==="auto"&&(_||!!n.details);return m("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},a.value,g.value,M.value,B.value,e.class],style:[l.value,e.style]},[D&&m("div",{key:"prepend",class:"v-input__prepend"},[(E=n.prepend)==null?void 0:E.call(n,P.value),e.prependIcon&&m(V,{key:"prepend-icon",name:"prepend"},null)]),n.default&&m("div",{class:"v-input__control"},[(T=n.default)==null?void 0:T.call(n,P.value)]),Y&&m("div",{key:"append",class:"v-input__append"},[e.appendIcon&&m(V,{key:"append-icon",name:"append"},null),(O=n.append)==null?void 0:O.call(n,P.value)]),G&&m("div",{class:"v-input__details"},[m(ke,{id:o.value,active:_,messages:p.value},{message:n.message}),(L=n.details)==null?void 0:L.call(n,P.value)])])}),{reset:y,resetValidation:u,validate:f,isValid:S,errorMessages:t}}});export{Re as V,Ce as a,Se as b,ze as c,Fe as d,Me as e,$e as m,Ae as u};
