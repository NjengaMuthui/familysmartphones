<template>
  <div class="cart">
    <div class="list">
      <CartItem
        v-for="item in store.list"
        :image_src="filename(item.images.split(',')[0])"
        :item_name="item.name"
      />
      <div class="summary">
        <h2 class="head">Order Summary</h2>
        <div class="shiping-container">
          <h4>Delivery Fee</h4>
          <h4>free</h4>
        </div>
        <div class="subtotal">
          <h2>SubTotal</h2>
          <div class="total">Kshs {{ subtotal }}</div>
        </div>
        <button class="check">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from "../components/CartItem.vue";
import { computed } from "vue";
import { formatNumberWithCommas, filename } from "~/scripts/useHelper";
import { useCartStore } from "~/store/cartStore";
const store = useCartStore();

const subtotal = computed(() => {
  let total = 0;
  store.list.forEach((element) => {
    total = total + Number(element.price);
  });
  return formatNumberWithCommas(total);
});
</script>

<style scoped>
.cart {
  position: relative;
  width: 80%;
  margin: 90px auto 0 auto;
  color: black;
}
.list {
  width: 90%;
  margin: 0 auto;
}
.summary {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 40px 20px;
  width: 100%;
}
.shiping-container,
.subtotal {
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
}
.check {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  background-color: #2e86ab;
  color: white;
  cursor: pointer;
}
.head {
  font-size: 30px;
}
.total {
  font-weight: 600;
  font-size: 1.125rem;
}
h4 {
  font-size: 0.9375rem;
}
@media (min-width: 900px) {
  .summary {
    position: absolute;
    left: 60%;
    top: 0;
    width: 40%;
  }
  .list {
    width: 55%;
    margin: 0;
  }
}
</style>
