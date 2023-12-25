import './assets/style/main.css';
import {store} from './store';
import { createRouter, createWebHistory } from 'vue-router';

import { createApp } from 'vue';
import App from './App.vue';

import FormModalWindow from './components/FormModalWindow.vue';
import NoneWindow from './components/NoneWindow.vue';

const app = createApp(App);

app.use(store);

export const router = createRouter({
  history: createWebHistory(),
  routes: [{
    name: 'Home',
    path: '/web-exam/dist/',
    component: NoneWindow
  }, {
    name: 'Modal',
    path: '/web-exam/dist/form',
    component: FormModalWindow
  }],
});
router.afterEach((to) => {
  if (to.name === 'Modal') {
    setTimeout( () => {
      store.dispatch('openModal', ['modal_form_window', 'modal_form_wrapper'])
    }, 500);
  }
});

app.use(router);

app.mount('#app');