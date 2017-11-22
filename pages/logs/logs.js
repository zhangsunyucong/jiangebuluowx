//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    var params = "";
    for (var a in options) {
      params = params + options[a] + "/";
    }
    wx.showModal({
      title: '系统提示',
      content: '传递过来的参数是：' + params,
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
