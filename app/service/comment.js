const db = require('./model')
const _ = require('lodash')
const { user, usermeta, post, postmeta, comment, commentmeta, term } = db.models


module.exports = comment