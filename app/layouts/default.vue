<script setup lang="ts">
const { y } = useWindowScroll();
const isVisible = ref(true);
const lastScrollY = ref(0);

watch(y, (currentY) => {
  if (currentY < 100) {
    isVisible.value = true;
    return;
  }

  if (currentY > lastScrollY.value) {
    isVisible.value = false; // Hide on scroll down
  } else {
    isVisible.value = true; // Show on scroll up
  }

  lastScrollY.value = currentY;
});
</script>
<template>
  <div class="flex flex-col">
    <div
      class="whatsapp shadow-sm hover:shadow-lg z-30 fixed bottom-4 right-4 rounded-full"
    >
      <a
        href="https://wa.me/393420321446?text=Ciao!%20Vorrei%20prendere%20un%20appuntamento.%20Che%20disponibilità%20hai?%20Grazie!%20"
        class="flex justify-center items-center"
      >
        <Icon name="icon-whatsapp" class="text-white text-5xl" />
      </a>
    </div>
    <Header
      class="fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out"
      :class="isVisible ? 'translate-y-0' : '-translate-y-[calc(100%+1rem)]'"
    />
    <div
      role="main"
      class="w-full mx-auto flex-1 min-h-[calc(100dvh-var(--footer-height))]"
    >
      <slot />
    </div>
    <Footer />
  </div>
</template>
