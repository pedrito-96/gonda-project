<script setup lang="ts">
onMounted(() => {
  const isChrome =
    /Chrome/.test(navigator.userAgent) && !/Edg|OPR/.test(navigator.userAgent);

  if (isChrome) {
    const headerCard = document.getElementById("header-card");
    if (headerCard) headerCard.classList.add("is-chrome");
  }
});
</script>
<template>
  <div class="">
    <div id="header-card" class="card px-8 py-8">
      <slot />
    </div>

    <svg style="display: none">
      <filter id="displacementFilter">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.01"
          numOctaves="1"
          result="turbulence"
        />

        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          scale="30"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  </div>
</template>

<style scoped>
.card {
  width: fit-content;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: inherit;
  transition: opacity 0.26s ease-out;
  border-radius: 100px;
  filter: drop-shadow(-8px -10px 46px #0000005f);
  -webkit-backdrop-filter: brightness(1) blur(10px);
  backdrop-filter: brightness(1) blur(10px);
}

.is-chrome.card {
  backdrop-filter: brightness(1.1) blur(4px) url(#displacementFilter);
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  border-radius: 100px;
  -webkit-box-shadow:
    inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
    inset 0 0 3px 1px rgba(255, 255, 255, 0.7);
  box-shadow:
    inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7),
    inset 0 0 8px 1px rgba(255, 255, 255, 0.7);
}
</style>
