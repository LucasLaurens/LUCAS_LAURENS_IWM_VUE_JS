import { createApp } from 'vue'
import App from './App.vue'

import './assets/style/main.css';

import BaseButton from './components/global/BaseButton';

const app = createApp(App);

app.component('base-button', BaseButton);

app.mount('#app');
