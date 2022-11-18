<template>
  <li
    :class="$style['card']"
    :tabindex="0"
    :style="backgroundStyle"
    :aria-expanded="active"
    @click="$emit('setActive')"
  >
    <p
      :class="$style['card__title']"
      :title="project.title"
    >
      {{ project.title }}
    </p>
    <ul
      v-if="project.tags.length > 0"
      :class="$style.tags"
    >
      <li
        v-for="tag in project.tags.slice(0, Math.min(project.tags.length, 3))"
        :key="`${project.id}-${tag}`"
      >
        #{{ tag }}
      </li>
      <li
        v-if="project.tags.length > 3"
        :key="`${project.id}-tag-more`"
      >
        +{{ project.tags.length - 3 }}
      </li>
    </ul>
  </li>
  <li
    v-if="active"
    :class="$style.gallery"
  ></li>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { IProject } from './Project.types'
const props = defineProps({
  project: {
    type: Object as PropType<IProject>,
    required: true,
  },
  active: Boolean,
  disabled: Boolean,
})
defineEmits(['setActive'])
const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.project.coverImage})`,
}))
</script>

<style src="./Project.module.scss" module lang="scss" />
