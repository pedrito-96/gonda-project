<script setup lang="ts">
const {
  animationContainer,
  isAnimationContainerInViewport,
  animateFromBottom,
} = useAnimationInView();
</script>
<template>
  <section
    class="relative w-full h-screen overflow-hidden px-gapped-x py-xxl flex flex-col justify-end"
  >
    <div class="absolute inset-0">
      <div class="w-full h-full relative">
        <NuxtPicture
          id="hero-img"
          class="image-cover"
          preload
          loading="eager"
          fetch-priority="high"
          sizes="80vw md:80vw lg:90vw xl:90vw xxl:90vw"
          quality="90"
          src="./iceland.png"
          :alt="$t('alt.hero')"
        />
      </div>
    </div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10"
    />

    <div
      ref="animationContainer"
      :class="[
        'relative bottom-0 left-0 w-fit max-w-3xl flex flex-col gap-5 justify-end m-6 md:m-20 backdrop-blur-sm bg-black/15 text-tertiary p-6 md:p-8 rounded-2xl border border-white/10',
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
