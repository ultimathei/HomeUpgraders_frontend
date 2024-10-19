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
    :class="[$style.header, { [$style['header--open']]: withBackground }]"
  >
    <Logo
      :class="{ [$style.hidden]: !withLogo }"
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

<style src="./Header.module.scss" module lang="scss"></style>
