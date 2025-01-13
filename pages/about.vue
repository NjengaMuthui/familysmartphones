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
    </div>
  </div>
</template>

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
.about-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

@media (min-width: 768px) {
  .about-content {
    padding: 30px;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
