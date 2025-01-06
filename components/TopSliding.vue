<template>
  <div class="slider" ref="slider">
    <div
      class="slider-track"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div class="slider-item" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Slide ' + (index + 1)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { filename } from "~/scripts/useHelper";
const currentSlide = ref(0);
let slideInterval = null;
const images = ref([
  filename("DSC_2968.jpg"),
  filename("DSC_6904.jpg"),
  filename("DSC_6926.jpg")
]);
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};

const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 8000);
};
const stopAutoSlide = () => {
  clearInterval(slideInterval);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}
@media (min-width: 768px) {
  .slider {
    width: 90%;
    height: 36vw;
  }
}
@media (min-width: 992px) {
  .slider {
    width: 75%;
    height: 28vw;
  }
}

@media (min-width: 1200px) {
  .slider {
    width: 65%;
    height: 20vw;
  }
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slider-item {
  flex: 0 0 100%;
  height: 100%;
}

.slider-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
