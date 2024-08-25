import { registerPlugins } from '@/plugins';

import App from './App.vue';
import jQuery from 'jquery';
window.$ = jQuery;
import 'animate.css';
import axios from 'axios';
// import '@/Service/apiService';

const BASE_URL = window.location.protocol === 'https:' ? 'https://cv-api.hwnix.com/api/' : 'http://127.0.0.1:8000/api/';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;

import { createApp } from 'vue';
const app = createApp(App);
registerPlugins(app);

app.mount('#app');
