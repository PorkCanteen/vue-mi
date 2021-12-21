# m-popup-dialog

This is a customizable popup-dialog component based on Vue.js

#### Instructions

1. install
   `npm i m-popup-dialog`
2. import

```js
import Popup from 'm-popup-dialog'
import 'm-popup-dialog/style/popup.css'
```

3. use

```html
<popup title="add message" :btn="1" :showModule="showModule" submitBtn="submit" cancelBtn="cancel" @cancel="showModule = false" @submit="submit" themeColor="#ff6600">
  <template v-slot:body>
    <div>......</div>
  </template>
</popup>
```

```js
import Popup from '@/components/module/popup.vue'
export default {
  name: 'xxx',
  components: {
    Popup,
  },
  data() {
    return {
      showModule: false,
    }
  },
  method: {
    submit() {
      // event...
    },
  },
}
```

#### Demo

![demo](https://img-blog.csdnimg.cn/ea519c2998014dd5b58878627cbb3edc.gif#pic_center)

##### Code

```html
<template>
  <transition name="slide">
    <div class="popup" :class="transition" v-show="showModule">
      <!-- mask -->
      <div class="mask" v-if="mask"></div>
      <!-- dialog -->
      <div class="p-dialog" :style="{ '--theme-color': themeColor }">
        <!-- 1. header -->
        <div class="p-header">
          <h4>{{ title }}</h4>
          <a href="javascript:;" class="iconfont icon-cuocha_kuai" @click="$emit('cancel')"></a>
        </div>
        <!-- 2. content(slot) -->
        <div class="p-body">
          <slot name="body">content</slot>
        </div>
        <!-- 3. footer(buttons) -->
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
      // 1. size：  small  middle  large  form
      size: {
        type: String,
        default: 'form',
      },
      // 2. title
      title: {
        type: String,
        default: 'warning',
      },
      // 3. button-type： 1 submit 2 cancel 3 submit&cancel
      btn: {
        type: Number,
        default: 3,
      },
      // 4. button-content
      submitBtn: {
        type: String,
        default: 'submit',
      },
      cancelBtn: {
        type: String,
        default: 'cancel',
      },
      // 5. show-mask
      mask: {
        type: Boolean,
        default: true,
      },
      // 6. transition：top  fade
      transition: {
        type: String,
        default: 'top',
      },
      // 7. theme-color
      themeColor: {
        type: String,
        default: '#cc6699',
      },
      showModule: Boolean,
    },
  }
</script>

<style lang="scss" scoped>
  .popup {
    z-index: 11;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    .mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000000;
      opacity: 0.5;
    }
    .p-dialog {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 660px;
      background-color: #fff;
      border-radius: 3px;
      overflow: hidden;
      .p-header {
        height: 60px;
        background-color: var(--theme-color);
        line-height: 60px;
        padding: 0 25px;
        font-size: 16px;
        color: #fff;
        a {
          display: inline-block;
          position: absolute;
          right: 30px;
          top: 0px;
          color: #fff;
          font-size: 20px;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.4);
          }
        }
      }
      .p-body {
        padding: 42px 40px 54px;
        font-size: #fff;
      }
      .p-footer {
        height: 72px;
        line-height: 72px;
        text-align: center;
        background-color: #f5f5f5;
      }
    }
  }
  .btn {
    display: inline-block;
    width: 110px;
    line-height: 30px;
    text-align: center;
    background-color: var(--theme-color);
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .btn-cancel {
    background-color: #999999;
  }
  .top {
    &.slide-enter-active {
      top: 0;
    }
    &.slide-leave-to {
      top: -100%;
    }
    &.slide-enter {
      top: -100%;
    }
  }
  .fade {
    &.slide-enter-active {
      opacity: 1;
    }
    &.slide-leave-to {
      opacity: 0;
    }
    &.slide-enter {
      opacity: 0;
    }
  }
</style>
```
