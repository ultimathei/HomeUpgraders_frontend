<script setup lang="ts">
import { computed } from 'vue'
import { IProject } from './Project.types'
import CloseIcon from '@Assets/button_close.svg'
import ViewIcon from '@Assets/icon--eye.svg'
import { getImageUrl } from '@/helpers/media.helper'

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
    :class="$style['card']"
    :tabindex="0"
    :style="backgroundStyle"
    :aria-expanded="active"
    @click="$emit('setActive')"
    @keyup.enter="$emit('setActive')"
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
    :class="$style.imageScroll"
  >
    <header :class="$style.header">
      <div :class="$style['header__left']">
        <p :class="$style['header__left-title']">{{ project.title }}</p>
        <ul
          v-if="project.tags.length > 0"
          :class="$style['header__left-tags']"
        >
          <li
            v-for="tag in project.tags"
            :key="`${project.documentId}-${tag.documentId}`"
            :class="$style['header__left-tag']"
          >
            #{{ tag.title }}
          </li>
        </ul>
      </div>
      <div :class="$style['header__controls']">
        <button @click.prevent="$emit('setActive')">
          <CloseIcon />
        </button>
      </div>
    </header>
    <main :class="$style.main">
      <a
        v-for="(media, i) in project.media"
        :key="media.documentId"
        :class="$style.thumbnail"
        href="#"
        @click.prevent="$emit('open-image', i)"
      >
        <img
          :src="getImageUrl(media, 'small')"
          :alt="media.alternativeText || 'project reference image'"
        />
        <span :class="$style.thumbnail__overlay">
          <ViewIcon />
        </span>
      </a>
    </main>
  </li>
</template>

<style src="./Project.module.scss" module lang="scss" />
