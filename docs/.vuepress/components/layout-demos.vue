<template>
  <div>
    <br>
    <h2>预览</h2>
    <div class="wrapper">
      <g-layout class="layout-wrapper">
        <g-header class="header-wrapper"> header</g-header>
        <g-layout class="layout-wrapper">
          <g-sider class="sider-wrapper"> sider</g-sider>
          <g-content class="content-wrapper"> content</g-content>
        </g-layout>
        <g-footer class="footer-wrapper"> footer</g-footer>
      </g-layout>
      <br>
      <g-layout class="layout-wrapper">
        <g-header class="header-wrapper"> header</g-header>
        <g-content class="content-wrapper"> content</g-content>
        <g-footer class="footer-wrapper"> footer</g-footer>
      </g-layout>
      <br>
      <g-layout class="layout-wrapper">
        <g-header class="header-wrapper"> header</g-header>
        <g-layout class="layout-wrapper">
          <g-sider class="sider-wrapper"> sider</g-sider>
          <g-layout class="layout-wrapper">
            <g-content class="content-wrapper"> content</g-content>
            <g-footer class="footer-wrapper"> footer</g-footer>
          </g-layout>
        </g-layout>
      </g-layout>
    </div>
    <br>
    <h2>使用方法</h2>
    <pre><code>{{ content }}</code></pre>
    <br>
    <h2>选项</h2>
    <p>提供基础布局，样式自定义。</p>
    <h2>组件陈述</h2>
    <ul>
      <li><p><span style="color:#3eaf7c;background-color:#F8F8F8;"> i-layout </span>：布局容器，其下可嵌套 Header Sider Content
        Footer 或 Layout 本身，可以放在任何父容器中。</p></li>
      <li><p><span style="color:#3eaf7c;background-color:#F8F8F8;"> i-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。</p>
      </li>
      <li><p><span style="color:#3eaf7c;background-color:#F8F8F8;"> i-sider </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。</p>
      </li>
      <li><p><span style="color:#3eaf7c;background-color:#F8F8F8;"> i-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。</p>
      </li>
      <li><p><span style="color:#3eaf7c;background-color:#F8F8F8;"> i-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Layout from '../../../src/layout'
import Header from '../../../src/header'
import Content from '../../../src/content'
import Footer from '../../../src/footer'
import Sider from '../../../src/sider'

export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-footer': Footer,
    'g-sider': Sider
  },
  data() {
    return {
      content: `
    <template>
      <div class="wrapper">
      <g-layout class="layout-wrapper">
        <g-header class="header-wrapper"> header </g-header>
        <g-layout class="layout-wrapper">
          <g-sider class="sider-wrapper"> sider </g-sider>
          <g-content class="content-wrapper"> content </g-content>
        </g-layout>
        <g-footer class="footer-wrapper"> footer </g-footer>
      </g-layout>
      <br>
      <g-layout class="layout-wrapper">
        <g-header class="header-wrapper"> header </g-header>
        <g-content class="content-wrapper"> content </g-content>
        <g-footer class="footer-wrapper"> footer </g-footer>
      </g-layout>
      <br>
      <g-layout class="layout-wrapper">
        <g-header class="header-wrapper"> header </g-header>
        <g-layout class="layout-wrapper">
          <g-sider class="sider-wrapper"> sider </g-sider>
          <g-layout class="layout-wrapper">
            <g-content class="content-wrapper"> content </g-content>
            <g-footer class="footer-wrapper"> footer </g-footer>
          </g-layout>
        </g-layout>
      </g-layout>
      </div>
    </template>
    <style lang="scss" scoped>
    $background: #3eaf7c;
    .wrapper {
    > .layout-wrapper { height: 30vh;
      > .header-wrapper { height: 3em; background: $background; }
      > .content-wrapper { background: lighten($background, 40%); }
      > .layout-wrapper { height: 6em;
        > .sider-wrapper { width: 3em; background: lighten($background, 15%); }
        > .content-wrapper { background: lighten($background, 40%); }
          > .layout-wrapper{
          > .content-wrapper{ background: lighten($background, 40%); }
          > .footer-wrapper { background: $background; }
          }
        }
      > .footer-wrapper { background: $background; }
      }
    }
    </style>
  `
    }
  }
}
</script>
<style lang="scss" scoped>
$background: #3eaf7c;
.wrapper {
  > .layout-wrapper {
    height: 30vh;

    > .header-wrapper {
      min-height: 3em;
      background: $background;
    }

    > .content-wrapper {
      background: lighten($background, 40%);
    }

    > .layout-wrapper {
      height: 6em;

      > .sider-wrapper {
        min-width: 3em;
        background: lighten($background, 15%);
      }

      > .content-wrapper {
        background: lighten($background, 40%);
      }

      > .layout-wrapper {
        > .content-wrapper {
          background: lighten($background, 40%);
        }

        > .footer-wrapper {
          background: $background;
        }
      }
    }

    > .footer-wrapper {
      background: $background;
    }
  }
}
</style>