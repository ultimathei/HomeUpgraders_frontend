<script setup lang="ts">
import { ref, watch } from 'vue'
import Logo from '@Atoms/Logo/Logo.vue'
import ButtonArrow from '@Atoms/Button/Arrow/Arrow.vue'
import { Size as LogoSize } from '@Atoms/Logo/Logo.types'
import videoPath from '@Assets/home_bg.mp4'
const props = defineProps({
  visible: Boolean,
})
defineEmits(['scrollToAbout'])

// pause video playback when offscreen
// play when onscreen
const video = ref(null)
watch(
  () => props.visible,
  (visible) => {
    if (!video.value) return
    visible
      ? (video.value as HTMLVideoElement).play()
      : (video.value as HTMLVideoElement).pause()
  }
)
</script>

<template>
  <section :class="$style.section">
    <Logo
      :class="$style['section__top']"
      :with-text="true"
      :size="LogoSize.l"
    />
    <div :class="$style['section__bottom']">
      <h1>IMPROVE — MAINTAIN — REFURBISH</h1>
      <h2>Upgrading the world around You</h2>
      <ButtonArrow @click="$emit('scrollToAbout')" />
    </div>
    <video
      id="home-video-background"
      ref="video"
      width="100%"
      height="100%"
      autoplay
      disablepictureinpicture
      loop
      muted
      playsinline
    >
      <source
        :src="videoPath"
        type="video/mp4"
      />
    </video>
  </section>
</template>

<style src="./Home.module.scss" module lang="scss" />
