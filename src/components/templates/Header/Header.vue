<script setup lang="ts">
import ButtonBurgerMenu from '@Atoms/Button/BurgerMenu/BurgerMenu.vue'
import Logo from '@Atoms/Logo/Logo.vue'
import { Size as LogoSize } from '@Atoms/Logo/Logo.types'
defineProps({
  menuOpen: Boolean,
  withLogo: Boolean,
  withBackground: Boolean,
})
const emit = defineEmits(['click'])
</script>

<template>
  <header
    class="header" :class="{ 'header--open': withBackground }"
  >
    <Logo
      :class="{ 'hidden': !withLogo }"
      :with-text="true"
      :with-email="true"
      :size="LogoSize.m"
    />
    <ButtonBurgerMenu
      label="Menu Button"
      :open="menuOpen"
      @click="emit('click')"
    />
  </header>
</template>

<style scoped lang="scss">
.header {
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  inset: 0 / auto;
  padding: 0.5rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 10;
  transition: background-color 0.2s ease-in-out;

  &--open {
    background-color: rgb(var(--hup-color--green));
    background-image: url('@Assets/header_bg.png');
    background-size: cover;
    background-position: center;
  }
}

.hidden {
  opacity: 0;
}
</style>
