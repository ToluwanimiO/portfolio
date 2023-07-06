import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Element Plus
import ElementPlus from 'element-plus'
import './assets/element-main.scss'

const app = createApp(App)

app.use(ElementPlus);
app.use(createPinia())
app.use(router)

app.mount('#app')
