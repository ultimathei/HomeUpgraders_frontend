<script setup lang="ts">
  import Logo from '@Atoms/Logo/Logo.vue'
  import { Size as LogoSize } from '@Atoms/Logo/Logo.types'
  defineEmits(['scrollToAbout'])
</script>

<template>
  <section :class="$style.section">
    <Logo
      :class="$style.logo"
      :with-text="true"
      :size="LogoSize.l"
    />
    <div :class="$style.headings">
      <h1>IMPROVE — MAINTAIN — REFURBISH</h1>
      <h2>Upgrading the world around You</h2>
      <div :class="$style.arrow">
        <span />
        <button @click.prevent="$emit('scrollToAbout')" />
      </div>
    </div>
    <video
      width="100%"
      height="100%"
      autoplay
      disablepictureinpicture
      loop
      muted
      playsinline
    >
      <source
        :src="`src/assets/home_bg.mp4`"
        type="video/mp4"
      />
    </video>
  </section>
</template>

<style src="./Home.module.scss" module lang="scss" />