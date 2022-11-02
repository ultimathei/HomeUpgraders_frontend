<script lang="ts" setup>
  import Dot from './Dot.vue'
  import scenarios from './Dot.scenarios'
</script>

<template>
  <Story
    title="Atoms/Button/Dot"
    :layout="{ type: 'grid' }"
  >
    <Variant
      v-for="scenario of scenarios"
      :key="scenario.label"
      :title="scenario.label"
      :init-state="() => scenario"
    >
      <template #controls="{state}">
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
        <Dot
          :label="state.label"
          :active="state.active"
          :disabled="state.disabled"
          @click="state.active = !state.active"
        />
      </template>
    </Variant>
  </Story>
</template>
