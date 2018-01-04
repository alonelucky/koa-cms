const Router = require('koa-router')
const router = new Router()
const hash = require('../../libs/hash')


let msg = {}

// 用户登陆逻辑
router.post('/login', checkUserForm, async(ctx, next) => {
    let data = ctx.request.body

    // 验证是否已注册
    let user = await ctx.db.user.findByName(data.username).catch(err => { console.error(err) })
    if (!user) {
        msg.code = 10102
        msg.msg = '用户不存在'
        return ctx.body = msg
    }

    if (user.password != hash.hash256(data.password, data.username)) {
        msg.code = 10103
        msg.msg = '用户名密码不匹配'
        return ctx.body = msg
    }

    msg.code = 0
    msg.msg = '登陆成功'
    user.password = null
    ctx.session.user = user
    msg.user = user
    return ctx.body = msg
})

router.post('/signup', checkUserForm, async(ctx, next) => {
    let data = ctx.request.body
        // 验证是否已注册
    let user = await ctx.db.user.findByName(data.username).catch(err => { console.error(err) })
    if (user instanceof Object) {
        msg.code = 10104
        msg.msg = '用户名已注册'
        return ctx.body = msg
    }

    if (user instanceof Number) {
        msg.code = user
        msg.msg = '请联系管理员'
        return ctx.body = msg
    }
    // 注册用户
    user = await ctx.db.user.signup(data).catch(err => { console.error(err) })

    console.log(user)
    console.log(data)
    user.password = null
    ctx.session.user = user
    msg.code = 0
    msg.msg = '用户创建成功'
    msg.user = user
    return ctx.body = msg
})

router.post('/logout', async(ctx, next) => {
    // 验证是否已经登录(在中间件中验证)
    ctx.session.user = null
    msg.code = 0
    msg.msg = '用户安全退出'
    return ctx.body = msg
})

router.put('/user/:id', async(ctx, next) => {
    let data = ctx.request.body
    let id = Number(ctx.params.id)

    if (!id) {
        return next()
    }

    // 判断当前id是否存在并有效
    let user = await ctx.db.user.findById(id)

    if (!user) {
        msg.code = 10102
        msg.msg = '用户不存在'
        return ctx.body = msg
    }

    user = await ctx.db.user.updateAndMetaById(id, data)
    if (user instanceof Number) {
        msg.code = user
        return ctx.body = msg
    }

    msg.code = 0
    msg.msg = '更新成功'
    msg.user = user
    ctx.body = msg
})

router.get('/user/:id', async(ctx, next) => {

})


module.exports = router


// 跨站请求验证
function checkCsrf(ctx, next) {
    let csrf = ctx.session._csrf
    let _csrf = ctx.request.body._csrf
    if (csrf != _csrf) {
        msg.code = 10101
        msg.msg = '请刷新页面后重试'
        return ctx.body = msg
    }
    await next()
}

// 用户提交表单验证
function checkUserForm(ctx, next) {
    let data = ctx.request.body
    if (!(data.username || data.password)) {
        msg.code = 10002
        msg.msg = '用户名密码均不能为空'
        return ctx.body = msg
    }
    await netx()
}