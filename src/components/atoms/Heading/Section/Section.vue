<template>
  <h2
    :class="$style.heading"
    :data-light="light || undefined"
  >
    {{ text }}
  </h2>
</template>

<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      default: '',
    },
    light: Boolean,
  })
</script>

<style src="./Section.module.scss" module lang="scss"></style>
