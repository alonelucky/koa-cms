const hashCsrf = require('./hash').csrf
const path = require('path')


module.exports = async(ctx, next) => {
    ctx.html = async(tpl, data) => {
        let datas = data || {}
        _csrf = hashCsrf(String(Date.now() + Math.random()))
        datas._csrf = _csrf
        ctx.session._csrf = _csrf
        datas.user = ctx.db.user
        await ctx.render(tpl, datas)
    }
    return next()
}