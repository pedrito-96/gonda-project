<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
</script>

<template>
  <div role="menu" :aria-expanded="isOpen" class="menu-drawer w-full">
    <ul class="flex flex-col items-center gap-8 py-10 md:hidden">
      <li>
        <NuxtLink to="/#about-me"> CHI SONO </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#services"> SERVIZI </NuxtLink>
      </li>
      <li
        class="hover:scale-102 hover:shadow-md transition-[scale,shadow] rounded-3xl"
      >
        <NuxtLink
          to="/#contacts"
          class="cta py-2 px-4 bg-tertiary text-secondary-dark rounded-3xl"
        >
          CONTATTAMI
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu-drawer {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition:
    max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.35s ease;
}

[aria-expanded="true"].menu-drawer {
  max-height: 400px;
  opacity: 1;
}
</style>
