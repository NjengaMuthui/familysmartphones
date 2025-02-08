<template>
  <div class="land">
    <img :src="img" :alt="props.Product.name" />
    <div class="info">
      <div class="inner">
        <div class="product-name">
          {{ props.Product.name }}
        </div>
        <div class="some-info">New in Market</div>
        <div @click="viewDetails" class="buy">Buy</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { filename } from "~/scripts/useHelper";
const props = defineProps({ Product: Object });
const router = useRouter();
const img = computed(() => filename(props.Product.images.split(",")[0]));

function viewDetails() {
  router.push(`/product/${props.Product.num}`);
}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.land {
  position: relative;
}
.info {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 10px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  background-color: transparent;
}
.inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-name,
.some-info {
  color: black;
  letter-spacing: 0.7px;
}
.product-name {
  font-weight: 700;
  font-size: 1.875rem;
}
.some-info {
  font-weight: 600;
  font-size: 1.125rem;
}
.buy {
  color: white;
  background-color: var(--genz-color-brand-1);
  padding: 0.1875rem 0.75rem;
  margin-bottom: 4px;
  border-radius: 15px;
  cursor: pointer;
}
</style>
