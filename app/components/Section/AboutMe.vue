<script setup lang="ts">
const parallaxRef = ref<HTMLElement | null>(null);
const parallaxOffset = ref(0);

const handleScroll = () => {
  if (!parallaxRef.value) return;
  const rect = parallaxRef.value.parentElement?.getBoundingClientRect();
  if (!rect) return;
  const scrollProgress = -rect.top / window.innerHeight;
  parallaxOffset.value = scrollProgress * 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const method = [
  {
    key: "listen",
    icon: "mdi:ear-hearing",
  },
  {
    key: "analyze",
    icon: "mdi:chart-bell-curve-cumulative",
  },
  {
    key: "act",
    icon: "mdi:leaf",
  },
];
</script>

<template>
  <section
    id="about-me"
    class="relative min-h-dvh bg-primary text-tertiary flex justify-center items-center overflow-hidden py-24 md:py-32"
  >
    <div
      ref="parallaxRef"
      class="parallax absolute inset-0 z-0 will-change-transform w-full h-full opacity-30"
      :style="{ transform: `translateY(${parallaxOffset}px)` }"
    >
      <NuxtPicture
        class="image-cover"
        loading="lazy"
        fetch-priority="low"
        sizes="80vw md:80vw lg:90vw xl:90vw xxl:90vw"
        quality="80"
        src="./isobars-light.png"
        :alt="$t('alt.isobars')"
        aria-hidden
      />
    </div>

    <div
      class="relative z-10 max-w-6xl w-full px-6 md:px-12 flex flex-col gap-12"
    >
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <AtomsAvatar class="shrink-0" />
        <div class="flex flex-col gap-4 text-center md:text-left">
          <span class="text-xs uppercase tracking-[0.25em] text-tertiary/70">
            {{ $t("about.eyebrow") }}
          </span>
          <h2 class="text-section-title">{{ $t("about.title") }}</h2>
          <p class="text-paragraph-sm md:text-lg max-w-2xl text-tertiary/90">
            {{ $t("about.intro") }}
          </p>
          <div
            class="flex flex-col gap-1 mt-2 text-sm text-tertiary/80 border-l-2 border-tertiary/40 pl-4 md:max-w-2xl"
          >
            <span class="uppercase tracking-wider text-xs">
              {{ $t("about.registry_label") }}
            </span>
            <span class="font-medium">
              {{ $t("about.registry_regions") }}
            </span>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-6 mt-6">
        <h3 class="text-2xl md:text-3xl font-medium text-center">
          {{ $t("about.method_title") }}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div
            v-for="(m, idx) in method"
            :key="m.key"
            class="relative bg-tertiary/10 backdrop-blur-sm border border-tertiary/20 rounded-2xl p-6 flex flex-col gap-3 hover:bg-tertiary/15 transition-colors"
          >
            <div class="flex items-center gap-3">
              <span
                class="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary font-semibold"
              >
                {{ idx + 1 }}
              </span>
              <Icon :name="m.icon" class="text-2xl text-tertiary/80" />
            </div>
            <h4 class="text-xl font-medium">
              {{ $t(`about.method.${m.key}_title`) }}
            </h4>
            <p class="text-sm text-tertiary/85">
              {{ $t(`about.method.${m.key}_desc`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
