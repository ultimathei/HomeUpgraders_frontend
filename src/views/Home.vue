<script setup lang="ts">
  import HUButton from '@Atoms/HUButton/HUButton.vue'
  import {
    Size as ButtonSize,
    Type as ButtonType,
  } from '@/components/atoms/HuButton/HUButton.types'

  // method example
  const clickButton = () => console.log('Button clicked')
</script>

<template>
  <HUButton
    label="First Button"
    :type="ButtonType.secondary"
    :size="ButtonSize.s"
    @click="clickButton"
  />
  <HUButton
    label="First Button"
    :type="ButtonType.primary"
    @click="clickButton"
  />
  <HUButton
    label="First Button"
    :type="ButtonType.secondary"
    :size="ButtonSize.l"
    @click="clickButton"
  />
  <HUButton
    label="First Button"
    :type="ButtonType.primary"
    :size="ButtonSize.xl"
    @click="clickButton"
  />
</template>
