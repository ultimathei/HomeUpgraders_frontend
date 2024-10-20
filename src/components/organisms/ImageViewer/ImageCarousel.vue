<script setup lang="ts">
import { computed, watch, ref, onMounted } from "vue"
import { IProject } from "@/interfaces/projects.interface"
import CloseIcon from '@Assets/button_close.svg'
import ArrowLeftIcon from '@Assets/button_arrow--left.svg'
import ArrowRightIcon from '@Assets/button_arrow--right.svg'
import ViewIcon from '@Assets/icon--eye.svg'
import Logo from '@Assets/logo.svg?component'
import { getImageUrl } from '@/helpers/media.helper'

const props = defineProps<{
  project: IProject
  imageIndex?: number
  useActiveImageDisplay?: boolean
}>()
const emit = defineEmits(['close', 'open'])

const activeImage = computed(() => {
  if(!props.project || props.imageIndex === undefined || props.imageIndex === null) return null
  return props.project.media[props.imageIndex]
})
const activeIndex = computed(() => {
  if(!props.project || !('imageIndex' in props)) return null
  return props.imageIndex
})
const thumbnail = ref<HTMLLinkElement|HTMLLinkElement[]|null>(null)
const scrollActiveThumbnailIntoView = (index?: number|null) => {
  if(!thumbnail.value) return
  const activeThumbnail = Array.isArray(thumbnail.value)
    ? thumbnail.value[index || 0]
    : thumbnail.value
  activeThumbnail.scrollIntoView({ behavior: "smooth", block: "center", inline: 'center' })
}
const mediaLength = computed(() => (props.project?.media?.length || 1) - 1)
const stepCarousel = (i: 1|-1) => {
  if(!mediaLength.value) return
  const current = activeIndex.value
  if(current === null || current === undefined) return
  let next = current + i
  if(next < 0) next = mediaLength.value
  else if(next > mediaLength.value) next = 0
  emit('open', next)
}
watch(activeIndex, (newVal) => {
  scrollActiveThumbnailIntoView(newVal)
})
onMounted(() => {
  scrollActiveThumbnailIntoView(props.imageIndex)
})
</script>

<template>
  <div class="image-carousel">
    <header class="header">
      <div class="header__left">
        <p class="header__left-title">{{ project.title }}</p>
        <ul
          v-if="project.tags.length > 0"
          class="header__left-tags"
        >
          <li
            v-for="tag in project.tags"
            :key="`${project.documentId}-${tag.documentId}`"
            class="header__left-tag"
          >
            #{{ tag.title }}
          </li>
        </ul>
      </div>
      <div class="header__controls">
        <button class="control-button | control-button--close" @click.prevent="emit('close')">
          <CloseIcon />
        </button>
      </div>
    </header>

    <main v-if="useActiveImageDisplay && activeImage" class="main">
      <img
        :src="getImageUrl(activeImage, 'large')"
        :alt="activeImage.alternativeText || 'project reference image'"
      />

      <div class="carousel-control carousel-control--prev" @click.prevent="stepCarousel(-1)">
        <button class="control-button">
          <ArrowLeftIcon />
        </button>
      </div>

      <div class="carousel-control carousel-control--next" @click.prevent="stepCarousel(1)">
        <button class="control-button">
          <ArrowRightIcon />
        </button>
      </div>
    </main>

    <footer class="footer">
      <a
        v-for="(media, i) in project.media"
        :key="media.documentId"
        ref="thumbnail"
        class="thumbnail"
        :class="{ 'thumbnail--active': imageIndex === i }"
        href="#"
        @click.prevent="emit('open', i)"
      >
        <img
          :src="getImageUrl(media, 'small')"
          :alt="media.alternativeText || 'project reference image'"
        />
        <span class="thumbnail__overlay">
          <ViewIcon />
        </span>
      </a>
      <a
        key="contact"
        class="thumbnail | thumbnail--contact"
        href="mailto:info@homeupgraders.co.uk"
      >
        <Logo class="thumbnail__logo" />
        <p>Like what you see?</p>
        <p>Get a quote for your project!</p>
      </a>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.image-carousel {
  background-color: rgb(var(--hup-color--black));
  grid-column: 1 / -1;
  border-radius: 0.25rem;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;

  .main {
    flex-grow: 1;
    max-height: calc(100% - 200px);
    background-color: rgba(0,0,0,0.1);
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    position: relative;

    img {
      height: 100%;
      max-width: 100%;
      object-fit: contain;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
      -o-user-drag: none;
      user-drag: none;
    }
  }

  .footer {
    flex-shrink: 0;
    overflow-y: hidden;
    overflow: -moz-scrollbars-horizontal;
    overflow-x: scroll;
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    width: 100%;
    background-color: rgba(0,0,0,0.1);
    padding: 0.5rem;
    border-radius: 0.25rem;

    &::-webkit-scrollbar {
      -webkit-appearance: none;
      background-color: rgba(var(--hup-color--white), 0.15);
      border-radius: 0.25rem;
      height: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(var(--hup-color--white));
      border-radius: 0.25rem;
    }
  }

  .carousel-control {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;

    &:is(:hover, :focus) {
      background: rgba(var(--hup-color--black), 0.2);
    }

    &--prev {
      left: 0;
    }
    &--next {
      right: 0;
    }
  }
}

