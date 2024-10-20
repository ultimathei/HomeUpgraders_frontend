<template>
  <div
    class="logo"
    :data-size="size"
    test-id="AtomLogo"
    aria-label="Logo"
  >
    <Logo class="logo__graphics" />
    <div class="logo__text">
      <em v-if="withText">HOME UPGRADERS</em>
      <a v-if="withEmail" href="mailto:info@homeupgraders.co.uk">info@homeupgraders.co.uk</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Size } from './Logo.types'
import Logo from '@Assets/logo.svg?component'
defineProps({
  withText: Boolean,
  withEmail: Boolean,
  size: {
    type: String as PropType<Size>,
    default: Size.l,
  },
})
</script>

<style scoped lang="scss">
.logo {
  --color: rgb(var(--hup-color--white));
  --logo-size: 5em;
  --text-size: 2em;
  --sub-text-size: 1em;
  --flex-flow: column;
  align-items: center;
  color: var(--color);
  display: flex;
  fill: var(--color);
  flex-flow: var(--flex-flow);
  font-size: 1rem;
  gap: 1em;
  justify-content: center;

  &__graphics {
    height: var(--logo-size);
    width: var(--logo-size);
  }

  &__text {
    display: flex;
    flex-flow: column;
  }

  em {
    font-family: 'Futura', sans-serif;
    font-size: var(--text-size);
    line-height: 1.2em;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;
    font-style: normal;
  }

  a {
    font-family: 'Futura', sans-serif;
    font-size: var(--sub-text-size);
    line-height: 1.2em;
    font-weight: 300;
    text-align: center;
    color: var(--color);
  }

  &[data-size='m'] {
    --logo-size: 3em;
    --text-size: 1.25em;
    --flex-flow: row;
    gap: 0.5em;

    em {
      text-align: left;
    }
  }
}
</style>
