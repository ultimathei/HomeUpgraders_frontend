<template>
  <button
    :class="$style.button"
    :style="computedStyle"
    @click.prevent="emit('click')"
    :disabled="disabled"
    :aria-disabled="disabled"
    :tabindex="disabled ? -1 : 0"
  >
    {{label}}
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: true,
    },
  })
  const emit = defineEmits(['click'])
  // const state = reactive({})
  const getButtonBackgroundVar = () => {
    if (props.disabled) return '--hu-button-bg-color--disabled'
    if (props.primary) return '--hu-button-bg-color--primary'
    return '--hu-button-bg-color--secondary'
  }
  const computedStyle = computed(() => ({
    '--button-background-color': `var(${getButtonBackgroundVar()})`
  }))
</script>

<style src="./HUButton.module.scss" module lang="scss"></style>
