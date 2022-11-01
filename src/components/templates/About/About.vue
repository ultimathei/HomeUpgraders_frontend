<script setup lang="ts">
  import { ref } from 'vue'
  import SliderControl from '@Molecules/Control/Slider/Slider.vue'
  const activeSlider = ref(1)
  // method example
  const clickButton = (n: number) => activeSlider.value = n
</script>

<template>
  <SliderControl
    label="My slider"
    :size="4"
    :active="activeSlider"
    @set-active="clickButton"
  />
</template>
