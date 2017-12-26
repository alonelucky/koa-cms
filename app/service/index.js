const db = require('./model')


module.exports = async (ctx,next) => {
    ctx.db = db.models
    ctx.db.query = db.query
    await next()
}