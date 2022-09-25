<script setup lang="ts">
  import { ref } from 'vue'
  const props = defineProps({
    label: {
      type: String,
      default: 'Count'
    }
  })

  let count = ref(0)
  const increase = () => count.value++

  // const emit = defineEmits(['click'])
</script>

<template>
  <button @click="increase">{{label}} - {{count}}</button>
</template>
