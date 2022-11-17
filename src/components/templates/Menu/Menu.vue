<template>
  <aside
    :class="$style.menu"
    :aria-expanded="open"
  >
    <ul>
      <li>
        <a href="#section-home" @click.prevent="$emit('click', 'home')" :aria-selected="active === 'home'" :tabindex="open ? 0 : -1">
          Home
        </a>
      </li>
      <li>
        <a href="#section-about" @click.prevent="$emit('click', 'about')" :aria-selected="active === 'about'" :tabindex="open ? 0 : -1">
          About
        </a>
      </li>
      <li>
        <a href="#section-contact" @click.prevent="$emit('click', 'contact')" :aria-selected="active === 'contact'" :tabindex="open ? 0 : -1">
          Contact
        </a>
      </li>
      <li>
        <a href="#section-references" @click.prevent="$emit('click', 'references')" :aria-selected="active === 'references'" :tabindex="open ? 0 : -1">
          References
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
  defineProps({
    open: Boolean,
    active: String,
  })
  defineEmits(['click'])
</script>

<style src="./Menu.module.scss" module lang="scss" />