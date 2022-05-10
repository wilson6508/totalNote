/*
  該文件是整個項目的入口文件
*/

// 引入Vue
import Vue from 'vue'

// 引入App組件, 它是所有組件的父組件
import App from './App.vue'

// 關閉Vue的生產提示
Vue.config.productionTip = false

// 創建Vue實例對象vm
new Vue({
  // 將APP組件放入容器
  render: h => h(App),
}).$mount('#app')

// 可以拔掉$mount, 配置el: '#app'

/* 
render(createElement) {
  return createElement('h1', '你好啊');
}
*/

/*
  vue.js是完整版的Vue, 包含核心功能 + 模板解析器.
  vue.runtime.xxx.js為運行版的Vue, 只包含核心功能, 沒有模板解析器.
  所以不能用template配置項, 要用render函數接收到createElement函數去指定具體內容.
*/