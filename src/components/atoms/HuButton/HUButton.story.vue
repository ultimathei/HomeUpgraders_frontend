<script lang="ts" setup>
  import HUButton from './HUButton.vue'
  import { hstEvent } from 'histoire/client'
  import scenarios from './HUButton.scenarios'
</script>

<template>
  <Story title="Atoms/HUButton" :layout="{ type: 'grid', width: 200 }">
    <template #controls="{state}">
      <div style="padding: 0.5rem;">
        Label: <input type="text" v-model="state.label" />
        Disabled: <input type="checkbox" v-model="state.disabled" />
        Primary: <input type="checkbox" v-model="state.primary" />
      </div>
    </template>
    <Variant
      v-for="scenario of scenarios"
      :title="scenario.label"
      :init-state="() => scenario"
    >
      <template #default="{ state }">
        <HUButton
          :label="state.label"
          :disabled="state.disabled"
          :primary="state.primary"
          @click="hstEvent('Click', $event)"
        />
      </template>
    </Variant>
  </Story>
</template>
