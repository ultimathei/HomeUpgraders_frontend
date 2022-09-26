<template>
  <div :style="{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    }">
    <router-view name="main"/>
  </div>
</template>

<script setup lang="ts">
  // import { onMounted, reactive } from 'vue'
  // fetch the config json
  // set css variables based on config json
  // const config = {
  //   colors: {
  //     primary: '#6DA0A6',
  //     secondary: '#D99B66',
  //     black: '#2c2a27',
  //     white: '#D9D9D9',
  //   },
  // }

  // const state = reactive({
  //   initialising: true,
  //   rootStyles: {},
  // })

  // onMounted(() => {
  //   state.rootStyles = {
  //     '--hu-color--primary': config.colors.primary,
  //     '--hu-color--secondary': config.colors.secondary,
  //     '--hu-color--black': config.colors.black,
  //     '--hu-color--white': config.colors.white,
  //   }
  // })
</script>
