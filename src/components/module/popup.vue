<template>
  <transition name="slide">
    <div class="popup" :class="transition" v-show="showModule">
      <!-- 遮罩层 -->
      <div class="mask" v-if="mask"></div>
      <!-- 弹框 -->
      <div class="p-dialog" :style="{ '--theme-color': themeColor }">
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
    // 1. 弹框大小：包括 小 small 中 middle 大 large 表单 form
    size: {
      type: String,
      default: 'form',
    },
    // 2. 弹框标题
    title: {
      type: String,
      default: 'warning',
    },
    // 3. 按钮类型： 1 确定 2 取消 3 确定&取消
    btn: {
      type: Number,
      default: 3,
    },
    // 4. 按钮内容
    submitBtn: {
      type: String,
      default: 'submit',
    },
    cancelBtn: {
      type: String,
      default: 'cancel',
    },
    // 5. 是否显示遮罩层
    mask: {
      type: Boolean,
      default: true,
    },
    // 6. 选择弹框显示/隐藏的动画效果：top 从上方渐入渐出 fade 淡入淡出
    transition: {
      type: String,
      default: 'top',
    },
    // 7. 设置主题色
    themeColor: {
      type: String,
      default: '#ff6600',
    },
    showModule: Boolean,
  },
}
</script>

<style lang="scss" scoped></style>
