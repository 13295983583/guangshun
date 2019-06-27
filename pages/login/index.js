// pages/login/index.js
var e = getApp(),
  a = e.requirejs("core"),
  t = e.requirejs("wxParse/wxParse"),
  i = e.requirejs("biz/diypage"),
  s = e.requirejs("jquery");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: '',
    password: ''
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
  setUser(event) { //获取账号
    const user = event.detail.value
    this.setData({
      user
    })

  },
  setPassword(event) { //获取密码
    const password = event.detail.value
    this.setData({
      password
    })
  },
  loginBtn() {
    const {
      user,
      password
    } = this.data
    console.log(user, password)
    a.post("server/login/repairlogin", {
      mobile: user,
      password
    }, function (e) {
      if (e == 1) {
        wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 2000,
        })
        setTimeout(() => {
          wx.redirectTo({
            url: '/pages/user/pers/index',
          })
        }, 2000)
      } else if (e == 2) {
        wx.showToast({
          title: '账号不存在',
          icon: 'none',
          duration: 2000
        })
      } else if (e == 2) {
        wx.showToast({
          title: '密码不正确',
          icon: 'none',
          duration: 2000
        })
      } else {
        wx.showToast({
          title: '请输入账号密码',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})