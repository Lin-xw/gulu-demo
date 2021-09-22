# 轱辘 - 一个Vue UI 组件

[![Build Status](https://app.travis-ci.com/Lin-xw/gulu-demo.svg?branch=master)](https://app.travis-ci.com/Lin-xw/gulu-demo)

##介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用

##开始使用
1.添加 css 样式
  使用本框架前，请在css中开启 border-box
  ```
  *{margin: 0; padding: 0;box-sizing: border-box} 
  ```
  IE 8 及以上浏览器都支持此样式。
  ```
  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    }
  IE 15 及以上浏览器都支持此样式。
  ```
2.安装 gulu
  ```
  npm i --save gulu
  ```
3.引入 gulu
  ```
  import {Button, ButtonGroup, Icon} from 'frank-test-1-1'
  import 'frank-test-1-1/dist/index.css'

  export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
  ```

##文档

##提问

##变更记录

##联系方式

##贡献代码