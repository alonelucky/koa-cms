const { STRING, BIGINT, TEXT, DATE, INTEGER, NOW } = require('sequelize')
const db = require('./db')

let schema = {
    ckey: {
        type: STRING,
        allowNull: false,
        comment: '评论表拓展标签名'
    },
    cvalue: {
        type: TEXT('long'),
        allowNull: false,
        comment: '评论表拓展标签内容'
    }
}

let ops = {
    timestamp: false,
    indexes: [
        { fields: ['id'], unique: true },
        { fields: ['ckey'] },
        { fields: ['commentId'] }
    ]
}

module.exports = db.define('commentmeta', schema, ops)