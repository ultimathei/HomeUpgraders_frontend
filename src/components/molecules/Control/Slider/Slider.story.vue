<script lang="ts" setup>
  import Comp from './Slider.vue'
  import scenarios from './Slider.scenarios'
</script>

<template>
  <Story
    title="Molecules/Control/Slider"
    :layout="{ type: 'grid', width: 500 }"
  >
    <Variant
      v-for="scenario of scenarios"
      :key="`Scenario - ${scenario.size}`"
      :title="`Scenario - ${scenario.size}`"
      :init-state="() => scenario"
    >
      <template #controls="{state}">
        <div>
          <HstNumber
            v-model="state.size"
            title="Size"
          />
          <HstNumber
            v-model="state.active"
            title="Active"
          />
          <HstCheckbox
            v-model="state.disabled"
            title="Disabled"
          />
          <HstText
            v-model="state.label"
            title="Label"
          />
        </div>
      </template>
      <template #default="{ state }">
        <Comp
          :label="state.label"
          :size="state.size"
          :active="state.active"
          :disabled="state.disabled"
          @set-active="(n) => state.active = n"
        />
      </template>
    </Variant>
  </Story>
</template>
