<template>
  <aside
    :class="$style.menu"
    :aria-expanded="open"
  >
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Contact</a></li>
      <li><a href="">References</a></li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
  defineProps({
    open: Boolean,
  })
  // defineEmits(['close'])
</script>

<style src="./Menu.module.scss" module lang="scss" />