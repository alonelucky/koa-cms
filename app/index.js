const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const csrf = require('./libs/csrf')
const session = require('koa-session2')
const {redis,Store} = require('./libs/redis')
const render = require('koa-ejs')
const path = require('path')
const service = require('./service')
const router = require('./router')


// 设置session
app.use(session({
    key:'hello',
    store:new Store()
}))

// 增加随机字符串生成函数,用于跨站请求伪造防御
app.use(csrf('key'))

// 解析请求
app.use(bodyParser())

// 挂载数据库操作到ctx
app.use(service)

// 设置模板引擎
render(app,{
    root:path.join(__dirname,'views'),
    layout:'',
    viewExt:'ejs',
    cache:'false',
    debug:true
})

// 为ctx增加redis
app.use(async (ctx,next)=>{
    ctx.redis=redis
    await next()
})

// 测试路由
app.use(async (ctx,next)=>{
    ctx.session.id = 123
    await next()
})

app.use(router.routes()).use(router.allowedMethods())

module.exports=app
