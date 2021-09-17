//引入vue
//全局button组件
import Vue from "vue";
import Button from './button'
import Icon from './icon'
import ButtonGroup from  './button-group'
//声明
Vue.component('g-button',Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data:{
        loading1: false,
        loading2: false,
        loading3: false,
    }
})