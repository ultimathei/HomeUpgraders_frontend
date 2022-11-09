<template>
  <!-- aside/nav -->
  <!-- header -->
  <header
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 8px;
    "
  >
    <ButtonBurgerMenu
      label="Menu Button"
      :open="isMenuOpen"
      @click="clickButton"
    />
  </header>
  <main>
    <section
      id="home"
      style="
        align-items: center;
        background-color: #4D9973;
        display: flex;
        flex-flow: column;
        height: 100vh;
        justify-content: center;
        padding: 24px;
        width: 100vw;
      "
    >
      <Logo
        :with-text="true"
        :size="LogoSize.l"
        style="font-size: 12px;"
      />
    </section>
    <section
      id="about"
      style="
        min-height: 600px;
        background-color: var(--hup-color--whitesmoke);
      "
    >
      About
      <!-- <HeadingSection :text="'Default'" /> -->
      <!-- <About /> -->
    </section>
    <section
      id="contact"
      style="
        min-height: 700px;
        background-color: var(--hup-color--pink);
      "
    >
      Contact
    </section>
    <section
      id="references"
      style="min-height: 600px;"
    >
      References
    </section>
  </main>
  <footer>Footer</footer>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  // import About from '@Templates/About/About.vue'
  import ButtonBurgerMenu from '@Atoms/Button/BurgerMenu/BurgerMenu.vue'
  // import HeadingSection from '@Atoms/Heading/Section/Section.vue'
  import Logo from '@Atoms/Logo/Logo.vue'
  import { Size as LogoSize } from '@Atoms/Logo/Logo.types'
  const isMenuOpen = ref(false)
  const clickButton = () => isMenuOpen.value = !isMenuOpen.value
</script>
