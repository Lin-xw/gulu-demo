<template>
  <div>
    <br>
    <h2>预览</h2>
    <div class="popover-wrapper">
      <g-popover position="bottom">
        <template slot="content">
          popover 中的内容
        </template>
        <g-button>下方显示内容</g-button>
      </g-popover>
      <g-popover>
        <template slot="content">
          popover 中的内容
        </template>
        <g-button>点击显示</g-button>
      </g-popover>
      <g-popover trigger="hover">
        <template slot="content">
          popover 中的内容
        </template>
        <g-button>hover 显示内容</g-button>
      </g-popover>
    </div>
    <br>
    <h2>使用方法</h2>
    <pre><code>{{ content }}</code></pre>
    <br>
    <h2>选项</h2>
    <blockquote><p>Popover 组件支两个选项： position 用于设置显示位置； trigger 用于设置出发事件</p></blockquote>
    <h4 id="_1-position"><a href="#_1-position" class="header-anchor">#</a> 1. position</h4>
    <p><span style="color:#3eaf7c;background-color:#F8F8F8;"> position </span> 默认为 <span
        style="color:#3eaf7c;background-color:#F8F8F8;"> top </span>，可选择的参数为
      <span style="color:#3eaf7c;background-color:#F8F8F8;"> top </span>,<span
          style="color:#3eaf7c;background-color:#F8F8F8;"> left </span>,<span
          style="color:#3eaf7c;background-color:#F8F8F8;"> right </span>,<span
          style="color:#3eaf7c;background-color:#F8F8F8;"> bottom </span>,分别设置 popover 显示的方位。</p> <h4 id="_2-trigger"><a
      href="#_2-trigger" class="header-anchor">#</a> 2. trigger</h4>
    <p><span style="color:#3eaf7c;background-color:#F8F8F8;"> trigger </span> 默认为<span
        style="color:#3eaf7c;background-color:#F8F8F8;"> click </span>,用于设置触发 popover 显示的事件。 除此之外还支持<span
        style="color:#3eaf7c;background-color:#F8F8F8;"> hover </span>。</p>
  </div>
</template>
<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'

export default {
  components: {
    'g-popover': Popover,
    'g-button': Button,
  },
  data() {
    return {
      content: `
<template>
  <div class="popover-wrapper">
    <g-popover position="bottom">
      <template slot="content">
        popover 中的内容
      </template>
      <g-button>下方显示内容</g-button>
    </g-popover>
    <g-popover>
      <template slot="content">
        popover 中的内容
      </template>
      <g-button>点击显示</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <g-button>hover 显示内容</g-button>
    </g-popover>
  </div>
</template>
      `
    }
  }
}
</script>