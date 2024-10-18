import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import { Lazyload } from 'vant'
import Vant from 'vant'

const app = createApp(App)
app.use(Vant)
app.use(Lazyload)

// app.use(router)

app.mount('#app')
