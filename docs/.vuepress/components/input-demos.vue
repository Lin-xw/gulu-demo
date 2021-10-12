<template>
  <div>
    <br>
    <h2>预览</h2>
    <g-input class="input-wrapper" value="禁止" disabled></g-input>
    <g-input class="input-wrapper" value="只读" readonly></g-input>
    <g-input class="input-wrapper" value="请输入"></g-input>
    <g-input class="input-wrapper" value="林" error="姓名不能少于两个字"></g-input>
    <br>
    <g-input class="input-wrapper" v-model="value"></g-input>
    <span>value:&nbsp;{{ value }}</span>
    <br>
    <h2>使用方法</h2>
    <pre><code>{{ content1 }}</code></pre>
    <br>
    <h2>选项</h2>
    <blockquote><p>Input 组件的选项有： disabled, readonly, error。 并且支持数据的双向绑定。</p></blockquote>
    <h4>1. disabled</h4>
    <p>表示是否禁用状态，默认为 false，禁用。</p>
    <h4> 2. readonly</h4>
    <p>表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，<span
        style="color:#3eaf7c;background-color:#F8F8F8;">readonly</span> 可以被选中，不能修改。</p>
    <h4> 3. error</h4>
    <p>给 Input 添加 <span style="color:#3eaf7c;background-color:#F8F8F8;">error</span> 属性，会在该 input 右侧显示一个提示图标与文字，用于提示。</p>
    <h4> 4. v-model</h4>
    <h5>预览</h5>
    <g-input class="input-wrapper" v-model="value"></g-input>
    <br>
    <span class="input-wrapper">value:&nbsp;{{ value }}</span>
    <h5>代码</h5>
    <pre><code>{{ content2 }}</code></pre>

  </div>
</template>
<script>
import Input from '../../../src/input'

export default {
  components: {
    'g-input': Input,
  },
  data() {
    return {
      value: '双向绑定',
      content1: `
    <g-input></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
    <g-input error="错误信息"></g-input>
    <br>
    <g-input v-model="value"></g-input>
    <br>
    <span>value:&nbsp;{{value}}</span>
      `,
      content2:`
      <template>
      <div>
        <g-input v-model="value"></g-input> <br>
        value:{{value}}
      </div>
      </template>
        export default {
          data(){
          return{ value:'双向绑定' }
          }
        }
      `
    }
  }
}
</script>
<style lang="scss" scoped>
.input-wrapper {
  padding: 8px;
}
</style>