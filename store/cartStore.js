import { defineStore } from "pinia";
import { ref, computed } from "vue"; // Import computed

export const useCartStore = defineStore("cart", () => {
  const list = ref([]);

  function add(item) {
    list.value.push(item);
  }

  function remove(index) {
    list.value.splice(index, 1);
  }

  function clear() {
    list.value = [];
  }
  const size = computed(() => list.value.length);

  return {
    list,
    add,
    remove,
    clear,
    size
  };
});
