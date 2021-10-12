---
title: 快速上手
---

# 快速上手

## 引入必要资源
<pre><code>{{ `import {Button} from "init-ui-demo";
import "init-ui-demo/dist/index.css"; `}}</code></pre>
## 注册组件
<pre><code>{{ `export default {
  name: "ComponentName",
  components: {
    "i-button": Button,
  },
}`}}</code></pre>

### 即可使用