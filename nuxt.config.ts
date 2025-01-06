// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/main.css",
    "~/assets/Roboto/roboto.css"
  ],

  modules: ["@nuxt/fonts"]
});