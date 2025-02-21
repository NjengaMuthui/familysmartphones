// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@fortawesome/fontawesome-svg-core/styles.css", "~/assets/main.css"],
  modules: ["@nuxt/fonts", "@nuxtjs/supabase", "@pinia/nuxt"],
  supabase: {
    redirect: false
  }
});
