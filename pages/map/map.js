// pages/map/map.js
Page({

  data: {
    markers: [{
      id: 0,
      latitude: 22.543099,
      longitude: 114.057868,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 114.057868,
        latitude: 22.543099
      }, {
          longitude: 114.057868,
          latitude: 22.543099
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  onReady: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude1 = res.latitude
        var longitude1 = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        that.setData({
          markers:[{
            latitude: latitude1,
            longitude: longitude1,
          }]
          });
      }
    })
    wx.showToast({
      title: '个人小程序帐号',
    })
  },

  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})