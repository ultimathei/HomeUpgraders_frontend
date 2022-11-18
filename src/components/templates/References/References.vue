<script setup lang="ts">
import SectionHeading from '@Atoms/Heading/Section/Section.vue'

interface IProject {
  id: string
  title: string
  tags: string[]
  coverImage: string
}
const dummyProjects: IProject[] = [
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
      <li
        v-for="project in dummyProjects"
        :key="project.id"
        :class="$style['card']"
        :tabindex="0"
        :style="{ backgroundImage: `url(${project.coverImage})` }"
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
            v-for="tag in project.tags.slice(
              0,
              Math.min(project.tags.length, 3)
            )"
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
    </ul>
  </section>
</template>

<style src="./References.module.scss" module lang="scss" />
