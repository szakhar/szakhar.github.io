import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

// Потрібно для того, щоб можна було передати виклик функції з одного компонента
// в будь-який інший і він не повинен бути батьком того компонента який передає
export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')