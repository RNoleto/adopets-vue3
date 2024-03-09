import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router';
import axios from 'axios';

const app = createApp(App);

axios.defaults.baseURL = 'http://localhost:8000/api';

app.use(router);

app.mount('#app');
