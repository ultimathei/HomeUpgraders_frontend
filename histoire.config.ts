import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  // setupFile: './src/setup/histoire.setup.ts',
  plugins: [
    HstVue(),
  ],
})
