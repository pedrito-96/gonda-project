<script setup lang="ts">
const { ts, getLocale } = useI18n();
const config = useRuntimeConfig();
const siteUrl = config.public.siteUrl as string;

const locale = computed(() => getLocale());
const isItalian = computed(() => locale.value === "it");

useHead(() => ({
  htmlAttrs: {
    lang: isItalian.value ? "it-IT" : "en-US",
  },
}));

useSeoMeta({
  title: () => ts("seo.title"),
  description: () => ts("seo.description"),
  keywords: () => ts("seo.keywords"),
  ogTitle: () => ts("seo.og_title"),
  ogDescription: () => ts("seo.og_description"),
  ogType: "website",
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/iceland.png`,
  ogImageAlt: () => ts("seo.og_title"),
  ogLocale: () => (isItalian.value ? "it_IT" : "en_US"),
  ogLocaleAlternate: () => (isItalian.value ? ["en_US"] : ["it_IT"]),
  twitterCard: "summary_large_image",
  twitterTitle: () => ts("seo.og_title"),
  twitterDescription: () => ts("seo.og_description"),
  twitterImage: `${siteUrl}/iceland.png`,
});

// JSON-LD LocalBusiness — Schema.org rich result
const jsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "Nutritionist"],
  "@id": `${siteUrl}/#business`,
  name: "Greta Pianegonda — Biologa Nutrizionista",
  alternateName: "Studio Nutrizionista Pianegonda",
  description: ts("seo.description"),
  url: siteUrl,
  image: `${siteUrl}/avatar.jpeg`,
  logo: `${siteUrl}/favicon.ico`,
  telephone: "+393534918134",
  email: "gretapianegonda@gmail.com",
  priceRange: "€€",
  inLanguage: isItalian.value ? "it-IT" : "en-US",
  founder: {
    "@type": "Person",
    name: "Greta Pianegonda",
    jobTitle: "Biologa Nutrizionista",
    sameAs: [
      "https://www.instagram.com/nutrizionista_pianegonda/",
      "https://www.linkedin.com/in/greta-pianegonda-188ba6172/",
      "https://www.facebook.com/Biologa-Nutrizionista-Pianegonda",
    ],
  },
  sameAs: [
    "https://www.instagram.com/nutrizionista_pianegonda/",
    "https://www.linkedin.com/in/greta-pianegonda-188ba6172/",
    "https://www.facebook.com/Biologa-Nutrizionista-Pianegonda",
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Veneto" },
    { "@type": "AdministrativeArea", name: "Friuli Venezia Giulia" },
    { "@type": "AdministrativeArea", name: "Trentino Alto Adige" },
  ],
  knowsLanguage: ["it", "en"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Iscritta all'Ordine dei Biologi",
    recognizedBy: {
      "@type": "Organization",
      name: "Ordine Nazionale dei Biologi",
    },
  },
  location: [
    {
      "@type": "Place",
      name: "Studio Sarcedo — presso Snatch | Studio di Fisioterapia",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Generale A. dalla Chiesa, 5",
        addressLocality: "Sarcedo",
        postalCode: "36030",
        addressRegion: "VI",
        addressCountry: "IT",
      },
    },
    {
      "@type": "Place",
      name: "Studio Zanè — presso Officina Botanica",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via Trento, 24",
        addressLocality: "Zanè",
        postalCode: "36010",
        addressRegion: "VI",
        addressCountry: "IT",
      },
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Piani Alimentari Personalizzati",
        serviceType: "Nutrition planning",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Nutrizione per Sportivi Amatoriali",
        serviceType: "Sports nutrition",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Alimentazione Plant-Based",
        serviceType: "Vegetarian and vegan nutrition",
      },
    },
  ],
}));

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: () => JSON.stringify(jsonLd.value),
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout class="layouts">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
