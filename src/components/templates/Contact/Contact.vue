<script setup lang="ts">
import SectionHeading from '@Atoms/Heading/Section/Section.vue'
</script>

<template>
  <section :class="$style.section">
    <SectionHeading
      text="Contact"
      :light="true"
    />
  </section>
</template>

<style src="./Contact.module.scss" module lang="scss" />