<template>
  <div class="gulu-toast" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">
        {{closeButton.text}}
      </span>
    </div>
  </div>
</template>
<script>
//构造组件的选项
export default {
  name: 'GuluToast',
  props: {//参数
    autoClose: {
      type: [Boolean,Number],
      default: 5,
      validator(value){
        return value === false || typeof value === 'number';
      }
    },
    closeButton: {
      type: Object,
      default: () => {
        return {text: '关闭', callback: undefined}
      }
    },
    enableHtml: {//默认关闭,支持html
      type: Boolean,
      default: false
    },
    position: {//实现弹窗位置 上中下
      type: String|Number,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].indexOf(value) >= 0
      }
    },
  },
  //使用
  mounted() {
    this.updateStyles()
    this.execAutoClose()
  },
  //计算属性
  computed: {
    toastClasses() {
      return {[`position-${this.position}`]: true}
    }
  },
  methods: {
    //使用js方法实现竖线分割,解决css的高度问题
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
            `${this.$refs.toast.getBoundingClientRect().height}px`
      })
    },
    //默认true，自动关闭
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {//m秒钟之后结束
          this.close()
        }, this.autoClose * 1000)
      }
    },
    close () {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose() {//如果用户点击关闭
      this.close()//把自己先关闭
      //如果有this.closeButton 而且有.callback，而且callback是function就执行内容
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback()
        //调用用户传的回调
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes slide-up {
  0% {opacity: 0; transform: translateY(100%);}
  100% {opacity: 1;transform: translateY(0%);}
}
@keyframes slide-down {
  0% {opacity: 0; transform: translateY(-100%);}
  100% {opacity: 1;transform: translateY(0%);}
}
@keyframes fade-in {
  0% {opacity: 0; }
  100% {opacity: 1;}
}
.gulu-toast {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  $animation-duration: 300ms;
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down $animation-duration;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up $animation-duration;
    }
  }
  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: fade-in $animation-duration;
    }
  }
}
.toast {
  font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
  display: flex;
  color: white; align-items: center; background: $toast-bg; border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }
}
</style>