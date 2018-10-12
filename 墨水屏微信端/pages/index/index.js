function queryRequest(data) {
  wx.request({
    url: 'www.xixfeng.cn:8080/api/v2/mqtt/publish',
    data:
      {
        'topic': "test",
        "paylosd": "hellow",
        "qos": 0
      },
    header:
      {
        "Content-Type": "application/json"
      },
    method: POST,
    success: function (res) {
      console.log(res.data)
    },
    fail: function (err) {
      console.log(err)
    }
  })
}