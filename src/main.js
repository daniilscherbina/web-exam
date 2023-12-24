import './assets/style/main.css'
import {store} from './store';
import { createRouter } from 'vue-router'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(store)

app.mount('#app')