import Toast from './toast'

let currentToast

export default {
  install(Vue, options) {
    //当用户调用toast的时候，会创建个toast
    Vue.prototype.$toast = function (message, toastOptions) {
      //如果当前有一个toast，就先把当前给close，没有就直接创建
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        onClose:()=>{
          //如果关闭了
          currentToast = null
        }
      }) //新建-提取函数,es6语法
    }
  }
}

/* helpers */
function createToast ({Vue, message, propsData,onClose}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close',onClose)//监听，如果toast被close就调用onClose
  document.body.appendChild(toast.$el)
  return toast
}