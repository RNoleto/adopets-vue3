import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.scss'
import App from './App.vue'
import router from './router';
import axios from 'axios';

const app = createApp(App);
const pinia = createPinia();

axios.defaults.baseURL = 'http://localhost:8000/api';

app.use(pinia);
app.use(router);

app.mount('#app');
