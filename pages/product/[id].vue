<template>
  <div class="detail_page">
    <div class="top">
      <div class="img_container">
        <div class="img_slide">
          <div class="btn-container left">
            <button @click="moveBackwards" :class="{ hide: left }">
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
            </button>
          </div>
          <div class="btn-container right">
            <button @click="moveForward" :class="{ hide: right }">
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </button>
          </div>
          <div
            v-for="img in images"
            :style="{ backgroundImage: `url(${img.url})` }"
            class="inner_container"
            :class="{ active: img.isActive }"
          ></div>
        </div>

        <div class="img_gallery">
          <ul class="image_list">
            <li v-for="(img, index) in images" @click="thumbClick(index)">
              <img :src="img.url" alt="Gallery Image" class="list" />
            </li>
          </ul>
        </div>
      </div>
      <div class="text_container">
        <h3 class="item_name">{{ Product.name }}</h3>
        <h4 class="item_price">Kshs {{ Product.price }}</h4>
        <div class="quantity_container">
          <div class="column_container">
            <h4 class="quantity">Quantity</h4>
            <div class="row_container">
              <button
                @click="minusQuantity"
                class="quantity_button"
                :disabled="minusBtn"
              >
                <FontAwesomeIcon icon="fa-solid fa-minus" />
              </button>
              <input type="text" class="quantity_input" v-model="quantity" />
              <button @click="addQuantity" class="quantity_button">
                <FontAwesomeIcon icon="fa-solid fa-plus" />
              </button>
            </div>
          </div>
        </div>
        <button @click="addCart" class="cart_button">Add to Cart</button>
        <h3 class="p_desc">Features</h3>
        <ul class="features_list">
          <li v-for="feature in features">
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
    <h3 class="p_desc">Description</h3>
    <p class="desc">{{ Product.poularity }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { filename } from "~/scripts/useHelper";
import { useCartStore } from "~/store/cartStore";

const store = useCartStore();
const route = useRoute();
const client = useSupabaseClient();
const { data: Product } = await useAsyncData(
  "getProduct",
  () => client.from("devices").select().eq("num", Number(route.params.id)),
  {
    transform: (result) => result.data[0]
  }
);

function addCart() {
  for (let i = 0; i < quantity.value; i++) {
    store.add(Product.value);
  }
}

const left = ref(true);
const right = ref(false);

let currentIndex = 0;
const quantity = ref(1);
const minusBtn = ref(true);

function addQuantity() {
  quantity.value++;
  minusBtn.value = false;
}
function minusQuantity() {
  quantity.value--;
  if (quantity.value == 1) minusBtn.value = true;
}

const images = computed(() => {
  if (!Product.value?.images) return [];
  return Product.value.images.split(",").map((element) => ({
    url: filename(element),
    isActive: false
  }));
});

onMounted(() => {
  images.value[currentIndex].isActive = true;
});

const features = computed(() =>
  Product.value
    ? [
        Product.value.display_type,
        Product.value.display_size,
        Product.value.resolution,
        Product.value.os,
        Product.value.cpu,
        `${Product.value.memory_internal ?? ""} GB RAM ${
          Product.value.memory_external ?? ""
        } GB ROM`,
        Product.value.main_camera,
        Product.value.main_camera_features,
        Product.value.front_camera,
        Product.value.front_camera_features,
        Product.value.sensors,
        `${Product.value.battery ?? ""} mAh battery`,
        Product.value.charging
      ]
    : []
);

function thumbClick(index) {
  currentIndex = index;
  modifyButtons(currentIndex);
  switchImage(currentIndex);
}
function modifyButtons(index) {
  if (images.value.length == 1) return;

  if (index == 0) {
    left.value = true;
    right.value = false;
    return;
  }
  if (index == images.value.length - 1) {
    left.value = false;
    right.value = true;
    return;
  }
  if (images.value.length > 2) {
    if (index == 1 || index == images.value.length - 2) {
      left.value = false;
      right.value = false;
    }
  }
}
function switchImage(index) {
  images.value.forEach((element) => {
    element.isActive = false;
  });
  images.value[index].isActive = true;
}
function moveForward() {
  currentIndex++;
  if (currentIndex == images.value.length - 1) right.value = true;
  if (currentIndex == 1) left.value = false;
  switchImage(currentIndex);
}
function moveBackwards() {
  currentIndex--;
  if (currentIndex == 0) left.value = true;
  if (currentIndex == images.value.length - 2) right.value = false;
  switchImage(currentIndex);
}
</script>

<style scoped>
.btn-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
.btn-container button {
  font-size: 25px;
  color: aliceblue;
  background: #000;
  opacity: 0;
  outline: none;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.img_slide:hover button {
  opacity: 0.3;
}

.detail_page {
  width: 90%;
  margin: 75px auto 0 auto;
}
.top {
  display: flex;
  justify-content: space-between;
}
.img_container {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.text_container {
  width: 35%;
}
.img_slide {
  display: flex;
  width: 100%;
  position: relative;
}
.image_list {
  display: flex;
  list-style-type: none;
  gap: 20px;
}
.inner_container {
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  flex: 0;
  height: 450px;
  transition: flex 0.5s ease-in;
}
.active {
  flex: 1;
}
.image_list li {
  width: 20%;
  cursor: pointer;
}
.image_list li:hover {
  transform: scale(0.98);
}
.image_list img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
h3,
h4,
p,
li,
.quantity_button {
  color: #000;
}
.item_name {
  font-size: 32px;
  font-weight: 600;
}
.item_price {
  font-size: 23px;
  font-weight: 600;
}
.quantity {
  margin-top: 10px;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 5px 0;
}
.quantity_button {
  outline: none;
  border: none;
  background: #fff;
  cursor: pointer;
}
.quantity_input:focus {
  outline: none;
}
.quantity_input {
  text-align: center;
  background: var(--vt-c-text-dark-2);
  border: none;
  padding: 10px 0;
  max-width: 80px;
  font-weight: 600;
  font-size: 15px;
  margin: 0 5px;
}
.cart_button {
  background: var(--genz-color-brand-2);
  border: none;
  padding: 10px 0;
  min-width: 250px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  margin: 20px 0;
}
.cart_button:hover {
  background: var(--genz-color-brand-1);
}
.p_desc {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
.desc {
  margin-bottom: 15px;
}
.quantity_button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
@media (max-width: 768px) {
  .top {
    flex-direction: column;
  }
  .img_container {
    width: 95%;
    margin: 0 auto;
  }
  .text_container {
    width: 95%;
  }
}
</style>
