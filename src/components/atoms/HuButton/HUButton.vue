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

<style lang="scss" module>
  .button {
    --hu-button-bg-color--primary: var(--hu-bg-color-1);
    --hu-button-bg-color--secondary: var(--hu-bg-color-2);
    --hu-button-bg-color--disabled: var(--hu-bg-color-grey);

    // comp specific
    --button-background-color: var(--hu-button-bg-color--primary); // default
    background-color: var(--button-background-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 5px 15px;
  }
</style>
