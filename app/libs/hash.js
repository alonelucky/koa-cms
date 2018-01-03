const crypto = require('crypto')

module.exports = {
    hash256,
    csrf
}

// 常规混淆
function hash256(string, key) {
    return crypto.createHmac('sha256', key).update(string).digest('hex')
}

// csrf时间戳随机混淆
function csrf(key) {
    let random = Date.now() + '' + Math.random()
    hash256(random, key)
}