<template>
  <button
    :class="$style.button"
    :disabled="disabled"
    :aria-disabled="disabled || undefined"
    :aria-label="label"
    :tabindex="disabled ? -1 : 0"
    :aria-current="active || undefined"
    @click.prevent="emit('click')"
  >
    <span />
  </button>
</template>

<script setup lang="ts">
  defineProps({
    label: {
      type: String,
      default: '',
    },
    active: Boolean,
    disabled: Boolean,
  })
  const emit = defineEmits(['click'])
</script>

<style src="./Dot.module.scss" module lang="scss"></style>
