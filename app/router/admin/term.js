const Router = require('koa-router')
const router = new Router()


router.prefix('/term')

router.get('/:type/list', async(ctx, next) => {
    ctx.body = `term ${ctx.params.type},list page.${__filename}`
})

router.get('/:type/add', async(ctx, next) => {
    ctx.body = `term ${ctx.params.type},add page.${__filename}`
})

router.get('/:type/edit', async(ctx, next) => {
    ctx.body = `term ${ctx.params.type},edit page.${__filename}`
})


module.exports = router