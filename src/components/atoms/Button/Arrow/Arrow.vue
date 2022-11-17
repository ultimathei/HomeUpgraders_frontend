<template>
  <div :class="$style.arrow">
    <span />
    <button @click.prevent="$emit('click')" />
  </div>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style src="./Arrow.module.scss" module lang="scss" />
