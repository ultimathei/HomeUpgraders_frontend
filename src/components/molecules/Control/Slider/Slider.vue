<template>
  <nav
    role="navigation"
    :aria-label="`${label} Navigation`"
  >
    <ul class="slider">
      <li
        v-for="n in size"
        :key="n"
      >
        <ButtonDot
          :label="`Go to page ${n} of ${label} Navigation`"
          :active="active === n"
          :disabled="disabled"
          @click="onButtonClick(n)"
        />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import ButtonDot from '@Atoms/Button/Dot/Dot.vue'
defineProps({
  label: {
    type: String,
    default: 'Slider',
  },
  size: {
    type: Number,
    required: true,
  },
  active: {
    type: Number,
    default: 1,
  },
  disabled: Boolean,
})
const emit = defineEmits(['setActive'])
const onButtonClick = (n: number) => emit('setActive', n)
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
}
</style>
