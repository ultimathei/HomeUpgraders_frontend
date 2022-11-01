<script setup lang="ts">
  import { ref } from 'vue'
  import About from '@Templates/About/About.vue'
  import ButtonBurgerMenu from '@Atoms/Button/BurgerMenu/BurgerMenu.vue'
  const isMenuOpen = ref(false)
  // method example
  const clickButton = () => isMenuOpen.value = !isMenuOpen.value
</script>

<template>
  <div style="background-color: #4D9973; padding: 24px; border-radius: 4px;">
    <ButtonBurgerMenu
      label="Menu Button"
      :open="isMenuOpen"
      @click="clickButton"
    />
  </div>
  <About />
</template>
