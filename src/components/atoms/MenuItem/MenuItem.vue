<template>
  <a
    class="menuItem"
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

<style scoped lang="scss">
.menuItem {
  border: 0.25rem solid;
  border-color: transparent;
  border-radius: 0.5rem;
  color: rgb(var(--hup-color--white));
  font-size: 3rem;
  padding: 0 1em;
  text-align: center;
  text-decoration: none;

  &[aria-selected='true'] {
    background-color: rgb(var(--hup-color--white));
    color: rgb(var(--hup-color--black));
  }

  &:is(:hover, :focus, :focus-within):not(&[aria-selected='true']) {
    border-color: rgb(var(--hup-color--white));
  }
}
</style>
