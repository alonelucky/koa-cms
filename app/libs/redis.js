const redis = require('redis')
const redisCfg = require('../../config').redis
const {Store} = require('koa-session2')
const bluebird = require("bluebird")
bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const client = redis.createClient(redisCfg)

class RedisStore extends Store {
    constructor (){
        super()
        this.redis = client
    }

    async get (sid,ctx) {
        let data = await this.redis.getAsync(`SESSION:${sid}`);
        return JSON.parse(data);
    }

    async set (session,{sid = this.getID(24), maxAge = 1000*60*60 } = {},ctx) {
        try {
            await this.redis.set(`SESSION:${sid}`, JSON.stringify(session), 'EX', maxAge / 1000)
        }catch(e){

        }
        return sid;
    }

    async distroy(sid,ctx){
       return await this.redis.del(`SESSION:${sid}`)
    }

}

exports.redis=client
exports.Store=RedisStore

