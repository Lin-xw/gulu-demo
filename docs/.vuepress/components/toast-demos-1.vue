<template>
  <div style="padding-top: 16px;">
    <h2>预览</h2>
    <p>
      <code>this.$toast</code>
    </p>

    <div>
      <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
      <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
    </div>

    <h2>使用方法</h2>
    <p>想要使用 Toast 组件，首先需要引入该组件,然后使用 Vue 官方文档中插件的使用方法使用该插件。
      代码</p>
    <pre><code>{{content}}</code></pre>
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
          <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
          <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
          <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>

          import plugin from '../../../src/plugin'
          import GButton from '../../../src/button'
          import Vue from 'vue'
          Vue.use(plugin)
          export default {
          components: {GButton}
          }
      `.replace(/^ {8}/gm, '').trim()
    }
  }
}
</script>