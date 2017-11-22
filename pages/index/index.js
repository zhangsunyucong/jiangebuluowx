
/**  作者：Code4Android
 *   项目地址：https://github.com/xiehui999/SmallAppForQQ
 *   新浪微博：http://weibo.com/745687294
 *   CSDN  :    http://blog.csdn.net/xiehuimx?viewmode=contents
 *   简书   :   http://www.jianshu.com/users/d5b531888b2b/latest_articles
 * */
var focus
var isShowView
var api = require('../../utils/api.js')
Page({
  data: {
    // text:"这是一个页面"
    focus: false,
    isShowView: true,
    messages: [{ cnName: "zhangsun"}]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    api.post(api.BASE_SERVER_URL + api.BLOG_INFO)
      .then(result => {
        if (result && result.data) {
          console.log(result.data.data);
          that.setData({ messages: result.data.data });
        }
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function () {
    return {
      title: '俭哥部落',
      path: '/pages/index/index?id=123'
    }
  }
})