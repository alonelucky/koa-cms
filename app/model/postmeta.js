const { STRING, BIGINT, TEXT, DATE, INTEGER, NOW } = require('sequelize')
const db = require('./db')

let schema = {
    pkey: {
        type: STRING,
        allowNull: false,
        comment: '文章拓展标签名'
    },
    pvalue: {
        type: TEXT('long'),
        allowNull: false,
        comment: '文章拓展标签内容'
    }
}

let ops = {
    timestamp: false,
    indexes: [
        { fields: ['pkey'] },
        { fields: ['postId'] },
    ]
}

module.exports = db.define('postmeta', schema, ops)