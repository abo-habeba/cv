import{p as d,i as v}from"./VImg-SuID-r8P.js";import{g as b,h}from"./VInput-Du0muv8n.js";import{f as F}from"./forwardRefs-BHDJfBC2.js";import{p as V,h as y,r as R,v as P}from"./index-CvTNCW6j.js";const k=V({...d(),...b()},"VForm"),w=y()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,i){let{slots:n,emit:f}=i;const a=h(r),s=R();function l(t){t.preventDefault(),a.reset()}function u(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),f("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:p}=c;p&&((m=s.value)==null||m.submit())}),o.preventDefault()}return v(()=>{var t;return P("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,a)])}),F(a,s)}});export{w as V};
