import{_ as a,J as g,X as l}from"./index-9PVhDJqA.js";const c=e=>{a.success(e,{theme:"colored",position:a.POSITION.TOP_LEFT})},n=e=>{a.error(e,{theme:"colored",position:a.POSITION.TOP_LEFT})},s=g(),I=async e=>{s.loadengApi=!0;try{const r=await l.get(e);return console.log(`fetch ${e}`,r.data),s.loadengApi=!1,r.data}catch(r){throw console.error(`Error fetching ${e}`,r),s.loadengApi=!1,r}},$=async(e,r,o=!1)=>{const d=o?`${e}/${o}`:e;s.loadengApi=!0;try{const t=await l.post(d,r);return s.loadengApi=!1,console.log(o?`update ${e}`:`save ${e}`,t.data),c(` تم ${o?"التعديل":"الحفظ"}`),t.data}catch(t){throw s.loadengApi=!1,console.log(`Error Save ${e}`,t),n(t.response.data.message),t}},h=async(e,r)=>{s.loadengApi=!0;try{const o=await l.post(e,r);return console.log(`delete Items ${e}`,o.data),s.loadengApi=!1,c("تم الحذف"),o.data}catch(o){throw console.error(`Error delete Items ${e}`,o),s.loadengApi=!1,n("تعذر حذف العناصر"),o}},m=async(e,r)=>{s.loadengApi=!0;try{const o=await l.delete(`${e}/${r}`);return console.log(`delete Item ${e}`,o.data),s.loadengApi=!1,o.data}catch(o){throw console.error(`Error delete Item ${e}`,o),s.loadengApi=!1,o}};export{m as a,h as d,I as f,n,$ as s};
