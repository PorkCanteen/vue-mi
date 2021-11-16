<template>
  <transition name="slide">
    <div class="popup" v-show="showModule">
      <!-- 遮罩层 -->
      <div class="mask"></div>
      <!-- 弹框 -->
      <div class="p-dialog">
        <div class="p-header">
          <h4>{{ title }}</h4>
          <a href="javascript:;" class="iconfont icon-cuocha_kuai" @click="$emit('cancel')"></a>
        </div>
        <div class="p-body">
          <slot name="body"></slot>
        </div>
        <div class="p-footer">
          <a href="javascript:;" class="btn" v-if="btn === 1" @click="$emit('submit')">{{ submitBtn }}</a>
          <a href="javascript:;" class="btn" v-if="btn === 2" @click="$emit('cancel')">{{ cancelBtn }}</a>
          <div class="btn-group" v-if="btn === 3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{ submitBtn }}</a>
            <a href="javascript:;" class="btn btn-cancel" @click="$emit('cancel')">{{ cancelBtn }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'popup',
  props: {
    // 1. 定义弹框大小：包括 小 small 中 middle 大 large 表单 form
    size: {
      type: String,
      default: 'form',
    },
    // 2. 定义弹框标题
    title: String,
    // 3. 定义按钮类型： 1 确定 2 取消 3 确定&取消
    btn: Number,
    // 4. 定义按钮内容
    submitBtn: {
      type: String,
      default: '确定',
    },
    cancelBtn: {
      type: String,
      default: '取消',
    },
    showModule: Boolean,
  },
}
</script>

<style lang="scss" scoped></style>
