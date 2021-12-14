<template>
  <div class="city-select">
    <div>
      <!-- 选择省份时：更新市、区数据 -->
      <select
        v-model="province"
        @change="
          updateCity()
          updateDistrict()
          pushData()
        "
      >
        <option v-for="(item, index) in list" :key="index">{{ item.name }}</option>
      </select>
      <select
        v-model="city"
        @change="
          updateDistrict()
          pushData()
        "
      >
        <option v-for="(item, index) in cityList" :key="index">{{ item.name }}</option>
      </select>
      <select v-model="district" @change="pushData">
        <option v-for="(item, index) in DistrictList" :key="index">{{ item.name }}</option>
      </select>
    </div>
  </div>
</template>

<script>
// 导入城市数据
// 数据格式要求：[{name: '四川省', children: [...]}]
import list from '../../../public/data/cities-code.json'
export default {
  name: 'city-select',
  data() {
    return {
      list, // 总数据
      province: '北京', // 省
      cityList: [], // 市数据,
      city: '', // 市
      DistrictList: [], // 区数据
      district: '', // 区
    }
  },
  methods: {
    // 根据省的选择更新市数据
    updateCity() {
      this.list.forEach((item) => {
        if (item.name === this.province) {
          this.cityList = item.children
        }
      })
      this.city = this.cityList[0].name
    },
    // 根据市的选择更新区数据
    updateDistrict() {
      this.cityList.forEach((item) => {
        if (item.name === this.city) {
          this.DistrictList = item.children
        }
      })
      this.district = this.DistrictList ? this.DistrictList[0].name : ''
    },
    // 数据变化时将数据传递给调用本组件的父组件 (在省市区数据变化时均触发数据推送)
    pushData() {
      this.$emit('updateData', this.province, this.city, this.district)
    },
  },
  mounted() {
    // this.updateCity()
  },
}
</script>

<style lang="scss" scoped>
// 默认样式
.city-select {
  select {
    height: 40px;
    width: 175px;
    line-height: 40px;
    border: 1px solid #e5e5e5;
    padding: 0 10px;
    margin-right: 15px;
  }
}
/* 注意：
引用该组件并设置样式时需添加 /deep/ 进行样式穿透。例如：
.city-select /deep/ select {
  ......
} */
</style>
