const { STRING, BIGINT, TEXT, DATE, INTEGER, NOW } = require('sequelize')
const db = require('./db')

let schema = {
    title: {
        type: STRING(255),
        allowNull: false,
        comment: '文章标题'
    },
    abstract: {
        type: STRING,
        comment: '文章摘要'
    },
    content: {
        type: TEXT('long'),
        comment: '正文内容'
    },
    publishStatus: {
        type: INTEGER(3),
        defaultValue: 10,
        comment: '发布状态,0:发布,10:审核,20:草稿,30:垃圾箱(软删除)'
    },
    "type": {
        type: STRING,
        defaultValue: 'post'
    }
}

let ops = {
    indexes: [
        { fields: ['title'] },
        { fields: ['userId'], name: 'author' },
        { fields: ['type'], name: 'post_type' },
        { fields: ['publishStatus'] }
    ]
}

module.exports = db.define('post', schema, ops)