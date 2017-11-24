// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Top from './components/top'
import router from './router'

import $ from 'jquery'
import tools from '@/assets/lib/tools.js';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

//要注册一个全局组件，你可以使用 Vue.component(tagName, options)
//Vue.component('my-component', {
// 选项
//})

Vue.prototype.tools = tools;
//this.tools.add(2);