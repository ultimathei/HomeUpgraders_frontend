import { createApp } from 'vue'
import './styles/reset.css'
import App from './App.vue'
import router from './router/router'

createApp(App)
  .use(router)
  .mount('#app')
