<template>
  <aside
    :class="$style.menu"
    :aria-expanded="open"
  >
    <ul>
      <li>
        <MenuItem
          label="Home"
          to-id="#section-home"
          :active="active === 'home'"
          :visible="open"
          @click="$emit('click', 'home')"
        />
      </li>
      <li>
        <MenuItem
          label="About"
          to-id="#section-about"
          :active="active === 'about'"
          :visible="open"
          @click="$emit('click', 'about')"
        />
      </li>
      <li>
        <MenuItem
          label="Contact"
          to-id="#section-contact"
          :active="active === 'contact'"
          :visible="open"
          @click="$emit('click', 'contact')"
        />
      </li>
      <li v-if="useReferences">
        <MenuItem
          label="References"
          to-id="#section-references"
          :active="active === 'references'"
          :visible="open"
          @click="$emit('click', 'references')"
        />
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import MenuItem from '@Atoms/MenuItem/MenuItem.vue'
defineProps({
  open: Boolean,
  active: {
    type: String,
    default: 'home',
  },
  useReferences: Boolean,
})
defineEmits(['click'])
</script>

<style src="./Menu.module.scss" module lang="scss" />
