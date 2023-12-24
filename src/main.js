import './assets/style/main.css';
import {store} from './store';
import { createRouter, createWebHistory } from 'vue-router';

import { createApp } from 'vue';
import App from './App.vue';

import FormModalWindow from './components/FormModalWindow.vue';
import NoneWindow from './components/NoneWindow.vue';

const app = createApp(App);

export const router = createRouter({
  history: createWebHistory(),
  routes: [{
    name: 'Home',
    path: '/',
    component: NoneWindow
  }, {
    name: 'Modal',
    path: '/form',
    component: FormModalWindow
  }],
});
app.use(store);

app.use(router);

app.mount('#app');