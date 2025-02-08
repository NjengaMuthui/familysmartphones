<template>
  <div class="multi">
    <div class="title">
      {{ props.title }}
    </div>
    <div class="flex-view">
      <ProdItem v-for="product in props.prods" :Product="product" />
    </div>
  </div>
</template>

<script setup>
import ProdItem from "./ProdItem.vue";
const props = defineProps({ prods: Array, title: String });
</script>

<style scoped>
.multi {
  background-color: white;
}
.flex-view {
  width: 95%;
  margin: 2.5rem auto 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.title {
  margin: 20px 0 0 40px;
  font-size: 1.875rem;
  color: black;
  font-weight: 600;
}
</style>
