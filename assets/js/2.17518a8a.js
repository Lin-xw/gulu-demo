(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{169:function(t,e,a){},170:function(t,e,a){},171:function(t,e,a){},172:function(t,e,a){},173:function(t,e,a){},174:function(t,e,a){},204:function(t,e,a){"use strict";a(169)},205:function(t,e,a){"use strict";a(170)},206:function(t,e,a){"use strict";a(171)},207:function(t,e,a){"use strict";a(172)},208:function(t,e,a){"use strict";a(173)},209:function(t,e,a){"use strict";a(174)},224:function(t,e,a){"use strict";a.r(e);a(40),a(14),a(25);var r={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},n=(a(204),a(1)),o=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"6c6c35f4",null).exports,s=(a(205),Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"6c564000",null).exports),c={name:"GuluSider"},l=(a(206),Object(n.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"64d29396",null).exports),i=(a(207),Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"906923cc",null).exports),u={name:"GuluSider",data:function(){return{visible:!0}},methods:{enter:function(t,e){e()},leave:function(t,e){e()}}},p=(a(208),{components:{"g-layout":o,"g-header":s,"g-content":l,"g-footer":i,"g-sider":Object(n.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[this.visible?e("div",{staticClass:"sider"},[this._t("default")],2):this._e()])}),[],!1,null,"722e7196",null).exports},data:function(){return{content:'\n    <template>\n      <div class="wrapper">\n      <g-layout class="layout-wrapper">\n        <g-header class="header-wrapper"> header </g-header>\n        <g-layout class="layout-wrapper">\n          <g-sider class="sider-wrapper"> sider </g-sider>\n          <g-content class="content-wrapper"> content </g-content>\n        </g-layout>\n        <g-footer class="footer-wrapper"> footer </g-footer>\n      </g-layout>\n      <br>\n      <g-layout class="layout-wrapper">\n        <g-header class="header-wrapper"> header </g-header>\n        <g-content class="content-wrapper"> content </g-content>\n        <g-footer class="footer-wrapper"> footer </g-footer>\n      </g-layout>\n      <br>\n      <g-layout class="layout-wrapper">\n        <g-header class="header-wrapper"> header </g-header>\n        <g-layout class="layout-wrapper">\n          <g-sider class="sider-wrapper"> sider </g-sider>\n          <g-layout class="layout-wrapper">\n            <g-content class="content-wrapper"> content </g-content>\n            <g-footer class="footer-wrapper"> footer </g-footer>\n          </g-layout>\n        </g-layout>\n      </g-layout>\n      </div>\n    </template>\n    <style lang="scss" scoped>\n    $background: #3eaf7c;\n    .wrapper {\n    > .layout-wrapper { height: 30vh;\n      > .header-wrapper { height: 3em; background: $background; }\n      > .content-wrapper { background: lighten($background, 40%); }\n      > .layout-wrapper { height: 6em;\n        > .sider-wrapper { width: 3em; background: lighten($background, 15%); }\n        > .content-wrapper { background: lighten($background, 40%); }\n          > .layout-wrapper{\n          > .content-wrapper{ background: lighten($background, 40%); }\n          > .footer-wrapper { background: $background; }\n          }\n        }\n      > .footer-wrapper { background: $background; }\n      }\n    }\n    </style>\n  '}}}),d=(a(209),Object(n.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t._v(" "),a("h2",[t._v("预览")]),t._v(" "),a("div",{staticClass:"wrapper"},[a("g-layout",{staticClass:"layout-wrapper"},[a("g-header",{staticClass:"header-wrapper"},[t._v(" header")]),t._v(" "),a("g-layout",{staticClass:"layout-wrapper"},[a("g-sider",{staticClass:"sider-wrapper"},[t._v(" sider")]),t._v(" "),a("g-content",{staticClass:"content-wrapper"},[t._v(" content")])],1),t._v(" "),a("g-footer",{staticClass:"footer-wrapper"},[t._v(" footer")])],1),t._v(" "),a("br"),t._v(" "),a("g-layout",{staticClass:"layout-wrapper"},[a("g-header",{staticClass:"header-wrapper"},[t._v(" header")]),t._v(" "),a("g-content",{staticClass:"content-wrapper"},[t._v(" content")]),t._v(" "),a("g-footer",{staticClass:"footer-wrapper"},[t._v(" footer")])],1),t._v(" "),a("br"),t._v(" "),a("g-layout",{staticClass:"layout-wrapper"},[a("g-header",{staticClass:"header-wrapper"},[t._v(" header")]),t._v(" "),a("g-layout",{staticClass:"layout-wrapper"},[a("g-sider",{staticClass:"sider-wrapper"},[t._v(" sider")]),t._v(" "),a("g-layout",{staticClass:"layout-wrapper"},[a("g-content",{staticClass:"content-wrapper"},[t._v(" content")]),t._v(" "),a("g-footer",{staticClass:"footer-wrapper"},[t._v(" footer")])],1)],1)],1)],1),t._v(" "),a("br"),t._v(" "),a("h2",[t._v("使用方法")]),t._v(" "),a("pre",[a("code",[t._v(t._s(t.content))])]),t._v(" "),a("br"),t._v(" "),a("h2",[t._v("选项")]),t._v(" "),a("p",[t._v("提供基础布局，样式自定义。")]),t._v(" "),a("h2",[t._v("组件陈述")]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[a("span",{staticStyle:{color:"#3eaf7c","background-color":"#F8F8F8"}},[t._v(" g-layout ")]),t._v("：布局容器，其下可嵌套 Header Sider Content\n      Footer 或 Layout 本身，可以放在任何父容器中。")])]),t._v(" "),a("li",[a("p",[a("span",{staticStyle:{color:"#3eaf7c","background-color":"#F8F8F8"}},[t._v(" g-header ")]),t._v("：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。")])]),t._v(" "),a("li",[a("p",[a("span",{staticStyle:{color:"#3eaf7c","background-color":"#F8F8F8"}},[t._v(" g-sider ")]),t._v("：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。")])]),t._v(" "),a("li",[a("p",[a("span",{staticStyle:{color:"#3eaf7c","background-color":"#F8F8F8"}},[t._v(" g-content ")]),t._v("：内容部分，其下可嵌套任何元素，只能放在 Layout 中。")])]),t._v(" "),a("li",[a("p",[a("span",{staticStyle:{color:"#3eaf7c","background-color":"#F8F8F8"}},[t._v(" g-footer ")]),t._v("：底部布局，其下可嵌套任何元素，只能放在 Layout 中。")])])])}],!1,null,"53b3197c",null));e.default=d.exports}}]);