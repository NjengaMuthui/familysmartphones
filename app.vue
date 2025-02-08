<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useCartStore } from "~/store/cartStore";

const open = ref(false);
const opacity = ref(1);
const side = ref(true);
const search_input = ref(null);
const iconSize = ref("50px");

const cartItems = useCartStore();

const updateIconSize = () => {
  const screenWidth = window.innerWidth;
  iconSize.value = `${Math.max(20, screenWidth / 20)}px`;
};

onMounted(() => {
  updateIconSize();
  window.addEventListener("resize", updateIconSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIconSize);
});

const iconStyle = ref(() => ({
  fontSize: iconSize.value
}));

function searchClick() {
  open.value = !open.value;
  opacity.value = 0.0;

  setTimeout(() => {
    opacity.value = 1;
    search_input.value.focus();
  }, 300);
}
function openCart() {
  useRouter().push("/cart");
}
</script>
<template>
  <div>
    <header>
      <nav>
        <div class="top">
          <div class="top-logo">
            <NuxtLink to="/">
              <img
                alt="Family logo"
                class="logo"
                src="@/assets/familylogo.png"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="center">
          <div class="container">
            <div class="hide-search">
              <div class="buts">
                <div class="search-wrapper">
                  <input
                    type="text"
                    ref="search_input"
                    class="search-input"
                    :class="{ active: open }"
                  />
                  <button
                    @click="searchClick"
                    class="search-btn"
                    :class="{ active: open }"
                    :style="{ opacity: opacity }"
                  >
                    <FontAwesomeIcon v-if="open" icon="fa-solid fa-xmark" />
                    <FontAwesomeIcon
                      v-else
                      icon="fa-solid fa-magnifying-glass"
                    />
                  </button>
                </div>
                <button @click="openCart" class="items_cart">
                  <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  <div class="items_num">{{ cartItems.size }}</div>
                </button>

                <button @click="side = !side">
                  <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
                </button>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="menu">
              <ul class="menu-items">
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Tecno">Tecno</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Infinix">Infinix</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/nokia">nokia</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Oppo">Oppo</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Oneplus">Oneplus</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Realme">Realme</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Xiaomi">Xiaomi</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Vivo">Vivo</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Samsung">Samsung</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Apple">Apple</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Huawei">Huawei</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Google">Google</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="/brand/Itel">Itel</NuxtLink>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="#"
                    >Laptops <FontAwesomeIcon icon="fa-solid fa-chevron-down"
                  /></NuxtLink>
                  <ul class="dropdown">
                    <li><NuxtLink to="/laptop/HP">HP</NuxtLink></li>
                    <li><NuxtLink to="/laptop/Dell">Dell</NuxtLink></li>
                    <li>
                      <NuxtLink to="/laptop/Lenovo">Lenovo</NuxtLink>
                    </li>
                    <li><NuxtLink to="/laptop/Apple">Apple</NuxtLink></li>
                    <li><NuxtLink to="/laptop/Acer">Acer</NuxtLink></li>
                    <li><NuxtLink to="/laptop/Asus">Asus</NuxtLink></li>
                    <li>
                      <NuxtLink to="/laptop/Samsung">Samsung</NuxtLink>
                    </li>
                  </ul>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="#"
                    >Computers<FontAwesomeIcon icon="fa-solid fa-chevron-down"
                  /></NuxtLink>
                  <ul class="dropdown computer-dropdown">
                    <div class="flex-row">
                      <div class="flex-column">
                        <li>
                          <NuxtLink to="/computerconsumables/desktop-computers"
                            >Desktop Computers</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            to="/computerconsumables/chargers-power-cables"
                            >Chargers & Power Cables</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/computerconsumables/keyboards-mouse"
                            >Keyboards & Mouse</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/computerconsumables/routers"
                            >Routers</NuxtLink
                          >
                        </li>

                        <li>
                          <NuxtLink to="/computerconsumables/switches"
                            >Switches</NuxtLink
                          >
                        </li>
                      </div>
                      <div class="flex-column">
                        <li>
                          <NuxtLink to="/computerconsumables/servers"
                            >Servers</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/computerconsumables/cctv-installation"
                            >CCTV Installation</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/computerconsumables/softwares-repairs"
                            >Softwares & Repairs</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            to="/computerconsumables/printers-toners-inks"
                            >Printers, Toners & Inks</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/computerconsumables/printing-papers"
                            >Printing Papers</NuxtLink
                          >
                        </li>
                      </div>
                    </div>
                  </ul>
                </li>
                <li class="menu-item slider">
                  <NuxtLink to="#"
                    >Accessories
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down"
                  /></NuxtLink>
                  <ul class="dropdown accessories-dropdown">
                    <div class="flex-row">
                      <div class="flex-column">
                        <li>
                          <NuxtLink to="/brand/accessories/phone-cases"
                            >Phone Cases</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/earphones"
                            >Earphones</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/stylus-pen"
                            >Stylus Pen</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/power-banks"
                            >Power Banks</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/screen-protectors"
                            >Screen Protectors</NuxtLink
                          >
                        </li>
                      </div>
                      <div class="flex-column">
                        <li>
                          <NuxtLink to="/brand/accessories/portable-speakers"
                            >Portable Speakers</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/chargers"
                            >Chargers</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/memory-cards"
                            >Memory Cards</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/flash-disks"
                            >Flash Disks</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/hard-drives"
                            >Hard Drives</NuxtLink
                          >
                        </li>
                      </div>
                      <div class="flex-column">
                        <li>
                          <NuxtLink to="/brand/accessories/power-cables"
                            >Power Cables</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/smart-watches"
                            >Smart Watches</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/ring-light"
                            >Ring Light</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/selfie-tripod-stand"
                            >Selfie Tripod Stand</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink to="/brand/accessories/computer-ram"
                            >Computer Ram</NuxtLink
                          >
                        </li>
                      </div>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div class="side-panel" :class="{ close_panel: side }">
        <button class="close-menu" @click="side = !side">
          <FontAwesomeIcon icon="fa-solid fa-xmark" />
        </button>
        <ul class="side-list">
          <ul class="menu-items">
            <li class="menu-item">
              <NuxtLink to="/brand/Tecno">Tecno</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Infinix">Infinix</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/nokia">nokia</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Oppo">Oppo</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Oneplus">Oneplus</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Realme">Realme</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Xiaoami">Xiaoami</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Vivo">Vivo</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Samsung">Samsung</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Apple">Apple</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Huawei">Huawei</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Google">Google</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="/brand/Itel">Itel</NuxtLink>
            </li>
            <li class="menu-item">
              <NuxtLink to="#">Laptops</NuxtLink>
              <ul>
                <li><NuxtLink to="/laptop/HP">HP</NuxtLink></li>
                <li><NuxtLink to="/laptop/Dell">Dell</NuxtLink></li>
                <li><NuxtLink to="/laptop/Lenovo">Lenovo</NuxtLink></li>
                <li><NuxtLink to="/laptop/Apple">Apple</NuxtLink></li>
                <li><NuxtLink to="/laptop/Acer">Acer</NuxtLink></li>
                <li><NuxtLink to="/laptop/Asus">Asus</NuxtLink></li>
                <li><NuxtLink to="/laptop/Samsung">Samsung</NuxtLink></li>
              </ul>
            </li>
            <li class="menu-item">
              <NuxtLink to="#">Accessories</NuxtLink>
              <ul>
                <li><NuxtLink to="#">Keyboards</NuxtLink></li>
                <li><NuxtLink to="#">Mice</NuxtLink></li>
                <li><NuxtLink to="#">Monitors</NuxtLink></li>
                <li><NuxtLink to="#">Headphones</NuxtLink></li>
                <li><NuxtLink to="#">Webcams</NuxtLink></li>
                <li><NuxtLink to="#">Phone Accessories</NuxtLink></li>
              </ul>
            </li>
            <li class="menu-item">
              <NuxtLink to="#">Computer Consumables</NuxtLink>
              <ul>
                <li>
                  <NuxtLink to="/computerconsumables/desktop-computers"
                    >Desktop Computers</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/chargers-power-cables"
                    >Chargers & Power Cables</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/keyboards-mouse"
                    >Keyboards & Mouse</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/routers">Routers</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/switches"
                    >Switches</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/servers">Servers</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/cctv-installation"
                    >CCTV Installation</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/softwares-repairs"
                    >Softwares & Repairs</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/printers-toners-inks"
                    >Printers, Toners & Inks</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/computerconsumables/printing-papers"
                    >Printing Papers</NuxtLink
                  >
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </div>
      <div
        class="overlay"
        :class="{ show: !side, hide: side }"
        @click="side = !side"
      ></div>
    </header>
    <div class="body-footer">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <Footer />
    </div>
  </div>
