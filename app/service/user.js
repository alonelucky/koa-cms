const db = require('./model')
const {user,usermeta,post,postmeta,comment,commentmeta,term} = db.models


/*
*   在用户注册注销时使用
*   @parmas     {string}        用户名字符串
*   @return     {Object}        用户相关信息(用户名/密码/邮箱/状态)
* */
user.prototype.findByName=async (name) => {
    // 如果用户名为空,则直接返回空
    if(!name){
        return null
    }
    let ops = {
        where:{
            username:name
        },
        attributes:['password','username','email','status','id']
    }
    return await user.findOne(ops)
}

/*
*   常用函数
*   @parmas     {Number}        用户ID
*   @return     {Object}        用户相关信息(用户名/密码/邮箱/状态)
* */
user.prototype.findById=async (id) => {
    // 如果传入的id不是数字,直接返回空
    if(!Number(id)){
        return null
    }
    let ops = {
        where:{
            username:name
        },
        attributes:['password','username','email','status','id'],
        include:[
            {model:usermeta,attributes:['ukey','uvalue']}
        ]
    }
    return await user.findOne(ops)
}

user.prototype.findByIdAndPost=async (id) => {
    // 如果传入的id不是数字,直接返回空
    if(!Number(id)){
        return null
    }
    let ops = {
        where:{
            username:name
        },
        attributes:['password','username','email','status','id'],
        include:[
            {model:usermeta,attributes:['ukey','uvalue']},
            {model:post,attributes:['title','abstract','createdAt','id'],where:{publishStatus:0}}
        ]
    }
    return await user.findOne(ops)
}

user.prototype.findByIdAndComment=async (id) => {
    // 如果传入的id不是数字,直接返回空
    if(!Number(id)){
        return null
    }
    let ops = {
        where:{
            username:name
        },
        attributes:['password','username','email','status','id'],
        include:[
            {model:usermeta,attributes:['ukey','uvalue']},
            {model:post,attributes:['content','id'],where:{status:0},include:[{model:post,attributes:['id','title','abstract']}]}
        ]
    }
    return await user.findOne(ops)
}

user.prototype.signup=async (obj) =>{
    // 如果用户名密码不存在,直接返回
    if(!obj.username || !obj.password){
        return null
    }

    let user = await user.findByName(obj.username)
    // 如果用户已存在,直接返回空
    if(!user){
        return null
    }

    let ops = {
        username:obj.username,
        password:obj.password
    }

    return await user.create(ops)
}



module.exports=user