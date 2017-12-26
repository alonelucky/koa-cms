const Sequelize = require('sequelize')
const dbCfg = require('../../config').db


module.exports=new Sequelize(dbCfg.database,dbCfg.user,dbCfg.password,dbCfg)