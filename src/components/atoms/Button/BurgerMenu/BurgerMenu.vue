<template>
  <button
    :class="$style.button"
    :disabled="disabled"
    :aria-disabled="disabled || undefined"
    :aria-label="label"
    :tabindex="disabled ? -1 : 0"
    :data-open="open || undefined"
    @click.prevent="emit('click')"
  >
    <span />
    <span />
    <span />
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
})
const emit = defineEmits(['click'])
</script>

<style src="./BurgerMenu.module.scss" module lang="scss"></style>
