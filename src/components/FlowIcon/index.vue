<!--
 *@author: yckj0881
 *@date: 2019-10-08 18:05:05
 *@version: v0.0.1
 *@description: 流程图片组件
-->
<template>
  <div class="flow-img">
    <template v-if="type == 1">
      <img src="../../assets/images/transport/flow-1.png"
           alt="">
    </template>
    <template v-else-if="type == 2">
      <img src="../../assets/images/transport/flow-2.png"
           alt="">
    </template>
    <template v-else-if="type == 3">
      <img src="../../assets/images/transport/flow-3.png"
           alt="">
    </template>
    <template v-else-if="type == 4">
      <img src="../../assets/images/transport/flow-4.png"
           alt="">
    </template>
    <template v-else-if="type == 5">
      <img src="../../assets/images/transport/flow-5.png"
           alt="">
    </template>
    <template v-else-if="type == 6">
      <img src="../../assets/images/transport/flow-6.png"
           alt="">
    </template>
    <template v-else-if="type == 8">
      <img src="../../assets/images/transport/flow-8.png"
           alt="">
    </template>
    <template v-else-if="type == 9">
      <img src="../../assets/images/transport/flow-9.jpg"
           alt="">
    </template>
    <template v-else>
      <img src="../../assets/images/transport/flow-7.png"
           alt="">
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.flow-img {
  width: 45px;
  height: 45px;
  img {
    width: 100%;
  }
}
</style>
