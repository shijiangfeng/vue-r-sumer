// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css' //让每个浏览器css都初始化 保持一样
import ElementUI from 'element-ui'; //饿了么
import 'element-ui/lib/theme-chalk/index.css'; //饿了么css样式
import './assets/reset.scss' //

Vue.use(ElementUI); //vue使用element ui

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
