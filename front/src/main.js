import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import "./assets/styles/style.css"
import router from "@/routers.js";

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
