const Router = require('koa-router')
const router = new Router()

router.get('/login', async(ctx, next) => {
    await ctx.render('admin/login',{_csrf:""})
})

router.get('/user/edit', async(ctx, next) => {
    ctx.body = 'hello edit'
})


module.exports = router