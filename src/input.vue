<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
      @change="$emit('change',$event)"
      @input="$emit('input',$event)"
      @focus="$emit('focus',$event)"
      @blur="$emit('blur',$event)"
    >
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </div>
</template>
<script>
import Icon from "./icon";

export default {
  components: {Icon},
  name: 'GuluInput',
  props: {
    value: {
      type: String,
    },
    disabled: {//
      type: Boolean,
      default: false
    },
    readonly: {//只读
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    }
  }
}
</script>
<style lang="scss" scoped>
//添加 scoped 是重复名不会冲突，但是会有个缺点
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
//变量属性
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(last-child) { margin-right: .5em;}
  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }

    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed; //无法点击}
    }
  }
  &.error {
    > input {
      border-color: $red
    }
    .icon-error {
      fill: $red;
    }
    .errorMessage {
      color: red;
    }
  }
  }
</style>