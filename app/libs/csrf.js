const hashCsrf = require('./hash').csrf

module.exports = (key) => {
    return async(ctx, next) => {
        ctx.csrf = new Csrf(key).csrf
        await next()
    }
}

class Csrf {
    constructor(key){
        this.key = key
    }
    get csrf () {
        return hashCsrf(this.key)
    }
}