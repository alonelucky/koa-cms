const path = require('path')

const app = require('./app')
const {web} = require('./config')
const static = require('koa-static')


// 项目上线后根据情况,注释该行
app.use(static(path.join(__dirname,'./app/views')))

app.listen(web.port)