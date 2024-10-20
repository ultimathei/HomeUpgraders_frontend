<template>
  <div :class="$style.arrow">
    <span :class="$style['arrow__line']">
      <span :class="$style['arrow__line-inner']"/>
    </span>
    <button @click.prevent="$emit('click')" />
  </div>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style src="./Arrow.module.scss" module lang="scss" />
