<script lang="ts" setup>
import BurgerMenu from './BurgerMenu.vue'
import scenarios from './BurgerMenu.scenarios'
</script>

<template>
  <Story
    title="Atoms/Button/BurgerMenu"
    :layout="{ type: 'grid' }"
  >
    <Variant
      v-for="scenario of scenarios"
      :key="scenario.label"
      :title="scenario.label"
      :init-state="() => scenario"
    >
      <template #controls="{ state }">
        <div>
          <HstText
            v-model="state.label"
            :title="'Label'"
          />
          <HstCheckbox
            v-model="state.open"
            title="Open"
          />
          <HstCheckbox
            v-model="state.disabled"
            title="Disabled"
          />
        </div>
      </template>
      <template #default="{ state }">
        <div
          data-explainer="I am just a wrapper in order to display the component 
          on a dark background. Please ignore me"
          style="background-color: #4d9973; padding: 24px; border-radius: 4px"
        >
          <BurgerMenu
            :label="state.label"
            :open="state.open"
            :disabled="state.disabled"
            @click="state.open = !state.open"
          />
        </div>
      </template>
    </Variant>
  </Story>
</template>
