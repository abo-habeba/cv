import{F as V,r as u,D as x,q as _,I as h,v as o,L as t,H as k,M as f,O as y,U as T,a9 as d}from"./index-DoUa79Mj.js";import{V as I}from"./VContainer-D3lAfPRy.js";import{d as S,e as b,V as O,c as w}from"./VRow-DZDJQVib.js";import{V as m}from"./VTextField-DwDypr5x.js";import{k as C}from"./VBtn-ByDIVYCH.js";import{g as N}from"./index-CPodMjtC.js";import"./forwardRefs-ByVqR1CM.js";import"./VInput-BG1HDC-H.js";const U={id:"login"},B=f("span",null," تسجيل الدخول ",-1),E={class:"text-blue text-decoration-none",href:"/register",rel:"noopener noreferrer"},q={__name:"login",setup(F){const n=V(),s=u(!1),r=u(!1),l=u({}),c=x();_(()=>{n.loadengApi=!1,localStorage.token&&(n.isLoader=!1)});const g=e=>{d.success(e,{theme:"colored",position:d.POSITION.TOP_LEFT})},p=e=>{d.error(e,{theme:"colored",position:d.POSITION.TOP_LEFT})};function v(){r.value=!0,T.post("login",l.value).then(e=>{localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),n.isAuth=!0,n.setAuthHeaderNew(e.data.token,c),n.fetchUser().then(()=>{g("تم تسجل الدخول بنجاح"),c.push({name:"/"})})}).catch(e=>{if(r.value=!1,e.response.data){if(e.response.data.message==="The provided credentials are incorrect."){p("بيانات الدخول غير صحيحه");return}return}p("هناك خطا ما حاول مره اخري")})}return(e,a)=>(k(),h("div",U,[o(I,null,{default:t(()=>[o(S,null,{default:t(()=>[o(b,{cols:"12",sm:"11",md:"8",lg:"6",xl:"6",class:"mx-auto"},{default:t(()=>[o(O,{class:"login-box mx-auto pa-12 pb-8",elevation:"8","max-width":"448",rounded:"lg"},{default:t(()=>[o(m,{density:"compact",placeholder:"ادخل الايميل","prepend-inner-icon":"mdi-email-outline",variant:"outlined",modelValue:l.value.email,"onUpdate:modelValue":a[0]||(a[0]=i=>l.value.email=i)},null,8,["modelValue"]),o(m,{"append-inner-icon":s.value?"mdi-eye-off":"mdi-eye",type:s.value?"text":"password",density:"compact",placeholder:"ادخل كلمة المرور","prepend-inner-icon":"mdi-lock-outline",variant:"outlined","onClick:appendInner":a[1]||(a[1]=i=>s.value=!s.value),modelValue:l.value.password,"onUpdate:modelValue":a[2]||(a[2]=i=>l.value.password=i)},null,8,["append-inner-icon","type","modelValue"]),o(C,{indeterminate:"",loading:r.value,disabled:r.value,color:"primary","loading-color":"primary","loading-size":"32",onClick:v,"prepend-icon":"mdi-login",class:"mb-8",size:32,variant:"tonal",block:""},{default:t(()=>[B]),_:1},8,["loading","disabled"]),o(w,{class:"text-center"},{default:t(()=>[f("a",E,[y(" انشأ حساب الان "),o(N,{icon:"mdi-account-plus"})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}};export{q as default};
