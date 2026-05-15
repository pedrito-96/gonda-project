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

// JSON-LD graph — LocalBusiness w/ 2 separate Department nodes + Person + FAQ
const socials = [
  "https://www.instagram.com/nutrizionista_pianegonda/",
  "https://www.linkedin.com/in/greta-pianegonda-188ba6172/",
  "https://www.facebook.com/profile.php?id=61589009683393",
];

const sarcedoBranch = {
  "@type": ["LocalBusiness", "MedicalBusiness", "Nutritionist"],
  "@id": `${siteUrl}/#studio-sarcedo`,
  name: "Greta Pianegonda — Studio di Sarcedo",
  parentOrganization: { "@id": `${siteUrl}/#business` },
  url: `${siteUrl}/#contacts`,
  image: `${siteUrl}/avatar.png`,
  telephone: "+393534918134",
  email: "gretapianegonda@gmail.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Generale A. dalla Chiesa, 5 (presso Snatch | Studio di Fisioterapia)",
    addressLocality: "Sarcedo",
    postalCode: "36030",
    addressRegion: "VI",
    addressCountry: "IT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.7361, longitude: 11.5286 },
  areaServed: [
    { "@type": "City", name: "Sarcedo" },
    { "@type": "City", name: "Thiene" },
    { "@type": "City", name: "Breganze" },
    { "@type": "AdministrativeArea", name: "Provincia di Vicenza" },
  ],
};

const zaneBranch = {
  "@type": ["LocalBusiness", "MedicalBusiness", "Nutritionist"],
  "@id": `${siteUrl}/#studio-zane`,
  name: "Greta Pianegonda — Studio di Zanè (zona Thiene)",
  parentOrganization: { "@id": `${siteUrl}/#business` },
  url: `${siteUrl}/#contacts`,
  image: `${siteUrl}/avatar.png`,
  telephone: "+393534918134",
  email: "gretapianegonda@gmail.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Trento, 24 (presso Officina Botanica)",
    addressLocality: "Zanè",
    postalCode: "36010",
    addressRegion: "VI",
    addressCountry: "IT",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.7561, longitude: 11.4583 },
  areaServed: [
    { "@type": "City", name: "Zanè" },
    { "@type": "City", name: "Thiene" },
    { "@type": "City", name: "Schio" },
    { "@type": "City", name: "Piovene Rocchette" },
    { "@type": "City", name: "Marano Vicentino" },
    { "@type": "AdministrativeArea", name: "Alto Vicentino" },
    { "@type": "AdministrativeArea", name: "Provincia di Vicenza" },
  ],
};

const jsonLd = computed(() => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MedicalBusiness", "Nutritionist"],
      "@id": `${siteUrl}/#business`,
      name: "Greta Pianegonda — Biologa Nutrizionista",
      alternateName: ["Studio Nutrizionista Pianegonda", "Nutrizionista Pianegonda Thiene Zanè Sarcedo"],
      description: ts("seo.description"),
      url: siteUrl,
      image: `${siteUrl}/avatar.png`,
      logo: `${siteUrl}/pittogramma.png`,
      telephone: "+393534918134",
      email: "gretapianegonda@gmail.com",
      priceRange: "€€",
      inLanguage: ["it-IT", "en-US"],
      founder: { "@id": `${siteUrl}/#greta` },
      employee: { "@id": `${siteUrl}/#greta` },
      sameAs: socials,
      areaServed: [
        { "@type": "City", name: "Thiene" },
        { "@type": "City", name: "Zanè" },
        { "@type": "City", name: "Sarcedo" },
        { "@type": "City", name: "Schio" },
        { "@type": "AdministrativeArea", name: "Provincia di Vicenza" },
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
      department: [
        { "@id": `${siteUrl}/#studio-sarcedo` },
        { "@id": `${siteUrl}/#studio-zane` },
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Piani Alimentari Personalizzati",
            serviceType: "Nutrition planning",
            areaServed: "Provincia di Vicenza",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nutrizione per Sportivi Amatoriali",
            serviceType: "Sports nutrition",
            areaServed: "Provincia di Vicenza",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Alimentazione Plant-Based",
            serviceType: "Vegetarian and vegan nutrition",
            areaServed: "Provincia di Vicenza",
          },
        },
      ],
    },
    sarcedoBranch,
    zaneBranch,
    {
      "@type": "Person",
      "@id": `${siteUrl}/#greta`,
      name: "Greta Pianegonda",
      givenName: "Greta",
      familyName: "Pianegonda",
      jobTitle: "Biologa Nutrizionista",
      worksFor: { "@id": `${siteUrl}/#business` },
      sameAs: socials,
      knowsAbout: [
        "Educazione alimentare",
        "Nutrizione clinica",
        "Nutrizione sportiva",
        "Alimentazione plant-based",
        "Dieta vegetariana",
        "Dieta vegana",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Greta Pianegonda — Biologa Nutrizionista",
      inLanguage: ["it-IT", "en-US"],
      publisher: { "@id": `${siteUrl}/#business` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Dove riceve la nutrizionista Greta Pianegonda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ricevo su appuntamento in due studi in provincia di Vicenza: a Zanè in Via Trento 24 (zona Thiene), presso Officina Botanica, e a Sarcedo in Via Generale A. dalla Chiesa 5, presso Snatch Studio di Fisioterapia.",
          },
        },
        {
          "@type": "Question",
          name: "C'è una nutrizionista a Thiene o nelle vicinanze?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sì: lo studio di Zanè si trova a pochi minuti da Thiene ed è facilmente raggiungibile anche da Schio, Marano Vicentino, Piovene Rocchette e dall'Alto Vicentino.",
          },
        },
        {
          "@type": "Question",
          name: "Quali servizi nutrizionali offri?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Offro piani alimentari personalizzati, nutrizione per sportivi amatoriali e supporto per alimentazione plant-based (vegetariana e vegana), con valutazione antropometrica e percorso di educazione alimentare.",
          },
        },
        {
          "@type": "Question",
          name: "Come posso prenotare una consulenza?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puoi prenotare tramite il modulo di contatto del sito, scrivendo a gretapianegonda@gmail.com oppure su WhatsApp al numero +39 353 491 8134.",
          },
        },
      ],
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
