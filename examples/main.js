import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.scss'
import demoBlock from './components/demo-block'
import hljs from 'highlight.js'
import 'packages/theme-chalk/src/index.scss'
import Vant from 'vant'
import 'examples/mobile-frame-view/vs-touch-emulator'

// 导入组件库
import packages from '../packages'

for (const key in packages) {
  if (packages.hasOwnProperty(key)) {
    const element = packages[key]
    if (key.toLocaleLowerCase().includes('infinite')) {
      Vue.use(element)
    } else if (key.toLocaleLowerCase().includes('vs')) {
      Vue.use(element)
    };
  }
}

// 使用vant-ui
Vue.use(Vant)
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component('demo-block', demoBlock)
router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
