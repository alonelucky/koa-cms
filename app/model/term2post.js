const db = require('./db')

let schema = {}

let ops = {
    timestamp:false
}

module.exports=db.define('term2post',schema,ops)