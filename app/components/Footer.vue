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
      {{ $t("footer.rights", { year }) }}
    </p>

    <div class="socials flex items-center max-md:order-1 gap-2 md:gap-4">
      <NuxtLink
        to="https://www.linkedin.com/in/greta-pianegonda-188ba6172/"
        target=":blank"
        external
        :aria-label="$ts('contacts.linkedinAriaLabel')"
        class="flex items-center"
      >
        <Icon name="icon-linkedin" class="text-xl" aria-hidden />
      </NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/nutrizionista_pianegonda/"
        target=":blank"
        external
        :aria-label="$ts('contacts.instagramAriaLabel')"
        class="flex items-center"
      >
        <Icon name="icon-instagram" class="text-xl text-tertiary" aria-hidden />
      </NuxtLink>
      <NuxtLink
        to="https://www.facebook.com/profile.php?id=61589009683393"
        target="_blank"
        external
        :aria-label="$ts('contacts.facebookAriaLabel')"
        class="flex items-center"
      >
        <Icon name="mdi:facebook" class="text-xl text-tertiary" aria-hidden />
      </NuxtLink>
    </div>
  </footer>
</template>
