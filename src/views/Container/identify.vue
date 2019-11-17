<!--
 *@author: yckj0881
 *@date: 2019-10-08 11:38:11
 *@version: v0.0.1
 *@description: 集装箱/车辆识别模块
-->
<template>
  <div class="ct-box container-identify">
    <a :href="flowUrl"
       class="take-btn">集装箱全流程</a>
    <div class="ct-header">
      <div class="title prefix">历史记录</div>
    </div>
    <main class="container-main">
      <section class="container-block">
        <popover-table :tabs="['集装箱']"
                       serviceName="queryContainer"></popover-table>
      </section>
      <section class="container-block"
               style="width:723px;">
        <popover-table type="right"
                       :tabs="['车牌','船舶']"
                       serviceName="queryPlate"></popover-table>
      </section>
    </main>
  </div>
</template>

<script>
import PopoverTable from '@/components/PopoverTable';
export default {
  data () {
    return {
      containerTable: [],
      flowUrl: location.origin + `/#/transport/flow?container=TGHU9658290`,
      containerTableLoading: false,
      plateTable: [],
      plateTableLoading: false
    };
  },
  components: {
    PopoverTable
  },
  mounted () { },
  methods: {
    queryContainerHistory (params) {
      this.containerTableLoading = true
      this.service
        .queryContainer(params)
        .then(res => {
          this.containerTableLoading = false
          if (res.code === '00000000') {
            this.containerTable = res.data.datas
            console.log(res.data.list)
          }
        })
        .catch(e => {
          console.error(e);
          this.containerTableLoading = false;
        });
    },
    queryPlateHistory (params) {
      this.service.queryPlate().then(res => { });
    }
  }
};
</script>

<style lang="scss" scoped>
.container-identify {
  padding: 90px 0 0 129px;
  .container-main {
    display: flex;
    align-items: center;
    margin-top: 43px;
    .container-block {
      width: 935px;
      margin-right: 45px;
    }
  }
}
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
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
