// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  runtimeConfig: {
    // accessible only on server side
    stripeSecret: "should be override in .env file",
    // exposed on client and server side
    public: {
      apiBase: "/api",
    },
  },

  modules: ["@nuxt/eslint"]
});