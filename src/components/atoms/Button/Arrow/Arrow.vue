<template>
  <div class="arrow">
    <span class="arrow__line">
      <span class="arrow__line-inner" />
    </span>
    <button @click.prevent="$emit('click')" />
  </div>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style scoped lang="scss">
.arrow {
  align-items: center;
  display: flex;
  flex-flow: column nowrap;

  &__line {
    flex-grow: 1;
    width: 1rem;
    position: relative;
    &-inner {
      border-left: 1px solid rgb(var(--hup-color--white));
      border-radius: 1em;
      width: 1px;
      height: 0%;
      position: absolute;
      left: 50%;
      top: 0;
      animation: arrow-line 1s ease-in-out 1s forwards;
    }
  }

  &>button {
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 999rem;
    color: rgb(var(--hup-color--white));
    cursor: pointer;
    height: 3rem;
    position: relative;
    width: 3rem;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:is(:hover, :focus, :focus-within, :focus-visible) {
      background-color: rgb(var(--hup-color--white));
      color: rgb(var(--hup-color--green));
    }

    &::before {
      border-bottom: 0.125rem solid;
      border-right: 0.125rem solid;
      content: '';
      height: 1.5rem;
      left: 0.75rem;
      position: absolute;
      top: 0.625rem;
      transform: rotate(45deg);
      width: 1.5rem;
    }

    &::after {
      border-bottom: 0.125rem solid;
      border-right: 0.125rem solid;
      content: '';
      height: 0.75rem;
      left: 1.125rem;
      position: absolute;
      top: 0.625rem;
      transform: rotate(45deg);
      width: 0.75rem;
    }
  }

  @keyframes arrow-line {
    from { height: 0%; }
    to { height: 100%; }
  }
}
</style>
