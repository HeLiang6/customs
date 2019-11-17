<template>
  <div class="ct-box">
    <header class="ct-header">
      <div class="title">特殊物品后续监管</div>
    </header>
    <section class="query-form">
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item>
          <el-date-picker v-model="queryForm.user"
                          placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="创建人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
    <main class="ct-main">
      <el-table :data="tableData"
                border>
        <el-table-column prop="name"
                         label="项目名称">
        </el-table-column>
        <el-table-column prop="createTime"
                         label="创建时间">
        </el-table-column>
        <el-table-column prop="departName"
                         label="部门名称">
        </el-table-column>
        <el-table-column prop="czrName"
                         label="创建人">
        </el-table-column>
        <el-table-column prop="address"
                         label="详情">
          <template slot-scope="scope">
            <img class="detail-img"
                 @click="handleImagePreview(scope.row.imageUrls)"
                 :src="scope.row.imageUrls[0]"
                 alt="">
          </template>
        </el-table-column>
        <el-table-column prop="address"
                         label="操作">
          <template slot-scope="scope">
            <span class="detail-video-btn"
                  @click="handleVideoPreview(scope.row.videoUrls)"><i class="el-icon-video-camera-solid"></i>视频回放</span>
            <span style="margin-left:20px;">|</span>
            <span class="detail-video-btn">
              <i class="el-icon-message-solid"></i>消息</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background
                     layout="prev, pager, next"
                     :page-size="pageInfo.pageSize"
                     @current-change="handlePageChange"
                     :total="totalPage">
      </el-pagination>
    </main>
    <div class="dialog"
         v-show="dialogVisible">
      <div class="layer"></div>
      <div class="content">
        <el-carousel :autoplay="false"
                     class="popover-carousel"
                     height="800px"
                     arrow="always">
          <el-carousel-item v-for="(item,index) in carouselList"
                            :key="index">
            <img :src="item"
                 alt=""
                 v-if="preivewType==1">
            <video controls="controls"
                   :src="item"
                   v-if="preivewType==2"></video>
          </el-carousel-item>
        </el-carousel>
        <div class="close"
             @click="dialogVisible=false"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      queryForm: {},
      totalPage: 0,
      tableData: [],
      dialogVisible: false,
      preivewType: 1, // 1 图片 2 视频
      carouselList: [],
      pageInfo: {
        page: 1,
        pageSize: 5
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.service.queryUcCheckHistory({ ...this.pageInfo }).then(res => {
        if (res.code === '00000000') {
          this.tableData = res.data.list
          this.totalPage = res.data.total
          console.log(this.totalPage)
        }
      })
    },
    handlePageChange (current) {
      this.pageInfo.page = current
      this.fetchData()
    },
    handleImagePreview (imgs) {

      this.dialogVisible = true
      this.carouselList = imgs
      this.preivewType = 1
    },
    handleVideoPreview (videos) {
      this.dialogVisible = true
      this.carouselList = videos
      this.preivewType = 2
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-img {
  width: 180px;
  // max-height: 200px;
  cursor: pointer;
  margin: 0 auto;
}
.detail-video-btn {
  text-decoration: underline;
  cursor: pointer;
  padding-left: 20px;
  color: #14d3ff;
  user-select: none;
  i {
    margin-right: 5px;
  }
}
.dialog {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  .layer {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1001;
    text-align: center;
    padding-top: 100px;
    box-sizing: border-box;
    .close:after {
      cursor: pointer;
      content: "\2716";
      position: absolute;
      top: 50px;
      right: 50px;
      font-size: 48px;
      color: #ffffff;
    }
  }
}
</style>
