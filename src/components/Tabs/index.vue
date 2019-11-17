<!--
 *@author: yckj0881
 *@date: 2019-10-08 10:30:01
 *@version: v0.0.1
 *@description: 自定义的Tab页签组件
-->
<template>
  <div class="ct-tags">
    <div class="ct-tag-pane"
         v-for="(item,index) in data"
         :key="index"
         :class="{
           'big':size=='big',
           'small':size=='small',
           'middle':size=='middle',
          'first':index==0,
          'activeF':index==activeIndex && index==0,
          'activeO':index==activeIndex && index!=0}"
         @click="handleTabPaneClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: 0
    }
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    size: {
      type: String,
      default: 'big'
    }
  },
  methods: {
    handleTabPaneClick (index) {
      this.activeIndex = index
      this.$emit('change', index)
    }
  }
}
</script>

<style scoped lang="scss">
.ct-tags {
  display: flex;
  align-items: center;
  .ct-tag-pane {
    background: url("../../assets/images/tag-o.png") center no-repeat;
    background-size: 100% 100%;
    width: 164px;
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 50px;
    box-sizing: border-box;
    margin-left: -25px;
    color: #ffffff;
    cursor: pointer;
    &.small {
      width: 139px;
      height: 35px;
      padding-left: 25px;
    }
    &.first {
      background: url("../../assets/images/tag-f.png") center no-repeat;
      background-size: 100% 100%;
      margin-left: 0;
      padding-left: 25px;
    }
    &.activeF {
      background: url("../../assets/images/tag-f-active.png") center no-repeat;
      background-size: 100% 100%;
    }
    &.activeO {
      background: url("../../assets/images/tag-o-active.png") center no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
