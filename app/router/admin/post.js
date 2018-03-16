const Router = require('koa-router')
const router = new Router()


router.prefix('/post')

router.get('/:type/list', async(ctx, next) => {
    ctx.body = `hello ${ctx.params.type},list page.${__filename}`
})

router.get('/:type/add', async(ctx, next) => {
    ctx.body = `hello ${ctx.params.type},add page.${__filename}`
})

router.get('/:type/edit', async(ctx, next) => {
    ctx.body = `hello ${ctx.params.type},edit page.${__filename}`
})


module.exports = router