<template>
  <button
    class="button"
    :disabled="disabled"
    :aria-disabled="disabled || undefined"
    :aria-label="label"
    :tabindex="disabled ? -1 : 0"
    :aria-current="active || undefined"
    @click.prevent="emit('click')"
  >
    <span />
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  active: Boolean,
  disabled: Boolean,
})
const emit = defineEmits(['click'])
</script>

<style scoped lang="scss">
.button {
  --bg-color: transparent;
  --border-color: rgb(var(--hup-color--black));
  --font-size: 1rem;
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--font-size);
  padding: 0.5em;

  span {
    background-color: var(--bg-color);
    border: 0.25rem solid var(--border-color);
    border-radius: 9999px;
    display: block;
    height: 2em;
    width: 2em;
  }

  &:is(:hover, :focus, :focus-within):not(:disabled):not(&[aria-current]) {
    --bg-color: rgb(var(--hup-color--green));
    --border-color: var(--bg-color);
  }
  &:focus-visible {
    outline: none;
    span {
      outline: 2px rgb(var(--hup-color--green)) solid;
      outline-offset: 4px;
    }
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &[aria-current] {
    --bg-color: rgb(var(--hup-color--black));
    --border-color: var(--bg-color);
  }
}
</style>
