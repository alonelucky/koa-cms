const {STRING, BIGINT,TEXT, DATE, INTEGER, NOW} = require('sequelize')
const db = require('./db')

let schema = {
    username:{
        type:STRING,
        allowNull:false,
        unique:true,
        comment:'用户名,用于登录'
    },
    password:{
        type:STRING,
        allowNull:false,
        comment:'登录密码'
    },
    email:{
        type:STRING,
        unique:true,
        comment:'用户邮箱,用于验证注册用户是否真实'
    },
    status:{
        type:INTEGER(3),
        defaultValue:10,
        comment:'激活状态,0:已激活,10:待激活,20:锁定用户,30:违规用户'
    },
    authority:{
        type:INTEGER(3),
        defaultValue:10,
        comment:'用户权限,0:超级用户,10:注册用户'
    },
    loginedAt:{
        type:DATE,
        defaultValue:NOW,
        comment:'登录日期记录'
    }
}

let ops = {
    indexes:[
        {fields:['username']},
        {fields:['email']}
    ]
}

module.exports=db.define('user',schema,ops)