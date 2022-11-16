<script setup lang="ts">
  import { ref } from 'vue'
  import SectionHeading from '@Atoms/Heading/Section/Section.vue'
  import SliderControl from '@Molecules/Control/Slider/Slider.vue'
  const activeSlider = ref(1)
  const clickButton = (n: number) => activeSlider.value = n
</script>

<template>
  <section :class="$style.section">
    <SectionHeading
      :class="$style.heading"
      text="About"
    />
    <SliderControl
      :class="$style.controls"
      label="My slider"
      :size="4"
      :active="activeSlider"
      @set-active="clickButton"
    />
  </section>
</template>

<style src="./About.module.scss" module lang="scss"/>