</template>
<style scoped>
.slider a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--genz-color-brand-1);
  transform: scaleX(0);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  transform-origin: right center;
}

.slider a:hover::after {
  transform: scaleX(1);
  transform-origin: left center;
  transition-duration: 0.4s;
}
.bottom {
  display: flex;
  justify-content: center;
}
.items_num {
  position: absolute;
  top: 0px;
  right: -2px;
  background: var(--genz-color-brand-1);
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 14px;
}
.items_cart {
  position: relative;
}
.body-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  position: relative;
  margin-top: 80px;
}
.close_panel {
  transform: translateX(300px);
}
.side-list {
  list-style: none;
}
.side-list li::after {
  content: "";
  display: block;
  height: 1px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  background: linear-gradient(
    to right,
    var(--color-link-hover),
    var(--color-background)
  );
}
.close-menu {
  border: 0;
  font-size: 30px;
  background: transparent;
  color: var(--color-text);
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  padding: 5px;
}
.close-menu:hover {
  color: var(--genz-color-brand-1);
}

.overlay {
  width: 100%;
  height: 100%;
  background: var(--vt-c-black);
  opacity: 0.8;
  z-index: 4;
  position: fixed;
  top: 0;
}
.side-panel {
  width: 300px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  background: var(--color-background);
  height: 100%;
  padding-top: 100px;
  transition: transform 0.6s;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #ccc;
}

