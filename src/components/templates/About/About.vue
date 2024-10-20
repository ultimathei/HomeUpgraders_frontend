<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from '@Atoms/Heading/Section/Section.vue'
import SliderControl from '@Molecules/Control/Slider/Slider.vue'

defineProps({
  useReferences: Boolean,
})

const activeSlider = ref(1)
const clickButton = (n: number) => (activeSlider.value = n)
const headingLabels = ['About', 'Who we are', 'What they say', 'Why the name']
</script>

<template>
  <section class="section">
    <SectionHeading :text="headingLabels[activeSlider - 1 || 0]" />
    <div class="cards">
      <div
        class="card card--1"
        :data-variation="activeSlider"
      />
      <div
        class="card card--2"
        :data-variation="activeSlider"
      />
    </div>
    <article
      v-if="activeSlider === 1"
      class="article"
    >
      <p class="p--large">
        We are a family-run, family-done
        <span class="p--accent">home renovation</span> and
        <span class="p--accent">refurbishing</span>
        business who provide friendly and efficient service when you need help
        with your projects.
      </p>
      <p class="p--narrow">
        Although we are based in
        <span class="p--accent">Stoke-on-Trent</span>,
        <span class="p--accent">Staffordshire</span>, we have
        costumers from within the 50 miles radius of
        <span class="p--accent">Birmingham</span>,
        <span class="p--accent">Manchester</span>,
        <span class="p--accent">Oxford</span> and 
        <span class="p--accent">London</span>.
      </p>
    </article>
    <article
      v-if="activeSlider === 2"
      class="article"
    >
      <p class="p--narrow]">
        Jozsef's 30+ years of experience and practice there is a small range of
        jobs we cannot undertake.
      </p>
      <p class="p--large p--narrowest">
        If you were interested in working with us, please feel free to email us
        any time.
      </p>
      <p v-if="useReferences" class="p--narrowest">
        Please have a look at our
        <span class="p--accent">photo and video gallery</span> to see
        what we are capable of.
      </p>
    </article>
    <article
      v-if="activeSlider === 3"
      class="article"
    >
      <p class="p--large">
        "Excellent service, cannot fault them on anything. They arrived early,
        job completed to a very high standard, kept us well informed through-out
        and very friendly. The guys left the job clean and tidy. Quick
        responders too. Definitely will use them again."
      </p>
      <p class="p--accent">Dean, another happy customer</p>
    </article>
    <article
      v-if="activeSlider === 4"
      class="article article--grid"
    >
      <div>
        <p class="p--large">Home</p>
        <p class="p--accent">/həʊm/</p>
      </div>
      <p class="p--narrowest">
        The place where one lives permanently, especially as a member of a
        family or household
      </p>
      <div>
        <p class="p--large">Upgrade</p>
        <p class="p--accent">/ʌp'ɡreɪd/</p>
      </div>
      <p class="p--narrowest">
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

<style scoped lang="scss">
.section {
  background-color: rgb(var(--hup-color--whitesmoke));
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  min-height: 37.5rem;
  padding: 2rem;
  padding-top: 3.875rem;
  overflow: hidden;
  gap: 2.5rem;
  position: relative;

  * {
    z-index: 1;
  }

  &::before {
    content: '';
    background-color: rgba(var(--hup-color--white), 0.35);
    border-radius: 9999rem;
    height: 60rem;
    inset: -6rem auto;
    position: absolute;
    width: 60rem;
  }
  &::after {
    content: '';
    background-color: rgba(var(--hup-color--white), 0.25);
    border-radius: 9999rem;
    height: 80rem;
    inset: -14rem auto;
    position: absolute;
    width: 80rem;
  }
}

.article {
  max-width: 50rem;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  
  p {
    font-size: 1.25rem;
    white-space: preline;
  }

  .p--large {
    font-size: 1.875rem;

    @media screen and (max-width: 480px) {
      font-size: 1.4rem;
    }
  }
  .p--narrow {
    max-width: 26em;
  }
  .p--narrowest {
    max-width: 20em;
  }
  .p--accent {
    color: rgb(var(--hup-color--green));
  }

  &--grid {
    align-items: start;
    // align-self: start;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    // margin-left: 10vw;
    text-align: left;
  }
}

.cards {
  display: flex;
  gap: 2rem;
  .card {
    border: 3px solid black;
    border-radius: 9999rem;
    height: 10rem;
    width: 10rem;
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;

    &--1 {
      &[data-variation="1"] {
        background-image: url('@Assets/about_figure_1_2.png');
      }
      &[data-variation="2"] {
        background-image: url('@Assets/about_figure_1_1.png');
      }
      &[data-variation="3"] {
        background-image: url('@Assets/about_figure_2_3.png');
      }
      &[data-variation="4"] {
        background-image: url('@Assets/logo.svg?url');
        background-size: 50%;
        background-position: center;
      }
    }
    &--2 {
      &[data-variation="1"] {
        background-image: url('@Assets/about_figure_2_2.png');
      }
      &[data-variation="2"] {
        background-image: url('@Assets/about_figure_2_1.png');
      }
      &[data-variation="3"] {
        display: none;
      }
      &[data-variation="4"] {
        display: none;
      }
    }
  }
}
</style>
