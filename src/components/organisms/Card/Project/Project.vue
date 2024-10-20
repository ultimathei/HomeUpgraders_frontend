<script setup lang="ts">
import { computed } from 'vue'
import { IProject } from "@/interfaces/projects.interface"
import { getImageUrl } from '@/helpers/media.helper'
import ImageCarousel from '../../ImageViewer/ImageCarousel.vue'

const props = defineProps<{
  project: IProject
  active?: boolean
  disabled?: boolean
}>()
defineEmits(['setActive', 'open-image'])
const backgroundStyle = computed(() => {
  const url = getImageUrl(props.project.coverImage, 'small')
  return { backgroundImage: `url(${url})` }
})
</script>

<template>
  <li
    class="card"
    :tabindex="0"
    :style="backgroundStyle"
    :aria-expanded="active"
    @click="$emit('setActive')"
    @keyup.enter="$emit('setActive')"
  >
    <p
      class="card__title"
      :title="project.title"
    >
      {{ project.title }}
    </p>
    <ul
      v-if="project.tags.length > 0"
      class="tags"
    >
      <li
        v-for="tag in project.tags.slice(0, Math.min(project.tags.length, 3))"
        :key="`${project.documentId}-${tag.documentId}`"
      >
        #{{ tag.title }}
      </li>
      <li
        v-if="project.tags.length > 3"
        :key="`${project.documentId}-tag-more`"
      >
        +{{ project.tags.length - 3 }}
      </li>
    </ul>
  </li>
  <li
    v-if="active"
    class="card--active"
  >
    <ImageCarousel
      v-if="!!project && active"
      :project="project"
      use-active-image-display
      @open="$emit('open-image', $event)"
      @close="$emit('setActive')"
    />
  </li>
</template>

<style scoped lang="scss">
.card {
  align-items: center;
  background-color: rgba(var(--hup-color--whitesmoke));
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  flex-flow: column;
  height: 12rem;
  justify-content: center;
  padding: 1rem;
  position: relative;

  &:nth-last-child(1) {
    grid-column: auto / span -1;
  }

  &[aria-expanded="true"]::before {
    background-color: rgb(var(--hup-color--pink));
    opacity: 1;
  }

  &>* {
    z-index: 1;
  }

  &::before {
    opacity: 0;
    background-color: rgb(var(--hup-color--green));
    border-radius: 0.25rem;
    content: '';
    height: 100%;
    inset: 0;
    mix-blend-mode: multiply;
    position: absolute;
    width: 100%;
    z-index: 0;
  }

  &__title {
    background-color: rgb(var(--hup-color--black));
    border-radius: 0.25rem;
    color: rgb(var(--hup-color--white));
    font-size: 1.875rem;
    font-style: italic;
    max-width: 100%;
    overflow: hidden;
    overflow: hidden;
    padding: 0 0.35em;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:is(:hover, :focus, :focus-visible, :focus-within) &__title {
    background-color: rgb(var(--hup-color--white));
    color: rgb(var(--hup-color--black));
  }

  &:is(:hover, :focus, :focus-visible, :focus-within) {
    &::before {
      opacity: 1;
    }

    .tags {
      height: 4rem;
      right: 50%;
      transform: translateX(50%);
    }
  }
}

.tags {
  align-items: flex-start;
  bottom: 0;
  display: flex;
  flex-flow: row nowrap;
  gap: 0.25rem;
  height: 2rem;
  justify-content: flex-end;
  max-width: 100%;
  padding: 0.25rem;
  position: absolute;
  right: 0;
  transition: all 0.2s ease-in-out;

  li {
    background-color: rgb(var(--hup-color--black));
    border-radius: 0.25em;
    color: rgb(var(--hup-color--white));
    padding: 0 0.5em;
    font-size: 0.875rem;
    font-style: italic;
    font-weight: 100;
  }
}

.card--active {
  grid-column: 1 / -1;
  border-radius: 0.25rem;
}
</style>
