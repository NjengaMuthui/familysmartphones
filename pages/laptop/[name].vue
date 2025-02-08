<template>
  <div class="brand">
    <div class="sort-panel">
      <div class="title">{{ route.params.name }}</div>
      <div class="price-ranger">
        <div class="ttle">Price Range</div>
        <PriceSlider :min="0" :max="5000" />
        <div class="contain-button">
          <div class="filter" @click="filter">Filter</div>
        </div>
      </div>
      <div class="sub-cartegory">
        <div class="subs">All</div>
        <div class="subs">Phones</div>
        <div class="subs">Accessories</div>
      </div>
    </div>
    <div class="all">
      <div class="tp-all">
        <div class="info">Showing 1-40 of 52 results</div>
        <select class="select-wrapper">
          <option value="">Latest</option>
          <option value="">Price: low to high</option>
          <option value="">Price: high to low</option>
        </select>
      </div>
      <div class="itms-all">
        <ProdItem
          v-for="(product, index) in products"
          :Product="product"
          :pos="index"
        />
      </div>
      <div class="page-content">
        <div class="pages">
          <div class="page-btn" @click="toPageOne" v-if="!leftView">
            <FontAwesomeIcon icon="fa-solid fa-angles-left" />
          </div>
          <div class="page-btn" @click="toPreviousPage" v-if="!leftView">
            <FontAwesomeIcon icon="fa-solid fa-angle-left" />
          </div>
          <div
            v-for="pg in pages"
            class="page-btn"
            @click="currentPage = pg - 1"
            :class="{ currentpage: currentPage === pg - 1 }"
          >
            {{ pg }}
          </div>
          <div class="page-btn" @click="toNextPage" v-if="!rightView">
            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
          </div>
          <div class="page-btn" @click="toLastPage" v-if="!rightView">
            <FontAwesomeIcon icon="fa-solid fa-angles-right" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const route = useRoute();
const products = ref([]);
const pages = ref(2);
function filter() {}
const currentPage = ref(0);
const leftView = computed(() => currentPage.value === 0);
const rightView = computed(() => currentPage.value === 2);
function toPageOne() {
  currentPage.value = 0;
}
function toLastPage() {
  currentPage.value = 2;
}
function toNextPage() {
  currentPage.value++;
}
function toPreviousPage() {
  currentPage.value--;
}
</script>

<style scoped>
.brand {
  width: 90%;
  margin: 20px auto 0 auto;
  display: flex;
  position: relative;
}
.sort-panel {
  display: flex;
  flex: 0 0 200px;
  position: sticky;
  top: 101px;
  flex-direction: column;
  gap: 20px;
}
.title {
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: 0.8px;
}

.contain-button {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 0 auto;
}
.filter {
  background-color: var(--genz-color-brand-2);
  color: white;
  width: 50px;
  font-weight: 600;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.subs,
.ttle {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.8px;
}
.all {
  flex: 1;
}
.tp-all {
  display: flex;
  justify-content: space-between;
}
.itms-all {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.select-wrapper {
  position: relative;
  width: 200px; /* Adjust as needed */
}

select {
  width: 100%;
  padding: 6px;
  font-size: 16px;
  color: #000000; /* White text */
  background-color: #fff; /* Black background */
  border: 2px solid #000; /* White border */
  border-radius: 5px; /* Smooth corners */
  appearance: none; /* Remove default styles */
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

select:hover {
  background-color: #e7e7e7; /* Slightly lighter black on hover */
}

select:focus {
  outline: none;
  border-color: #aaa; /* Subtle border color change */
}

.select-wrapper::after {
  content: "▼"; /* Dropdown arrow */
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: #000; /* White arrow */
  pointer-events: none; /* Prevent interaction */
}

option {
  background-color: #fff; /* Black background for options */
  color: #000; /* White text for options */
}
.page-content,
.pages {
  display: flex;
  flex-direction: row;
  gap: 3px;
}
.page-content {
  justify-content: center;
  margin: 20px 0 60px 0;
}
.page-btn {
  font-size: 20px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.page-btn:hover {
  color: var(--genz-color-brand-2);
}
.currentpage {
  border: solid 1px black;
}
</style>
