<script lang="ts" setup>
  import HUButton from './HUButton.vue'
  const scenarios = [
    {
      label: 'Hello'
    },
  ]
</script>

<template>
  <Story title="Atoms/HUButton">
    <HUButton :label="scenarios[0].label"/>
  </Story>
</template>
