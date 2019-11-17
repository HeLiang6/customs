<template>
  <div class="ct-box">
    <header class="ct-header">
      <div class="title">历史记录</div>
    </header>
    <section class="query-form">
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="选择日期"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="选择类型"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="预警地点"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="处置状态"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
    <main class="ct-main">
      <el-table :data="tableData"
                height="682"
                border>
        <el-table-column prop="date"
                         label="序号">
        </el-table-column>
        <el-table-column prop="name"
                         label="预警时间">
        </el-table-column>
        <el-table-column prop="address"
                         label="类型">
        </el-table-column>
        <el-table-column prop="address"
                         label="预警内容">
        </el-table-column>
        <el-table-column prop="address"
                         label="预警地点">
        </el-table-column>
        <el-table-column prop="address"
                         label="处置状态">
        </el-table-column>
        <el-table-column prop="address"
                         label="详情">
        </el-table-column>
        <el-table-column prop="address"
                         label="操作">
        </el-table-column>
      </el-table>
      <el-pagination background
                     layout="prev, pager, next"
                     :total="totalPage">
      </el-pagination>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      queryForm: {},
      totalPage: 100,
      tableData: []
    }
  }
}
</script>

<style>
</style>
