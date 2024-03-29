// pages/yikaishi/huiyixiangqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startpx: '',
    curCell: '999',
    data: [1],
    curIndex: '',
  },
  touchstart: function (e) {
    // console.log(e.changedTouches[0].pageX)
    const index = e.currentTarget.dataset.index;
    this.setData({
      startpx: e.changedTouches[0].pageX,
      curIndex: index
    })
  },
  touchmove: function (e) {
    // console.log(e.changedTouches[0].pageX)
    const mpx = e.changedTouches[0].pageX;
    const curIndex = this.data.curIndex;
    if (mpx - this.data.startpx < 0) {
      this.setData({
        curCell: curIndex
      })
    } else {
      this.setData({
        curCell: '999'
      })
    }
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

  }
})