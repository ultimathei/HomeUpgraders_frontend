<script lang="ts" setup>
  import HUButton from './HUButton.vue'
  import { hstEvent } from 'histoire/client'
  import scenarios from './HUButton.scenarios'
  import {Type, Size} from './HUButton.types'
</script>

<template>
  <Story
    title="Atoms/HUButton"
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
            v-model="state.disabled"
            title="Disabled"
          />
          <HstText
            v-model="state.label"
            :title="'Label'"
          />
          <HstSelect
            v-model="state.type"
            :title="'Type'"
            :options="Type"
          />
          <HstSelect
            v-model="state.size"
            :title="'Size'"
            :options="Size"
          />
        </div>
      </template>
      <template #default="{ state }">
        <HUButton
          :label="state.label"
          :disabled="state.disabled"
          :type="state.type"
          :size="state.size"
          @click="hstEvent('Click', $event)"
        />
      </template>
    </Variant>
  </Story>
</template>
