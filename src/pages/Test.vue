<template>
  <div class="test">
    <!-- <city-select></city-select> -->
    <button @click="showModule = !showModule">显示弹框</button>
    <popup :showModule="showModule" @cancel="close"></popup>
  </div>
</template>

<script>
// import CitySelect from '../../packages/index.js'
// import '../../packages/style/city-select.css'
// import Popup from '@/components/module/popup.vue'
import Popup from 'm-popup-dialog'
import 'm-popup-dialog/style/popup.css'
export default {
  name: 'test',
  components: {
    // CitySelect,
    Popup,
  },
  data() {
    return {
      showModule: false,
    }
  },
  methods: {
    close() {
      this.showModule = false
    },
  },
}
</script>

<style>
button {
  position: absolute;
  font-size: 20px;
  padding: 10px;
  background-color: rgb(233, 79, 79);
  color: #fff;
  border: none;
  border-radius: 5px;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  transition: all 0.3s;
}
button:hover {
  opacity: 0.8;
}
</style>
