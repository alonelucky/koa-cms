const {STRING, BIGINT,TEXT, DATE, INTEGER, NOW} = require('sequelize')
const db = require('./db')

let schema = {
    tkey:{
        type:STRING,
        allowNull:false,
        comment:'term表拓展标签名'
    },
    tvalue:{
        type:TEXT('long'),
        allowNull:false,
        comment:'term表拓展标签内容'
    }
}

let ops = {
    timestamp:false,
    indexes:[
        {fields:['tkey']}
    ]
}

module.exports=db.define('termmeta',schema,ops)