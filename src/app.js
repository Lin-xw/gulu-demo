//引入vue
//全局button组件
import Vue from "vue";
import Button from './button'
import Icon from './icon'
//声明
Vue.component('g-button',Button)
Vue.component('g-icon', Icon)
new Vue({
    el: '#app',
})