<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
    :class="{[`position-${position}`]:true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  props: {
    position: {//添加气泡四个方向选择
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger:{//触发click hover
      type:String,
      default:'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value)>= 0;
      }
    },
  },
  data() {
    //默认看不见
    return {visible: false}
  },
  mounted() {
    //支持click和hover两种方式
    if (this.trigger === 'click'){
      this.$refs.popover.addEventListener('click',this.onClick)
    }else {
      this.$refs.popover.addEventListener('mouseenter',this.open)
      this.$refs.popover.addEventListener('mouseleave',this.close)
    }
  },
  computed:{
    //支持click和hover两种方式
    openEvent(){
      if (this.trigger === 'click'){
        return 'click'
      } else {
        return 'mouseenter'
      }
    },
    closeEvent(){
      if (this.trigger === 'click'){
        return 'click'
      } else {
        return 'mouseleave'
      }
    }
},

  methods: {
    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs
      //位置内容
      //让popover显示在外面
      document.body.appendChild(this.$refs.contentWrapper)
      //获取元素的位置，使popover出现在按钮的4个方向
      const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
      const {height: height2} = contentWrapper.getBoundingClientRect()
      let positions = {
        top: {top: top + window.scrollY, left: left + window.scrollX,},
        bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        },
      }
      contentWrapper.style.left = positions[this.position].left + 'px'
      contentWrapper.style.top = positions[this.position].top + 'px'
    },
    onClickDocument(e) {
      //监听点击事件
      //如果包含了e.target，就什么都不做，否则执行关闭
      if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) {
        return
      }
      if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.contentWrapper.contains(e.target))
      ) {
        return
      }
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

<style scoped lang="scss">
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  background: white;
  padding: .5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before, &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-bottom: none;
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before, &::after {
      left: 10px;
    }
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right: none;
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before, &::after {
      transform: translateY(-50%);
      top: 50%;
    }
    &::before {
      border-right-color: black;
      border-left: none;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>