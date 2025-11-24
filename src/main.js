import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const pinia = createPinia()
const app = createApp(App);
app.use(pinia)
app.use(router);

app.mount('#app');
