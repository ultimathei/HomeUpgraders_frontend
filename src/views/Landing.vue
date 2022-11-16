<template>
  <!-- aside/nav -->
  <SiteHeader
    id="site-header"
    :menu-open="menuOpen"
    :logo-visible="false"
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
  import { ref } from 'vue'
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
    const elmntToView = document.getElementById("section-about");
    elmntToView?.scrollIntoView();
  }
</script>
