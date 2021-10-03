<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'GuluTabsBody',
  inject://注入
      ['eventBus'],
  created() {
  }
}
</script>
<style>

</style>