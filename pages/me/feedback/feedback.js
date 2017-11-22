// pages/me/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "placeholder": "亲爱的开发者：\n 使用俭哥部落后，我想对你吐槽一番~",
    "maxlength": 150,
    "input_placeholder": "输入你的联系方式（手机号、QQ等）"
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
  onSubmitClick: function(event) {
    wx.showToast({
      title: '谢谢您的吐槽',
    })
  }
})