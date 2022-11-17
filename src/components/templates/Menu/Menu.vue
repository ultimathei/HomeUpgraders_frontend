<template>
  <aside
    :class="$style.menu"
    :aria-expanded="open"
  >
    <ul>
      <li>
        <a
          href="#section-home"
          :aria-selected="active === 'home'"
          :tabindex="open ? 0 : -1"
          @click.prevent="$emit('click', 'home')"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#section-about"
          :aria-selected="active === 'about'"
          :tabindex="open ? 0 : -1"
          @click.prevent="$emit('click', 'about')"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#section-contact"
          :aria-selected="active === 'contact'"
          :tabindex="open ? 0 : -1"
          @click.prevent="$emit('click', 'contact')"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#section-references"
          :aria-selected="active === 'references'"
          :tabindex="open ? 0 : -1"
          @click.prevent="$emit('click', 'references')"
        >
          References
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
  defineProps({
    open: Boolean,
    active: {
      type: String,
      default: 'home',
    },
  })
  defineEmits(['click'])
</script>

<style src="./Menu.module.scss" module lang="scss" />