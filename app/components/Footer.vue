<script setup lang="ts">
const year = ref();
onMounted(() => {
  year.value = new Date().getFullYear();
});
</script>
<template>
  <footer
    class="bg-black text-tertiary flex flex-col md:flex-row gap-2 items-center justify-between p-5"
  >
    <p class="max-md:order-2">
      © {{ year }} Greta Pianegonda. Tutti i diritti riservati. Foto di
      proprietà. Riproduzione vietata.
    </p>

    <div class="socials flex items-center max-md:order-1">
      <NuxtLink
        to="https://www.linkedin.com/in/greta-pianegonda-188ba6172/"
        target=":blank"
        external
        class="flex items-center"
      >
        <Icon name="icon-linkedin" class="text-xl" />
      </NuxtLink>
    </div>
  </footer>
</template>
