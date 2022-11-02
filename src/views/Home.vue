<script setup lang="ts">
  import { ref } from 'vue'
  // import About from '@Templates/About/About.vue'
  // import ButtonBurgerMenu from '@Atoms/Button/BurgerMenu/BurgerMenu.vue'
  // import HeadingSection from '@Atoms/Heading/Section/Section.vue'
  import Logo from '@Atoms/Logo/Logo.vue'
  import { Size as LogoSize } from '@Atoms/Logo/Logo.types'
  const isMenuOpen = ref(false)
  // method example
  const clickButton = () => isMenuOpen.value = !isMenuOpen.value
</script>

<template>
  <div style="background-color: #4D9973; padding: 24px; border-radius: 4px;">
    <Logo
      :with-text="true"
      :size="LogoSize.m"
    />
    <!-- <ButtonBurgerMenu
      label="Menu Button"
      :open="isMenuOpen"
      @click="clickButton"
    /> -->
  </div>
  <!-- <HeadingSection :text="'Default'" /> -->
  <!-- <About /> -->
</template>
