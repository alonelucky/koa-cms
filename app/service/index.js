const db = require('./model')
const user = require('./user')

module.exports = async (ctx,next) => {
    ctx.db = {
        user
    }

    ctx.db.query = db.query
    await next()
}
