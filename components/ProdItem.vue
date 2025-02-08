<template>
  <div class="shop-item">
    <div class="img-container">
      <div @click="addCart" class="top-container">
        <h4>ADD TO CART</h4>
        <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
      </div>
      <div @click="viewDetails" class="bottom-container">
        <h4>VIEW DETAILS</h4>
      </div>
      <img @click="viewDetails" :src="img" alt="Shop Item Name" class="img" />
    </div>
    <div class="item-description">
      <h3 class="item-name">{{ props.Product.name }}</h3>
      <h2 class="item-price">{{ price }}</h2>
      <div
        ref="hoverTarget"
        class="product-highlights"
        @mouseenter="checkHalfwayPoint()"
      >
        <div
          class="tooltip"
          :class="{ tooltiptop: isAbove, tooltipbottom: !isAbove }"
        >
          <ul>
            <li v-for="feature in features">
              {{ feature }}
            </li>
          </ul>
        </div>
        <div class="top">
          <div class="item">
            <font-awesome-icon icon="tablet" />{{ props.Product.screen }} In
          </div>
          <div v-if="isCamera" class="item">
            <IconsCamera />{{ props.Product.Camera }} MP
          </div>
          <div v-if="isBattery" class="item">
            <IconsBattery />{{ props.Product.battery_type }} mAh
          </div>
        </div>
        <div class="bottom">
          <div class="item">
            <IconsDisk /> {{ props.Product.memory_external }} GB
          </div>
          <div class="item">
            <IconsRam />{{ props.Product.memory_internal }} GB
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { filename, formatNumberWithCommas } from "~/scripts/useHelper";
import { useCartStore } from "~/store/cartStore";
const store = useCartStore();
const router = useRouter();
const hoverTarget = ref(null);
const isAbove = ref(true);
const price = computed(() => formatNumberWithCommas(props.Product.price));
const img = computed(() => filename(props.Product.images.split(",")[0]));
const isCamera = computed(
  () => props.Product.Camera !== "" || props.Product.Camera !== null
);
const isBattery = computed(
  () => props.Product.battery_type !== "" || props.Product.battery_type !== null
);

const features = computed(() => [
  props.Product.display_size,
  props.Product.display_type,
  props.Product.os,
  props.Product.main_camera,
  props.Product.main_camera_features,
  props.Product.sensors
]);

function checkHalfwayPoint() {
  const rect = hoverTarget.value.getBoundingClientRect();
  let midpoint = window.innerHeight / 2;
  midpoint = midpoint + 70;
  isAbove.value = rect.top + rect.height / 2 > midpoint;
}

const props = defineProps({
  Product: Object
});

function viewDetails() {
  router.push(`/product/${props.Product.num}`);
}

function addCart() {
  store.add(props.Product);
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  font-weight: 600;
}
.tooltip {
  position: absolute;
  visibility: hidden;
  background-color: white;
  color: black;
  padding: 5px;
  border-radius: 5px;
  transform-origin: center;
  z-index: 5;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  width: 250px;
  left: 0;
}
.tooltiptop {
  top: auto;
  bottom: calc(100% + 8px);
}
.tooltipbottom {
  top: 100%;
}
.product-highlights {
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  width: 90%;
  margin: 10px auto;
  color: var(--color-text);
  cursor: pointer;
}
.top,
.bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.product-highlights:hover {
  background-color: rgb(230, 230, 230);
}
.product-highlights:hover .tooltip {
  visibility: visible;
}
.product-highlights .item svg {
  margin-right: 4px;
  color: var(--color-text);
}
.top-container,
.bottom-container {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  gap: 10px;
  transition: transform 0.3s ease-in-out;
}
.top-container {
  transform: translateY(-100%);
}
.bottom-container {
  transform: translateY(100%);
}
.top-container h4,
.bottom-container h4 {
  color: black;
  font-weight: 600;
  margin: 10px 0;
}
.bottom-container {
  bottom: 0;
}
.shop-item {
  width: 90%;
  margin: 25px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 500px) {
  .shop-item {
    width: 225px;
    margin: 25px 0;
  }
}

.img {
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: auto;
}
.img-container {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.img-container:hover {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.img-container:hover .top-container {
  transform: translateY(0);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
.img-container:hover .bottom-container {
  transform: translateY(0);
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px 20px;
}
.item-description {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-name,
.item-price {
  font-weight: 700;
  font-size: 16px;
  color: black;
}
</style>
