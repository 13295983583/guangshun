// pages/register/index.js
var t = getApp(), a = t.requirejs("core"), o = (t.requirejs("jquery"), t.requirejs("foxui"),
  0);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    code:'',
    countNum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  saveBtn:function(e){  //保存按钮
    const { phone, code } = this.data
    // console.log(phone,code)
    this.req_save(phone, code)
  },
  setPhone(e){   //保存手机号
    const phone = e.detail.value
    this.setData({
      phone
    })
  },
  setCode(e) {    //保存验证码
    const code = e.detail.value
    this.setData({
      code
    })
  },
  codeBtn(){   //获取验证码
    // console.log('获取')
    const _this = this
    const { phone} = this.data
    if (/^1[3456789]\d{9}$/.test(phone)){    //判断手机号是否为空
      this.req_code(phone)
      let time = 60
      var times = setInterval(function () {
        time = time - 1;
        _this.setData(
          {
            countNum: time
          }
        )
        if (time === 0) {
          clearInterval(times)
        }
      }, 1000)
    }else{
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号',
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
            _this.setData({
              phone:''
            })
          }
        }
      })
    }
  },
  req_save(mobile, code){   //保存信息提交
    a.post("login/register/register", {
      mobile, 
      code
    }, function (e) {
      if (e == 1) {
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000,
        })
        setTimeout(()=>{
          wx.switchTab({
            url: '/pages/member/index/index',
          })
        }, 2000)     
      } else if (e == 2) {
        wx.showToast({
          title: '验证码过期',
          icon: 'none',
          duration: 2000
        })
      } else if (e == 2) {
        wx.showToast({
          title: '验证码不正确',
          icon: 'none',
          duration: 2000
        })
      }else{
        wx.showToast({
          title: '请输入正确的验证码',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  req_code(mobile){
    a.post("login/register/sendMessage", {
      mobile
    }, function (e) {
      if(e==1){
        wx.showToast({
          title: '验证码发送成功',
          icon: 'success',
          duration: 2000
        })
      } else if (e == 2){
        wx.showToast({
          title: '验证码发送失败',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})