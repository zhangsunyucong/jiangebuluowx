//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    name: 'world',
    mode: 'scaleToFill',
    src:'http://ac-5ubk617r.clouddn.com/594f906b3bf3abc8d1fc.png' 
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  },
  sayHello:function(e) {
    /*wx.request({
      url: "https://heyunjian.leanapp.cn/blog/getInfo",
      success:function(res) {
        wx.showToast({
          title: 'success',
        })
      },
      method: 'POST',
      fail: function(error) {
        wx.showToast({
          title: 'fail',
        })
      }
    })*/
    wx.chooseImage({
    success: function (res) {
      wx.downloadFile({
        url: 'http://ac-5ubk617r.clouddn.com/594f906b3bf3abc8d1fc.png',
        success: function (res) {
          if (res.statusCode === 200) {
            wx.playVoice({
              filePath: res.tempFilePath
            })
          }
        },
        fail: function(msg) {
          console.log(msg);
        }
      })
    }
  });
  }
})
