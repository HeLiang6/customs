import Server from './server.js';

export default {
  /**
   * 查询集装箱历史记录
   * @param {*} params
   */
  queryContainer (params) {
    return Server.post(`/cloudwalk/process/container/historyRecode`, params);
  },

  /**
   * 查询车牌历史记录
   * @param {*} params
   */
  queryPlate (params) {
    return Server.post(`/cloudwalk/process/plate/historyRecode`, params);
  },

  /**
   * 智慧审证识别结果
   * @param {*} params
   */
  queryCertList (params) {
    return Server.post(`/cloudwalk/wisdom/hygiene/cert/list`, params);
  },

  /**
   * 智慧审证识别详情记录
   * @param {*} params
   */
  queryCertDetail (params) {
    return Server.post(`/cloudwalk/wisdom/hygiene/cert/info`, params);
  },

  /**
   * 智慧审证病疫查询
   * @param {*} params
   */
  queryAffectedNames (params) {
    return Server.post(`/cloudwalk/wisdom/affected/query`, params);
  },

  /**
   * 智慧审证病疫区域查询
   * @param {*} params
   */
  queryAffectedArea (params) {
    return Server.post(`/cloudwalk/wisdom/affected/list`, params);
  },

  queryUcCheckHistory (params) {
    return Server.post(`/cloudwalk/misc/uc/ucCheckHistory`, params);
  }
};
