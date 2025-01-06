<template>
  <div class="foot">
    <div class="head">
      <div class="patners">Our Patners</div>
      <img :src="filename('partners.png')" class="img" alt="our patners" />
    </div>
    <div class="center">
      <div class="body">
        <div class="contacts">
          <div class="title">Contacts</div>
          <div class="ct-i">
            <FontAwesomeIcon icon="fa-solid fa-phone" />
            <div class="txt">+254705470/0722801665</div>
          </div>
          <div class="ct-i">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
            <div class="txt">Familysmart</div>
          </div>
        </div>
        <div class="abouts">
          <div class="title">Our Company</div>
          <div class="link"><a href="#">About Us</a></div>
          <div class="link"><a href="#">Mission Vision&Values</a></div>
          <div class="link"><a href="#">From Our Customers</a></div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>&copy; 2025 Family SmartPhones. All rights reserved.</p>
    </div>
  </div>
</template>

<script setup>
import { filename } from "~/scripts/useHelper";
</script>

<style scoped>
.copyright {
  display: flex;
  justify-content: center;
}
.copyright p {
  margin: 40px auto;
}
.img {
  width: 100%;
}
.foot {
  margin-bottom: 30px;
}
.title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--genz-color-brand-1);
  margin-bottom: 10px;
}
.head {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
}
.patners {
  color: black;
  font-size: 1.875rem;
  font-weight: 600;
  letter-spacing: 0.9px;
}
.body {
  display: flex;
  gap: 40%;
}
.ct-i {
  display: flex;
  align-items: center;
  gap: 8px;
}
.center {
  display: flex;
  justify-content: center;
}
.link {
  white-space: nowrap;
}
</style>
