const hashCsrf = require('./hash').csrf

module.exports = (key) => {
    return async(ctx, next) => {
        ctx.csrf = hashCsrf(key)
        await next()
    }
}