<!--
 *@author: yckj0881
 *@date: 2019-10-09 11:48:17
 *@version: v0.0.1
 *@description: 带popover的table业务组件
-->
<template>
  <div>
    <section>
      <div class="container-query">
        <ct-tabs :data="tabs" size="small" @change="handTabChange"></ct-tabs>
        <el-form
          :inline="true"
          :model="queryForm"
          :class="{'top-form':type=='right'}"
          class="demo-form-inline"
        >
          <el-form-item v-if="type=='left'">
            <el-input v-model="queryForm.containerNo" style="width:185px;" placeholder="集装箱号"></el-input>
          </el-form-item>
          <el-form-item v-if="type=='right'">
            <!-- 车牌输入 -->
            <el-input
              v-model="queryForm.plateNum"
              style="width:185px;"
              placeholder="车牌号"
              ref="SearchVal"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="queryForm.date"
              type="daterange"
              range-separator="-"
              style="width:230px;"
              value-format="yyyy-MM-dd"
              @change="handleDateChange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <!-- 查询按钮 -->
            <el-button type="primary" @click="queryHistoryRecord" class="btn-inquire">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="tableData"
        v-loading="tableloading"
        height="724"
        border
        @row-click="handleTableRowClick"
        style="width: 100%"
      >
        <template v-if="type=='left'">
          <el-table-column prop="containerNo" label="集装箱号"></el-table-column>
          <el-table-column prop="entryId" label="报关单号"></el-table-column>
        </template>
        <template v-else>
          <el-table-column prop="plateNum" label="车牌号" v-if="tabIndex === 0"></el-table-column>
          <el-table-column prop="plateNum" label="船舶号" v-else></el-table-column>
        </template>
        <el-table-column prop="captureDate" label="时间"></el-table-column>
        <el-table-column prop="osd" label="摄像头名称">
          <template slot-scope="scope">
            <span @click="handleViewPop(scope.row)" class="osd">{{scope.row.osd}}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="osd"
                         label="图片">
          <template slot-scope="scope">
            <el-button size="mini"
                       @click="handleViewPop(scope.row)">预览</el-button>
          </template>
        </el-table-column>-->
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        :total="totalPage"
      ></el-pagination>
    </section>
    <div
      class="container-popover"
      :class="{'right':type=='right'}"
      :style="{'top':popoverTop+'px'}"
      v-show="popoverVisible"
    >
      <div class="popover-content">
        <!-- <h2>TODO</h2> -->
        <div class="popover-block">
          <!-- <div class="popover-lines">
            <div class="popover-line">箱型：9800</div>
            <div class="popover-line">尺寸：40</div>
            <div class="popover-line">卸货港：HK003</div>
            <div class="popover-line">卸货港：CNNSA</div>
            <div class="popover-line">报关单号：1500057988854</div>
            <div class="popover-line">船舶代码：EMTY</div>
            <div class="popover-line">当前位置：HA堆场</div>
          </div>-->
          <div class="popover-image">
            <img :src="rowData.imageUrl" alt v-if="tabIndex === 0" />
            <img src="../../assets/images/img/1.jpg" alt v-else />
          </div>
        </div>
      </div>
      <div class="close-btn" @click="popoverVisible=false"></div>
    </div>
  </div>
</template>

