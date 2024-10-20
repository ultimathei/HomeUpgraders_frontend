<template>
  <SiteHeader
    id="site-header"
    :menu-open="menuOpen"
    :with-logo="menuOpen || headerHasBackground"
    :with-background="!menuOpen && headerHasBackground"
    @click="clickBurgerMenuBtn"
  />
  <SiteMenu
    id="site-menu"
    :open="menuOpen"
    :active="activeMenuItem"
    :use-references="useReferences"
    @click="menuItemClick"
  />
  <main id="site-main">
    <Home
      id="section-home"
      :visible="!headerHasBackground"
      @scroll-to-about="scrollToSection('section-about')"
    />
    <About
      id="section-about"
      :use-references="useReferences"
    />
    <Contact
      id="section-contact"
      :visible="activeMenuItem === 'contact'"
    />
    <References v-if="useReferences" id="section-references" />
  </main>
  <SiteFooter id="site-footer" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import About from '@Templates/About/About.vue'
import Contact from '@Templates/Contact/Contact.vue'
import Home from '@Templates/Home/Home.vue'
import References from '@Templates/References/References.vue'
import SiteHeader from '@Templates/Header/Header.vue'
import SiteFooter from '@Templates/Footer/Footer.vue'
import SiteMenu from '@Templates/Menu/Menu.vue'

const useReferences = true

// Menu
const menuOpen = ref(false)
const clickBurgerMenuBtn = () => (menuOpen.value = !menuOpen.value)
const menuItemClick = (key: string) => {
  menuOpen.value = false
  scrollToSection(`section-${key}`)
}

// Home
const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (el) window.scrollTo(0, el?.offsetTop - 48)
}

// Intersection observer
const headerHasBackground = ref(false)
const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    headerHasBackground.value = !entry.isIntersecting
  })
}
const activeMenuItem = ref('home')
const handleSectionIntersection = (entries: IntersectionObserverEntry[]) => {
  const entry = entries[0]
  if (!entry.isIntersecting) return
  activeMenuItem.value = entry.target.id.substring(8)
}
const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.1,
})
const sectionObserver = new IntersectionObserver(handleSectionIntersection, {
  threshold: 0.5,
})
onMounted(() => {
  observer.observe(document.getElementById('section-home') as Element)
  const sections = document.querySelectorAll('section')
  sections.forEach((section) => sectionObserver.observe(section as Element))
})
onUnmounted(() => {
  observer.disconnect()
  sectionObserver.disconnect()
})
</script>
