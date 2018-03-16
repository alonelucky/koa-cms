const Router = require('koa-router')
const router = new Router()

router.get('/login', async(ctx, next) => {
    await ctx.html('admin/login')
})

router.get('/user/edit', async(ctx, next) => {
    ctx.body = 'hello edit'
})


module.exports = router