.side-panel::-webkit-scrollbar {
  width: 8px;
}

.side-panel::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.side-panel::-webkit-scrollbar-track {
  background: #ccc;
}
.search-wrapper {
  position: relative;
  height: var(--round-button-size);
  margin-left: 5px;
}
.search-input {
  height: var(--round-button-size);
  width: var(--round-button-size);
  color: var(--color-link-hover);
  outline: none;
  border: 0;
  background: none;
  transition: width 0.3s ease;
  border-radius: 10px;
}
.hide-search {
  display: flex;
  gap: 30px;
}
.buts button {
  border: none;
  border-radius: 50%;
  width: var(--round-button-size);
  height: var(--round-button-size);
  font-size: 18px;
  background: transparent;
  cursor: pointer;
}
.search-btn {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-out;
}
.active.search-input {
  width: 200px;
  border: 1px solid var(--genz-color-brand-1);
  margin-right: var(--round-button-size);
}
.active.search-btn {
  transform: translateX(200px);
  background: var(--close-color);
}
.active.socials {
  display: none;
}
.buts {
  gap: 10px;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background: white;
}
.top-logo {
  position: absolute;
  top: 10px;
  left: 20px;
  height: 40px;
}
.logo {
  width: 40px;
}
.dropdown {
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 10px 30px 30px 30px;
  margin: 0;
  z-index: 7;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
  background-color: white;
  white-space: nowrap;
}
.computer-dropdown {
  left: -250px;
}
.accessories-dropdown {
  left: -320px;
}

.dropdown li {
  padding: 0;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.menu-item:hover .dropdown {
  visibility: visible;
  transform: scaleY(1);
}

.menu-item:hover .dropdown li {
  opacity: 1;
  transform: translateY(0);
}

.menu-item svg {
  margin-left: 5px;
  transition: transform 0.3s;
}

.menu-item:hover svg {
  transform: rotate(180deg);
}
@media (min-width: 768px) {
  .logo {
    width: 60px;
  }
  .body-footer {
    margin-top: 110px;
  }
}
@media (min-width: 992px) {
  .logo {
    width: 80px;
  }
  .body-footer {
    margin-top: 110px;
  }
}

@media (min-width: 1200px) {
  .logo {
    width: 100px;
  }
  .body-footer {
    margin-top: 210px;
  }
}

.menu .menu-items,
.socials,
.buts,
.side,
.container {
  display: flex;
  flex-direction: row;
  position: relative;
}
.container {
  width: 80%;
  margin: 10px auto;
  justify-content: end;
  align-items: center;
}
.menu-items,
.socials {
  list-style-type: none;
}
.menu-item {
  margin: 5px 5px;
  font-weight: 400;
  cursor: pointer;
  position: relative;
}
.socials a {
  color: var(--color-link-hover);
  padding: 0;
}
.socials a:hover {
  color: #fcb900;
}
.glass {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px) saturate(200%);
  -webkit-backdrop-filter: blur(10px) saturate(200%);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.flex-row {
  display: flex;
  gap: 30px;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
@media (max-width: 768px) {
  .bottom {
    display: none;
  }
}
</style>
