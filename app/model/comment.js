const { STRING, BIGINT, TEXT, DATE, INTEGER, NOW } = require('sequelize')
const db = require('./db')

let schema = {
    content: {
        type: TEXT('long'),
        comment: '正文内容'
    },
    status: {
        type: INTEGER(3),
        defaultValue: 10,
        comment: '评论状态,0:通过审核,10:待审核,30:垃圾箱(软删除)'
    }
}

let ops = {
    indexes: [
        { fields: ['status'] },
        { fields: ['id'], unique: true },
        { fields: ['postId'] },
        { fields: ['userId'] },
        { fields: ['commentId'] }
    ]
}

module.exports = db.define('comment', schema, ops)