<template>
  <div class="flex flex-col">
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
