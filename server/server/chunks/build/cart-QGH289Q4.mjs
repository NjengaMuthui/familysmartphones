import { useSSRContext, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, g as generateProducts, f as formatNumberWithCommas } from './server.mjs';
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
  __name: "CartItem",
  __ssrInlineRender: true,
  props: {
    image_src: String,
    item_name: String,
    quantity: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart_item" }, _attrs))} data-v-18794ca5><img${ssrRenderAttr("src", __props.image_src)} alt="Cart Item" data-v-18794ca5><div class="column" data-v-18794ca5><h3 class="item_name" data-v-18794ca5>${ssrInterpolate(__props.item_name)}</h3><div class="row" data-v-18794ca5><h4 data-v-18794ca5>Quantity :${ssrInterpolate(__props.quantity)}</h4><button data-v-18794ca5>Remove</button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CartItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-18794ca5"]]);
const _sfc_main = {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    let prods = generateProducts(3);
    const subtotal = computed(() => {
      let total = 0;
      prods.forEach((element) => {
        total = total + Number(element.price);
      });
      return formatNumberWithCommas(total);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart" }, _attrs))} data-v-7e87618f><div class="list" data-v-7e87618f><!--[-->`);
      ssrRenderList(unref(prods), (item) => {
        _push(ssrRenderComponent(CartItem, {
          image_src: item.imgs[0],
          item_name: item.name,
          quantity: 1
        }, null, _parent));
      });
      _push(`<!--]--><div class="summary" data-v-7e87618f><h2 class="head" data-v-7e87618f>Order Summary</h2><div class="shiping-container" data-v-7e87618f><h4 data-v-7e87618f>Delivery Fee</h4><h4 data-v-7e87618f>free</h4></div><div class="subtotal" data-v-7e87618f><h2 data-v-7e87618f>SubTotal</h2><div class="total" data-v-7e87618f>Kshs ${ssrInterpolate(subtotal.value)}</div></div><button class="check" data-v-7e87618f>Checkout</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7e87618f"]]);

export { cart as default };
//# sourceMappingURL=cart-QGH289Q4.mjs.map
