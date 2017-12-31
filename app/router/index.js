const Router = require('koa-router')
const router = new Router()

router.get('/', async(ctx) => {
    console.log(await ctx.db.user.findByName('xiaoli'))
    await ctx.render('index', { hello: 'koa' })
})


module.exports = router