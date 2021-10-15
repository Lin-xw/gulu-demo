module.exports = {
  base: '/gulu-demo/',
  title: '简木 UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/Lin-xw/gulu-demo' },
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false, // 可选的, 默认值是 true,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 0,    // 可选的, 默认值是 1
        children:[
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
          '/components/collapse'
        ]
      }
    ]
  }
}
