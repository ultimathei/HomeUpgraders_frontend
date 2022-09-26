<template>
  <button
    :class="$style[`button--${props.type}--${props.size}`]"
    @click.prevent="emit('click')"
    :disabled="disabled"
    :aria-disabled="disabled"
    :tabindex="disabled ? -1 : 0"
  >
    {{label}}
  </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Size, Type } from './HUButton.types'

  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<Type>,
      default: Type.primary,
    },
    size: {
      type: String as PropType<Size>,
      default: Size.m,
    },
  })
  const emit = defineEmits(['click'])
</script>

<style src="./HUButton.module.scss" module lang="scss"></style>
