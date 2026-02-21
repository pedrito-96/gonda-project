// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxt/icon"],
  icon: {
    customCollections: [
      {
        prefix: "icon",
        dir: "@/assets/icons",
        // if you want to include all the icons in nested directories:
        // recursive: true,
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()] as any,
  },
});
