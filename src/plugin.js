import Toast from './toast'
export default {
    install(Vue, options){//得到两个参数
      Vue.prototype.$toast = function (message){
          //这两句死记硬背//得到实例
          let Constructor = Vue.extend(Toast)
          let toast = new Constructor()
          //给toast传了一个默认的插槽的内容，
          toast.$slots.default = [message]
          toast.$mount()//出现在内存里
          document.body.appendChild(toast.$el)
          //生成toast组件放到body里
      }
    }
}