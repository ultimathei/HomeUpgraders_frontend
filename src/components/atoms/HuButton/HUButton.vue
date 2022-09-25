<script setup lang="ts">
  import { reactive } from 'vue'
  const props = defineProps({
    label: {
      type: String,
      default: 'Count'
    }
  })
  const state = reactive({
    count: 0,
  })
  const increase = () => state.count++

  // const emit = defineEmits(['click'])
</script>

<template>
  <button @click="increase">{{label}} - {{state.count}}</button>
</template>
