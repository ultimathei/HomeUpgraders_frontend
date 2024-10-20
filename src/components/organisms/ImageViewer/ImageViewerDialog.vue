<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { IProject } from "@/interfaces/projects.interface"
import ImageCarousel from './ImageCarousel.vue';

const props = defineProps<{
  imageIndex?: number|null
  project?: IProject|null
}>()
const emit = defineEmits(['close', 'select-image'])

const isOpen = computed(() => !!props.project)
const dialog = ref<HTMLDialogElement|null>(null)
watch(isOpen, (newVal) => {
  if(newVal) dialog.value?.showModal()
  else closeDialog()
})
const openImage = (i?: number) => {
  emit('select-image', i)
}
const closeDialog = () => {
  dialog.value?.close()
  emit('close')
}
</script>

<template>
  <dialog ref="dialog" class="image-viewer-dialog">
    <ImageCarousel
      v-if="!!project"
      style="height: 100%;"
      :project="project"
      :image-index="imageIndex || 0"
      use-active-image-display
      @open="openImage"
      @close="closeDialog"
    />
  </dialog>
</template>

<style scoped lang="scss">
.image-viewer-dialog {
  background-color: rgb(var(--hup-color--black));
  position: fixed;
  inset: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  border: none;
  box-shadow: 0 0 1rem rgba(0,0,0,0.25);
  border-radius: 0.25rem;
}

.image-viewer-dialog::backdrop {
  overscroll-behavior: contain;
  z-index: 10;

  /* slightly transparent fallback */
  background-color: rgba(var(--hup-color--black), 0.9);
  /* if backdrop support: more transparent and blurred */
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    background-color: rgba(var(--hup-color--black), 0.5);
    -webkit-backdrop-filter: blur(2rem);
    backdrop-filter: blur(2rem);
  }
}
</style>
