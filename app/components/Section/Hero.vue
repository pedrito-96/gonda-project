<script setup lang="ts">
const {
  animationContainer,
  isAnimationContainerInViewport, // Keep if needed elsewhere, otherwise remove
  animateFromBottom,
} = useAnimationInView();
</script>

<template>
  <section
    class="relative w-full h-screen overflow-hidden px-gapped-x py-xxl flex flex-col justify-end"
  >
    <div class="absolute inset-0 z-0 select-none pointer-events-none">
      <NuxtPicture
        id="hero-img"
        class="w-full h-full object-cover"
        preload
        loading="eager"
        fetch-priority="high"
        decoding="async"
        sizes="100vw sm:100vw md:100vw lg:100vw xl:100vw"
        quality="80"
        src="./iceland.webp"
        :alt="$t('alt.hero')"
        width="2000"
        height="1250"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-black/10"
      />
    </div>

    <div
      ref="animationContainer"
      :class="[
        'relative z-10 bottom-0 left-0 w-fit max-w-3xl flex flex-col gap-5 justify-end m-6 md:m-20 backdrop-blur-sm bg-black/15 text-tertiary p-6 md:p-8 rounded-2xl border border-white/10',
        animateFromBottom,
      ]"
    >
      <span
        style="--i: 1"
        class="text-xs md:text-sm uppercase tracking-[0.25em] text-tertiary/80"
      >
        {{ $t("hero.role") }}
      </span>
      <h1
        style="--i: 2"
        class="text-4xl md:text-6xl font-medium leading-tight -mt-4"
      >
        {{ $t("hero.name") }}
      </h1>
      <p
        style="--i: 3"
        class="text-paragraph-sm md:text-lg max-w-2xl text-tertiary/90"
      >
        {{ $t("hero.tagline") }}
      </p>

      <div style="--i: 4" class="flex flex-wrap gap-3 pt-2">
        <NuxtLink
          to="/#contacts"
          class="cta py-2.5 px-5 bg-tertiary text-secondary-dark rounded-3xl font-medium hover:scale-105 transition-transform shadow-md"
        >
          {{ $t("hero.cta_primary") }}
        </NuxtLink>
        <NuxtLink
          to="/#about-me"
          class="py-2.5 px-5 border border-tertiary/60 rounded-3xl hover:bg-tertiary/10 transition-colors"
        >
          {{ $t("hero.cta_secondary") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ensure NuxtPicture's generated <img> scales correctly to fill its box */
:deep(#hero-img img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
