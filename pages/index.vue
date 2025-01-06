<template>
  <div>
    <TopSliding />
    <div class="flex-container">
      <TopLanding v-for="img in imgs" :phone="img" class="flex-item" />
      <multipurpose title="Latest Products" :prods="products" />
      <multipurpose title="Tecno Offers" :prods="products" />
      <multipurpose title="Samsung Offers" :prods="products" />
      <multipurpose title="Accessories" :prods="products" />
    </div>
  </div>
</template>

<script setup>
import multipurpose from "@/components/MultiPurpose.vue";
import { ref } from "vue";
import { filename, generateProducts } from "@/scripts/useHelper";

const imgs = ref([
  { name: "Galaxy Fit 3", img: filename("Samsung-Galaxy-Fit-3.jpg") },
  { name: "Vivo v40", img: filename("images.jpeg") }
]);
let products = generateProducts(10);
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 96%;
  margin: 20px auto;
}

.flex-item {
  flex: 1 1 calc(48% - 8px);
  max-width: calc(48% - 8px);
}

@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }

  .flex-item {
    flex: 1 1 100%;
    max-width: 100%;
  }
}
</style>
