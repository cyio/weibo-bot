const weiboer = require('weiboer')
const path = require('path')

const weiboHelper = weiboer.init(path.resolve(__dirname, './config.json'))
// weiboHelper.publish('微博内容', ['./images/01.jps', './images/02.jps'])
weiboHelper.publish('微博内容')
