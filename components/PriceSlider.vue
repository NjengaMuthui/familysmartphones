<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="track"></div>
      <div
        class="thumb"
        :style="{ left: `${minPercent}%` }"
        @mousedown="startDrag('min')"
      >
        <span class="tooltip">{{ minPrice }}</span>
      </div>
      <div
        class="thumb"
        :style="{ left: `${maxPercent}%` }"
        @mousedown="startDrag('max')"
      >
        <span class="tooltip">{{ maxPrice }}</span>
      </div>
      <div
        class="range"
        :style="{
          left: `${minPercent}%`,
          width: `${maxPercent - minPercent}%`
        }"
      ></div>
    </div>
    <div class="price-labels">
      <span>Min: {{ minPrice }}</span>
      <span>Max: {{ maxPrice }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({ min: Number, max: Number });
const minPrice = ref(props.min);
const maxPrice = ref(props.max);
const minBound = props.min;
const maxBound = props.max;
const minPercent = ref(0);
const maxPercent = ref(100);
const dragging = ref(null);

const startDrag = (type) => {
  dragging.value = type;
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};

const stopDrag = () => {
  dragging.value = null;
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};

const onDrag = (e) => {
  const slider = document.querySelector(".slider-wrapper");
  const rect = slider.getBoundingClientRect();
  const sliderWidth = rect.width;
  const offsetX = e.clientX - rect.left;
  const percent = Math.min(Math.max((offsetX / sliderWidth) * 100, 0), 100);

  if (dragging.value === "min" && percent < maxPercent.value) {
    minPercent.value = percent;
    minPrice.value = Math.round(
      minBound + (percent / 100) * (maxBound - minBound)
    );
  }

  if (dragging.value === "max" && percent > minPercent.value) {
    maxPercent.value = percent;
    maxPrice.value = Math.round(
      minBound + (percent / 100) * (maxBound - minBound)
    );
  }
};

onMounted(() => {
  minPercent.value =
    ((minPrice.value - minBound) / (maxBound - minBound)) * 100;
  maxPercent.value =
    ((maxPrice.value - minBound) / (maxBound - minBound)) * 100;
});
</script>

<style scoped>
.slider-container {
  width: 90%;
  max-width: 600px;
  margin: 40px 10px 10px 0;
}

.slider-wrapper {
  position: relative;
  height: 10px;
  background: #ddd;
  border-radius: 5px;
  user-select: none;
}

.track {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #ccc;
  border-radius: 5px;
}

.range {
  position: absolute;
  height: 100%;
  background: #3498db;
  border-radius: 5px;
}

.thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #3498db;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tooltip {
  position: absolute;
  top: -30px;
  padding: 3px 8px;
  background: var(--genz-color-brand-1);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  white-space: nowrap;
  transform: translateX(-50%);
}

.thumb:hover .tooltip {
  display: block;
}

.price-labels {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