.header {
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  &__left {
    align-items: flex-end;
    display: flex;
    flex-flow: row wrap;
    &-title{
      color: rgb(var(--hup-color--white));
      font-size: 1.875rem;
      font-style: italic;
    }

    &-tags {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      gap: 0.25rem;
      height: 2rem;
      justify-content: flex-start;
      max-width: 100%;
      padding: 0.25rem;
      margin: 0;
    }

    &-tag {
      background-color: rgb(var(--hup-color--black));
      border-radius: 0.25em;
      color: rgb(var(--hup-color--white));
      padding: 0 0.5em;
      font-size: 0.875rem;
      font-style: italic;
      font-weight: 100;
    }
  }

  &__controls {
    align-self: flex-start;
    display: flex;
    gap: 0.5rem;
    flex-flow: row wrap;
  }
}

.control-button {
  background: none;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  height: 2.5rem;
  position: relative;
  transition: all 0.2s ease-in-out;
  width: 2.5rem;

  & > svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    fill: rgb(var(--hup-color--white));
    transition: all 0.2s ease-in-out;
  }

  &--close {
    &:is(:hover, :focus, :focus-within, :focus-visible) {
      background: rgb(var(--hup-color--white));
      & > svg {
        fill: rgb(var(--hup-color--black));
        transform: rotate(90deg);
      }
    }
  }

}

.thumbnail {
  border-radius: 0.5rem;
  flex: 0 0 17rem;
  height: 11.3125rem;
  overflow: hidden;
  position: relative;
  width: 17rem;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;

  &--active {
    border: 4px solid rgb(var(--hup-color--green));
  }

  &--contact {
    background-color: rgba(var(--hup-color--whitesmoke), 0.1);
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: rgb(var(--hup-color--white));
    padding: 1rem;

    &:is(&:hover, &:focus) {
      background-color: rgba(var(--hup-color--whitesmoke), 0.2);
    }
  }

  &__logo {
    fill: rgb(var(--hup-color--white));
    width: 3rem;
    margin-bottom: 0.5rem;
  }

  img {
    background-color: rgba(var(--hup-color--white), 0.15);
    border: none;
    outline: none;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    
  }

  &__overlay {
    align-items: center;
    background-color: rgba(var(--hup-color--black), 0.75);
    display: flex;
    inset: 0 0 0 0;
    justify-content: center;
    position: absolute;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;

    svg {
      fill: rgb(var(--hup-color--white));
      height: 2.5rem;
      width: 2.5rem;
    }
  }
  &--active &__overlay {
    opacity: 1;
  }

  &:is(:hover, :focus, :focus-within, :focus-visible) &__overlay {
    opacity: 1;
  }
}
</style>
