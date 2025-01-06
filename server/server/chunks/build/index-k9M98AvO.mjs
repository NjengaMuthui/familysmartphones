import { useSSRContext, ref, unref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, b as filename, g as generateProducts } from './server.mjs';
import { P as ProdItem } from './ProdItem-B9ato_yJ.mjs';
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

const _sfc_main$3 = {
  __name: "TopSliding",
  __ssrInlineRender: true,
  setup(__props) {
    const currentSlide = ref(0);
    const images = ref([
      filename("DSC_2968.jpg"),
      filename("DSC_6904.jpg"),
      filename("DSC_6926.jpg")
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "slider",
        ref: "slider"
      }, _attrs))} data-v-c7d56b80><div class="slider-track" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value * 100}%)` })}" data-v-c7d56b80><!--[-->`);
      ssrRenderList(images.value, (image, index2) => {
        _push(`<div class="slider-item" data-v-c7d56b80><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", "Slide " + (index2 + 1))} data-v-c7d56b80></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopSliding.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-c7d56b80"]]);
const _sfc_main$2 = {
  __name: "TopLanding",
  __ssrInlineRender: true,
  props: { phone: Object },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "land" }, _attrs))} data-v-2f03d4cb><img${ssrRenderAttr("src", __props.phone.img)}${ssrRenderAttr("alt", __props.phone.name)} data-v-2f03d4cb><div class="info" data-v-2f03d4cb><div class="inner" data-v-2f03d4cb><div class="product-name" data-v-2f03d4cb>${ssrInterpolate(__props.phone.name)}</div><div class="some-info" data-v-2f03d4cb>New in Market</div><div class="buy" data-v-2f03d4cb>Buy</div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopLanding.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2f03d4cb"]]);
const _sfc_main$1 = {
  __name: "MultiPurpose",
  __ssrInlineRender: true,
  props: { prods: Array, title: String },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "multi" }, _attrs))} data-v-4800122b><div class="title" data-v-4800122b>${ssrInterpolate(props.title)}</div><div class="flex-view" data-v-4800122b><!--[-->`);
      ssrRenderList(props.prods, (product, index2) => {
        _push(ssrRenderComponent(ProdItem, {
          Product: product,
          pos: index2
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MultiPurpose.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const multipurpose = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4800122b"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const imgs = ref([
      { name: "Galaxy Fit 3", img: filename("Samsung-Galaxy-Fit-3.jpg") },
      { name: "Vivo v40", img: filename("images.jpeg") }
    ]);
    let products = generateProducts(10);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TopSliding = __nuxt_component_0;
      const _component_TopLanding = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-267edc5d>`);
      _push(ssrRenderComponent(_component_TopSliding, null, null, _parent));
      _push(`<div class="flex-container" data-v-267edc5d><!--[-->`);
      ssrRenderList(imgs.value, (img) => {
        _push(ssrRenderComponent(_component_TopLanding, {
          phone: img,
          class: "flex-item"
        }, null, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(multipurpose, {
        title: "Latest Products",
        prods: unref(products)
      }, null, _parent));
      _push(ssrRenderComponent(multipurpose, {
        title: "Tecno Offers",
        prods: unref(products)
      }, null, _parent));
      _push(ssrRenderComponent(multipurpose, {
        title: "Samsung Offers",
        prods: unref(products)
      }, null, _parent));
      _push(ssrRenderComponent(multipurpose, {
        title: "Accessories",
        prods: unref(products)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-267edc5d"]]);

export { index as default };
//# sourceMappingURL=index-k9M98AvO.mjs.map
