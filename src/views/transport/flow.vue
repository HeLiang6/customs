<!--
 *@author: yckj0881
 *@date: 2019-10-06 19:43:10
 *@version: v0.0.1
 *@description: 二三期货运--集装箱全流程
-->
<template>
  <div class="pop-dialog transport-flow">
    <header class="pop-dialog-header">
      <div class="title">
        <img src="../../assets/images/transport/i-jizuhangxiang.png"
             alt="">
        <input type="text"
               v-model="container"
               class="search-ipt">
        <span>集装箱全流程</span>
        <div class="search-btn">
          <a href="javascript:;"
             class="search">搜索</a>
        </div>
      </div>
      <div class="buttons">
        <a href="javascript:;"
           class="take-btn">立即监管</a>
        <a :href="historyUrl"
           class="take-btn">历史记录</a>
        <el-button icon="el-icon-caret-right"
                   circle
                   @click="handleVideoPlay"></el-button>
        <!-- 弹框关闭按钮-->
        <!-- <a href="javascript:;"
           class="pop-dialog-close"></a> -->
      </div>
    </header>
    <main class="pop-dialog-main">
      <aside class="flow-block"
             style="margin-right:73px;">
        <h2>摘要信息</h2>
        <div class="flow-list">
          <div class="flow-item"
               v-for="(item,index) in flowStatus"
               :key="index">
            <flow-icon :type="item.status"></flow-icon>
            <div class="flow-message">
              <p class="msg">最新状态：{{item.message}}</p>
              <p class="time">{{item.time}}</p>
            </div>
          </div>
        </div>
      </aside>
      <section class="flow-block">
        <h2>全流程</h2>
        <div class="flow-section">
          <div class="flow-imported">
            <p class="title">进口环节</p>
            <light-timeline class="timeline"
                            :data="importedTimeline"></light-timeline>
          </div>
          <!-- <div class="flow-exit">
            <p class="title">出口环节</p>
            <light-timeline class="timeline"
                            :data="exportTimeline"></light-timeline>
          </div> -->
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import LightTimeline from '@/components/TimeLine'
import FlowIcon from '@/components/FlowIcon'
export default {
  data () {
    return {
      container: this.$route.query.container || 'xxxx',
      historyUrl: location.origin + '/#/container/identify',
      exportTimeline: [{
        tag: '货物抵运'
      }, {
        tag: '报关申报'
      }, {
        tag: '报关放行'
      }, {
        tag: '转船完成'
      }, {
        tag: '准许离港'
      }, {
        tag: '船舶离港'
      }],
      importedTimeline: [{
        tag: '船舶抵港',
        children: [{
          icon: require('../../assets/images/transport/flow-5.png'),
          content: '船舶抵港',
          time: '2019-10-19 10:44:04'
        }]
      }, {
        tag: '准许卸货',
        children: [{
          icon: require('../../assets/images/transport/flow-5.png'),
          content: '货物卸船',
          time: '2019-10-19 11:52:34'
        }]
      }, {
        tag: '卸船完成',
        children: [{
          icon: require('../../assets/images/transport/flow-5.png'),
          content: '卸船入场',
          time: '2019-10-19 12:11:26'
        }]
      }, {
        tag: '报关申报',
        children: [{
          icon: require('../../assets/images/transport/flow-6.png'),
          content: '调柜进场',
          time: '2019-10-21 08:53:04'
        }]
      }, {
        tag: '报关放行',
        children: [{
          icon: require('../../assets/images/transport/flow-6.png'),
          content: '查验完成',
          time: '2019-10-23 11:24:21'
        }]
      }],
      flowStatus: [{
        status: 1,
        message: '',
        time: ''
      }, {
        status: 2,
        message: '',
        time: ''
      }, {
        status: 3,
        message: '',
        time: ''
      }, {
        status: 4,
        message: '',
        time: ''
      }, {
        status: 5,
        message: '卸船入场',
        time: '2019-10-19 12:11:26'
      }, {
        status: 6,
        message: '查验完成',
        time: '2019-10-23 11:24:21'
      }, {
        status: 7,
        message: '',
        time: ''
      }, {
        status: 9,
        message: '',
        time: ''
      }
      ]
    }
  },
  components: {
    LightTimeline,
    FlowIcon
  },
  created () {
  },
  methods: {
    handleVideoPlay () {
      wpfclient.PlayRecord(180910030549060060, '2019-11-08 12:00:00', '2019-11-08 12:05:00', '录像播放');
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  .search-ipt {
    width: 150px;
    height: 32px;
    background: -webkit-linear-gradient(top, #04244c 23%, #04244c 100%);
    color: #ffffff;
    text-align: center;
    padding-left: 5px;
    font-size: 20px;
    border: 1px solid rgba(20, 211, 255, 1);
    margin-right: 10px;
    border-radius: 3px;
  }
}
.buttons {
  display: flex;
  align-items: center;
  .take-btn {
    display: inline-block;
    width: 169px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid rgba(20, 211, 255, 1);
    color: #ffffff;
    margin-right: 45px;
    text-align: center;
    line-height: 40px;
  }
}
.search-btn {
  display: inline-block;
  margin-left: 20px;
  font-size: 16px;
  .search {
    width: 85px;
    height: 32px;
    float: left;
    border: 1px solid #14d3ff;
    color: #ffffff;
    line-height: 32px;
    text-align: center;
    border-radius: 3px;
  }
}
.pop-dialog-main {
  display: flex;
  align-items: flex-start;
  .flow-block {
    .flow-list {
      .flow-item {
        width: 331px;
        height: 103px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #ffffff;
        background: url("~assets/images/transport/flow-block.png") center
          no-repeat;
        background-size: cover;
        padding-left: 15px;
        box-sizing: border-box;
        .flow-message {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          width: 192px;
          margin-left: 14px;
          .msg {
            font-size: 19px;
            line-height: 27px;
            margin-bottom: 5px;
          }
          .time {
            font-size: 17px;
            line-height: 24px;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }
  }
  .flow-section {
    display: flex;
    .title {
      font-size: 24px;
      font-weight: 600;
      color: rgba(255, 190, 32, 1);
      line-height: 33px;
      margin-bottom: 34px;
      text-align: center;
    }
    .flow-imported {
      margin-right: 200px;
    }
  }
  h2 {
    width: 276px;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    box-sizing: border-box;
    background: linear-gradient(right, #04244c 23%, #2c63c3 100%);
    font-size: 18px;
    color: #ffffff;
    font-weight: 200;
    margin-bottom: 23px;
  }
}
</style>
