module.exports = {
    web:{
        port:3000
    },
    db:{
        dialect:'mysql',
        host:'127.0.0.1',
        port:3306,
        user:'root',
        password:'123456',
        database:'sequelize'

    },
    redis:{
        host:'127.0.0.1',
        port:'6379'
    }
}