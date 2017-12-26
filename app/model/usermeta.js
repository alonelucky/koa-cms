const {STRING, BIGINT,TEXT, DATE, INTEGER, NOW} = require('sequelize')
const db = require('./db')

let schema = {
    ukey:{
        type:STRING,
        allowNull:false,
        comment:'用户表拓展标签名'
    },
    uvalue:{
        type:TEXT('long'),
        allowNull:false,
        comment:'用户表拓展标签内容'
    }
}

let ops = {
    timestamp:false,
    indexes:[
        {fields:['ukey']}
    ]
}

module.exports=db.define('usermeta',schema,ops)