const Router = require('koa-router')
const apiRouter = require('./api')
const router = new Router()
const adminRouter = require('./admin')

router.get('/', async(ctx) => {
    console.log(await ctx.db.user.findByName('xiaoli'))
    await ctx.render('index', { hello: 'koa' })
})

// API相关路由
router.use(apiRouter.routes())
    // 后台页面路由
router.use(adminRouter.routes())


module.exports = router