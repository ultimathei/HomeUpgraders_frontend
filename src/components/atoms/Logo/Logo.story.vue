<script lang="ts" setup>
import Comp from './Logo.vue'
import scenarios from './Logo.scenarios'
</script>

<template>
  <Story
    title="Atoms/Logo"
    :layout="{ type: 'grid', width: 400 }"
  >
    <Variant
      v-for="scenario of scenarios"
      :key="scenario.label"
      :title="scenario.label"
      :init-state="() => scenario"
    >
      <template #controls="{ state }">
        <div>
          <HstCheckbox
            v-model="state.active"
            title="Active"
          />
          <HstCheckbox
            v-model="state.disabled"
            title="Disabled"
          />
          <HstText
            v-model="state.label"
            :title="'Label'"
          />
        </div>
      </template>
      <template #default="{ state }">
        <div
          data-explainer="I am just a wrapper in order to display the component 
          on a dark background. Please ignore me"
          style="background-color: #4d9973; padding: 24px; border-radius: 4px"
        >
          <Comp
            :size="state.size"
            :with-text="state.withText"
          />
        </div>
      </template>
    </Variant>
  </Story>
</template>
