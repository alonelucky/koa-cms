const { STRING, BIGINT, TEXT, DATE, INTEGER, NOW } = require('sequelize')
const db = require('./db')

let schema = {
    name: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '类型名称'
    },
    uriName: {
        type: STRING(50),
        defaultValue: 'category',
        comment: '类型的西文字母,分类/标签等'
    },
    description: {
        type: STRING,
        comment: '类型描述'
    }
}

let ops = {

}

module.exports = db.define('termtype', schema, ops)