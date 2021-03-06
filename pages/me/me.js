// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

  onVitaeClick: function(event) {
    wx.navigateTo({
      url: './vitae/vitae',
    })
    
  },

  onFeedbackClick: function (event) {
    wx.navigateTo({
      url: './feedback/feedback',
    })
  },

  onAboutClick: function (event) {
    wx.navigateTo({
      url: './about/about',
    })
  },

  onClearDataClick: function(event) {
    wx.showModal({
      title: '系统提示',
      content: '确定清除数据？',
      success: function(res) {
        if(res.confirm) {
          wx.showToast({
            title: '清除数据成功',
          })
        }
      }
    })
    
  },

  onExitClick: function(event) {
    wx.showModal({
      title: '系统提示',
      content: '确定退出程序？',
      success: function (res) {
        if (res.confirm) {
          
        }
      }
    })
  }
})