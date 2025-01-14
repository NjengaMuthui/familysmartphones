<template>
  <div class="timeline-container">
    <div class="top">
      <h1 class="blue-line title">History</h1>
    </div>
    <section
      v-for="(event, index) in timelineEvents"
      :key="index"
      class="timeline-item"
      :class="{ visible: event.isVisible }"
      ref="timelineItems"
    >
      <div class="year">{{ event.year }}</div>
      <article class="description">{{ event.description }}</article>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

const timelineEvents = reactive([
  {
    year: "2016",
    description: "Opened our first branch in Makutano",
    isVisible: false
  },
  {
    year: "2019",
    description: "Opened our second branch in Mwea, near stage",
    isVisible: false
  },
  {
    year: "2020",
    description:
      "Opened our third branch in Mwea, opp. Eastmatt featuring smartphones, laptops and car care services",
    isVisible: false
  },
  {
    year: "2021",
    description:
      "Began Lipa Pole Pole services to customers who are chama members through bank finance",
    isVisible: false
  },
  {
    year: "2022",
    description: "Began corporate sale under Watu Simu credit and EasyBuy",
    isVisible: false
  }
]);

const timelineItems = ref([]);

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1 // Element is visible when 10% of it is in the viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = timelineItems.value.indexOf(entry.target);
        if (index !== -1) {
          timelineEvents[index].isVisible = true;
        }
      }
    });
  }, observerOptions);

  timelineItems.value.forEach((item) => {
    observer.observe(item);
  });
});
</script>

<style scoped>
.top {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.title {
  position: relative;
  width: fit-content;
}
/* Container */
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
  background: linear-gradient(to bottom, #ffffff, #f2f9ff);
}

/* Timeline Item */
.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateX(-50px); /* Start position for animation */
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateX(0); /* Reset to its original position */
}

/* Year Styling */
.year {
  background-color: #00a6c9;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
}

/* Description Styling */
.description {
  font-size: 1rem;
  text-align: center;
  max-width: 300px;
}

/* Responsive Design */
@media (min-width: 768px) {
  .timeline-container {
    gap: 70px;
    padding: 10px;
  }

  .timeline-item {
    max-width: 600px;
    margin: 0 auto;
  }

  .year {
    font-size: 2rem;
    padding: 15px 30px;
  }

  .description {
    font-size: 1.125rem;
  }
}

@media (min-width: 1200px) {
  .timeline-container {
    padding: 20px;
  }

  .description {
    max-width: 700px;
    font-size: 1.25rem;
  }
}
</style>
