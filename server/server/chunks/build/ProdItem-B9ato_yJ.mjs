import { useSSRContext, ref, reactive, computed, resolveComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, c as useRouter, f as formatNumberWithCommas } from './server.mjs';

const _sfc_main = {
  __name: "ProdItem",
  __ssrInlineRender: true,
  props: {
    Product: Object,
    pos: Number
  },
  setup(__props) {
    useRouter();
    ref(null);
    const isTooltipVisible = ref(false);
    const tooltipStyles = reactive({
      top: "0px",
      left: "0px",
      opacity: 0,
      transition: "opacity 0.3s ease, transform 0.3s ease"
    });
    const props = __props;
    const price = computed(
      () => "Kshs " + formatNumberWithCommas(Number(props.Product.price))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shop-item" }, _attrs))} data-v-f92d88c6><div class="img-container" data-v-f92d88c6><div class="top-container" data-v-f92d88c6><h4 data-v-f92d88c6>ADD TO CART</h4>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "fa-solid fa-cart-plus" }, null, _parent));
      _push(`</div><div class="bottom-container" data-v-f92d88c6><h4 data-v-f92d88c6>VIEW DETAILS</h4></div><img${ssrRenderAttr("src", props.Product.imgs[0])} alt="Shop Item Name" class="img" data-v-f92d88c6></div><div class="item-description" data-v-f92d88c6><h3 class="item-name" data-v-f92d88c6>${ssrInterpolate(props.Product.name)}</h3><h2 class="item-price" data-v-f92d88c6>${ssrInterpolate(price.value)}</h2><div class="product-highlights hover-target" data-v-f92d88c6>`);
      if (unref(isTooltipVisible)) {
        _push(`<div style="${ssrRenderStyle(unref(tooltipStyles))}" class="tooltip" data-v-f92d88c6><ul data-v-f92d88c6><!--[-->`);
        ssrRenderList(__props.Product.features, (feature) => {
          _push(`<li data-v-f92d88c6>${ssrInterpolate(feature)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="item" data-v-f92d88c6>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "database" }, null, _parent));
      _push(`128gb</div><div class="item" data-v-f92d88c6>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "mobile-button" }, null, _parent));
      _push(`6.56 in</div><div class="item" data-v-f92d88c6>`);
      _push(ssrRenderComponent(_component_FontAwesomeIcon, { icon: "camera" }, null, _parent));
      _push(`50mp + 8mp</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProdItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProdItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f92d88c6"]]);

export { ProdItem as P };
//# sourceMappingURL=ProdItem-B9ato_yJ.mjs.map
