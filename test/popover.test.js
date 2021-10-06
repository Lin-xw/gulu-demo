import Row from "../src/row";

const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'
import Col from "../src/col";
import {Button} from "../index";

Vue.component('g-popover', Popover)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('可以设置position.', () => {
    //放入页面
    const div = document.createElement('div')
    document.body.appendChild(div)
    //造css结构
    div.innerHTML = `
      <g-popover position="bottom" ref="a">
        <template slot="content">
            弹出内容
        </template>
        <button >点我</button>
    </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    //构造vm实例
    // console.log(vm.$el.outerHTML);
    // console.log(vm.$refs.popoverWrapper);
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
    })
  })
  it('可以设置 trigger',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    //造css结构
    div.innerHTML = `
      <g-popover trigger="hover" ref="a">
        <template slot="content">
            弹出内容
        </template>
        <button >点我</button>
    </g-popover>
    `
    const vm = new Vue({
      el: div
    })
    let event = new Event('mouseenter');
    vm.$el.dispatchEvent(event)
    //期待存在
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
    })
  })
})