//引入vue
//全局button组件
import Vue from "vue";
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Sider from './sider'
//声明
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout',Layout)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        message:'hi'
    },
    created() {
    },
    methods:{
        inputChange(e){
          console.log(e.target.value)
        }
    }
})