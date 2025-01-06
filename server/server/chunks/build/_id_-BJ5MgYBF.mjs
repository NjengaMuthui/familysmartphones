import { ref, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute, s as selectProduct } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-brands-svg-icons';

const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const left = ref(true);
    const right = ref(false);
    const Product = selectProduct(Number(route.params.id));
    const images = ref([]);
    let currentIndex = 0;
    const quantity = ref(1);
    const minusBtn = ref(true);
    Product.imgs.forEach((element) => {
      images.value.push({
        url: element,
        isActive: false
      });
    });
    images.value[currentIndex].isActive = true;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "detail_page" }, _attrs))} data-v-a1f4b005><div class="top" data-v-a1f4b005><div class="img_container" data-v-a1f4b005><div class="img_slide" data-v-a1f4b005><div class="btn-container left" data-v-a1f4b005><button class="${ssrRenderClass({ hide: left.value })}" data-v-a1f4b005>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-chevron-left" }, null, _parent));
      _push(`</button></div><div class="btn-container right" data-v-a1f4b005><button class="${ssrRenderClass({ hide: right.value })}" data-v-a1f4b005>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-chevron-right" }, null, _parent));
      _push(`</button></div><!--[-->`);
      ssrRenderList(images.value, (img) => {
        _push(`<div style="${ssrRenderStyle({ backgroundImage: "url(" + img.url + ")" })}" class="${ssrRenderClass([{ active: img.isActive }, "inner_container"])}" data-v-a1f4b005></div>`);
      });
      _push(`<!--]--></div><div class="img_gallery" data-v-a1f4b005><ul class="image_list" data-v-a1f4b005><!--[-->`);
      ssrRenderList(images.value, (img, index) => {
        _push(`<li data-v-a1f4b005><img${ssrRenderAttr("src", img.url)} alt="Gallery Image" class="list" data-v-a1f4b005></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="text_container" data-v-a1f4b005><h3 class="item_name" data-v-a1f4b005>${ssrInterpolate(unref(Product).name)}</h3><h4 class="item_price" data-v-a1f4b005>Kshs ${ssrInterpolate(unref(Product).price)}</h4><div class="quantity_container" data-v-a1f4b005><div class="column_container" data-v-a1f4b005><h4 class="quantity" data-v-a1f4b005>Quantity</h4><div class="row_container" data-v-a1f4b005><button class="quantity_button"${ssrIncludeBooleanAttr(minusBtn.value) ? " disabled" : ""} data-v-a1f4b005>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-minus" }, null, _parent));
      _push(`</button><input type="text" class="quantity_input"${ssrRenderAttr("value", quantity.value)} data-v-a1f4b005><button class="quantity_button" data-v-a1f4b005>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-plus" }, null, _parent));
      _push(`</button></div></div></div><button class="cart_button" data-v-a1f4b005>Add to Cart</button><h3 class="p_desc" data-v-a1f4b005>Features</h3><ul class="features_list" data-v-a1f4b005><!--[-->`);
      ssrRenderList(unref(Product).features, (feature) => {
        _push(`<li data-v-a1f4b005>${ssrInterpolate(feature)}</li>`);
      });
      _push(`<!--]--></ul></div></div><h3 class="p_desc" data-v-a1f4b005>Description</h3><p class="desc" data-v-a1f4b005>${ssrInterpolate(unref(Product).description)}</p></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1f4b005"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BJ5MgYBF.mjs.map
