const hashCsrf = require('./hash').csrf

module.exports = (key) => {
    return async (ctx,next)=>{
        ctx.csrf=function (key = key) {
            return hashCsrf(key)
        }
        await next()
    }
}
