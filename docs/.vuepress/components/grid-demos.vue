<template>
  <div>
    <p>24格栅系统。</p>
    <br>
    <h2>预览</h2>
    <div class="grid-wrapper">
      <g-row class="row">
        <g-col class="item" span="24">col-24</g-col>
      </g-row>
      <g-row>
        <g-col class="item" span="12">col-12</g-col>
        <g-col class="item" span="12">col-12</g-col>
      </g-row>
      <g-row class="row">
        <g-col class="item" span="8">col-8</g-col>
        <g-col class="item" span="8">col-8</g-col>
        <g-col class="item" span="8">col-8</g-col>
      </g-row>
      <g-row class="row">
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
      </g-row>
    </div>
    <br>
    <h2>使用方法</h2>
    <pre><code>{{ content1 }}</code></pre>
    <br>
    <h2>选项</h2>
    <h3>Row选项</h3>
    <h4> 1. gutter (排水沟; 槽)</h4>
    <p>通过给设置<span style="color:#3eaf7c;background-color:#F8F8F8;"> gutter </span>属性，可以让栅格有间隔。
      <br/>单位为<span style="color:#3eaf7c;background-color:#F8F8F8;"> px </span>。</p>
    <h5>预览</h5>
    <div class="gutter-wrapper">
      <g-row gutter="30">
        <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
      </g-row>
      <g-row gutter="20">
        <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
      </g-row>
      <g-row gutter="10">
        <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
      </g-row>
    </div>
    <h5>代码</h5>
    <pre><code>{{ content2 }}</code></pre>
    <br>
    <h3>Col选项</h3>
    <blockquote><p>Col 的选项有 span, offset 以及响应式相关的 ipad, narrowPc, pc, widePc 这些。</p></blockquote>
    <h4> 1. span</h4>
    <p>栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置 span 属性来实现。 例如：三个等宽的列可以使用 <code>&lt;i-col
      span=&quot;8&quot;&gt;列&lt;/i-col&gt;</code> 来创建其中一个，其余两个再复制两份。</p>
    <br>
    <h4> 2. offset</h4>
    <p>使用 offset 属性,可以将列向右侧偏。<br>例如，<code>offset=&quot;4&quot;</code> 将元素向右侧偏移了 4 个列（column）的宽度。</p>
    <h5>预览</h5>
    <div class="offset-wrapper">
      <g-row class="row">
        <g-col class="item" span="8"><span>col-8</span></g-col>
        <g-col class="item" span="8"><span>col-8</span></g-col>
        <g-col class="item" span="4" offset="4"><span>col-4</span></g-col>
      </g-row>
      <g-row class="row">
        <g-col class="item" span="8"><span>col-8</span></g-col>
        <g-col class="item" span="5" offset="3"><span>col-5</span></g-col>
        <g-col class="item" span="4" offset="4"><span>col-4</span></g-col>
      </g-row>
      <g-row class="row">
        <g-col class="item" span="2" offset="6"><span>col-2</span></g-col>
        <g-col class="item" span="5" offset="3"><span>col-5</span></g-col>
        <g-col class="item" span="4" offset="4"><span>col-4</span></g-col>
      </g-row>
    </div>
    <h5>代码</h5>
    <pre><code>{{ content3 }}</code></pre>
    <h4 id="_3-响应式"><a href="#_3-响应式" class="header-anchor">#</a> 3. 响应式</h4>
    <p>支持ipad 、narrowPc 、pc 、widePc 四种设备的响应式设置。<br>
      若不给 Col 这四个属性，默认为 手机端响应，span值为24。<br>
      <span style="color:red;">注意： 若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。</span><br></p>
    <h5>预览</h5>
    <div><img src="http://hellow2887.gitee.io/init-ui/assets/img/response.a3165582.gif" alt=""></div>
    <h5>代码</h5>
    <pre><code>{{ content4 }}</code></pre>
  </div>
</template>
<script>
import Col from '../../../src/col'
import Row from '../../../src/row'

