const db = require('./db')
const User = require('./user')
const UserMeta = require('./usermeta')
const Post = require('./post')
const PostMeta = require('./postmeta')
const Term = require('./term')
const TermMeta = require('./termmeta')
const Comment = require('./comment')
const CommentMeta = require('./commentmeta')
const Term2Post = require('./term2post')
const Opstion = require('./term')
const TermType = require('./termtype')



User.hasMany(Post, { constraints: false })
Post.belongsTo(User, { constraints: false })

User.hasMany(UserMeta, { constraints: false })
UserMeta.belongsTo(User, { constraints: false })

User.hasMany(Comment, { constraints: false })
Comment.belongsTo(User, { constraints: false })

Post.hasMany(Post, { constraints: false })
Post.belongsTo(Post, { constraints: false })

Post.hasMany(PostMeta, { constraints: false })
PostMeta.belongsTo(Post, { constraints: false })

Post.hasMany(Comment, { constraints: false })
Comment.belongsTo(Post, { constraints: false })

Term.hasMany(TermMeta, { constraints: false })
TermMeta.belongsTo(Term, { constraints: false })

Term.hasMany(Term, { constraints: false })
Term.belongsTo(Term, { constraints: false })

TermType.hasMany(Term, { constraints: false, foreignKey: 'type' })
Term.belongsTo(TermType, { constraints: false, foreignKey: 'type' })

// term psot
Term.belongsToMany(Post, { constraints: false, through: Term2Post })
Post.belongsToMany(Term, { constraints: false, through: Term2Post })

Comment.hasMany(CommentMeta, { constraints: false })
CommentMeta.belongsTo(Comment, { constraints: false })

Comment.hasMany(Comment, { constraints: false })
Comment.belongsTo(Comment, { constraints: false })

db.sync({ force: true })


module.exports = db