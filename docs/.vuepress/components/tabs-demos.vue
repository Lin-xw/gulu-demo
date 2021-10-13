<template>
  <div>
    <br>
    <h2>预览</h2>
    <div class="tabs-wrapper">
      <g-tabs :selected.sync="selectedTab">
        <g-tabs-head>
          <g-tabs-item name='tab1'>
            <g-icon name="settings"></g-icon>
            Tab1
          </g-tabs-item>
          <g-tabs-item name='tab2'>Tab2</g-tabs-item>
          <g-tabs-item name='tab3'>Tab3</g-tabs-item>
          <g-tabs-item name='tab4' disabled>Tab4</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name='tab1'>内容1</g-tabs-pane>
          <g-tabs-pane name='tab2'>内容2</g-tabs-pane>
          <g-tabs-pane name='tab3'>内容3</g-tabs-pane>
          <g-tabs-pane name='tab4'>内容4</g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    </div>
    <br>
    <h2>使用方法</h2>
    <p>此组件的 i-tabs i-tabs-item i-tabs-pane 必须有一一对应的 name。</p>
    <pre><code>{{ content }}</code></pre>
    <br>
    <h2>选项</h2>
    <ol>
      <li>默认高亮状态
        i-tabs 需要设置<span style="color:#3eaf7c;background-color:#F8F8F8;"> selected </span>属性来确定默认标签。<br>
        你可以这样：<code>:selected.sync=&quot;selectedTab&quot;</code>,其中 <span
            style="color:#3eaf7c;background-color:#F8F8F8;">selectedTab </span>是你需要传递的默认值。<br>
        并且该标签的子组件应该是 i-tabs-head 和 i-tabs-body ，否则你会得到一个警告。
      </li>
      <li>disabled 状态
        <span style="color:#3eaf7c;background-color:#F8F8F8;">disabled</span> 属性用于 i-tabs-item 标签，可以设置该标签的不可用状态。
      </li>
    </ol>
  </div>
</template>
<script>
import Icon from "../../../src/icon";
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
import TabsBody from '../../../src/tabs-body'

export default {
  components: {
    'g-tabs': Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane,
    'g-tabs-body': TabsBody,
    'g-icon': Icon
  },
  data() {
    return {
      selectedTab: 'tab1',
      content: `
<template>
  <div class="tabs-wrapper">
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name='tab1'>
          <g-icon icon-name="settings"></g-icon>
          Tab1
        </g-tabs-item>
        <g-tabs-item name='tab2'>Tab2</g-tabs-item>
        <g-tabs-item name='tab3'>Tab3</g-tabs-item>
        <g-tabs-item name='tab4'>Tab4</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name='tab1'>内容1</g-tabs-pane>
        <g-tabs-pane name='tab2'>内容2</g-tabs-pane>
        <g-tabs-pane name='tab3'>内容3</g-tabs-pane>
        <g-tabs-pane name='tab4'>内容4</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

  export default {
    data() { return { selectedTab: 'tab1' } }
  }
      `
    }
  }
}
</script>