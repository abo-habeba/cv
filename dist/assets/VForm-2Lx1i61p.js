import{m as p,h as v}from"./VGrid-C4m5_uAS.js";import{p as b,q as F,f as V}from"./VInput-DRG_2TRK.js";import{p as h,g as y,r as R,c as P}from"./index-TxWXM6nm.js";const k=h({...p(),...b()},"VForm"),S=y()({name:"VForm",props:k(),emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,f){let{slots:n,emit:i}=f;const a=F(r),s=R();function l(t){t.preventDefault(),a.reset()}function u(t){const o=t,e=a.validate();o.then=e.then.bind(e),o.catch=e.catch.bind(e),o.finally=e.finally.bind(e),i("submit",o),o.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),o.preventDefault()}return v(()=>{var t;return P("form",{ref:s,class:["v-form",r.class],style:r.style,novalidate:!0,onReset:l,onSubmit:u},[(t=n.default)==null?void 0:t.call(n,a)])}),V(a,s)}});export{S as V};
