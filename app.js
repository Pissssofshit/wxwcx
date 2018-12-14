//app.js
const AV = require('./libs/av-weapp-min.js');

AV.init({
  appId: 'Ijo7J97Lu8xQbEn4g2ENMXje-gzGzoHsz',
  appKey: 'SzmavvPfPE8bERMG8c5PdHEc',
});

App({
  onLaunch: function () {
    var TestObject = AV.Object.extend('Topic');
    var testObject = new TestObject();
    testObject.save({
      words: 'Hello World!',
    }).then(function (object) {
      alert('LeanCloud Rocks!');
    })
    //获取用户登录信息
    AV.User.loginWithWeapp().then(user => {
      // console.log(user);
      this.globalData.userInfo = user.toJSON();
      // console.log(user.toJSON())
    }).catch(console.error);
  },
  globalData: {
    userInfo: null
  }
})