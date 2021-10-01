<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluToast'
}
</script>
<style lang="scss" scoped>
$font-size:14px;
$toast-height: 40px;
$toast-bg:rgba(0,0,0,0.75);
.toast {
  font-size: $font-size;
  height: $toast-height;
  line-height: 1.8;
  position: fixed;
  top: 0;
  color: #eeeeee;
  left: 50%;
  transition: transLateX(-50%);
  display: flex;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
  padding: 0 16px;
}
</style>