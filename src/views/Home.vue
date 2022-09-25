<script setup lang="ts">
  import HUButton from '../components/atoms/HUButton/HUButton.vue'

  // method example
  const clickButton = () => console.log('Button clicked')
</script>

<template>
  <HUButton label="First Button" @click="clickButton"/>
</template>
