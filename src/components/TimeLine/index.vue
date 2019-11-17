<!--
 *@author: yckj0881
 *@date: 2019-10-06 20:38:46
 *@version: v0.0.1
 *@description: 时间轴插件
-->
<template>
  <div class="light-timeline">
    <ul class="line-container">
      <li class="line-item"
          v-for="(item,index) in data"
          :key="index">
        <div class="item-tag">{{item.tag}}</div>
        <div class="item-symbol"></div>
        <div class="line-children">
          <div class="line-child"
               v-for="(child,sindex) in item.children"
               :key="sindex">
            <img :src="child.icon"
                 alt="">
            <p class="content">{{child.content}}</p>
            <p class="time">{{child.time}}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'light-timeline',
  props: {
    data: {
      required: true,
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.line-container {
  color: #ffffff;
  position: relative;
  border-left: 3px solid #ffffff;
  margin-left: 120px;
  .line-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    margin: 50px 0;
    .item-tag {
      width: 120px;
      text-align: center;
      font-size: 22px;
      font-weight: 500;
      color: rgba(0, 163, 252, 1);
      line-height: 30px;
      position: absolute;
      left: -135px;
    }
    .item-symbol {
      width: 17px;
      height: 17px;
      background: rgba(255, 255, 255, 1);
      border: 5px solid rgba(0, 163, 252, 1);
      border-radius: 50%;
      position: relative;
      right: 17px;
    }
    .line-children {
      position: relative;
      top: 40px;
      left: -40px;
      .line-child {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        img {
          width: 22px;
          height: 22px;
          margin-right: 10px;
        }
        .content {
          width: 120px;
          font-size: 19px;
          margin-right: 12px;
        }
        .time {
          color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
}
</style>
