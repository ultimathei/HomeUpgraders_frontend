<script setup lang="ts">
import { ref, watch } from 'vue'
import SectionHeading from '@Atoms/Heading/Section/Section.vue'
import videoPath from '@Assets/contact_bg.mp4'
const props = defineProps({
  visible: Boolean,
})
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
  <section class="section">
    <SectionHeading
      text="Contact"
      :light="true"
    />
    <article>
      <p>
        We find it easiest to communicate through <span>email</span> Please
        write us a couple of lines about your job and we will get back to you in
        no time.
      </p>
      <p class="p--small"><span>Photos</span>are always welcome 📸 😊</p>
    </article>
    <address>
      <span>Email us at</span>
      <a href="mailto:info@homeupgraders.co.uk">info@homeupgraders.co.uk</a>
    </address>
    <video
      id="contact-video-background"
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
  background-color: rgb(var(--hup-color--pink));
  background-image: url('@Assets/contact_bg.png');
  background-position: center;
  background-size: cover;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 43.75rem;
  padding: 2rem;
  padding-top: 3.875rem;
  gap: 2.5rem;
  position: relative;

  * {
    z-index: 1;
  }

  p, a, address {
    color: rgb(var(--hup-color--white));
    font-size: 1.875rem;
    font-style: normal;
    text-align: center;
    max-width: 44rem;
    word-break: break-word;

    @media screen and (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  .p--small {
    font-size: 1.4rem !important;
    margin-top: 3rem;
  }

  address {
    font-size: 1.5rem;
  }

  a {
    word-break: initial;
  }

  span {
    background-color: rgb(var(--hup-color--black));
    border-radius: 0.25rem;
    font-style: italic;
    padding: 0 0.35em;
    margin-right: 0.5ch;
    white-space: nowrap;
  }

  a {
    text-decoration: none;

    &:is(:hover, :focus-visible, :focus, :focus-within) {
      text-decoration: underline;
    }
  }

  &::after {
    background-color: rgb(var(--hup-color--pink));
    content: '';
    height: 100%;
    inset: 0;
    mix-blend-mode: multiply;
    position: absolute;
    width: 100%;
  }

  video {
    height: 100%;
    position: absolute;
    width: 100%;
    object-fit: cover;
    opacity: 0.25;
    z-index: 0;
    top: 0;
    left: 0;
    z-index: 0;
  }
}
</style>
