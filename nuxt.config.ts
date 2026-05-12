// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["./app/assets/css/main.css"],
  runtimeConfig: {
    public: {
      formspree_id: process.env.NUXT_PUBLIC_FORMSPREE_ID,
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL ||
        "https://nutrizionistapianegonda.it",
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: "it" },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://nutrizionistapianegonda.it/" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#5e7e99" },
        { name: "author", content: "Greta Pianegonda" },
        { name: "robots", content: "index,follow,max-image-preview:large" },
        {
          property: "og:site_name",
          content: "Greta Pianegonda — Biologa Nutrizionista",
        },
        { property: "og:type", content: "website" },
      ],
    },
  },

  modules: ["@nuxt/icon", "@vueuse/nuxt", "@nuxt/image", "nuxt-i18n-micro"],
  i18n: {
    locales: [
      { code: "it", iso: "it-IT", displayName: "Italiano" },
      { code: "en", iso: "en-US", displayName: "English" },
    ],
    defaultLocale: "it",
    translationDir: "locales",
    meta: true,
    metaBaseUrl: "https://nutrizionistapianegonda.it",
    localeCookie: "user-locale",
    canonicalQueryWhitelist: [],
  },
  alias: {
    "@": "/<rootDir>/app",
    "~": "/<rootDir>",
  },
  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "./app/assets/icons",
        // if you want to include all the icons in nested directories:
        // recursive: true,
      },
    ],
  },
  image: {
    // Options
  },
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  vite: {
    plugins: [tailwindcss()] as any,
  },
});
