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
  <section v-bind="$attrs" class="section">
    <Logo
      class="section__top"
      :with-text="true"
      :with-email="true"
      :size="LogoSize.l"
    />
    <div class="section__bottom">
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

<style scoped lang="scss">
.section {
  align-items: center;
  background-color: rgb(var(--hup-color--green));
  display: flex;
  flex-flow: column;
  gap: 8vh;
  height: 100vh;
  justify-content: center;
  padding: 1.4rem;
  position: relative;
  width: 100vw;

  &::after {
    background-color: rgb(var(--hup-color--green));
    content: '';
    height: 100%;
    inset: 0;
    mix-blend-mode: multiply;
    position: absolute;
    width: 100%;
  }

  &__top {
    flex-grow: 1;
    justify-content: flex-end;
    z-index: 2;
    opacity: 0;
    animation: slide-up-fade-in 1s ease-in-out 0s forwards;
    margin-top: 8rem;
  }

  &__bottom {
    z-index: 2;
    align-items: center;
    color: rgb(var(--hup-color--white));
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    text-align: center;

    &>h1 {
      flex-grow: 0;
      font-size: 1.875rem;
      font-weight: 300;
      opacity: 0;
      animation: fade-in 0.6s ease-in 0.6s forwards;

      @media screen and (max-width: 480px) {
        font-size: 1.4rem;
      }
    }

    &>h2 {
      flex-grow: 0;
      font-size: 1.5rem;
      font-style: italic;
      font-weight: 300;
      padding-bottom: 1rem;
      opacity: 0;
      animation: fade-in 0.3s ease-in-out 1s forwards;
    }

    &>div {
      flex-grow: 1;
    }
  }

  video {
    height: 100%;
    position: absolute;
    width: 100%;
    object-fit: cover;
    z-index: 0;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slide-up-fade-in {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
