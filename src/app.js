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

//引入chai
import chai from 'chai'
const expect = chai.expect
//单元测试
//断言
//动态生成按钮  通过JS把button写到页面里
{   //对象没办法实例化一个东西，所以需要改成函数
    const Constructor = Vue.extend(Button)
    //就可以构造vm , vm就是Button的实例，把它放在页面里它就是button
    const vm = new Constructor({
        //通过propsData属性就可以传icon
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount()
    //button的元素里面去找use元素
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    //主观期待xlink:href = #i-settings
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
//如果设置和检查的结果都满足预期，那么代码就没问题
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}

{
    //创建div
    const div = document.createElement('div')
    //把div放到body里面
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    //把div挂在页面里面
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    //如果成功了，就把button元素、对象删掉
    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}

{
    //mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    vm.$on('click',function (){
        console.log(1)
    })
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}