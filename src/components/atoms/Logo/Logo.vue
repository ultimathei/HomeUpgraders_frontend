<template>
  <div
    :class="$style.logo"
    :data-size="size"
    test-id="AtomLogo"
    aria-label="Logo"
  >
    <Logo :class="$style['logo__graphics']" />
    <em v-if="withText">HOME UPGRADERS</em>
    <a v-if="withEmail" href="mailto:info@homeupgraders.co.uk">info@homeupgraders.co.uk</a>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Size } from './Logo.types'
import Logo from '@Assets/logo.svg?component'
defineProps({
  withText: Boolean,
  withEmail: Boolean,
  size: {
    type: String as PropType<Size>,
    default: Size.l,
  },
})
</script>

<style src="./Logo.module.scss" module lang="scss"></style>
