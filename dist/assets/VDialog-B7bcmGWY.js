import{m as h,a as x,u as D,V as d}from"./VOverlay-CDfqK3Gf.js";import{f as A}from"./forwardRefs-BHDJfBC2.js";import{p as L,h as S,u as I,r as w,I as B,l as m,x as f,v as g,n as F,ac as R}from"./index-CvTNCW6j.js";import{i as T,k as O}from"./VImg-SuID-r8P.js";const k=L({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...h({origin:"center center",scrollStrategy:"block",transition:{component:x},zIndex:2400})},"VDialog"),U=S()({name:"VDialog",props:k(),emits:{"update:modelValue":a=>!0,afterLeave:()=>!0},setup(a,p){let{emit:E,slots:u}=p;const l=I(a,"modelValue"),{scopeId:V}=D(),e=w();function v(t){var r,c;const n=t.relatedTarget,s=t.target;if(n!==s&&((r=e.value)!=null&&r.contentEl)&&((c=e.value)!=null&&c.globalTop)&&![document,e.value.contentEl].includes(s)&&!e.value.contentEl.contains(s)){const o=R(e.value.contentEl);if(!o.length)return;const i=o[0],y=o[o.length-1];n===i?y.focus():i.focus()}}B&&m(()=>l.value&&a.retainFocus,t=>{t?document.addEventListener("focusin",v):document.removeEventListener("focusin",v)},{immediate:!0});function P(){var t;(t=e.value)!=null&&t.contentEl&&!e.value.contentEl.contains(document.activeElement)&&e.value.contentEl.focus({preventScroll:!0})}function b(){E("afterLeave")}return m(l,async t=>{var n;t||(await F(),(n=e.value.activatorEl)==null||n.focus({preventScroll:!0}))}),T(()=>{const t=d.filterProps(a),n=f({"aria-haspopup":"dialog","aria-expanded":String(l.value)},a.activatorProps),s=f({tabindex:-1},a.contentProps);return g(d,f({ref:e,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},t,{modelValue:l.value,"onUpdate:modelValue":r=>l.value=r,"aria-modal":"true",activatorProps:n,contentProps:s,role:"dialog",onAfterEnter:P,onAfterLeave:b},V),{activator:u.activator,default:function(){for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return g(O,{root:"VDialog"},{default:()=>{var i;return[(i=u.default)==null?void 0:i.call(u,...c)]}})}})}),A({},e)}});export{U as V};
