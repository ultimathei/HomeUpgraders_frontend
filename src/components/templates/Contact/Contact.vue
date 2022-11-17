<script setup lang="ts">
import SectionHeading from '@Atoms/Heading/Section/Section.vue'
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
  </section>
</template>

<style src="./Contact.module.scss" module lang="scss" />
