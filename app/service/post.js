const db = require('./model')
const _ = require('lodash')
const { user, usermeta, post, postmeta, comment, commentmeta, term } = db.models

const postSchema = ['id', 'title', 'abstract', 'content', 'publishStatus', 'type', 'userId', 'createdAt', 'updatedAt', 'postId']
    /*
     *   在用户注册注销时使用
     *   @parmas     {string}        用户名字符串
     *   @return     {Object}        用户相关信息(用户名/密码/邮箱/状态)
     * */
post.findByTitle = async(title) => {
    // 如果用户名为空,则直接返回空
    if (!name) {
        return null
    }
    let ops = {
        where: {
            title: title,
            publishStatus: 0
        },
        include: [
            { model: postmeta },
            { model: user },
            { model: comment, limit: 1, separate: true }
        ]
    }
    return await post.findOne(ops)
}

// 根据id查找文章
post.findById = async(id) => {
    if (!Number(id)) {
        return 20003
    }
    let ops = {
        where: {
            id: id,
            publishStatus: 0,
            type: 'post'
        },
        orderBy: ['createdAt'],
        include: [
            { model: user, attributes: ['id', 'username', 'email'] },
            { model: postmeta },
            { model: comment, separate: true, limit: 2 },
            { model: term, include: [{ model: termmeta }, { model: termtype, where: { type: 'category' } }], as: 'categories' },
            { model: term, include: [{ model: termmeta }, { model: termtype, where: { type: 'post_tag' } }], as: 'tags' }
        ]
    }
    return await postmeta.findOne(ops)
}

// 获取文章列表
// obj.page             Number          0
// obj.order            [String]        ['createdAt','desc']
// obj.publishStatus    Number          0
// obj.limit            Number          1-50,default 10
post.findByPage = async(obj) => {
    let ops = {
        where: {
            publishStatus: obj.publishStatus || 0
        },
        order: obj.order || [
            ['createdAt', 'desc']
        ],
        limit: 10,
        skip: 10 * (parseInt(obj.page) || 0),
        include: [
            { model: user, attributes: ['id', 'username', 'email'] },
            { model: postmeta },
            { model: comment, separate: true, limit: 2 },
            { model: term, include: [{ model: termmeta }, { model: termtype, where: { type: 'category' } }], as: 'categories' },
            { model: term, include: [{ model: termmeta }, { model: termtype, where: { type: 'post_tag' } }], as: 'tags' }
        ]
    }
}

// 发表文章
post.publish = async(obj) => {
    if (!obj.title) {
        return 20002
    }

    let u = await user.findById(obj.userId)
    if (!u) {
        return 20005
    }

    let metas = _.without(Object.keys(obj), ...postSchema)
    if (metas.length) {
        metas.map(async(item) => {
            await postmeta.create({ pkey: item, pvalue: obj[item] })
        })
    }
    let p = await post.create(obj)
    if (!p) {
        return 20009
    }
    return await post.findById(p.id)

}

// 删除文章
post.deletById = async(id) => {
    if (!Number) {
        return 20003
    }
    return await post.delete({ where: { id: id } })
}

// 更新文章
post.updateById = async(id, obj) => {
    if (!Number) {
        return 20003
    }
    if (obj.title) {
        return 20002
    }

    let metas = _.without(Object.keys(obj), ...postSchema)
    if (metas.length) {
        metas.map(async(item) => {
            await postmeta.upsert({ pkey: item, pvalue: obj[item] })
        })
    }
    let p = await post.update(obj)
    if (!p) {
        return 20009
    }
    return await post.findById(p.id)
}

module.exports = post