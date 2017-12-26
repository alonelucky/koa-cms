const {STRING, BIGINT,TEXT, DATE, INTEGER, NOW} = require('sequelize')
const db = require('./db')

let schema = {
    key:{
        type:STRING,
        allowNull:false,
        unique:true,
        comment:'用户名,用于登录'
    },
    value:{
        type:STRING,
        allowNull:false,
        comment:'登录密码'
    }
}

let ops = {
    timestamp:false,
    indexes:[
        {fields:['key']}
    ]
}

module.exports=db.define('user',schema,ops)