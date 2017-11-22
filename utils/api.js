'use strict';
import Promise from './es6-promise.min'

module.exports = {
  PAGE_WORK: '/pages',

  BASE_SERVER_URL: 'https://heyunjian.leanapp.cn',

  BLOG_INFO: '/wx/blog/getInfo',

  get(url) {
    return new Promise((resolve, reject) => {
      console.log(url)
      wx.request({
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  post(url, data) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: data,
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencode;charset=UTF-8;'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  post(url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/x-www-form-urlencode;charset=UTF-8;'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  },

  json2Form(json) {
    var str = []
    for (var p in json) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]))
    }
    return str.join("&")
  }

};