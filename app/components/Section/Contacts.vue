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
    class="min-h-dvh bg-secondary-dark text-tertiary px-6 md:px-12 py-24 md:py-32"
  >
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 pt-(--header-height)"
    >
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-3">
          <span class="text-xs uppercase tracking-[0.25em] text-tertiary/70">
            {{ $t("contacts.eyebrow") }}
          </span>
          <h2 class="text-section-title">{{ $t("contacts.title") }}</h2>
          <p class="text-tertiary/90">{{ $t("contacts.intro1") }}</p>
          <p class="text-tertiary/70 text-sm">{{ $t("contacts.intro2") }}</p>
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
              class="group bg-tertiary/5 hover:bg-tertiary/10 border border-tertiary/15 rounded-2xl p-5 flex flex-col gap-2 transition-colors"
            >
              <div class="flex items-center gap-2">
                <Icon
                  name="mdi:map-marker-outline"
                  class="text-xl text-tertiary/80"
                />
                <span class="font-medium">
                  {{ $t(`contacts.location_${l.key}_name`) }}
                </span>
              </div>
              <span class="text-sm text-tertiary/85">
                {{ $t(`contacts.location_${l.key}_addr`) }}
              </span>
              <span class="text-xs text-tertiary/65 italic">
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
              <Icon name="mdi:phone-outline" class="text-lg" />
            </span>
            <div class="flex flex-col">
              <span class="text-xs uppercase tracking-wider text-tertiary/60">
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
              <Icon name="mdi:email-outline" class="text-lg" />
            </span>
            <div class="flex flex-col">
              <span class="text-xs uppercase tracking-wider text-tertiary/60">
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
            aria-label="Instagram"
            class="w-10 h-10 rounded-full bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-colors"
          >
            <Icon name="icon-instagram" class="text-lg" />
          </NuxtLink>
          <NuxtLink
            to="https://www.facebook.com/profile.php?id=61589009683393"
            target="_blank"
            external
            aria-label="Facebook"
            class="w-10 h-10 rounded-full bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-colors"
          >
            <Icon name="mdi:facebook" class="text-lg" />
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/greta-pianegonda-188ba6172/"
            target="_blank"
            external
            aria-label="LinkedIn"
            class="w-10 h-10 rounded-full bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-colors"
          >
            <Icon name="icon-linkedin" class="text-lg" />
          </NuxtLink>
          <NuxtLink
            :to="`https://wa.me/${phoneHref.replace('+', '')}`"
            target="_blank"
            external
            aria-label="WhatsApp"
            class="w-10 h-10 rounded-full bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-colors"
          >
            <Icon name="icon-whatsapp" class="text-lg" />
          </NuxtLink>
        </div>
      </div>

      <OrganismsContactForm class="w-full flex justify-center items-start" />
    </div>
  </section>
</template>
