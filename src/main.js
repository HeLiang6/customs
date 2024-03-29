import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/styles/element-reset.scss'

import '@/icons/index'
import service from '@/service'

Vue.config.productionTip = false
Vue.prototype.service = service
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(transition => {
  if (transition.name) {
    document.title = transition.name
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
