const Router = require('koa-router')
const router = new Router()


router.prefix('/comment')

router.get('/list', async(ctx, next) => {
    ctx.body = `comment ${ctx.params.type},list page.${__filename}`
})

router.get('/add', async(ctx, next) => {
    ctx.body = `comment ${ctx.params.type},add page.${__filename}`
})

router.get('/edit', async(ctx, next) => {
    ctx.body = `comment ${ctx.params.type},edit page.${__filename}`
})


module.exports = router