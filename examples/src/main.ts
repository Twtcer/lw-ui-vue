import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElePlus from 'element-plus'
import 'element-plus/dist/index.css'
import LwUiVue from '@lw8/lw-ui-vue'

// const env = import.meta.env
// console.log(env)
const app = createApp(App)
app
  .use(ElePlus)
  .use(LwUiVue)
  .mount('#app')