<script>
import ctTabs from "@/components/Tabs";
export default {
  data() {
    return {
      tabIndex: 0,
      information: [],
      tableloading: false,
      tableData: [],
      plateTabelData: [], // 缓存车牌查询结果
      shipTabelData: [
        {
          plateNum: "方舟2",
          captureDate: "2019-10-19 10:32:04",
          osd: "1032广州南沙关南沙港二期十号泊位云2",
          imageUrl: "../../assets/images/img/1.jpg",
          deviceId: "0"
        },
        {
          plateNum: "达飞狮子座",
          captureDate: "2019-10-29 10:22:09",
          osd: "1033广州南沙关南沙港二期十号泊位云7",
          imageUrl: "../../assets/images/img/1.jpg",
          deviceId: "1"
        },
        {
          plateNum: "海丰博多",
          captureDate: "2019-10-29 10:47:09",
          osd: "1032广州南沙关南沙港二期十号泊位云5",
          imageUrl: "../../assets/images/img/1.jpg",
          deviceId: "2"
        },
        {
          plateNum: "中海土星",
          captureDate: "2019-10-29 10:17:09",
          osd: "1033广州南沙关南沙港二期十号泊位云9",
          imageUrl: "../../assets/images/img/1.jpg",
          deviceId: "3"
        },
        {
          plateNum: "中远科伦坡",
          captureDate: "2019-10-30 10:37:09",
          osd: "1031广州南沙关南沙港二期十号泊位云12",
          imageUrl: "../../assets/images/img/1.jpg",
          deviceId: "4"
        }
      ],
      rowData: "",
      totalPage: 0,
      queryForm: {
        date: "",
        plateNum: "",
        rowsOfPage: 20,
        currentPage: 1,
        containerNo: "",
        startDate: "",
        endDate: ""
      },
      popoverVisible: false,
      popoverTop: 100
    };
  },
  mounted() {
    this.queryHistoryRecord();
  },
  components: {
    ctTabs
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "left"
    },
    serviceName: {
      type: String,
      default: "queryContainer"
    }
  },
  watch: {
    loading(val) {
      this.tableloading = val;
    }
  },
  methods: {
    queryHistoryRecord() {
      this.popoverVisible = false;
      this.tableloading = true;
      let query = {
        rowsOfPage: this.queryForm.rowsOfPage,
        currentPage: this.queryForm.currentPage,
        startDate: this.queryForm.startDate,
        endDate: this.queryForm.endDate
      };
      if (this.serviceName == "queryContainer") {
        query.containerNo = this.queryForm.containerNo;
      } else {
        query.plateNum = this.queryForm.plateNum;
      }
      this.service[this.serviceName](query)
        .then(res => {
          this.tableloading = false;
          if (res.code === "00000000") {
            this.plateTabelData = res.data.list;
            this.tableData = res.data.list;
            this.totalPage = res.data.total;
            this.queryForm.date = ["2019-10-01", "2019-10-31"];
            this.queryForm.containerNo = "TGHU9658290";
            this.queryForm.startDate = "2019-10-01";
            this.queryForm.endDate = "2019-10-31";
            console.log(this.queryForm);
          }
        })
        .catch(e => {
          console.error(e);
          this.tableloading = false;
        });
    },
    handleViewPop(data) {
      // 图片id
      wpfclient.PlayChannel(data.deviceId);
    },
    handleDateChange(val) {
      this.queryForm.startDate = val[0];
      this.queryForm.endDate = val[1];
    },
    handleTableRowClick(row) {
      this.popoverVisible = true;
      if (event.pageY > 540) {
        this.popoverTop = event.pageY - 430;
      } else {
        this.popoverTop = event.pageY;
      }
      this.rowData = row;
    },
    handleCurrentChange(page) {
      this.queryForm.currentPage = page;
      this.queryHistoryRecord();
    },
    handTabChange(index) {
      this.tabIndex = index;
      if (index === 0) {
        this.tableData = this.plateTabelData;
      } else {
        this.tableData = this.shipTabelData;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container-query {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
  .el-form-item {
    margin-bottom: 15px;
    margin-right: 0;
  }
}

.top-form {
  position: absolute;
  bottom: 40px;
  right: 0;
}

.container-popover {
  width: 800px;
  height: 600px;
  background: rgba(0, 62, 108, 0.9);
  border: none;
  padding: 35px;
  box-sizing: border-box;
  color: #f2f3f2;
  position: absolute;
  left: 30%;
  transform: translateX(-60%);
  display: flex;
  align-items: center;
  top: 100px;
  &.right {
    left: 80%;
  }
  .close-btn {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    &:after {
      content: "\2716";
      font-size: 24px;
      font-weight: 100;
      color: #f2f3f2;
    }
  }

  .popover-content {
    width: 100%;
    h2 {
      font-size: 36px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 42px;
      margin-bottom: 30px;
    }
    .popover-block {
      width: 100%;
      display: flex;
      align-items: center;
      .popover-image {
        width: 100%;
        display: flex;
        align-items: center;
        img {
          display: block;
          margin: 0 auto;
          max-width: 740px;
          max-height: 550px;
          min-height: 400px;
        }
      }
    }
    .popover-line {
      margin-bottom: 15px;
    }
  }
}
.osd {
  text-decoration: underline;
  cursor: pointer;
  color: #409eff;
}
</style>
