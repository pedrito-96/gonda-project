<script setup lang="ts">
const phoneDisplay = "+39 353 491 8134";
const phoneHref = "+393534918134";
const email = "gretapianegonda@gmail.com";

const locations = [
  {
    key: "sarcedo",
    map: "https://www.google.com/maps/search/?api=1&query=Via+Generale+A.+dalla+Chiesa+5+Sarcedo",
  },
  {
    key: "zane",
    map: "https://www.google.com/maps/search/?api=1&query=Via+Trento+24+Zan%C3%A8",
  },
];
</script>

<template>
  <section
    id="contacts"
    class="relative min-h-dvh bg-secondary-dark text-tertiary px-6 md:px-12 py-24 md:py-32"
  >
    <div class="absolute inset-0 z-0 opacity-10 w-full h-full">
      <NuxtPicture
        class="image-cover"
        loading="lazy"
        fetch-priority="low"
        sizes="80vw md:80vw lg:90vw xl:90vw xxl:90vw"
        quality="60"
        src="./pittogramma.png"
        aria-hidden
        alt="Pictogram logo"
      />
    </div>
    <div
      class="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 pt-(--header-height)"
    >
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-3">
          <span
            class="text-xs uppercase tracking-[0.25em] text-tertiary font-semibold"
          >
            {{ $t("contacts.eyebrow") }}
          </span>
          <h2 class="text-section-title">{{ $t("contacts.title") }}</h2>
          <p class="text-tertiary">{{ $t("contacts.intro1") }}</p>
          <p class="text-tertiary/95 text-sm">{{ $t("contacts.intro2") }}</p>
        </div>

        <div class="flex flex-col gap-4">
          <h3 class="text-lg font-medium tracking-wide">
            {{ $t("contacts.locations_title") }}
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NuxtLink
              v-for="l in locations"
              :key="l.key"
              :to="l.map"
              target="_blank"
              external
              rel="noopener"
              class="group bg-tertiary/5 hover:bg-tertiary/10 border border-tertiary/15 rounded-2xl p-5 flex flex-col gap-2 transition-colors"
            >
              <div class="flex items-center gap-2">
                <Icon
                  name="mdi:map-marker-outline"
                  class="text-xl text-tertiary/80"
                  aria-hidden
                />
                <h3 class="font-medium not-italic">
                  {{ $t(`contacts.location_${l.key}_name`) }}
                </h3>
              </div>
              <address class="text-sm text-tertiary not-italic">
                {{ $t(`contacts.location_${l.key}_addr`) }}
              </address>
              <span class="text-xs text-tertiary/95 italic">
                {{ $t(`contacts.location_${l.key}_venue`) }}
              </span>
            </NuxtLink>
          </div>
        </div>

        <div class="flex flex-col gap-3">
          <NuxtLink
            :to="`tel:${phoneHref}`"
            external
            class="flex items-center gap-3 hover:text-tertiary group"
          >
            <span
              class="w-10 h-10 rounded-full bg-tertiary/10 group-hover:bg-tertiary/20 flex items-center justify-center transition-colors"
            >
              <Icon name="mdi:phone-outline" class="text-lg" aria-hidden />
            </span>
            <div class="flex flex-col">
              <span
                class="text-xs uppercase tracking-wider text-tertiary/95 font-semibold"
              >
                {{ $t("contacts.phone_label") }}
              </span>
              <span class="font-medium">{{ phoneDisplay }}</span>
            </div>
          </NuxtLink>

          <NuxtLink
            :to="`mailto:${email}`"
            external
            class="flex items-center gap-3 hover:text-tertiary group"
          >
            <span
              class="w-10 h-10 rounded-full bg-tertiary/10 group-hover:bg-tertiary/20 flex items-center justify-center transition-colors"
            >
              <Icon name="mdi:email-outline" class="text-lg" aria-hidden />
            </span>
            <div class="flex flex-col">
              <span
                class="text-xs uppercase tracking-wider text-tertiary/95 font-semibold"
              >
                {{ $t("contacts.email_label") }}
              </span>
              <span class="font-medium break-all">{{ email }}</span>
            </div>
          </NuxtLink>
        </div>

        <div class="flex items-center gap-3 pt-2">
          <NuxtLink
            to="https://www.instagram.com/nutrizionista_pianegonda/"
            target="_blank"
            external
            :aria-label="$ts('contacts.instagramAriaLabel')"
            class="w-10 h-10 rounded-full bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-colors"
          >
            <Icon name="icon-instagram" class="text-lg" aria-hidden />
          </NuxtLink>
          <NuxtLink
            to="https://www.facebook.com/profile.php?id=61589009683393"
            target="_blank"
            external
            :aria-label="$ts('contacts.facebookAriaLabel')"
            class="w-10 h-10 rounded-full bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-colors"
          >
            <Icon name="mdi:facebook" class="text-lg" aria-hidden />
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/greta-pianegonda-188ba6172/"
            target="_blank"
            external
            :aria-label="$ts('contacts.linkedinAriaLabel')"
            class="w-10 h-10 rounded-full bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-colors"
          >
            <Icon name="icon-linkedin" class="text-lg" aria-hidden />
          </NuxtLink>
          <NuxtLink
            to="https://wa.me/393534918134?text=Ciao!%20Vorrei%20prendere%20un%20appuntamento.%20Che%20disponibilità%20hai?%20Grazie!%20"
            target="_blank"
            external
            :aria-label="$ts('contacts.whatsappAriaLabel')"
            class="w-10 h-10 rounded-full bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-colors"
          >
            <Icon name="icon-whatsapp" class="text-lg" aria-hidden />
          </NuxtLink>
        </div>
      </div>

      <OrganismsContactForm class="w-full flex justify-center items-start" />
    </div>
  </section>
</template>
