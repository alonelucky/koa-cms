const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')
let root = path.join(__dirname, '../../../public')

router.get('/files', async(ctx, next) => {
    let queryPath = ctx.request.query.path || '/'

    ctx.body = await getDir(queryPath)
})


module.exports = router


// 在该路由下实现静态资源服务器
function getDir(queryPath) {
    let fullPath = path.join(root, queryPath)
    return new Promise((resolve, reject) => {
        fs.readdir(fullPath, function(err, info) {
            if (err) {
                reject(err)
            }
            info = info.map(item => {
                let obj = {}
                obj.type = 'dir'
                obj.name = item
                obj.path = `${queryPath}/${item}`
                let stats = fs.statSync(path.join(fullPath, item))
                if (stats.isFile()) {
                    obj.type = 'file'
                    obj.size = stats.size
                    obj.ext = path.extname(item)
                }
                return obj
            })
            resolve(info)
        })
    })
}