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
            :key="`${project.id}-${tag}`"
            :class="$style['header__left-tag']"
          >
            #{{ tag }}
          </li>
        </ul>
      </div>
      <div :class="$style['header__controls']">
        <!-- <button></button> -->
        <button @click.prevent="$emit('setActive')">
          <CloseIcon />
        </button>
      </div>
    </header>
    <main :class="$style.main">
      <a
        v-for="n in 25"
        :key="n"
        :class="$style.thumbnail"
        href="#"
        @click.prevent="openImageViewer"
      >
        <img
          src=""
          alt=""
        />
        <span :class="$style.thumbnail__overlay">
          <ViewIcon />
        </span>
      </a>
    </main>
  </li>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { IProject } from './Project.types'
import CloseIcon from '@Assets/button_close.svg'
import ViewIcon from '@Assets/icon--eye.svg'
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
const openImageViewer = () => {
  console.log('TODO open imageViewer')
}
</script>

<style src="./Project.module.scss" module lang="scss" />
