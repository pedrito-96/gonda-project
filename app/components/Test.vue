<template>
  <div>
    TEST COMPONENT
    <div class="flex flex-row gap-4 flex-wrap w-full">
      <div v-for="i in 1000" class="w-1/3">
        <div
          class="bg-primary text-tertiary p-4 flex justify-center items-center text-3xl font-extrabold"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>
