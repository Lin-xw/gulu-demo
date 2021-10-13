<template>
  <div style="padding-top: 16px;">
    <h2>设置关闭按钮</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
    <h2>选项</h2>
    <p>
      <code>z-index</code><br>
      此选项用于设定 Toast 组件在当前堆叠上下文中的堆叠层级。默认为20。(这是因为再使用 vuepress 编写文档时发现值为 20 才有效。)
      若你的项目不可见 Toast 组件，尝试传入一个 <code>z-index</code> 试试。
    </p>
    <p>
      <code>autoClose</code><br>
      此选项可以设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭。
    </p>
    <p>
      <code>closeButton</code><br>
      Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 属性。用于设定按钮的文本与回调。
    </p>
    <p>
      <code>enableHtml</code><br>
      Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它, <code>enableHtml:true</code> 。 开启后就可以在 Toast 内容区域写 HTML 语法。
    </p>
    <p>
      <code>position</code><br>
      可以设定 Toast 弹出的位置 ，支持 top, middle, bottom 三个值。
    </p>
  </div>
</template>
<style>
.gulu-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from '../../../src/plugin'
import GButton from '../../../src/button'
import Vue from 'vue'
Vue.use(plugin)
export default {
  components: {GButton},
  data () {
    return {
      content: `
          <style>
            .gulu-toast {
              z-index: 30;
            }
          </style>
          <div>
            <g-button @click="onClickButton">上方弹出</g-button>
          </div>
          methods: {
            onClickButton () {
              this.$toast('你知道我在等你吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
    }
  },
  methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  },
}
</script>