<script lang="ts" setup>
import Comp from './Section.vue'
import scenarios from './Section.scenarios'
</script>

<template>
  <Story
    title="Atoms/Heading/Section"
    :layout="{ type: 'grid', width: 400 }"
  >
    <Variant
      v-for="scenario of scenarios"
      :key="scenario.text"
      :title="scenario.text"
      :init-state="() => scenario"
    >
      <template #controls="{ state }">
        <div>
          <HstText
            v-model="state.text"
            :title="'Text'"
          />
          <HstCheckbox
            v-model="state.light"
            title="Light"
          />
        </div>
      </template>
      <template #default="{ state }">
        <div
          data-explainer="I am just a wrapper in order to display the component 
          on a darker background. Please ignore me"
          :style="{
            backgroundColor: state.light ? '#4D9973' : 'transparent',
            padding: '24px',
            borderRadius: '4px',
          }"
        >
          <Comp
            :text="state.text"
            :data-light="state.light || undefined"
          />
        </div>
      </template>
    </Variant>
  </Story>
</template>
