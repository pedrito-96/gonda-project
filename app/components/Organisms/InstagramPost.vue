<script setup lang="ts">
import InstagramCarousel from "../Organisms/InstagramCarousel.vue";

const sampleImages = [
  "./post/1.png",
  "./post/2.png",
  "./post/3.png",
  "./post/4.png",
  "./post/5.png",
];
</script>

<template>
  <div
    class="flex items-center justify-center h-fit w-full rounded-3xl overflow-hidden shadow-2xl bg-tertiary p-1"
  >
    <div class="mx-auto font-sans bg-white rounded-3xl">
      <div class="px-4 py-3.5 border border-b-0 border-gray-300 rounded-t-3xl">
        <NuxtLink
          class="flex items-center gap-3 text-sm font-semibold text-gray-900"
          to="https://www.instagram.com/nutrizionista_pianegonda/p/DYCz1W4CB82/"
          target="_blank"
          external
          :aria-label="$ts('services.instagramCtas')"
        >
          <div
            class="bg-primary rounded-full p-px h-8 w-8 flex items-center justify-center"
          >
            <Icon
              name="icon-pictogram"
              class="rounded-full text-white bg-primary"
            />
          </div>
          nutrizionista_pianegonda
        </NuxtLink>
      </div>

      <InstagramCarousel :images="sampleImages" />

      <div class="p-3.5 mt-6 rounded-b-3xl flex items-center justify-between">
        <NuxtLink
          class="flex items-center justify-between w-full"
          to="https://www.instagram.com/nutrizionista_pianegonda/p/DYCz1W4CB82/"
          target="_blank"
          external
          :aria-label="$ts('services.instagramCtas')"
        >
          <div class="flex items-center gap-4" aria-hidden="true">
            <div class="group w-6 h-6">
              <span class="block group-hover:hidden">
                <Icon name="icon-heart-empty" class="text-2xl" />
              </span>
              <span class="hidden group-hover:block">
                <Icon
                  name="icon-heart-filled"
                  class="text-2xl text-[#FF3040]"
                />
              </span>
            </div>
            <Icon name="icon-comment" class="text-2xl" />
            <Icon name="icon-send" class="text-2xl" />
          </div>

          <div aria-hidden="true" class="w-6 h-6">
            <Icon name="icon-save" class="text-2xl" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
