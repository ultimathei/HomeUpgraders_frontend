<script setup lang="ts">
import SectionHeading from '@Atoms/Heading/Section/Section.vue'
</script>

<template>
  <section :class="$style.section">
    <SectionHeading
      :class="$style.heading"
      text="References"
    />
  </section>
</template>

<style src="./References.module.scss" module lang="scss"/>