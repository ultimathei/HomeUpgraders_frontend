<template>
  <a
    :class="$style.menuItem"
    :href="toId"
    :aria-selected="active"
    :tabindex="visible ? 0 : -1"
    @click.prevent="$emit('click')"
  >
    {{ label }}
  </a>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true,
  },
  toId: {
    type: String,
    required: true,
  },
  active: Boolean,
  visible: Boolean,
  disabled: Boolean,
})
defineEmits(['click'])
</script>

<style src="./MenuItem.module.scss" module lang="scss"></style>
