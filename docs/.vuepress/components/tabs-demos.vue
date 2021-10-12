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
  <pre><code>{{ content }}</code></pre>
  <br>
  <h2>选项</h2>
</div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
import TabsBody from '../../../src/tabs-body'
export default {
  components:{
    'g-tabs': Tabs,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane,
    'g-tabs-body': TabsBody,
  },
  data(){
    return{
      selectedTab: 'tab1',
      content:`

      `
    }
  }
}
</script>