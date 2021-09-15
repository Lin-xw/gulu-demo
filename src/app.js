//引入vue
//全局button组件
import Vue from "vue";
import Button from './button'
//声明
Vue.component('g-button',Button)

new Vue({
    el: '#app',
})