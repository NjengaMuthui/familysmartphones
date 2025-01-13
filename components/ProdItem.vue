<template>
  <div class="shop-item">
    <div @click="viewDetails" class="img-container">
      <div @click="addCart" class="top-container">
        <h4>ADD TO CART</h4>
        <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
      </div>
      <div @click="viewDetails" class="bottom-container">
        <h4>VIEW DETAILS</h4>
      </div>
      <img :src="props.Product.imgs[0]" alt="Shop Item Name" class="img" />
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
            <li v-for="feature in Product.features">
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="item"><FontAwesomeIcon icon="database" />128gb</div>
        <div class="item"><FontAwesomeIcon icon="mobile-button" />6.56 in</div>
        <div class="item"><FontAwesomeIcon icon="camera" />50mp + 8mp</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { formatNumberWithCommas } from "~/scripts/useHelper";
const router = useRouter();
const hoverTarget = ref(null);
const isAbove = ref(true);

function checkHalfwayPoint() {
  const rect = hoverTarget.value.getBoundingClientRect();
  let midpoint = window.innerHeight / 2;
  midpoint = midpoint + 70;
  isAbove.value = rect.top + rect.height / 2 > midpoint;
}

/*

const isTooltipVisible = ref(false);
const tooltipStyles = reactive({
  top: "0px",
  left: "0px",
  opacity: 0,
  transition: "opacity 0.3s ease, transform 0.3s ease"
});

const showTooltip = () => {
 
  const tooltipHeight = 200;

  const isAbove = rect.top + rect.height / 2 > midpoint;

  tooltipStyles.top = isAbove
    ? `${rect.top - tooltipHeight}px`
    : `${rect.bottom}px`;
  tooltipStyles.left = `${rect.left + rect.width / 2}px`;
  tooltipStyles.transform = isAbove
    ? "translate(-50%, -10px)"
    : "translate(-50%, 10px)";
  tooltipStyles.opacity = 1;

  isTooltipVisible.value = true;
};

const keepTooltipVisible = () => {
  isTooltipVisible.value = true;
};

const hideTooltip = () => {
  tooltipStyles.opacity = 0;
  tooltipStyles.transform = "translate(-50%, 0px)";
  setTimeout(() => {
    isTooltipVisible.value = false;
  }, 300);
};
*/
const props = defineProps({
  Product: Object,
  pos: Number
});
const price = computed(
  () => "Kshs " + formatNumberWithCommas(Number(props.Product.price))
);

function viewDetails() {
  router.push(`/product/${props.Product.id}`);
}

function addCart() {}
</script>

<style scoped>
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
  font-size: 0.75rem;
  justify-content: space-between;
  width: 90%;
  margin: 10px auto;
  color: var(--color-text);
  cursor: pointer;
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
