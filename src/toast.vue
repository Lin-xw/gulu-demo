<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>
<script>
//构造组件的选项
export default {
  name: 'GuluToast',
  props: {//参数
    autoClose: {type: Boolean, default: true},
    autoCloseDelay: {type: Number, default: 5},
    closeButton: {
      type: Object,
      default: () => {
        return {text: '关闭', callback: undefined}
      }
    }
  },
  //使用
  mounted() {//默认true，自动关闭
    if (this.autoClose) {
      setTimeout(() => {//5秒钟之后结束
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {//实现关闭
    close() {
      //把元素从body里拿出来
      this.$el.remove()
      this.$destroy()
      //会把绑定的事件取消掉
    },
    onClickClose(){//如果用户点击关闭
      this.close()//把自己先关闭
      //如果有this.closeButton 而且有.callback，而且callback是function就执行内容
      if(this.closeButton && typeof this.closeButton.callback === 'function'){
        this.closeButton.callback()
        //调用用户传的回调
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$font-size: 14px;  $toast-height: 40px;  $toast-bg: rgba(0, 0, 0, 0.75);
.toast {font-size: $font-size;height: $toast-height;line-height: 1.8;
  position: fixed;top: 0;color: #eeeeee;left: 50%;transition: transLateX(-50%);
  display: flex;align-items: center;background: $toast-bg;border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);padding: 0 16px;
}
.close{padding-left: 16px;}
.line{height: 100%;border-left: 1px solid #666;margin-left: 16px;}
</style>