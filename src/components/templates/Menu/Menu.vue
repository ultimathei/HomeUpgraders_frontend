<template>
  <aside
    :class="$style.menu"
    :aria-expanded="open"
  >
    menu here
  </aside>
</template>

<script setup lang="ts">
  defineProps({
    open: Boolean,
  })
  // const emit = defineEmits(['close'])
</script>

<style src="./Menu.module.scss" module lang="scss" />