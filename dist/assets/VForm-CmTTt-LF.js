import{m as p,u as v}from"./VIcon-C79UM_55.js";import{e as b,f as F}from"./VInput-68thhHEQ.js";import{k as V}from"./VBtn-CcYQ1lSM.js";import{p as h,h as y,r as R,v as k}from"./index-9PVhDJqA.js";const P=h({...p(),...b()},"VForm"),w=y()({name:"VForm",props:P(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=F(r),m=R();function u(t){t.preventDefault(),a.reset()}function l(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var s;let{valid:d}=c;d&&((s=m.value)==null||s.submit())}),o.preventDefault()}return v(()=>{var t;return k("form",{ref:m,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:u,onSubmit:l},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,m)}});export{w as V};
