<script setup>
import { ref, reactive, watch } from "vue";

const props = defineProps({
  title: String,
  selects: Array,
  single: Boolean
});
const emits = defineEmits(["selectedValue"]);
const isOpen = ref(false);
const toggleAccordion = () => {
  isOpen.value = !isOpen.value;
};

const selected = ref("");
const selections = reactive(props.selects.map((el) => ({ ...el })));

function onSelection(select) {
  if (select.value === selected.value) {
    selected.value = "";
    select.isSelected = false;
  } else {
    selections.forEach((el) => (el.isSelected = false));
    select.isSelected = true;
    selected.value = select.name;
  }
  emits("selectedValue", selected.value);
}

watch(
  () => props.selects,
  (newSelects) => {
    selections.splice(
      0,
      selections.length,
      ...newSelects.map((el) => ({ ...el }))
    );
  },
  { deep: true }
);
</script>

<template>
  <div class="filter-item">
    <div class="acc-top" @click="toggleAccordion">
      <div class="acc-title">{{ props.title }}</div>
      <FontAwesomeIcon
        :icon="isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"
      />
    </div>
    <transition name="accordion-item__description">
      <div v-show="isOpen" class="selects-container">
        <div
          v-for="select in selections"
          :key="select.name"
          class="select-item"
          @click="onSelection(select)"
        >
          <div class="select-toggle" :class="{ single: props.single }">
            <div v-if="select.isSelected">
              <div class="inner-circle"></div>
            </div>
          </div>
          <div>{{ select.name }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="css">
.acc-top {
  padding: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.acc-title {
  font-weight: 600;
}
.selects-container {
  height: auto;
  padding: 10px 0 5px 15px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.3);
  transition: height 0.3s ease;
  background-color: white;
  cursor: pointer;
}
.select-toggle {
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.single {
  border-radius: 50%;
}
.select-item {
  display: flex;
  align-items: center;
  margin: 5px 0;
}
.inner-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000;
}
.accordion-item__description-enter-from,
.accordion-item__description-leave-to {
  max-height: 0;
}
.accordion-item__description-enter-to,
.accordion-item__description-leave-from {
  max-height: 1000px;
}
.accordion-item__description-leave-active {
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.accordion-item__description-enter-active {
  overflow: hidden;
  transition: max-height 1s ease-in-out;
}
</style>