export default {
  components: {
    'g-col': Col,
    'g-row': Row,
  },
  data() {
    return {
      content1: `
  <template>
    <div class="grid-wrapper">
      <g-row class="row">
        <g-col class="item" span="24">col-24</g-col>
      </g-row>
      <g-row>
        <g-col class="item" span="12">col-12</g-col>
        <g-col class="item" span="12">col-12</g-col>
      </g-row>
      <g-row class="row">
        <g-col class="item" span="8">col-8</g-col>
        <g-col class="item" span="8">col-8</g-col>
        <g-col class="item" span="8">col-8</g-col>
      </g-row>
      <g-row class="row">
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
        <g-col class="item" span="6">col-6</g-col>
      </g-row>
    </div>
  </template>
  <style lang="scss" scoped>
    *{
      box-sizing: border-box;
     }
    .grid-wrapper{
      $background: #3eaf7c;
      > .row{
        padding: .2em;
        > .item {
        text-align: center; color: white;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: black; }
        }
      }
    }
  </style>

      `,
      content2: `
    <template>
      <div class="gutter-wrapper">
      <g-row gutter="30">
        <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-30;</span></g-col>
      </g-row>
      <g-row gutter="20">
        <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-20;</span></g-col>
      </g-row>
      <g-row gutter="10">
        <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
        <g-col class="item" span="8"><span> col-8; gutter-10;</span></g-col>
      </g-row>
    </div>
  </template>
  <style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .gutter-wrapper {
    padding-top: 10px;
    .item {
      text-align: center;
      color: white;
      line-height: 1.7;
      > span {
        display: block;
        background: #3eaf7c;
      }
    }
  }
  </style>
      `,
      content3: `
    <template>
      <div class="offset-wrapper">
      <g-row class="row">
        <g-col class="item" span="8"> <span>col-8</span> </g-col>
        <g-col class="item" span="8"> <span>col-8</span> </g-col>
        <g-col class="item" span="4" offset="4"> <span>col-4</span> </g-col>
      </g-row>
      <g-row class="row">
        <g-col class="item" span="8"> <span>col-8</span> </g-col>
        <g-col class="item" span="5" offset="3"> <span>col-5</span> </g-col>
        <g-col class="item" span="4" offset="4"> <span>col-4</span> </g-col>
      </g-row>
      <g-row class="row">
        <g-col class="item" span="2" offset="6"> <span>col-2</span> </g-col>
        <g-col class="item" span="5" offset="3"> <span>col-5</span> </g-col>
        <g-col class="item" span="4" offset="4"> <span>col-4</span> </g-col>
      </g-row>
      </div>
    </template>
    <style lang="scss" scoped>
    $background: #3eaf7c;
    $wrapper-top: 10px;
    $font-color: white;
    * {
      box-sizing: border-box;
    }
    .offset-wrapper { padding-top: $wrapper-top;
      > .row {
        > .item { text-align: center; color: $font-color;line-height: 1.7;
          > span { display: block; background: $background; }
        }
      }
    }
      `,
      content4:`
    <template>
      <div class="response-wrapper">
      <g-row class="row">
      <g-col class="item"
              span="24"
             :ipad="{span:8}"
             :narrow-pc="{span:4}"
             :pc="{span: 2}"
             :wide-pc="{span:1}">col</g-col>
      <g-col class="item"
              span="24"
             :ipad="{span:16}"
             :narrow-pc="{span:20}"
             :pc="{span: 20,offset:2}"
             :wide-pc="{span:21}">col
      </g-col>
      </g-row>
      </div>
    </template>
    <style lang="scss" scoped>
      $background: #3eaf7c;
      $wrapper-top: 10px;
      $font-color: white;
      * { box-sizing: border-box; }
      .response-wrapper { padding-top: $wrapper-top;
        > .row {
          > .item { text-align: center; color: $font-color;
            > span { display: block; background: $background; }
          }
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
$wrapper-top: 10px;
$font-color: white;
* {
  box-sizing: border-box;
}

.grid-wrapper {
  $background: #3eaf7c;

  > .row {
    padding: .2em;
    line-height: 1.7;

    > .item {
      text-align: center;
      color: white;

      &:nth-child(odd) {
        background: $background;
      }

      &:nth-child(even) {
        background: lighten($background, 20%);
        color: white;
      }
    }
  }
}

.gutter-wrapper {
  padding-top: 10px;

  .item {
    text-align: center;
    color: white;
    line-height: 1.7;

    > span {
      display: block;
      background: #3eaf7c;
    }
  }
}

.offset-wrapper {
  padding-top: $wrapper-top;

  > .row {
    > .item {
      text-align: center;
      color: $font-color;
      line-height: 1.7;

      > span {
        display: block;
        background: $background;
      }
    }
  }
}
</style>