import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Store from 'electron-store'
const settings = new Store()
// const test = settings.get('test')
// console.log(test)

createApp(App).use(store).use(router).mount('#app')
