<script lang="ts" setup>
  import HUButton from './HUButton.vue'
  import { hstEvent } from 'histoire/client'
  import scenarios from './HUButton.scenarios'
</script>

<template>
  <Story title="Atoms/HUButton" :layout="{ type: 'grid', width: 200 }">
    <Variant title="default">
      <HUButton
        :label="scenarios[0].label"
        :disabled="scenarios[0].disabled"
        @click="hstEvent('Click', $event)"
      />
    </Variant>
    <Variant title="disabled">
      <HUButton
        :label="scenarios[1].label"
        :disabled="scenarios[1].disabled"
        @click="hstEvent('Click', $event)"
      />
    </Variant>
  </Story>
</template>
