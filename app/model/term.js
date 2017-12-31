const { STRING, BIGINT, TEXT, DATE, INTEGER, NOW } = require('sequelize')
const db = require('./db')

let schema = {
    name: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '项目名称'
    },
    uriName: {
        type: STRING,
        unique: true,
        comment: '项目别名,仅支持字母和数字(用于url展示)'
    },
    description: {
        type: STRING,
        comment: '项目详情描述'
    },
    type: {
        type: INTEGER,
        defaultValue: 1
    }
}

let ops = {

}

module.exports = db.define('term', schema, ops)