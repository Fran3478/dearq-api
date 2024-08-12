import sequelize from "./db.js"
import Category from "./Category.js"
import Comment from "./Comment.js"
import Post from "./Post.js"
import PostContent from "./PostContent.js"
import PostView from "./PostView.js"
import User from "./User.js"

User.hasMany(Post, {foreignKey: "authorId", as: "authoredPosts"})
User.hasMany(Post, {foreignKey: "publisherId", as: "publishedPosts"})
User.hasMany(Post, {foreignKey: "unpublisherId", as: "unpublishedPosts"})
Post.belongsTo(User, {foreignKey: "authorId", as: "author"})
Post.belongsTo(User, {foreignKey: "publisherId", as: "publisher"})
Post.belongsTo(User, {foreignKey: "unpublisherId", as: "unpublisher"})
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
    sequelize,
    Category,
    Comment,
    Post,
    PostContent,
    PostView,
    User
}