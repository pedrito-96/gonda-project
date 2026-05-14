<script setup lang="ts">
import InstagramPost from "../Organisms/InstagramPost.vue";

const services = [
  { key: "plans", icon: "mdi:clipboard-text-outline" },
  { key: "sport", icon: "mdi:run-fast" },
  { key: "plant", icon: "mdi:sprout-outline" },
];
</script>

<template>
  <section
    id="services"
    class="min-h-dvh bg-secondary-light text-dark py-24 md:py-32 px-6 md:px-12 flex items-center"
  >
    <div class="max-w-6xl mx-auto w-full flex flex-col gap-12">
      <div class="flex flex-col gap-3 text-center">
        <span
          class="text-xs uppercase tracking-[0.25em] text-dark font-semibold"
        >
          {{ $t("services.eyebrow") }}
        </span>
        <h2 class="text-section-title">{{ $t("services.title") }}</h2>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center"
      >
        <div class="grid grid-cols-1 gap-6">
          <article
            v-for="s in services"
            :key="s.key"
            class="group relative bg-tertiary rounded-3xl p-8 flex flex-col gap-4 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/30"
          >
            <div
              class="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-tertiary transition-colors"
            >
              <Icon :name="s.icon" class="text-3xl" />
            </div>
            <h3 class="text-xl md:text-2xl font-medium">
              {{ $t(`services.items.${s.key}_title`) }}
            </h3>
            <p class="text-sm md:text-base text-dark/75 leading-relaxed">
              {{ $t(`services.items.${s.key}_desc`) }}
            </p>
          </article>
        </div>

        <InstagramPost />
      </div>
    </div>
  </section>
</template>
