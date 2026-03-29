<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits<{ toggle: [] }>();
</script>

<template>
  <label class="hamburger md:hidden z-50 p-2 cursor-pointer">
    <input
      type="checkbox"
      class="hamburger__input"
      :checked="isOpen"
      @change="emit('toggle')"
    />
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
    <span class="hamburger__line"></span>
  </label>
</template>

<style lang="css" scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2.5rem;
  height: 2.5rem;
}

.hamburger__input {
  display: none;
}

.hamburger__line {
  display: block;
  width: 24px;
  height: 2px;
  background-color: currentColor;
  border-radius: 2px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  transform-origin: center;
}

.hamburger__input:checked ~ .hamburger__line:nth-child(2) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger__input:checked ~ .hamburger__line:nth-child(3) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger__input:checked ~ .hamburger__line:nth-child(4) {
  transform: translateY(-7px) rotate(-45deg);
}
</style>
