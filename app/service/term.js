const db = require('./model')
const _ = require('lodash')
const { user, usermeta, post, postmeta, comment, commentmeta, term } = db.models

const termSchema = ['id', 'title', 'abstract', 'content', 'publishStatus', 'type', 'userId', 'createdAt', 'updatedAt', 'postId']


// 创建项目
term.publish = async(obj) => {
    return await term.create(obj).catch(err => { console.error(err) })
}

// 创建项目类型
term.createType = async(obj) => {
    return await termtype.create(obj).catch(err => { console.error(err) })
}

// 删除项目需将分类下文章全部转为默认分类
term.deleteById = async(id) => {

    return await term.delete({ where: { id: id } }).catch(err => { console.error(err) })

    // post.update()
}

// 删除项目类型
term.deleteTypeById = async(id) => {
    return await termtype.delete({ where: { id: id } }).catch(err => { console.error(err) })
}

// 更新项目
term.updateById = async(id, obj) => {
    obj.id = id
    return await term.update(obj)
}

// 更新项目类型
term.updateType = async(id, obj) => {
    obj.id = id
    return await termtype.update(obj)
}



module.exports = term