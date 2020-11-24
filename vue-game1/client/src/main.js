import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// Import Assets
import './assets/style/main.css';

// Import Elements
import BaseButton from './components/global/BaseButton';
import BaseArray from './components/global/BaseArray';

// Create The App
const app = createApp(App);

// Use Routes
app.use(router);

// Use Elements
app.component('base-button', BaseButton);
app.component('base-array', BaseArray);

// App Mounted
app.mount('#app');
