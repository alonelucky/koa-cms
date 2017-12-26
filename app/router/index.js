const Router = require('koa-router')
const router = new Router()

router.get('/',async (ctx)=>{
    console.log(ctx.db)
    await ctx.render('index',{hello:'koa'})
})


module.exports = router