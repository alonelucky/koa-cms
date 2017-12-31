const db = require('../app/model')

// 创建默认值
async function set() {
    await db.models.termtype.create({ name: '分类', uriName: 'category', description: '默认主分类' })
    await db.models.termtype.create({ name: '标签', uriName: 'post_tag', description: '文章标签类' })
    await db.models.term.create({ name: "nodejs", uriName: 'nodejs' })
    await db.models.term.create({ name: "前端开发", uriName: 'web-front' })
}


async function get() {
    let term = await db.models.term.findById(1, {
        include: [
            { model: db.models.termtype }
        ]
    })
    console.log(term)

    let termtype = await db.models.termtype.findById(1, {
        include: [
            { model: db.models.term }
        ]
    })
    console.log(termtype)
}

setTimeout(set, 7000)
setTimeout(get, 9000)