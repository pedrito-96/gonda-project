<template>
  <div class="flex flex-col bg-secondary-light">
    <Header class="fixed top-0 left-0 right-0" />
    <div
      role="main"
      class="w-full max-w-360 mx-auto flex-1 px-4 md:px-9.5 mt-[calc(var(--header-height)+2rem)] min-h-[calc(100dvh-var(--footer-height))]"
    >
      <slot />
    </div>
    <Footer />
  </div>
</template>
