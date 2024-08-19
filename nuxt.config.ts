// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        charset: "utf-8",
      },
    },
  },

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

  // Vite Vue options
  vue: {
    propsDestructure: true,
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

  fonts: {
    provider: "google",
    defaults: {
      weights: [400],
      styles: ["normal", "italic"],
      subsets: [
        "cyrillic-ext",
        "cyrillic",
        "greek-ext",
        "greek",
        "vietnamese",
        "latin-ext",
        "latin",
      ],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "nuxt-typed-router",
    "nuxt-security",
    "@nuxt/fonts",
    "@nuxtjs/seo",
    "@nuxtjs/html-validator",
  ],
});
