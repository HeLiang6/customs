<template>
  <div class="ct-cert-box">
    <header class="ct-cert-head">
      <img src="../../assets/images/icon-cert.png"
           alt=""
           class="icon">
      <span>证书列表</span>
    </header>
    <main class="ct-cert-main">
      <!-- 证书列表-->
      <aside class="ct-cert-aside">
        <el-input placeholder="证书编号"
                  style="width:230px;margin-bottom:20px;"></el-input>
        <div class="cert-images">
          <div class="cert-image-item"
               v-for="(item,index) in certList.datas"
               :key="index"
               :class="{'active':selectedCert==item.cerId}"
               @click="handleCertSelected(item)">
            <img :src="item.certImages[0]"
                 alt="">
            <p>{{item.cerId}}</p>
          </div>
        </div>
      </aside>
      <section class="ct-cert-content">
        <section class="ct-cert-part">
          <!-- ocr比对结果-->
          <section class="ct-cert-compare">
            <div class="source">
              <p>扫描图</p>
              <el-carousel indicator-position="none"
                           arrow="always"
                           :autoplay="false">
                <el-carousel-item v-for="(item,index) in certInfo.certImages"
                                  :key="index">
                  <img :src="item"
                       alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="split">
              <img src="../../assets/images/icon-split.png"
                   alt="">
            </div>
            <div class="target">
              <p>电子证书信息</p>
              <el-form class="cert-form"
                       label-width="90px"
                       v-if="certInfo.verifyResult">
                <el-form-item label="货物品名：">{{certInfo.verifyResult.goodsName.value}}</el-form-item>
                <el-row class="flex-row">
                  <el-form-item label="数量：">{{certInfo.verifyResult.count.value}}</el-form-item>
                  <el-form-item label="重量："
                                label-width="50px"
                                class="extra">{{certInfo.verifyResult.weight.value}}</el-form-item>
                </el-row>
                <el-form-item label="集装箱号：">{{certInfo.verifyResult.containerNo.value}}</el-form-item>
                <el-form-item label="集装箱铅封：">{{certInfo.verifyResult.sealNo.value}}</el-form-item>
                <el-form-item label="收货人：">{{certInfo.verifyResult.consignee.value}}</el-form-item>
                <el-form-item label="供应商：">{{certInfo.verifyResult.supplierNameAddress.value}}</el-form-item>
                <el-form-item label="入境口岸：">{{certInfo.verifyResult.portOfEntry.value}}</el-form-item>
                <el-form-item label="报检号：">{{certInfo.verifyResult.inspectionNumber.value}}</el-form-item>
                <el-form-item label="工厂代码：">{{certInfo.verifyResult.companyFactoryNumber.value}}</el-form-item>
                <el-form-item label="证书号：">{{certInfo.verifyResult.certId.value}}</el-form-item>
                <el-form-item label="签证官：">{{certInfo.verifyResult.signingOfficerName.value}}</el-form-item>
                <el-form-item label="签证日期：">{{certInfo.verifyResult.dateOfVisa.value}}</el-form-item>
              </el-form>
            </div>
          </section>
          <!-- 企业相关信息 -->
          <section class="ct-cert-message">
            <h3>企业相关信息</h3>
            <!-- 产品准入情况 -->
            <div class="prod-access prod-block">
              <p class="title">产品准入情况</p>
              <div class="prod-content">
                <p class="prod-title">符合评估审查要求的国家或地区输华肉类产品</p>
                <el-table :data="certInfo.suppliers"
                          height="120"
                          size="mini"
                          class="prod-table">
                  <el-table-column prop="country"
                                   width="80"
                                   label="国家">
                  </el-table-column>
                  <el-table-column prop="admittanceTime"
                                   label="议定书签署时间">
                  </el-table-column>
                  <el-table-column prop="productType"
                                   label="产品大类">
                  </el-table-column>
                  <el-table-column prop="productName"
                                   label="品名">
                  </el-table-column>
                  <el-table-column prop="enterpriseName"
                                   :show-overflow-tooltip="true"
                                   label="注册企业">
                  </el-table-column>
                </el-table>
              </div>
            </div>
            <!-- 收货商 -->
            <div class="prod-receive prod-block">
              <p class="title vertical">收货人</p>
              <div class="prod-content min">
                <p class="prod-title">进口肉类产品收货人备案名单(不含肠衣定点加工企业)</p>
                <div class="prod-table prod-receive-content">
                  <div class="line"
                       v-for="(item,index) in certInfo.consignees"
                       :key="index">
                    <span>{{item.backupId}}</span>
                    <span>{{item.consigneeName}}</span>
                    <span>{{item.productType}}</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- 境外生产企业-->
            <div class="prod-abroad prod-block">
              <p class="title">境外生产企业</p>
              <div class="prod-content min">
                <p class="prod-title">输华肉类企业在华注册</p>
                <el-table :data="certInfo.ape"
                          height="70"
                          size="mini"
                          class="prod-table">
                  <el-table-column prop="registerId"
                                   :show-overflow-tooltip="true"
                                   label="注册编号">
                  </el-table-column>
                  <el-table-column prop="enterpriseName"
                                   :show-overflow-tooltip="true"
                                   label="企业名称">
                  </el-table-column>
                  <el-table-column prop="enterpriseAddr"
                                   :show-overflow-tooltip="true"
                                   label="企业地址">
                  </el-table-column>
                  <el-table-column prop="productMode"
                                   :show-overflow-tooltip="true"
                                   label="生产方式">
                  </el-table-column>
                  <el-table-column prop="remark"
                                   :show-overflow-tooltip="true"
                                   label="备注">
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </section>
        </section>
        <section class="ct-cert-part">
          <!-- 扫描图签名-->
          <section class="ct-cert-sign">
            <div class="cert-sign"
                 style="margin-bottom:16px;">
              <p>证书签名</p>
              <img :src="certInfo.scanAutographImage"
                   alt="">
            </div>
            <div class="cert-sign">
              <p>备案签名</p>
              <img :src="certInfo.certAutographImage"
                   alt="">
            </div>
          </section>
          <!-- 地图轨迹-->
          <section class="ct-cert-map">
            <div class="map-query">
              <div>
                <span>集装箱号:</span>
                <el-input placeholder=""
                          style="width:180px;margin-right:12px;"></el-input>
                <el-button type="primary">生成轨迹</el-button>
              </div>
              <el-select v-model="selectedAffected"
                         @change="handleSelectChange">
                <el-option v-for="
                         (item,index)
                         in
                         affectedList"
                           :key="index"
                           :value="item.affected">{{item.affected}}</el-option>
              </el-select>
            </div>
            <div id="map"></div>
          </section>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/world'
