// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["./app/assets/css/main.css"],
  modules: ["@nuxt/icon", "@vueuse/nuxt", "@nuxt/image"],
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
