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
  <section v-bind="$attrs" class="section">
    <SectionHeading text="References" />
    <article>
      <p>
        We always try and collect photo and video references of our previous
        jobs, so we can show off what we are capable of doing. Feel free to surf
        through our <span>Project Folders</span> below. Select a combination of
        the filter <span>#tags</span> to modify the search to your liking.
      </p>
    </article>
    <ul v-if="tagsList?.length" class="filters">
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
    <ul class="gallery">
      <CardProject
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        :active="isActiveProject(project.id)"
        @set-active="setActive(project.id)"
        @open-image="openImageViewer($event, project.media)"
      />
      <li v-if="!projects?.length && projectsLoading" class="empty-list">
        Loading project folders..
      </li>
      <li v-else-if="!projects?.length" class="empty-list">
        Could not load project folders <span class="empty-list__clear" @click="fetchProjects">Retry</span>
      </li>
      <li v-else-if="!filteredProjects?.length" class="empty-list">
        No match for these filters. <span class="empty-list__clear" @click="selectedTags.clear()">Clear filters</span>
      </li>
    </ul>
  </section>

  <!--  -->
    <dialog ref="imageViewer" class="image-viewer">
      blabla
    </dialog>
</template>

<style scoped lang="scss">
.section {
  background-color: rgb(var(--hup-color--white));
  min-height: 37.5rem;
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  justify-content: space-between;
  padding: 3.875rem 5rem;

  @media screen and (max-width: 600px) {
    padding: 3.875rem 0.5rem;
  }

  article {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    gap: 2.5rem;
    justify-content: center;
    max-width: 50rem;
    text-align: center;

    p {
      font-size: 1.25rem;
      white-space: preline;

    span {
      background-color: rgb(var(--hup-color--black));
      border-radius: 0.25rem;
      color: rgb(var(--hup-color--white));
      font-style: italic;
      padding: 0 0.35em;
      white-space: nowrap;
    }
    }
  }
}

.gallery {
  display: grid;
  gap: 0.25rem;
  grid-auto-flow: dense; // to fill in gaps caused by active image-list
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0;
  width: 100%;
  background-color: rgb(var(--hup-color--whitesmoke));
  padding: 0.25rem;
}

.filters {
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  gap: 0.25rem;
  justify-content: center;
  max-width: 100%;
  padding: 0.25rem;
  transition: all 0.2s ease-in-out;

  li {
    border: 1px solid rgb(var(--hup-color--black));
    border-radius: 0.25em;
    color: rgb(var(--hup-color--black));
    cursor: pointer;
    padding: 0 0.5em;
    font-size: 1rem;
    font-style: italic;
    font-weight: 100;

    &:is(&:hover, &:focus, &:focus-within) {
      border-color: rgb(var(--hup-color--green));
      color: rgb(var(--hup-color--green));
    }

    &[data-selected="true"] {
      background-color: rgb(var(--hup-color--black));
      color: rgb(var(--hup-color--white));

      &:is(&:hover, &:focus, &:focus-within) {
        background-color: rgb(var(--hup-color--green));
        color: rgb(var(--hup-color--white));
      }
    }
  }
}

.empty-list {
  padding: 1rem;
  text-align: center;

  &__clear {
    cursor: pointer;
    text-decoration: underline;
  }
}

.image-viewer {
  background-color: rgb(var(--hup-color--black));
  position: fixed;
  inset: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  border: none;
  // TODO
}

.image-viewer::backdrop {
  overscroll-behavior: contain;
  background-color: rgb(var(--hup-color--black));
  opacity: 0.75;
  z-index: 10;
}
</style>
