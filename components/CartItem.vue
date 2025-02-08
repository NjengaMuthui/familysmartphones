<template>
  <div class="cart_item">
    <img :src="image_src" alt="Cart Item" />
    <div class="column">
      <h3 class="item_name">
        {{ item_name }}
      </h3>
      <div class="row">
        <h4>Quantity : 1</h4>
        <button @click="store.remove(props.index)" class="remove">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/store/cartStore";
const store = useCartStore();
const props = defineProps({
  image_src: String,
  item_name: String,
  index: Number
});
</script>

<style scoped>
.remove {
  color: red;
  cursor: pointer;
}
.cart_item {
  margin: 20px auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.cart_item img {
  width: 100%;
}
.row {
  display: flex;
  gap: 10px;
}
.item_name {
  font-weight: 600;
}
.row button {
  border: none;
  background: transparent;
  cursor: pointer;
}
@media (min-width: 600px) {
  .cart_item {
    flex-direction: row;
  }
  .cart_item img {
    width: 200px;
  }
}
</style>
