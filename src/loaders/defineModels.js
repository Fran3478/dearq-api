import User from "../models/User.js"
import Post from "../models/Post.js"
import Category from "../models/Category.js"
import PostView from "../models/PostView.js"
import PostContent from "../models/PostContent.js"
import Comment from "../models/Comment.js"

User.hasMany(Post, {foreignKey: "userId"})
Post.belongsTo(User, {foreignKey: "userId"})
Post.hasOne(PostView, {foreignKey: "postId", as: "postView"})
PostView.belongsTo(Post, {foreignKey: "postId", as: "post"})
Post.hasOne(PostContent, {foreignKey: "postId", as: "postContent"})
PostContent.belongsTo(Post, {foreignKey: "postId", as: "post"})
Post.belongsToMany(Category, {through: "post_category", foreignKey: "postId"})
Category.belongsToMany(Post, {through: "post_category", foreignKey: "categoryId"})
Post.hasMany(Comment, {foreignKey: "postId", as: "comments"})
Comment.belongsTo(Post, {foreignKey: "postId", as: "post"})
Comment.hasMany(Comment, {foreignKey: "parentId", as: "replies"})
Comment.belongsTo(Comment, {foreignKey: "parentId", as: "parent"})

export {
    User,
    Post,
    PostView,
    PostContent,
    Category,
    Comment
}