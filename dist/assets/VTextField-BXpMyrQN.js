import{p as O,h as U,c as u,v as l,X as J,Y as le,_ as q,aK as H,m as ue,j as de,A as ce,a9 as fe,r as T,z as ve,l as me,Q as M,x as N,aQ as ye,aY as ge,b as be,u as xe,aa as Ce,a1 as ke,aZ as he,n as p,aH as Ve}from"./index-DfadTX57.js";import{d as _e,c as Ie}from"./index-CfdZ-wDH.js";import{n as Z,O as Pe,i as K,M as Fe,a8 as Se,d as Be,L as we,h as Re,r as Te,J as Le,N as Ae,k as De,_ as Ee,U as $e,X as Me,P as Ne,l as Oe}from"./forwardRefs-CyqLJbN2.js";import{b as Ue,a as Ke,u as te,f as je,m as Xe,V as ee}from"./VLabel-BxIh2RLa.js";const Ye=O({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Z(),...Pe({transition:{component:_e}})},"VCounter"),ze=U()({name:"VCounter",functional:!0,props:Ye(),setup(e,y){let{slots:i}=y;const P=u(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return K(()=>l(Fe,{transition:e.transition},{default:()=>[J(l("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[i.default?i.default({counter:P.value,max:e.max,value:e.value}):P.value]),[[le,e.active]])]})),{}}}),Qe=O({floating:Boolean,...Z()},"VFieldLabel"),$=U()({name:"VFieldLabel",props:Qe(),setup(e,y){let{slots:i}=y;return K(()=>l(Ue,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},i)),{}}}),We=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ne=O({appendInnerIcon:q,bgColor:String,clearable:Boolean,clearIcon:{type:q,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:q,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>We.includes(e)},"onClick:clear":H(),"onClick:appendInner":H(),"onClick:prependInner":H(),...Z(),...Se(),...Be(),...ue()},"VField"),ae=U()({name:"VField",inheritAttrs:!1,props:{id:String,...Ke(),...ne()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{attrs:i,emit:P,slots:t}=y;const{themeClasses:g}=de(e),{loaderClasses:C}=we(e),{focusClasses:j,isFocused:L,focus:F,blur:S}=te(e),{InputIcon:B}=je(e),{roundedClasses:X}=Re(e),{rtlClasses:A}=ce(),k=u(()=>e.dirty||e.active),f=u(()=>!e.singleLine&&!!(e.label||t.label)),Y=fe(),s=u(()=>e.id||`input-${Y}`),z=u(()=>`${s.value}-messages`),D=T(),w=T(),E=T(),n=u(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:d,backgroundColorStyles:c}=Te(ve(e,"bgColor")),{textColorClasses:v,textColorStyles:Q}=Le(u(()=>e.error||e.disabled?void 0:k.value&&L.value?e.color:e.baseColor));me(k,a=>{if(f.value){const o=D.value.$el,m=w.value.$el;requestAnimationFrame(()=>{const b=Ee(o),r=m.getBoundingClientRect(),R=r.x-b.x,V=r.y-b.y-(b.height/2-r.height/2),_=r.width/.75,I=Math.abs(_-b.width)>1?{maxWidth:be(_)}:void 0,ie=getComputedStyle(o),G=getComputedStyle(m),oe=parseFloat(ie.transitionDuration)*1e3||150,se=parseFloat(G.getPropertyValue("--v-field-label-scale")),re=G.getPropertyValue("color");o.style.visibility="visible",m.style.visibility="hidden",$e(o,{transform:`translate(${R}px, ${V}px) scale(${se})`,color:re,...I},{duration:oe,easing:Me,direction:a?"normal":"reverse"}).finished.then(()=>{o.style.removeProperty("visibility"),m.style.removeProperty("visibility")})})}},{flush:"post"});const h=u(()=>({isActive:k,isFocused:L,controlRef:E,blur:S,focus:F}));function W(a){a.target!==document.activeElement&&a.preventDefault()}function x(a){var o;a.key!=="Enter"&&a.key!==" "||(a.preventDefault(),a.stopPropagation(),(o=e["onClick:clear"])==null||o.call(e,new MouseEvent("click")))}return K(()=>{var R,V,_;const a=e.variant==="outlined",o=!!(t["prepend-inner"]||e.prependInnerIcon),m=!!(e.clearable||t.clear),b=!!(t["append-inner"]||e.appendInnerIcon||m),r=()=>t.label?t.label({...h.value,label:e.label,props:{for:s.value}}):e.label;return l("div",N({class:["v-field",{"v-field--active":k.value,"v-field--appended":b,"v-field--center-affix":e.centerAffix??!n.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!r(),[`v-field--variant-${e.variant}`]:!0},g.value,d.value,j.value,C.value,X.value,A.value,e.class],style:[c.value,e.style],onClick:W},i),[l("div",{class:"v-field__overlay"},null),l(Ae,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),o&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(B,{key:"prepend-icon",name:"prependInner"},null),(R=t["prepend-inner"])==null?void 0:R.call(t,h.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&l($,{key:"floating-label",ref:w,class:[v.value],floating:!0,for:s.value,style:Q.value},{default:()=>[r()]}),l($,{ref:D,for:s.value},{default:()=>[r()]}),(V=t.default)==null?void 0:V.call(t,{...h.value,props:{id:s.value,class:"v-field__input","aria-describedby":z.value},focus:F,blur:S})]),m&&l(Ie,{key:"clear"},{default:()=>[J(l("div",{class:"v-field__clearable",onMousedown:I=>{I.preventDefault(),I.stopPropagation()}},[l(De,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...h.value,props:{onKeydown:x,onFocus:F,onBlur:S,onClick:e["onClick:clear"]}}):l(B,{name:"clear",onKeydown:x,onFocus:F,onBlur:S},null)]})]),[[le,e.dirty]])]}),b&&l("div",{key:"append",class:"v-field__append-inner"},[(_=t["append-inner"])==null?void 0:_.call(t,h.value),e.appendInnerIcon&&l(B,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",v.value],style:Q.value},[a&&l(M,null,[l("div",{class:"v-field__outline__start"},null),f.value&&l("div",{class:"v-field__outline__notch"},[l($,{ref:w,floating:!0,for:s.value},{default:()=>[r()]})]),l("div",{class:"v-field__outline__end"},null)]),n.value&&f.value&&l($,{ref:w,floating:!0,for:s.value},{default:()=>[r()]})])])}),{controlRef:E}}});function qe(e){const y=Object.keys(ae.props).filter(i=>!ye(i)&&i!=="class"&&i!=="style");return ge(e,y)}const He=["color","file","time","date","datetime-local","week","month"],Je=O({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Xe(),...ne()},"VTextField"),ll=U()({name:"VTextField",directives:{Intersect:Ne},inheritAttrs:!1,props:Je(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,y){let{attrs:i,emit:P,slots:t}=y;const g=xe(e,"modelValue"),{isFocused:C,focus:j,blur:L}=te(e),F=u(()=>typeof e.counterValue=="function"?e.counterValue(g.value):typeof e.counterValue=="number"?e.counterValue:(g.value??"").toString().length),S=u(()=>{if(i.maxlength)return i.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),B=u(()=>["plain","underlined"].includes(e.variant));function X(n,d){var c,v;!e.autofocus||!n||(v=(c=d[0].target)==null?void 0:c.focus)==null||v.call(c)}const A=T(),k=T(),f=T(),Y=u(()=>He.includes(e.type)||e.persistentPlaceholder||C.value||e.active);function s(){var n;f.value!==document.activeElement&&((n=f.value)==null||n.focus()),C.value||j()}function z(n){P("mousedown:control",n),n.target!==f.value&&(s(),n.preventDefault())}function D(n){s(),P("click:control",n)}function w(n){n.stopPropagation(),s(),p(()=>{g.value=null,Ve(e["onClick:clear"],n)})}function E(n){var c;const d=n.target;if(g.value=d.value,(c=e.modelModifiers)!=null&&c.trim&&["text","search","password","tel","url"].includes(e.type)){const v=[d.selectionStart,d.selectionEnd];p(()=>{d.selectionStart=v[0],d.selectionEnd=v[1]})}}return K(()=>{const n=!!(t.counter||e.counter!==!1&&e.counter!=null),d=!!(n||t.details),[c,v]=Ce(i),{modelValue:Q,...h}=ee.filterProps(e),W=qe(e);return l(ee,N({ref:A,modelValue:g.value,"onUpdate:modelValue":x=>g.value=x,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":B.value},e.class],style:e.style},c,h,{centerAffix:!B.value,focused:C.value}),{...t,default:x=>{let{id:a,isDisabled:o,isDirty:m,isReadonly:b,isValid:r}=x;return l(ae,N({ref:k,onMousedown:z,onClick:D,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},W,{id:a.value,active:Y.value||m.value,dirty:m.value||e.dirty,disabled:o.value,focused:C.value,error:r.value===!1}),{...t,default:R=>{let{props:{class:V,..._}}=R;const I=J(l("input",N({ref:f,value:g.value,onInput:E,autofocus:e.autofocus,readonly:b.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:s,onBlur:L},_,v),null),[[ke("intersect"),{handler:X},null,{once:!0}]]);return l(M,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:V,"data-no-activator":""},[t.default(),I]):he(I,{class:V}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:d?x=>{var a;return l(M,null,[(a=t.details)==null?void 0:a.call(t,x),n&&l(M,null,[l("span",null,null),l(ze,{active:e.persistentCounter||C.value,value:F.value,max:S.value,disabled:e.disabled},t.counter)])])}:void 0})}),Oe({},A,k,f)}});export{ll as V,ne as a,ae as b,ze as c,qe as f,Je as m};
