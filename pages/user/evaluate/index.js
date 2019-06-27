// pages/user/evaluate/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    PJ_MY: '1',
    PJ_YD: '1',
    PJ_SF: '2',
    PJ_WX:'5',
    PJ_BZ:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  PJ_MY(event) {   //满意度
    console.log(event.detail)
    this.setData({
      PJ_MY: event.detail
    });
  },
  PJ_YD(event) {   //约定时间
    console.log(event.detail)
    this.setData({
      PJ_YD: event.detail
    });
  },
  PJ_SF(event) {   //是否乱收费
    console.log(event.detail)
    this.setData({
      PJ_SF: event.detail
    });
  },
  PJ_WX(event) {   //五星打分
    this.setData({
      PJ_WX: event.detail
    });
  }
})