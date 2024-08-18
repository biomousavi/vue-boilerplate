// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  // Env Configs
  runtimeConfig: {
    // accessible only on server side
    stripeSecret: "should be override in .env file",
    // exposed on client and server side
    public: {
      apiBase: "/api",
    },
  },

  // Eslint Config
  eslint: {
    config: {
      // Using eslint stylistic instead of prettier
      stylistic: {
        semi: true,
        indent: 2,
        quotes: "double",
      },
    },
  },

  // image module config
  image: {
    quality: 70,
  },

  // Nuxt Security Module Config
  security: {
    rateLimiter: false,
    headers: {
      // To Use Nuxt DevTools
      crossOriginEmbedderPolicy:
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },

  site: {
    // TODO: change it to real website URL
    url: "https://example.com",
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "nuxt-typed-router",
    "nuxt-security",
  ],
});
