<template>
  <!-- aside/nav -->
  <SiteHeader
    id="site-header"
    :menu-open="menuOpen"
    :logo-visible="headerHasBackground"
    @click="clickBurgerMenuBtn"
  />
  <main id="site-main">
    <Home
      id="section-home"
      @scroll-to-about="scrollToAbout"
    />
    <About id="section-about" />
    <Contact id="section-contact" />
    <References id="section-references" />
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
  
  // Menu
  const menuOpen = ref(false)
  const clickBurgerMenuBtn = () => menuOpen.value = !menuOpen.value

  // Home
  const scrollToAbout = () => {
    const elmntToView = document.getElementById("section-about")
    elmntToView?.scrollIntoView()
  }

  // Intersection observer
  const headerHasBackground = ref(false)
  const doSmth = (entries: any[]) => {
    entries.forEach((entry: { isIntersecting: any }) => {
      headerHasBackground.value = !entry.isIntersecting
    })
  }
  const options = {
    rootMargin: '-56px',
    threshold: 0
  }
  const observer = new IntersectionObserver(doSmth, options)
  onMounted(() => {
    const elmntToView = document.getElementById("section-home")
    observer.observe(elmntToView as Element)
  })
  onUnmounted(() => {
    observer.unobserve()
  })
</script>
