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
</script>

<template>
  <section
    id="about-me"
    class="relative min-h-dvh bg-primary flex justify-center items-center overflow-hidden"
  >
    <AtomsAvatar class="z-10" />

    <div
      ref="parallaxRef"
      class="parallax absolute inset-0 z-0 will-change-transform w-full h-full"
      :style="{ transform: `translateY(${parallaxOffset}px)` }"
    >
      <NuxtPicture
        id="hero-img"
        class="image-cover"
        preload
        loading="lazy"
        fetch-priority="low"
        sizes="80vw md:80vw lg:90vw xl:90vw xxl:90vw"
        quality="90"
        src="./isobars-light.png"
        alt="Isobars background"
      />
    </div>
  </section>
</template>
