const user = require('./user')
const post = require('./post')
const term = require('./term')
const comment = require('./comment')

module.exports = async(ctx, next) => {
    ctx.db = {
        user,
        post,
        term,
        comment
    }

    // ctx.db.query = db.query
    await next()
}