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
<template>
  <div class="about-container">
    <div class="about-content">
      <div class="top">
        <h1 class="blue-line title">About Us</h1>
      </div>

      <p>
        We are best known for a reputation of providing original smartphones,
        laptops, desktop computers, and accessories with a promise of
        durability, quality, and authenticity. We are highly spoken of by many
        whom we have served since our inception in 2016.
      </p>
      <p>
        Since then, we have grown into a reputable venture that provides digital
        solutions to our esteemed customer base that keeps growing by the day.
      </p>
      <p>
        Family Smartphone Ltd is also committed to fostering an inclusive
        environment. We care about diversity in both our employees and our
        suppliers. Diversity and inclusion are how we achieve success. By
        celebrating diversity across all spectrums, including but not limited to
        race, nationality, religion, gender, disability, status, and age, we are
        a stronger company and culture.
      </p>

      <div class="top">
        <h1 class="blue-line title">HOW WE OPERATE</h1>
      </div>
      <p>At Family Smartphone, we drive our business forward through
both the management structure we have put in place
and the planning and implementation process we use to ensure
that decisions are well thought-out and then put into action.</p>
<p>Our management team is organized into functional
departments that have responsibilities for discrete
businesses, operations and sales services for every product
they represent from our suppliers.</p>
      <div class="top">
        <h1 class="blue-line title">SHAREHOLDERS & DIRECTORS</h1>
      </div>
      <p>The company has two directors who are charged with the
responsibility of running the company.
The company directors are business people with several years
of experience in sales and marketing.</p>
      <div class="top">
        <h1 class="blue-line title">CAPITALISATION BASE</h1>
      </div>
      <p>The authorised share capital of the company is Ksh. 6,000,000
(Kenya shillings six million) divided into five
thousand (5,000) shares of kenya shillings one thousand
two hundred (ksh 1,200) each.</p>
    </div>
    <div class="team">
      <div class="top">
        <h1 class="blue-line title">WE'RE A TEAM</h1>
      </div>
      <div class="top-container">
        <img class="staff" src="~/assets/staff.png" alt="Family Staff" >
      <div class="pink"></div>
      <div class="staff-text">
The Family Smartphone staff
      </div>
      </img>
      </div>
      <div class="manage-cont">
        <div class="manage-img">
          <img src="~/assets/managers.png" alt="Family Management">
        </div>
        <div class="manage-txt-cont">
          <h1>
            Mr. and Mrs. Roy Mutwiri
Director & Co-Director
          </h1>
          <p>
“We take pride in our talented and diverse team of staff
who focus on our customers, every day. Their combined
intelligence, spirit and creativity make Family Smartphone
a great place to work, learn and grow.”
          </p>
        </div>
      </div>      
    </div>
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
  <div class="team">
    <div class="top">
        <h1 class="blue-line title">Mission Vision & Values</h1>
      </div>
      <div class="grid-container">
    <div class="grid-item"><h1>Vision</h1><p>Getting Families and friens Connected</p></div>
    <div class="grid-item stag"><h1>Mission</h1><p>
We exist to avail a
wide range of smart
gadgets from top
brands for our
customers.</p></div>
    <div class="grid-item"><h1>Values</h1><ul class="numbered">
      <li><p>Trust</p></li>
      <li><p>Quality</p> </li>
      <li><p>Respect</p></li>
      <li><p>Go Extra Mile</p></li>
    </ul></div>
  </div>
  </div>
  </div>
</template>

<style scoped>
.customer-image img{
  width: 100%;
}
.numbered{
  list-style-type: decimal;
}
.grid-container {
  max-width: 300px;
  margin: 30px auto;
      display: grid;
      gap: 40px; /* Space between items */
      grid-template-columns: 1fr; /* Single column by default */
    }
    .grid-item {
      background-color: white;
      padding: 5px 10px 70px 10px;
      border: 3px solid var(--genz-color-brand-1);
      box-shadow: -10px -10px 0 var(--genz-color-brand-1);
    }
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px;
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
.manage-cont{
  width: 90%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
}
.manage-img{
  width: 80%;
  margin: 10px auto;
}
.manage-img img{
  width: 100%;
   box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5)
}
.manage-txt-cont{
  width: 90%;
  margin: 10px auto;
}
.staff {
  width: 70%;
  position: absolute;
  left: 15px;
  top: 5%;
  height: 70%;
  z-index: 2;
}
.pink {
  position: absolute;
  background-color: pink;
  width: 65%;
  height:80%;
  z-index: 1;
}
.staff-text{
  position: absolute;
  top: 80%;
  font-size: 1.25rem;
}
.top-container{
  width: 100vw;
  margin-top: 20px;
  position: relative;
  height: 48.88vw;
  margin-left: 10%;
}
.team {
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.top {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.title {
  position: relative;
  width: fit-content;
}
.about-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9; /* Subtle background for better contrast */
  padding: 0 20px 40px 20px;
}

.about-content {
  width: 100%;
  max-width: 800px; /* Keeps content at a readable width */
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for elevation */
  text-align: justify; /* Align text for readability */
}

h1 {
  font-size: 2.5rem; /* Large, bold heading */
  margin-bottom: 20px;
  color: #333; /* Dark text for better contrast */
  text-align: center; /* Center-align the heading */
}

p {
  font-size: 1.2rem; /* Slightly larger text for readability */
  line-height: 1.8; /* Increased line height for better spacing */
  color: #555; /* Slightly lighter text for secondary content */
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .about-content {
    padding: 25px;
  }

  h1 {
    font-size: 2.25rem;
  }

  p {
    font-size: 1.1rem;
  }
  .staff-text{
    font-size: 1.5625rem;
  }
  .manage-cont{
  flex-direction: row;
}
.manage-img{
  width: 30%;
  margin: 0;
}

.manage-txt-cont{
  width: 70%;
  padding: 5%;
}
.grid-container {
  max-width: 600px;
        grid-template-columns: repeat(2, 1fr); /* 2 items per row on large screens */
      }
      .stag{
        transform: translateY(50%);
      }

}

@media (min-width: 768px) {
  
  .top-container{
    width: 80vw;
    height: 39vw;
  }
  .about-content {
    padding: 30px;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }
  .staff-text{
    font-size: 1.875rem;
  }
   .timeline-container {
    gap: 70px;
    padding: 30px;
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
    padding: 50px;
  }

  .description {
    max-width: 700px;
    font-size: 1.25rem;
  }
}
</style>

