<template>
  <div class="brand">
    <div class="sort-panel">
      <div class="title">{{ route.params.name }}</div>
      <div class="price-ranger">
        <div class="ttle">Price Range</div>
        <PriceSlider :min="minValue" :max="maxValue" />
        <div class="contain-button">
          <div class="filter" @click="priceFilter">Filter</div>
        </div>
      </div>
      <Accordion
        :title="screenSize.title"
        :selects="screenSize.items"
        :single="screenSize.single"
        @selectedValue="setScreenSize"
      />
      <Accordion
        :title="ramSize.title"
        :selects="ramSize.items"
        :single="ramSize.single"
        @selectedValue="setRamSize"
      />
      <Accordion
        :title="storage.title"
        :selects="storage.items"
        :single="storage.single"
        @selectedValue="setStorage"
      />
      <Accordion
        :title="batteryCapacity.title"
        :selects="batteryCapacity.items"
        :single="batteryCapacity.single"
        @selectedValue="setBatteryCapacity"
      />
      <Accordion
        :title="camera.title"
        :selects="camera.items"
        :single="camera.single"
        @selectedValue="setCamera"
      />
    </div>
    <div class="all">
      <div class="tp-all">
        <div v-if="totalCount > 1" class="info">
          Showing {{ currentPage * 25 + 1 }}-{{
            currentPage * 25 + products.length
          }}
          of {{ totalCount }} results
        </div>
        <div v-else class="info">
          no devices were found that match that creteria
        </div>
        <select class="select-wrapper" v-model="sortMode">
          <option value="1">Latest</option>
          <option value="2">Price: low to high</option>
          <option value="3">Price: high to low</option>
        </select>
      </div>
      <div v-if="loading" class="itms-all">
        <ProdItemSkeleton v-for="index in 10" :key="index" />
      </div>
      <div v-else class="itms-all">
        <ProdItem v-for="product in products" :Product="product" />
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
import { createClient } from "@supabase/supabase-js";
import {
  screenSize,
  ramSize,
  storage,
  batteryCapacity,
  camera,
  getURL,
  getKEY
} from "~/scripts/useHelper";

const client = useSupabaseClient();
const route = useRoute();

const loading = ref(false);
let screen = "",
  ram = "",
  str = "",
  battery = "",
  cam = "";
const sortMode = ref("1");
let supabase = createClient(getURL(), getKEY());

const { data: totalCount } = await useAsyncData(
  "count",
  () =>
    client
      .from("devices")
      .select("num", { count: "exact", head: true })
      .ilike("name", `%${route.params.name}%`),
  {
    transform: (result) => result.count
  }
);
function getCountQueryWithFilters() {
  return setfilters(
    supabase
      .from("devices")
      .select("num", { count: "exact", head: true })
      .ilike("name", `%${route.params.name}%`)
  );
}

const { data: minValue } = await useAsyncData(
  "minValue",
  () =>
    client
      .from("devices")
      .select("price")
      .ilike("name", `%${route.params.name}%`)
      .order("price", { ascending: true })
      .limit(1),
  {
    transform: (result) => result.data?.[0]?.price || 0
  }
);
function getMinValueQueryWithFilters() {
  return setfilters(
    supabase
      .from("devices")
      .select("price")
      .ilike("name", `%${route.params.name}%`)
  )
    .order("price", { ascending: true })
    .limit(1);
}

