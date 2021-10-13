import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

import createElement from 'vue'

const h = createElement

new Vue({
  el: '#app',
  data: {
    selectedTab: ['2','1'],
    xxx: 'sports'
  },
  created() {},
  position: 'bottom',
  methods: {
    yyy() {
      console.log('yyy')
    },
    auto() {
      this.$toast('我是 toast 内容', {
        zIndex:30,
        autoClose: 5,
        closeButton: {
          text:'确定',
          callback:()=>{
            console.log('回调的输出')
          }
        },
        enableHTML:true
      })
    },
    top(){
      this.$toast('我是 toast 内容', { position: 'top' })
    },
    middle(){
      this.$toast('我是 toast 内容', { position: 'middle' })
    },
    bottom(){
      this.$toast('我是 toast 内容', { position: 'bottom' })
    },
    showToast(position) {
      this.$toast(`message${parseInt(Math.random() * 100)}`, {
        enableHtml: false,
        position: position,
        closeButton: {
          text: '充值',
          callback: () => {
            console.log('充值成功')
          }
        },
      })
    }
  }
})