<template>
  <div class="flex flex-col min-h-screen">
    <Header class="sticky top-0" />
    <div role="main" class="w-full max-w-360 mx-auto flex-1 px-4 md:px-9.5">
      <slot />
    </div>
    <Footer />
  </div>
</template>
