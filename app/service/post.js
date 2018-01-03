const db = require('./model')
const libArray = require('../libs/array')
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


module.exports = post