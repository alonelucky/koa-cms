const user = require('./user')
const post = require('./post')

module.exports = async(ctx, next) => {
    ctx.db = {
        user
    }

    // ctx.db.query = db.query
    await next()
}