<script setup lang="ts">
  import ButtonDot from '@Atoms/Button/Dot/Dot.vue'

  // method example
  const clickButton = () => console.log('Button clicked')
</script>

<template>
  <div style="display: flex; gap: 8px;">
    <ButtonDot
      label="Dot button 1"
      :active="true"
      @click="clickButton"
    />
    <ButtonDot
      label="Dot button 2"
      @click="clickButton"
    />
    <ButtonDot
      label="Dot button 3"
      :disabled="true"
      @click="clickButton"
    />
  </div>
</template>
