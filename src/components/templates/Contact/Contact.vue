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
  <section :class="$style.section">
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
      <p><span>Photos</span>are always welcome 📸 😊</p>
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

<style src="./Contact.module.scss" module lang="scss" />
