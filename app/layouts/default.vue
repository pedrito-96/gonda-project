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
    <Header class="fixed top-0 left-0 right-0 z-40" />
    <div
      role="main"
      class="w-full mx-auto flex-1 min-h-[calc(100dvh-var(--footer-height))]"
    >
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style lang="css" scoped>
@keyframes pulsating-button {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.1;
  }
  100% {
    scale: 1;
  }
}

.whatsapp {
  animation-name: pulsating-button;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>
