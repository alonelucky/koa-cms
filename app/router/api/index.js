const Router = require('koa-router')
const router = new Router()
const userRouter = require('./user')

router.prefix('/api')
router.use(userRouter.routes())


module.exports = router