const Router = require('koa-router')
const router = new Router()
const userRouter = require('./user')
const postRouter = require('./post')
const termRouter = require('./term')
const commentRouter = require('./commnet')
const fileRouter = require('./file')


router.prefix('/admin')
router.use(userRouter.routes())
router.use(postRouter.routes())
router.use(termRouter.routes())
router.use(fileRouter.routes())
router.use(commentRouter.routes())

module.exports = router