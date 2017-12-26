const crrpto = require('crypto')

module.exports= {
    hash256,
    csrf
}

// 常规混淆
function hash256(string,key) {
    return crrpto.createHamc('sha256',key).update(string).degist('hex')
}

// csrf时间戳随机混淆
function csrf(key) {
    let random = Date.now()+''+Math.random()
    hash256(random,key)
}

