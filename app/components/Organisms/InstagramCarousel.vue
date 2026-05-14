<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
  images: string[];
}>();

// Initialize Embla with your composable
const { emblaRef, emblaApi, scrollNext, scrollPrev, scrollTo } =
  useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    dragFree: false,
  });

const selectedIndex = ref(0);
const canScrollPrev = ref(false);
const canScrollNext = ref(false);

const updateState = () => {
  if (!emblaApi.value) return;
  selectedIndex.value = emblaApi.value.selectedScrollSnap();
  canScrollPrev.value = emblaApi.value.canScrollPrev();
  canScrollNext.value = emblaApi.value.canScrollNext();
};

onMounted(() => {
  if (emblaApi.value) {
    emblaApi.value.on("select", updateState);
    emblaApi.value.on("reInit", updateState);
    updateState();
  }
});
</script>

<template>
  <div class="relative w-full mx-auto border border-gray-300 bg-primary">
    <div class="overflow-hidden w-full aspect-4/5" ref="emblaRef">
      <div class="flex h-full touch-pan-y touch-pinch-zoom">
        <div
          class="flex-[0_0_100%] min-w-0 relative flex items-center justify-center"
          v-for="(image, index) in images"
          :key="index"
        >
          <NuxtPicture
            :src="image"
            class="w-full h-full [&>img]:w-full [&>img]:h-full object-cover select-none"
            loading="lazy"
            fetch-priority="low"
            sizes="80vw md:80vw lg:90vw xl:90vw xxl:90vw"
            quality="80"
            :alt="`Slide ${index + 1}`"
          />
        </div>
      </div>
    </div>

    <button
      v-if="canScrollPrev"
      class="absolute top-1/2 left-2.5 -translate-y-1/2 w-7.5 h-7.5 rounded-full bg-white/85 flex items-center justify-center shadow hover:bg-white text-neutral-800 transition-opacity z-10 cursor-pointer"
      @click="scrollPrev"
      aria-label="Previous image"
    >
      <svg
        class="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <button
      v-if="canScrollNext"
      class="absolute top-1/2 right-2.5 -translate-y-1/2 w-7.5 h-7.5 rounded-full bg-white/85 flex items-center justify-center shadow hover:bg-white text-neutral-800 transition-opacity z-10 cursor-pointer"
      @click="scrollNext"
      aria-label="Next image"
    >
      <svg
        class="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>

    <div
      class="absolute bg-white -bottom-6 left-0 right-0 flex justify-center gap-1"
      v-if="images.length > 1"
    >
      <span
        v-for="(_, index) in images"
        :key="index"
        class="w-1.5 h-1.5 rounded-full p-0 transition-all duration-200"
        :class="
          selectedIndex === index ? 'bg-[#0095f6] scale-110' : 'bg-gray-400'
        "
        aria-hidden
      ></span>
    </div>
  </div>
</template>
