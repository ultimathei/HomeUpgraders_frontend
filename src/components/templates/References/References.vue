<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from '@Atoms/Heading/Section/Section.vue'
import CardProject from '@Organisms/Card/Project/Project.vue'
import { IProject } from '@Organisms/Card/Project/Project.types'

const projects: IProject[] = [
  {
    id: '001',
    title: 'Project 1',
    tags: ['kitchen', 'carpentry'],
    coverImage:
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
  },
  {
    id: '002',
    title: 'Project 2',
    tags: ['carpentry'],
    coverImage:
      'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '003',
    title: 'Project 3 with veryveryveyrvery long name',
    tags: ['kitchen', 'carpentry', 'flooring', 'garden'],
    coverImage:
      'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '004',
    title: 'Project 4',
    tags: ['carpentry'],
    coverImage:
      'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '005',
    title: 'Project 5',
    tags: ['kitchen', 'carpentry'],
    coverImage:
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
  },
  {
    id: '006',
    title: 'Project 6',
    tags: ['carpentry'],
    coverImage:
      'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '007',
    title: 'Project 7',
    tags: ['kitchen', 'carpentry'],
    coverImage:
      'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '008',
    title: 'Project 8',
    tags: ['carpentry'],
    coverImage:
      'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '009',
    title: 'Project 9',
    tags: ['kitchen', 'carpentry'],
    coverImage:
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
  },
  {
    id: '010',
    title: 'Project 10',
    tags: ['carpentry'],
    coverImage:
      'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '011',
    title: 'Project 11',
    tags: ['kitchen', 'carpentry'],
    coverImage:
      'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '012',
    title: 'Project 12',
    tags: ['carpentry'],
    coverImage:
      'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '013',
    title: 'Project 13',
    tags: ['kitchen', 'carpentry'],
    coverImage:
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
  },
  {
    id: '014',
    title: 'Project 14',
    tags: ['carpentry'],
    coverImage:
      'https://images.pexels.com/photos/175709/pexels-photo-175709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '015',
    title: 'Project 15',
    tags: ['kitchen', 'carpentry'],
    coverImage:
      'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '016',
    title: 'Project 16',
    tags: ['carpentry'],
    coverImage:
      'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
]
const tagsList = [
  'kitchen',
  'flooring',
  'bathroom',
  'paint&dec',
  'garden',
  'plastering',
  'carpentry',
  'tiling',
  'other',
]
const activeProjectId = ref('')
const setActive = (id: string) => {
  if (activeProjectId.value === id) {
    activeProjectId.value = ''
    return
  }
  activeProjectId.value = id
}
// const activeProject = computed(() => projects.find(p => p.id === activeProjectId.value))
const isActiveProject = (id: string) => {
  return (activeProjectId.value && activeProjectId.value === id) || false
}
</script>

<template>
  <section :class="$style.section">
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
      <li
        v-for="tag in tagsList"
        :key="`filter-pill-${tag}`"
      >
        #{{ tag }}
      </li>
      <li>BACK</li>
    </ul>
    <ul :class="$style.gallery">
      <CardProject
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :active="isActiveProject(project.id)"
        @set-active="setActive(project.id)"
      />
    </ul>
  </section>
</template>

<style src="./References.module.scss" module lang="scss" />
