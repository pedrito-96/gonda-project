<script setup lang="ts">
onMounted(() => {
  const isChrome =
    /Chrome/.test(navigator.userAgent) && !/Edg|OPR/.test(navigator.userAgent);

  console.log(navigator.userAgent);
  if (isChrome) {
    const headerCard = document.getElementById("header-card");
    if (headerCard) headerCard.classList.add("is-chrome");
  }
});
</script>
<template>
  <div class="flex items-center justify-center m-4">
    <div id="header-card" class="card px-8 py-2">
      <div class="flex flex-row justify-between items-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 160"
          fill="currentColor"
          class="w-32 md:w-48 h-auto shrink-0"
        >
          <text
            x="50%"
            y="45"
            text-anchor="middle"
            font-family="serif"
            font-weight="800"
            font-size="28"
            letter-spacing="-0.5"
          >
            Dott.ssa
          </text>
          <text
            x="50%"
            y="105"
            text-anchor="middle"
            font-family="serif"
            font-weight="500"
            font-size="58"
            letter-spacing="-1"
          >
            Greta Pianegonda
          </text>
          <text
            x="50%"
            y="145"
            text-anchor="middle"
            font-family="sans-serif"
            font-weight="300"
            font-size="22"
            letter-spacing="14"
          >
            NUTRIZIONISTA
          </text>
        </svg>

        <ul class="hidden md:flex gap-10">
          <li>CHI</li>
          <li>CHI</li>
          <li>CHI</li>
        </ul>
        <div class="block md:hidden">\\\</div>
      </div>
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
  width: 100%;
  max-width: 1440px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: inherit;
  transition: opacity 0.26s ease-out;
  border-radius: 48px;
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
  border-radius: 48px;
  -webkit-box-shadow:
    inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7),
    inset 0 0 3px 1px rgba(255, 255, 255, 0.7);
  box-shadow:
    inset 6px 6px 0px -6px rgba(255, 255, 255, 0.7),
    inset 0 0 8px 1px rgba(255, 255, 255, 0.7);
}
</style>
