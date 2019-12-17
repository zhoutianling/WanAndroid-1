// pages/mine/mine.js
Page({

    /**
     * Page initial data
     */
    data: {
        isLogin: false,
        testArray: []

    },

    login: function() {
        if (this.data.isLogin === false) {
            wx.navigateTo({
                url: '../login/login',
            });
        } else {
            console.log("当前已登录");
            return false;
        }
    },

    getTestList: function() {
        this.setData({
            testArray: [
                { num: 1 },
                { num: 2 },
                { num: 3 },
                { num: 4 },
                { num: 5 },
                { num: 6 }
            ]               
        });
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        this.getTestList();
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})