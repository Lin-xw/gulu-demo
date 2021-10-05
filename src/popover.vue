<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  data() {
    //默认看不见
    return {visible: false}
  },
  methods: {
    positionContent() {
      //位置内容
      //让popover显示在外面
      document.body.appendChild(this.$refs.contentWrapper)
      //获取元素的位置，使popover出现在按钮的上方
      let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e) {
      //监听点击事件
      //如果包含了e.target，就什么都不做，否则执行关闭
      if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) {return}
      if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.contentWrapper.contains(e.target))
      ) {return}
      this.close()
    },
    open() {
      //弹出内容重新定位，监听Document
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click', this.onClickDocument)
      })
    },
    close() {
      //关闭
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      //如果点击的是按钮或者按钮里面的东西，那么就切换显示
      //同时如果发现是显示的，就调用open
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-radius: 4px;
$border-color: #333;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  padding: .5em 1em;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  transform: translateY(-100%);
  border-color: $border-color;
  border-radius: $border-radius;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;

  &::before, &::after{
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
  }

  &::before{;
    top: 100%;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>