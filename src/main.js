import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PageLoading from './components/PageLoading.vue'

const app = createApp(App)

app.component("PageLoading", PageLoading)

app.use(router)

app.mount('#app')
