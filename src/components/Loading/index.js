import Vue from 'vue'
import LoadingComp from './loading.vue'
const Loading = Vue.extend(LoadingComp)
let instance
export default {
  open (options = {}) {
    if (!instance) {
      instance = new Loading().$mount('#loading')
    }
    if (instance.visible) return

    Vue.nextTick(() => {
      instance.visible = true
    })
  },

  close () {
    if (instance) {
      setTimeout(() => {
        instance.visible = false
      }, 500)
    }
  }
}
