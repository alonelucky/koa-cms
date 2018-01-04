const Router = require('koa-router')
const router = new Router()

router.get('/login', async(ctx, next) => {
    ctx.render('admin/login')
})

module.exports = router