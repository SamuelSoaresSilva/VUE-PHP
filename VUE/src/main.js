import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/GlobalCssOverlay.css'
import '@/assets/GlobalBackgroundGIf.css'


const app = createApp(App)

app.use(router)

app.mount('#app')