const { data: maxValue } = await useAsyncData(
  "maxValue",
  () =>
    client
      .from("devices")
      .select("price")
      .ilike("name", `%${route.params.name}%`)
      .order("price", { ascending: false })
      .limit(1),
  {
    transform: (result) => result.data?.[0]?.price || 1000
  }
);
function getMaxValueWithFilters() {
  return setfilters(
    supabase
      .from("devices")
      .select("price")
      .ilike("name", `%${route.params.name}%`)
  )
    .order("price", { ascending: false })
    .limit(1);
}
const { data: products } = await useAsyncData(
  "brandProducts",
  () =>
    client
      .from("devices")
      .select("*")
      .ilike("name", `%${route.params.name}%`)
      .order("release_date", { ascending: false })
      .limit(25),
  {
    transform: (result) => result?.data || []
  }
);
function getProductsQueryWithFilters() {
  return setfilters(
    supabase.from("devices").select("*").ilike("name", `%${route.params.name}%`)
  ).order(sortMode.value == +"1" ? "release_date" : "price", {
    ascending: sortMode.value === "2"
  });
}
function setfilters(query) {
  switch (screen) {
    case screenSize.items[0].name:
      query.lte("screen", 5.5);
      break;
    case screenSize.items[1].name:
      query.gte("screen", 5.6).lte("screen", 6.0);
      break;
    case screenSize.items[2].name:
      query.gte("screen", 6.1).lte("screen", 6.5);
      break;
    case screenSize.items[3].name:
      query.gte(6.6);
      break;
  }
  switch (ram) {
    case ramSize.items[0].name:
      query.lte("memory_internal", 3);
      break;
    case ramSize.items[1].name:
      query.eq("memory_internal", 4);
      break;
    case ramSize.items[2].name:
      query.eq("memory_internal", 6);
      break;
    case ramSize.items[3].name:
      query.eq("memory_internal", 8);
      break;
    case ramSize.items[4].name:
      query.eq("memory_internal", 12);
      break;
    case ramSize.items[5].name:
      query.gte("memory_internal", 16);
      break;
  }
  switch (str) {
    case storage.items[0].name:
      query.lte("memory_external", 32);
      break;
    case storage.items[1].name:
      query.eq("memory_external", 64);
      break;
    case storage.items[2].name:
      query.eq("memory_external", 128);
      break;
    case storage.items[3].name:
      query.eq("memory_external", 256);
      break;
    case storage.items[4].name:
      query.eq("memory_external", 512);
      break;
    case storage.items[5].name:
      query.gte("memory_external", 1024);
      break;
  }
  switch (battery) {
    case batteryCapacity.items[0].name:
      query.lte("battery_type", 3000);
      break;
    case batteryCapacity.items[1].name:
      query.gte("battery_type", 3001).lte("battery_type", 4000);
      break;
    case batteryCapacity.items[2].name:
      query.gte("battery_type", 4001).lte("battery_type", 5000);
      break;
    case batteryCapacity.items[3].name:
      query.gte("battery_type", 5001);
      break;
  }
  switch (cam) {
    case camera.items[0].name:
      query.lte("rear_Camera", 12);
      break;
    case camera.items[1].name:
      query.gte("rear_Camera", 13).lte("rear_Camera", 48);
      break;
    case camera.items[2].name:
      query.gte("rear_Camera", 49).lte("rear_Camera", 108);
      break;
    case camera.items[3].name:
      query.gte("rear_Camera", 108);
      break;
  }
  return query;
}
async function priceFilter() {
  const data = await getCountQueryWithFilters()
    .gte("price", minValue.value)
    .lte("price", maxValue.value);
  totalCount.value = data.count;
  const data1 = await setfilters(
    supabase.from("devices").select("*").ilike("name", `%${route.params.name}%`)
  )
    .gte("price", minValue.value)
    .lte("price", maxValue.value)
    .order(sortMode.value == +"1" ? "release_date" : "price", {
      ascending: sortMode.value === "2"
    });
  if (data.count > 0) {
    products.value = data1.data;
  } else {
    products.value = [];
  }
}
async function filter() {
  loading.value = true;
  /*let params = {
    screen,
    ram,
    str,
    battery,
    cam
  };
  */
  const data = await getCountQueryWithFilters();
  totalCount.value = data.count;
  const data1 = await getMinValueQueryWithFilters();
  if (data.count > 0) data1.data[0].price;
  const data2 = await getMaxValueWithFilters();
  if (data.count > 0) data2.data[0].price;
  const data3 = await getProductsQueryWithFilters();
  if (data.count > 0) {
    products.value = data3.data;
  } else {
    products.value = [];
  }
  loading.value = false;
}

function setScreenSize(val) {
  screen = val;
  filter();
}
function setRamSize(val) {
  ram = val;
  filter();
}
function setStorage(val) {
  str = val;
  filter();
}
function setBatteryCapacity(val) {
  battery = val;
  filter();
}
function setCamera(val) {
  cam = val;
  filter();
}

function getProducts(index) {}

const pages = computed(() => {
  if (totalCount.value == null || totalCount.value == 0) return 1;
  else return Math.ceil(totalCount.value / 25);
});

const currentPage = ref(0);
const leftView = computed(() => currentPage.value === 0);
const rightView = computed(() => currentPage.value === pages.value - 1);
const lastPage = computed(() => pages.value - 1);
function toPageOne() {
  currentPage.value = 0;
}
function toLastPage() {
  currentPage.value = lastPage.value;
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
  flex-direction: column;
  gap: 20px;
}
.sort-panel {
  display: flex;
  flex: 0 0 200px;
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
  justify-content: space-between;
}
.select-wrapper {
  position: relative;
  width: 100px; /* Adjust as needed */
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
@media (min-width: 775px) {
  .brand {
    flex-direction: row;
  }
  .select-wrapper {
    width: 200px; /* Adjust as needed */
  }
}
</style>
