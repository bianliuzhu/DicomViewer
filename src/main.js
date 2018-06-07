// 使用“导入”命令加载Vue构建版本
// (仅运行时或独立)已经在webpack.base中设置。配置一个别名。
import Vue from 'vue'
import App from './App'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
