import{p as Q,a1 as B,aP as be,h as U,A as Se,W as Ce,s as F,c as k,aQ as xe,af as ee,l as Ie,v as i,ak as Pe,aI as ze,m as ue,j as re,B as Ve,z as W,x as de,aL as le,a8 as Ae,u as we,Y as te,a4 as Ee,Z as Re,Q as ae}from"./index-Cs96efw_.js";import{b as ne,c as _e}from"./forwardRefs-Cg4WbNr_.js";import{l as X,n as Y,E as ve,F as fe,u as se,i as pe,w,e as he,o as Te,B as Fe,p as Be,m as Oe,d as Ge,O as De,z as Me,R as We,r as Le,g as He,C as $e,s as qe,h as Ke,A as je,a as Ne,P as Qe,j as Ue,k as L,D as ie}from"./VBtn-DcRy-n2K.js";function Xe(e){let{selectedElement:n,containerElement:a,isRtl:u,isHorizontal:o}=e;const y=O(o,a),c=ye(o,u,a),m=O(o,n),v=me(o,n),g=m*.4;return c>v?v-g:c+y<v+m?v-y+m+g:c}function Ye(e){let{selectedElement:n,containerElement:a,isHorizontal:u}=e;const o=O(u,a),y=me(u,n),c=O(u,n);return y-o/2+c/2}function oe(e,n){const a=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[a])||0}function Ze(e,n){const a=e?"clientWidth":"clientHeight";return(n==null?void 0:n[a])||0}function ye(e,n,a){if(!a)return 0;const{scrollLeft:u,offsetWidth:o,scrollWidth:y}=a;return e?n?y-o+u:u:a.scrollTop}function O(e,n){const a=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[a])||0}function me(e,n){const a=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[a])||0}const Je=Symbol.for("vuetify:v-slide-group"),ke=Q({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Je},nextIcon:{type:B,default:"$next"},prevIcon:{type:B,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...X(),...be({mobile:null}),...Y(),...ve({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ce=U()({name:"VSlideGroup",props:ke(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isRtl:u}=Se(),{displayClasses:o,mobile:y}=Ce(e),c=fe(e,e.symbol),m=F(!1),v=F(0),g=F(0),x=F(0),d=k(()=>e.direction==="horizontal"),{resizeRef:f,contentRect:E}=se(),{resizeRef:p,contentRect:P}=se(),s=xe(),b=k(()=>({container:f.el,duration:200,easing:"easeOutQuart"})),H=k(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[0]):-1),S=k(()=>c.selected.value.length?c.items.value.findIndex(l=>l.id===c.selected.value[c.selected.value.length-1]):-1);if(ee){let l=-1;Ie(()=>[c.selected.value,E.value,P.value,d.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(E.value&&P.value){const t=d.value?"width":"height";g.value=E.value[t],x.value=P.value[t],m.value=g.value+1<x.value}if(H.value>=0&&p.el){const t=p.el.children[S.value];R(t,e.centerActive)}})})}const z=F(!1);function R(l,t){let r=0;t?r=Ye({containerElement:f.el,isHorizontal:d.value,selectedElement:l}):r=Xe({containerElement:f.el,isHorizontal:d.value,isRtl:u.value,selectedElement:l}),G(r)}function G(l){if(!ee||!f.el)return;const t=O(d.value,f.el),r=ye(d.value,u.value,f.el);if(!(oe(d.value,f.el)<=t||Math.abs(l-r)<16)){if(d.value&&u.value&&f.el){const{scrollWidth:M,offsetWidth:N}=f.el;l=M-N-l}d.value?s.horizontal(l,b.value):s(l,b.value)}}function h(l){const{scrollTop:t,scrollLeft:r}=l.target;v.value=d.value?r:t}function I(l){if(z.value=!0,!(!m.value||!p.el)){for(const t of l.composedPath())for(const r of p.el.children)if(r===t){R(r);return}}}function $(l){z.value=!1}let _=!1;function D(l){var t;!_&&!z.value&&!(l.relatedTarget&&((t=p.el)!=null&&t.contains(l.relatedTarget)))&&C(),_=!1}function T(){_=!0}function q(l){if(!p.el)return;function t(r){l.preventDefault(),C(r)}d.value?l.key==="ArrowRight"?t(u.value?"prev":"next"):l.key==="ArrowLeft"&&t(u.value?"next":"prev"):l.key==="ArrowDown"?t("next"):l.key==="ArrowUp"&&t("prev"),l.key==="Home"?t("first"):l.key==="End"&&t("last")}function C(l){var r,A;if(!p.el)return;let t;if(!l)t=Pe(p.el)[0];else if(l==="next"){if(t=(r=p.el.querySelector(":focus"))==null?void 0:r.nextElementSibling,!t)return C("first")}else if(l==="prev"){if(t=(A=p.el.querySelector(":focus"))==null?void 0:A.previousElementSibling,!t)return C("last")}else l==="first"?t=p.el.firstElementChild:l==="last"&&(t=p.el.lastElementChild);t&&t.focus({preventScroll:!0})}function V(l){const t=d.value&&u.value?-1:1,r=(l==="prev"?-t:t)*g.value;let A=v.value+r;if(d.value&&u.value&&f.el){const{scrollWidth:M,offsetWidth:N}=f.el;A+=M-N}G(A)}const K=k(()=>({next:c.next,prev:c.prev,select:c.select,isSelected:c.isSelected})),j=k(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!y.value;case!0:return m.value||Math.abs(v.value)>0;case"mobile":return y.value||m.value||Math.abs(v.value)>0;default:return!y.value&&(m.value||Math.abs(v.value)>0)}}),Z=k(()=>Math.abs(v.value)>1),J=k(()=>{if(!f.value)return!1;const l=oe(d.value,f.el),t=Ze(d.value,f.el);return l-t-Math.abs(v.value)>1});return pe(()=>i(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!d.value,"v-slide-group--has-affixes":j.value,"v-slide-group--is-overflowing":m.value},o.value,e.class],style:e.style,tabindex:z.value||c.selected.value.length?-1:0,onFocus:D},{default:()=>{var l,t,r;return[j.value&&i("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!Z.value}],onMousedown:T,onClick:()=>Z.value&&V("prev")},[((l=a.prev)==null?void 0:l.call(a,K.value))??i(ne,null,{default:()=>[i(w,{icon:u.value?e.nextIcon:e.prevIcon},null)]})]),i("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:h},[i("div",{ref:p,class:"v-slide-group__content",onFocusin:I,onFocusout:$,onKeydown:q},[(t=a.default)==null?void 0:t.call(a,K.value)])]),j.value&&i("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!J.value}],onMousedown:T,onClick:()=>J.value&&V("next")},[((r=a.next)==null?void 0:r.call(a,K.value))??i(ne,null,{default:()=>[i(w,{icon:u.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:c.selected,scrollTo:V,scrollOffset:v,focus:C}}}),ge=Symbol.for("vuetify:v-chip-group"),el=Q({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:ze},...ke(),...X(),...ve({selectedClass:"v-chip--selected"}),...Y(),...ue(),...he({variant:"tonal"})},"VChipGroup");U()({name:"VChipGroup",props:el(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{themeClasses:u}=re(e),{isSelected:o,select:y,next:c,prev:m,selected:v}=fe(e,ge);return Ve({VChip:{color:W(e,"color"),disabled:W(e,"disabled"),filter:W(e,"filter"),variant:W(e,"variant")}}),pe(()=>{const g=ce.filterProps(e);return i(ce,de(g,{class:["v-chip-group",{"v-chip-group--column":e.column},u.value,e.class],style:e.style}),{default:()=>{var x;return[(x=a.default)==null?void 0:x.call(a,{isSelected:o,select:y,next:c,prev:m,selected:v.value})]}})}),{}}});const ll=Q({activeClass:String,appendAvatar:String,appendIcon:B,closable:Boolean,closeIcon:{type:B,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:B,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:le(),onClickOnce:le(),...Te(),...X(),...Fe(),...Be(),...Oe(),...Ge(),...De(),...Me(),...Y({tag:"span"}),...ue(),...he({variant:"tonal"})},"VChip"),sl=U()({name:"VChip",directives:{Ripple:We},props:ll(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:a,emit:u,slots:o}=n;const{t:y}=Ae(),{borderClasses:c}=Le(e),{colorClasses:m,colorStyles:v,variantClasses:g}=He(e),{densityClasses:x}=$e(e),{elevationClasses:d}=qe(e),{roundedClasses:f}=Ke(e),{sizeClasses:E}=je(e),{themeClasses:p}=re(e),P=we(e,"modelValue"),s=Ne(e,ge,!1),b=Qe(e,a),H=k(()=>e.link!==!1&&b.isLink.value),S=k(()=>!e.disabled&&e.link!==!1&&(!!s||e.link||b.isClickable.value)),z=k(()=>({"aria-label":y(e.closeLabel),onClick(h){h.preventDefault(),h.stopPropagation(),P.value=!1,u("click:close",h)}}));function R(h){var I;u("click",h),S.value&&((I=b.navigate)==null||I.call(b,h),s==null||s.toggle())}function G(h){(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),R(h))}return()=>{const h=b.isLink.value?"a":e.tag,I=!!(e.appendIcon||e.appendAvatar),$=!!(I||o.append),_=!!(o.close||e.closable),D=!!(o.filter||e.filter)&&s,T=!!(e.prependIcon||e.prependAvatar),q=!!(T||o.prepend),C=!s||s.isSelected.value;return P.value&&te(i(h,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":S.value,"v-chip--filter":D,"v-chip--pill":e.pill},p.value,c.value,C?m.value:void 0,x.value,d.value,f.value,E.value,g.value,s==null?void 0:s.selectedClass.value,e.class],style:[C?v.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:b.href.value,tabindex:S.value?0:void 0,onClick:R,onKeydown:S.value&&!H.value&&G},{default:()=>{var V;return[Ue(S.value,"v-chip"),D&&i(_e,{key:"filter"},{default:()=>[te(i("div",{class:"v-chip__filter"},[o.filter?i(L,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},o.filter):i(w,{key:"filter-icon",icon:e.filterIcon},null)]),[[Re,s.isSelected.value]])]}),q&&i("div",{key:"prepend",class:"v-chip__prepend"},[o.prepend?i(L,{key:"prepend-defaults",disabled:!T,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},o.prepend):i(ae,null,[e.prependIcon&&i(w,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&i(ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),i("div",{class:"v-chip__content","data-no-activator":""},[((V=o.default)==null?void 0:V.call(o,{isSelected:s==null?void 0:s.isSelected.value,selectedClass:s==null?void 0:s.selectedClass.value,select:s==null?void 0:s.select,toggle:s==null?void 0:s.toggle,value:s==null?void 0:s.value.value,disabled:e.disabled}))??e.text]),$&&i("div",{key:"append",class:"v-chip__append"},[o.append?i(L,{key:"append-defaults",disabled:!I,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},o.append):i(ae,null,[e.appendIcon&&i(w,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&i(ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),_&&i("button",de({key:"close",class:"v-chip__close",type:"button"},z.value),[o.close?i(L,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},o.close):i(w,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ee("ripple"),S.value&&e.ripple,null]])}}});export{Je as V,ce as a,sl as b};
