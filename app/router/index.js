const Router = require('koa-router')
const apiRouter = require('./api')
const router = new Router()

router.get('/', async(ctx) => {
    console.log(await ctx.db.user.findByName('xiaoli'))
    await ctx.render('index', { hello: 'koa' })
})

// API相关路由
router.use(apiRouter.routes())


module.exports = router