import mapOption from '../../assets/data/map'
export default {
  data () {
    return {
      selectedCert: '',
      selectedCertImages: [],
      certList: {},
      affectedList: [],
      selectedAffected: '',
      certInfo: {}
    }
  },
  created () {
    this.fetchCertList()
    this.fetchAffectedNames()
  },
  mounted () {
  },
  methods: {
    fetchCertList () {
      this.service.queryCertList().then(res => {
        if (res.code === '00000000') {
          this.certList = res.data
          if (res.data.datas.length > 0) {
            this.selectedCert = res.data.datas[0].cerId
            this.fetchCertDetail()
          }
        }
      })
    },
    fetchCertDetail () {
      this.service.queryCertDetail({
        certId: this.selectedCert,
        district: this.$route.query.district || 5166
      }).then(res => {
        if (res.code === '00000000') {
          this.certInfo = res.data
        }
      })
    },
    fetchAffectedNames () {
      this.service.queryAffectedNames().then(res => {
        if (res.code === '00000000') {
          this.affectedList = res.data
          if (res.data.length > 0) {
            this.selectedAffected = res.data[0]
            this.fetchAffectedAreas()
          }
        }
      })
    },
    fetchAffectedAreas () {
      this.service.queryAffectedArea({
        affected: this.selectedAffected
      }).then(res => {
        if (res.code === '00000000') {
          this.$nextTick(() => {
            this.initMap(res.data)
          })
        }
      })
    },
    handleCertSelected (obj) {
      this.selectedCert = obj.cerId
      this.fetchCertDetail()
    },
    handleSelectChange (val) {
      this.selectedAffected = val
      this.fetchAffectedAreas()
    },

    initMap (areas) {
      let result = []
      areas.map(item => {
        result.push({
          name: item.countryCN,
          value: [item.latitude, item.longitude]
        })
      })
      let map = echarts.init(document.getElementById('map'))
      mapOption.series[0].data = result
      map.setOption(mapOption)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/cert.scss";
</style>
