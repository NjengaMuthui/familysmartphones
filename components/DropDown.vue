<template>
  <div class="drop">
    <div class="list one">
      <div class="page-titles">Explore {{ page.one.title }}</div>
      <li v-for="link in page.one.links">{{ link }}</li>
    </div>
    <div class="list two">
      <div class="page-titles">Explore {{ page.two.title }}</div>
      <li v-for="link in page.two.links">{{ link }}</li>
    </div>
    <div class="list three">
      <div class="page-titles">Explore {{ page.three.title }}</div>
      <li v-for="link in page.three.links">{{ link }}</li>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ page: Object });
</script>

<style scoped>
.drop {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  display: flex;
}
</style>
