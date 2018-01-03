const Router = require('koa-router')
const router = new Router()

router.get('/login', async(ctx, next) => {
    let id = ctx.params.id
    console.log(ctx)
    ctx.body = 'hello login'
})



module.exports = router