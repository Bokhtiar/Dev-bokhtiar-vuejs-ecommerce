import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//axios setup
import axios from 'axios'
window.axios = axios
axios.defaults.baseURL = 'http://localhost:4000/api/v1';


const app = createApp(App)

app.use(router)

app.mount('#app')
