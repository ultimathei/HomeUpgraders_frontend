<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import SectionHeading from '@Atoms/Heading/Section/Section.vue'
import CardProject from '@Organisms/Card/Project/Project.vue'
import { IProject } from '@Organisms/Card/Project/Project.types'
import { getProjects, getTags } from '@/services/projects.service'
import { ITag } from '@/interfaces/tags.interface'
import { IUpload } from '@/interfaces/upload.interface'

const tagsList = ref<ITag[]>([])
const tagsListLoading = ref(true)
const activeProjectId = ref('')

const projects = ref<IProject[]>([])
const filteredProjects = computed(() => !selectedTags.value.size
  ? projects.value
  : projects.value
    ?.filter(f => f.tags?.some(s => selectedTags.value.has(s.documentId)))
)
const projectsLoading = ref(true)

const setActive = (id: string) => {
  if (activeProjectId.value === id) {
    activeProjectId.value = ''
    return
  }
  activeProjectId.value = id
}
// const activeProject = computed(() => projects.find(p => p.id === activeProjectId.value))
const isActiveProject = (id: string) => (activeProjectId.value && activeProjectId.value === id) || false;

const selectedTags = ref<Set<string>>(new Set<string>())

const selectTag = (tag: ITag) => {
  const { documentId } = tag
  if(selectedTags.value.has(documentId)) selectedTags.value.delete(documentId)
  else selectedTags.value.add(documentId)
}

const fetchTags = async () => {
  tagsListLoading.value = true
  const tags = await getTags()
  tagsList.value = tags
  tagsListLoading.value = false
}

const fetchProjects = async () => {
  projectsLoading.value = true
  const response = await getProjects()
  const projectsWithImages = ((response?.data || []) as IProject[]).filter(f => f.media?.length)
  // TODO - pagination
  projects.value = projectsWithImages
  projectsLoading.value = false
}

const imageViewer = ref<HTMLDialogElement|null>(null)
const openImageViewer = (index: number, media: IUpload[]) => {
  console.log('TODO open imageViewer', index, media)
  imageViewer.value?.showModal()
  // document.body.classList.add('dialog-open')
}
const closeImageViewer = () => {
  imageViewer.value?.close()
  // document.body.classList.remove('dialog-open')
}

onMounted(() => {
  fetchTags()
  fetchProjects()
})
</script>

<template>
  <section v-bind="$attrs" :class="$style.section">
    <SectionHeading text="References" />
    <article>
      <p>
        We always try and collect photo and video references of our previous
        jobs, so we can show off what we are capable of doing. Feel free to surf
        through our <span>Project Folders</span> below. Select a combination of
        the filter <span>#tags</span> to modify the search to your liking.
      </p>
    </article>
    <ul :class="$style.filters">
      Filters:
      <li
        v-for="tag in tagsList"
        :key="tag.documentId"
        :data-selected="!selectedTags?.size || selectedTags.has(tag.documentId)"
        :tabindex="0"
        @click="selectTag(tag)"
        @keyup.enter="selectTag(tag)"
      >
        #{{ tag.title }}
      </li>
      <li
        v-if="selectedTags?.size"
        key="clear"
        :tabindex="0"
        @click="selectedTags.clear()"
        @keyup.enter="selectedTags.clear()"
      >
        CLEAR
      </li>
    </ul>
    <ul :class="$style.gallery">
      <CardProject
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        :active="isActiveProject(project.id)"
        @set-active="setActive(project.id)"
        @open-image="openImageViewer($event, project.media)"
      />
      <li v-if="!filteredProjects?.length" :class="$style['empty-list']">
        No match for these filters. <span :class="$style['empty-list__clear']" @click="selectedTags.clear()">Clear filters</span>
      </li>
    </ul>
  </section>

  <!--  -->
    <dialog ref="imageViewer" class="image-viewer">
      blabla
    </dialog>
</template>

<style src="./References.module.scss" module lang="scss" />
