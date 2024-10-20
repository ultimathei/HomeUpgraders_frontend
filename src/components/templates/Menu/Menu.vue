<template>
  <aside
    class="menu"
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

<style scoped lang="scss">
.menu {
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: -100vh;
  transition: top 0.3s ease-in-out;
  width: 100vw;
  z-index: 9;

  /* slightly transparent fallback */
  background-color: rgba(var(--hup-color--black), 0.9);

  /* if backdrop support: more transparent and blurred */
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(var(--hup-color--black), 0.5);
    -webkit-backdrop-filter: blur(2rem);
    backdrop-filter: blur(2rem);
  }

  &[aria-expanded='true'] {
    top: 0;
  }

  ul {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    list-style-type: none;
    text-transform: uppercase;
    gap: 0.5rem;
  }
}
</style>
