<template>
  <div>
    <br>
    <h2>预览</h2>
    <div>
      <g-collapse :selected.sync="selectedTab">
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
    </div>
    <br>
    <h2>使用方法</h2>
    <pre><code>{{ content1 }}</code></pre>
    <br>
    <h2>选项</h2>
    <ol>
      <li>双向绑定
        <br>Collapse 组件的双向绑定与 Vue 官方的类似，支持
        <span style="color:#3eaf7c;background-color:#F8F8F8;"> .sync </span>
        修饰符。
        <br>
        <code>&lt;i-collapse :selected.sync=&quot;selected&quot;&gt;</code>
      </li>
      <li>必选参数
        <br>
        Collapse 组件必须接受两个参数：
        <span style="color:#3eaf7c;background-color:#F8F8F8;">title</span>
        用于显示折叠面板的标题。
        <span style="color:#3eaf7c;background-color:#F8F8F8;">name</span>
        用于表示选中的 item。
        <br>
        <code>&lt;i-collapse-item title=&quot;标题1&quot; name=&quot;1&quot;&gt;1&lt;/i-collapse-item&gt;</code>
      </li>
      <li>手风琴效果
        <br>
        Collapse 组件还支持手风琴效果，就是只能同时显示一个面板内容,可以通过设置
        <span style="color:#3eaf7c;background-color:#F8F8F8;"> single </span>
        属性来更改，默认是
        <span style="color:#3eaf7c;background-color:#F8F8F8;"> false </span>。
        <br>
      </li>
    </ol>
    <h4>预览</h4>
    <div>
      <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
    </div>
    <h4>代码</h4>
    <pre><code>{{ content2 }}</code></pre>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'

export default {
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem
  },
  data() {
    return {
      selectedTab: ['1'],
      content1:
          `
    <template>
      <div>
      <i-collapse :selected.sync="selected">
      <i-collapse-item title="标题1" name="1">1</i-collapse-item>
      <i-collapse-item title="标题2" name="2">2</i-collapse-item>
      <i-collapse-item title="标题3" name="3">3</i-collapse-item>
      </i-collapse>
      </div>
    </template>
    import Collapse from '../../../src/Collapse'
    import CollapseItem from '../../../src/Collapse-item'
    export default {
      components:{ 'i-collapse': Collapse, 'i-collapse-item': CollapseItem, },
      data(){ return{ selected : ['1'] } },
    }
      `,
      content2: `
    <template>
      <div>
      <i-collapse :selected.sync="selected" single>
      <i-collapse-item title="标题1" name="1">1</i-collapse-item>
      <i-collapse-item title="标题2" name="2">2</i-collapse-item>
      <i-collapse-item title="标题3" name="3">3</i-collapse-item>
      </i-collapse>
      </div>
    </template>
    `
    }
  }
}
</script>
<style>

</style>