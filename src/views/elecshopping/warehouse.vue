<!--
 *@author: yckj0881
 *@date: 2019-10-06 21:39:33
 *@version: v0.0.1
 *@description: 跨境电商-库存数据
-->

<template>
  <div class="ct-box elec-shopping">
    <header class="ct-header">
      <div class="title">发展趋势</div>
      <ct-tabs :data="['统计数据','库存数据']"
               style="margin-left:140px;"></ct-tabs>
    </header>
    <section class="query-form">
      <el-form :inline="true"
               :model="queryForm"
               class="demo-form-inline">
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="海关备案号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="税号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="queryForm.user"
                    placeholder="品名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
        </el-form-item>
      </el-form>
    </section>
    <main class="shopping-table">
      <section class="account-table">
        <div class="table-button">
          <ct-tabs :data="['账册']"></ct-tabs>
          <a href="javascript:;"
             class="export-btn">导出</a>
        </div>
        <el-table :data="accountTable"
                  height="682"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           label="序号"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="备案号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="税号">
          </el-table-column>
          <el-table-column prop="address"
                           label="品名">
          </el-table-column>
          <el-table-column prop="address"
                           label="计量单位">
          </el-table-column>
          <el-table-column prop="address"
                           label="海关库存">
          </el-table-column>
          <el-table-column prop="address"
                           label="企业库存">
          </el-table-column>
          <el-table-column prop="address"
                           label="差异对比">
          </el-table-column>
        </el-table>
      </section>
      <section class="commpany-stock">
        <div class="table-button">
          <ct-tabs :data="['企业库存']"></ct-tabs>
        </div>
        <el-table :data="companyStockTable"
                  height="682"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           label="序号"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="备案号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="税号">
          </el-table-column>
          <el-table-column prop="address"
                           label="品名">
          </el-table-column>
          <el-table-column prop="address"
                           label="计量单位">
          </el-table-column>
          <el-table-column prop="address"
                           label="海关库存">
          </el-table-column>
          <el-table-column prop="address"
                           label="企业库存">
          </el-table-column>
          <el-table-column prop="address"
                           label="差异对比">
          </el-table-column>
        </el-table>
      </section>
    </main>
  </div>
</template>

<script>
import ctTabs from '@/components/Tabs'
export default {
  data () {
    return {
      queryForm: {},
      accountTable: [{
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }, {
        date: 'abc',
        address: 12
      }],
      companyStockTable: []
    }
  },
  components: {
    ctTabs
  }
}
</script>

<style lang="scss" scoped>
.elec-shopping {
  padding-left: 110px;
  padding-top: 60px;
  box-sizing: border-box;
  .query-form {
    margin-top: 18px;
  }

  .shopping-table {
    display: flex;
    align-items: center;
    margin-top: 68px;
    .account-table,
    .commpany-stock {
      width: 868px;
      margin-right: 25px;
    }
    .table-button {
      display: flex;
      align-items: center;
      .table-tag {
        width: 129px;
        height: 35px;
        line-height: 35px;
        padding-left: 30px;
        background: url("../../assets/images/tag-f-active.png") center no-repeat;
        background-size: 100% 100%;
        color: #eeeeee;
      }
      .export-btn {
        font-size: 14px;
        font-weight: 400;
        color: rgba(50, 197, 255, 1);
        margin-left: 44px;
        text-decoration: underline;
      }
    }
  }
}
</style>
