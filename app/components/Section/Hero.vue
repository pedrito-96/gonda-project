<script setup lang="ts">
const {
  animationContainer,
  isAnimationContainerInViewport,
  animateFromBottom,
} = useAnimationInView();
</script>
<template>
  <section
    class="relative w-full h-dvh overflow-hidden px-gapped-x py-xxl flex flex-col justify-end"
  >
    <div class="absolute inset-0">
      <div class="w-full h-full relative">
        <NuxtPicture
          id="hero-img"
          class="image-cover"
          preload
          loading="eager"
          fetch-priority="high"
          sizes="80vw md:80vw lg:90vw xl:90vw xxl:90vw"
          quality="90"
          src="./iceland.png"
          alt="Hero image"
        />
      </div>
    </div>
    <div class="absolute inset-0 bg-black/10" />

    <div
      ref="animationContainer"
      :class="[
        'relative bottom-0 left-0 w-fit flex flex-col gap-4 justify-end m-10 md:m-20 backdrop-blur-sm text-tertiary p-4',
        animateFromBottom,
      ]"
    >
      <h1 style="--i: 1" class="text-4xl">Lorem</h1>
      <div style="--i: 2" class="relative">
        <!-- <span
            :class="[
              {
                'animate-vertical-bounce opacity-100':
                  isAnimationContainerInViewport,
              },
              'absolute bg-white w-px h-full opacity-0 transition-opacity duration-1000',
            ]"
          /> -->
        <p
          class="[&_a]:text-invert [&_a]:hover:text-invert text-paragraph-sm max-w-2xl pl-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          praesentium aliquam ipsam eum nostrum quam, assumenda, molestiae ea
          voluptas sunt earum qui non tempora totam blanditiis magni soluta
          eaque sapiente?
        </p>
      </div>
    </div>
  </section>
</template>
