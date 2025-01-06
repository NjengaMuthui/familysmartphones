import { ref, computed, resolveComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { P as ProdItem } from './ProdItem-B9ato_yJ.mjs';
import { _ as _export_sfc, u as useRoute, g as generateProducts } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "PriceSlider",
  __ssrInlineRender: true,
  props: { min: Number, max: Number },
  setup(__props) {
    const props = __props;
    const minPrice = ref(props.min);
    const maxPrice = ref(props.max);
    props.min;
    props.max;
    const minPercent = ref(0);
    const maxPercent = ref(100);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider-container" }, _attrs))}><div class="slider-wrapper"><div class="track"></div><div class="thumb" style="${ssrRenderStyle({ left: `${minPercent.value}%` })}"><span class="tooltip">${ssrInterpolate(minPrice.value)}</span></div><div class="thumb" style="${ssrRenderStyle({ left: `${maxPercent.value}%` })}"><span class="tooltip">${ssrInterpolate(maxPrice.value)}</span></div><div class="range" style="${ssrRenderStyle({
        left: `${minPercent.value}%`,
        width: `${maxPercent.value - minPercent.value}%`
      })}"></div></div><div class="price-labels"><span>Min: ${ssrInterpolate(minPrice.value)}</span><span>Max: ${ssrInterpolate(maxPrice.value)}</span></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PriceSlider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[name]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    let products = generateProducts(20);
    const pages = ref(2);
    const currentPage = ref(0);
    const leftView = computed(() => currentPage.value === 0);
    const rightView = computed(() => currentPage.value === 2);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PriceSlider = _sfc_main$1;
      const _component_ProdItem = ProdItem;
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "brand" }, _attrs))} data-v-6918d625><div class="sort-panel" data-v-6918d625><div class="title" data-v-6918d625>${ssrInterpolate(unref(route).params.name)}</div><div class="price-ranger" data-v-6918d625><div class="ttle" data-v-6918d625>Price Range</div>`);
      _push(ssrRenderComponent(_component_PriceSlider, {
        min: 0,
        max: 5e3
      }, null, _parent));
      _push(`<div class="contain-button" data-v-6918d625><div class="filter" data-v-6918d625>Filter</div></div></div><div class="sub-cartegory" data-v-6918d625><div class="subs" data-v-6918d625>All</div><div class="subs" data-v-6918d625>Phones</div><div class="subs" data-v-6918d625>Accessories</div></div></div><div class="all" data-v-6918d625><div class="tp-all" data-v-6918d625><div class="info" data-v-6918d625>Showing 1-40 of 52 results</div><select class="select-wrapper" data-v-6918d625><option value="" data-v-6918d625>Latest</option><option value="" data-v-6918d625>Price: low to high</option><option value="" data-v-6918d625>Price: high to low</option></select></div><div class="itms-all" data-v-6918d625><!--[-->`);
      ssrRenderList(unref(products), (product, index) => {
        _push(ssrRenderComponent(_component_ProdItem, {
          Product: product,
          pos: index
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="page-content" data-v-6918d625><div class="pages" data-v-6918d625>`);
      if (!leftView.value) {
        _push(`<div class="page-btn" data-v-6918d625>`);
        _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-angles-left" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!leftView.value) {
        _push(`<div class="page-btn" data-v-6918d625>`);
        _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-angle-left" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(pages.value, (pg) => {
        _push(`<div class="${ssrRenderClass([{ currentpage: currentPage.value === pg - 1 }, "page-btn"])}" data-v-6918d625>${ssrInterpolate(pg)}</div>`);
      });
      _push(`<!--]-->`);
      if (!rightView.value) {
        _push(`<div class="page-btn" data-v-6918d625>`);
        _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-angle-right" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!rightView.value) {
        _push(`<div class="page-btn" data-v-6918d625>`);
        _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-angles-right" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/brand/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _name_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6918d625"]]);

export { _name_ as default };
//# sourceMappingURL=_name_-DbC1V-XU.mjs.map
