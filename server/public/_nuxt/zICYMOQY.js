import{_ as z,u as D,r as _,J as E,v as N,c as i,a as t,C as b,b as f,F as y,z as k,t as m,x as h,K as Q,L as V,o,p as K}from"./CjXy2Wr2.js";const L={class:"detail_page"},P={class:"top"},S={class:"img_container"},G={class:"img_slide"},J={class:"btn-container left"},M={class:"btn-container right"},R={class:"img_gallery"},T={class:"image_list"},U=["onClick"],$=["src"],j={class:"text_container"},H={class:"item_name"},O={class:"item_price"},W={class:"quantity_container"},X={class:"column_container"},Y={class:"row_container"},Z=["disabled"],tt={class:"features_list"},st={class:"desc"},et={__name:"[id]",setup(at){const C=D(),u=_(!0),c=_(!1),r=E(Number(C.params.id)),s=_([]);let e=0;const d=_(1),p=_(!0);function A(){d.value++,p.value=!1}function w(){d.value--,d.value==1&&(p.value=!0)}r.imgs.forEach(n=>{s.value.push({url:n,isActive:!1})}),s.value[e].isActive=!0;function I(n){e=n,q(e),g(e)}function q(n){if(s.value.length!=1){if(n==0){u.value=!0,c.value=!1;return}if(n==s.value.length-1){u.value=!1,c.value=!0;return}s.value.length>2&&(n==1||n==s.value.length-2)&&(u.value=!1,c.value=!1)}}function g(n){s.value.forEach(a=>{a.isActive=!1}),s.value[n].isActive=!0}function B(){e++,e==s.value.length-1&&(c.value=!0),e==1&&(u.value=!1),g(e)}function F(){e--,e==0&&(u.value=!0),e==s.value.length-2&&(c.value=!1),g(e)}return(n,a)=>{const v=N("FontAwesomeIcon");return o(),i("div",L,[t("div",P,[t("div",S,[t("div",G,[t("div",J,[t("button",{onClick:F,class:b({hide:u.value})},[f(v,{icon:"fa-solid fa-chevron-left"})],2)]),t("div",M,[t("button",{onClick:B,class:b({hide:c.value})},[f(v,{icon:"fa-solid fa-chevron-right"})],2)]),(o(!0),i(y,null,k(s.value,l=>(o(),i("div",{style:K({backgroundImage:"url("+l.url+")"}),class:b(["inner_container",{active:l.isActive}])},null,6))),256))]),t("div",R,[t("ul",T,[(o(!0),i(y,null,k(s.value,(l,x)=>(o(),i("li",{onClick:nt=>I(x)},[t("img",{src:l.url,alt:"Gallery Image",class:"list"},null,8,$)],8,U))),256))])])]),t("div",j,[t("h3",H,m(h(r).name),1),t("h4",O,"Kshs "+m(h(r).price),1),t("div",W,[t("div",X,[a[1]||(a[1]=t("h4",{class:"quantity"},"Quantity",-1)),t("div",Y,[t("button",{onClick:w,class:"quantity_button",disabled:p.value},[f(v,{icon:"fa-solid fa-minus"})],8,Z),Q(t("input",{type:"text",class:"quantity_input","onUpdate:modelValue":a[0]||(a[0]=l=>d.value=l)},null,512),[[V,d.value]]),t("button",{onClick:A,class:"quantity_button"},[f(v,{icon:"fa-solid fa-plus"})])])])]),a[2]||(a[2]=t("button",{class:"cart_button"},"Add to Cart",-1)),a[3]||(a[3]=t("h3",{class:"p_desc"},"Features",-1)),t("ul",tt,[(o(!0),i(y,null,k(h(r).features,l=>(o(),i("li",null,m(l),1))),256))])])]),a[4]||(a[4]=t("h3",{class:"p_desc"},"Description",-1)),t("p",st,m(h(r).description),1)])}}},it=z(et,[["__scopeId","data-v-a1f4b005"]]);export{it as default};
