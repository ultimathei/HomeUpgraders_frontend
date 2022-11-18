<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from '@Atoms/Heading/Section/Section.vue'
import SliderControl from '@Molecules/Control/Slider/Slider.vue'

const activeSlider = ref(1)
const clickButton = (n: number) => (activeSlider.value = n)
const headingLabels = ['About', 'Who we are', 'What they say', 'Why the name']
</script>

<template>
  <section :class="$style.section">
    <SectionHeading :text="headingLabels[activeSlider - 1 || 0]" />
    <div :class="$style.cards">
      <div
        :class="[$style.card, $style['card--1']]"
        :data-variation="activeSlider"
      />
      <div
        :class="[$style.card, $style['card--2']]"
        :data-variation="activeSlider"
      />
    </div>
    <article
      v-if="activeSlider === 1"
      :class="$style.article"
    >
      <p :class="$style['p--large']">
        We are a family-run, family-done
        <span :class="$style['p--accent']">home renovation</span> and
        <span :class="$style['p--accent']">refurbishing</span>
        business who provide friendly and efficient service when you need help
        with your projects.
      </p>
      <p :class="$style['p--narrow']">
        Although we are based in
        <span :class="$style['p--accent']">Stoke-on-Trent</span>,
        <span :class="$style['p--accent']">Staffordshire</span>, we have
        costumers from within the 50 miles radius of
        <span :class="$style['p--accent']">Birmingham</span> and
        <span :class="$style['p--accent']">Manchester</span>.
      </p>
    </article>
    <article
      v-if="activeSlider === 2"
      :class="$style.article"
    >
      <p :class="$style['p--narrow']">
        Jozsef's 30+ years of experience and practice there is a small range of
        jobs we cannot undertake.
      </p>
      <p :class="[$style['p--large'], $style['p--narrowest']]">
        If you were interested in working with us, please feel free to email us
        any time.
      </p>
      <p :class="$style['p--narrowest']">
        Please have a look at our
        <span :class="$style['p--accent']">photo and video gallery</span> to see
        what we are capable of.
      </p>
    </article>
    <article
      v-if="activeSlider === 3"
      :class="$style.article"
    >
      <p :class="$style['p--large']">
        "Excellent service, cannot fault them on anything. They arrived early,
        job completed to a very high standard, kept us well informed through-out
        and very friendly. The guys left the job clean and tidy. Quick
        responders too. Definitely will use them again."
      </p>
      <p :class="$style['p--accent']">Dean, another happy customer</p>
    </article>
    <article
      v-if="activeSlider === 4"
      :class="[$style.article, $style['article--grid']]"
    >
      <div>
        <p :class="$style['p--large']">Home</p>
        <p :class="$style['p--accent']">/həʊm/</p>
      </div>
      <p :class="$style['p--narrowest']">
        The place where one lives permanently, especially as a member of a
        family or household
      </p>
      <div>
        <p :class="$style['p--large']">Upgrade</p>
        <p :class="$style['p--accent']">/ʌp'ɡreɪd/</p>
      </div>
      <p :class="$style['p--narrowest']">
        Raise to a higher standard, in particular improve by adding or replacing
        components
      </p>
    </article>
    <SliderControl
      label="My slider"
      :size="4"
      :active="activeSlider"
      @set-active="clickButton"
    />
  </section>
</template>

<style src="./About.module.scss" module lang="scss" />
