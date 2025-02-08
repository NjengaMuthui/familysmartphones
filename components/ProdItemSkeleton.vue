<template>
  <div class="shop-item skeleton">
    <div class="img-container">
      <div class="img skeleton-box"></div>
    </div>
    <div class="item-description">
      <div class="skeleton-box item-name"></div>
      <div class="skeleton-box item-price"></div>
      <div class="product-highlights">
        <div class="top">
          <div class="skeleton-box item"></div>
          <div class="skeleton-box item"></div>
        </div>
        <div class="bottom">
          <div class="skeleton-box item"></div>
          <div class="skeleton-box item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-box {
  background: linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 5px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.skeleton {
  width: 225px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.img-container {
  width: 100%;
  height: 150px;
  border-radius: 5px;
  overflow: hidden;
}

.img {
  width: 100%;
  height: 200px;
}

.item-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.item-name,
.item-price {
  width: 80%;
  height: 20px;
  margin: 5px 0;
}

.item {
  width: 40%;
  height: 15px;
  margin: 5px 0;
}
</style>
