<script setup lang="ts">
  // import { reactive } from 'vue'
  
  const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  })

  // const state = reactive({})

  const emit = defineEmits(['click'])
</script>

<template>
  <button
    @click.prevent="emit('click')"
    :disabled="disabled"
    :aria-disabled="disabled"
    :tabindex="disabled ? -1 : 0"
  >
    {{label}}
  </button>
</template>
