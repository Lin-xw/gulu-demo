<template>
  <div>
    <br>
    <h2 id="预览"><a href="#预览" class="header-anchor">#</a>预览</h2>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button icon="settings" icon-position="right">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <br>
    <h2 id="使用方法"><a href="#使用方法" class="header-anchor">#</a>使用方法</h2>
    <pre><code>{{ content1 }}</code></pre>
    <h2 id="选项"><a href="#选项" class="header-anchor">#</a>选项</h2>
    <h3 id="单个按钮"><a href="#单个按钮" class="header-anchor">#</a>单个按钮</h3>
    <h4 id="_1-图标"><a href="#_1-图标" class="header-anchor">#</a> 1. 图标</h4>
    <p>通过设置<span style="color:#3eaf7c;background-color:#F8F8F8;"> icon </span>属性在 Button 内嵌入一个 Icon。<br>
      通过设置<span style="color:#3eaf7c;background-color:#F8F8F8;"> iconPosition </span>属性改变 Icon 在 Button 中的位置，仅支持“左，右”两个位置。</p>
    <h4 id="_2-加载中状态"><a href="#_2-加载中状态" class="header-anchor">#</a> 2. 加载中状态</h4>
    <p>通过设置<span style="color:#3eaf7c;background-color:#F8F8F8;"> loading </span>属性，可以让按钮处于加载中状态。</p> <h4 id="_3-不可用状态">
    <a href="#_3-不可用状态" class="header-anchor">#</a> 3. 不可用状态</h4>
    <p>通过设置<span style="color:#3eaf7c;background-color:#F8F8F8;"> disabled </span>属性，可将按钮设置为不可用状态。</p>
    <h3 id="按钮组"><a href="#按钮组" class="header-anchor">#</a> 按钮组</h3>
    <p>预览
      <!----></p>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button icon="settings">默认按钮</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <p>代码</p>
    <pre><code>{{ content2 }}</code></pre>
  </div>
</template>
<script>
import Button from '../../../src/button'
import ButtonGroup from "../../../src/button-group";
export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup,
  },
  data() {
    return {
      content1: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button icon="settings" icon-position="right">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
      `.replace(/\t| +/g, '').trim()
      ,
      content2: `
        <g-button-group>
        <g-button icon="left">上一页</g-button>
        <g-button icon="settings">默认按钮</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
      `.replace(/\t| +/g, '').trim()
    }
  }
}
</script>