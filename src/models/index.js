import sequelize from "./db.js"
import Category from "./Category.js"
import Comment from "./Comment.js"
import Post from "./Post.js"
import PostContent from "./PostContent.js"
import PostView from "./PostView.js"
import User from "./User.js"

User.hasMany(Post, {foreignKey: "authorId", as: "authoredPosts", onDelete: 'CASCADE'})
User.hasMany(Post, {foreignKey: "editorId", as: "editedPosts", onDelete: 'CASCADE'})
User.hasMany(Post, {foreignKey: "publisherId", as: "publishedPosts", onDelete: 'CASCADE'})
User.hasMany(Post, {foreignKey: "unpublisherId", as: "unpublishedPosts", onDelete: 'CASCADE'})
User.hasMany(Post, {foreignKey: "deleterId", as: "deletedPosts", onDelete: 'CASCADE'})
Post.belongsTo(User, {foreignKey: "authorId", as: "author", onDelete: 'CASCADE'})
Post.belongsTo(User, {foreignKey: "editorId", as: "editor", onDelete: 'CASCADE'})
Post.belongsTo(User, {foreignKey: "publisherId", as: "publisher", onDelete: 'CASCADE'})
Post.belongsTo(User, {foreignKey: "unpublisherId", as: "unpublisher", onDelete: 'CASCADE'})
Post.belongsTo(User, {foreignKey: "deleterId", as: "deleter", onDelete: 'CASCADE'})
Post.hasOne(PostView, {foreignKey: "postId", as: "postView", onDelete: 'CASCADE'})
PostView.belongsTo(Post, {foreignKey: "postId", as: "post", onDelete: 'CASCADE'})
Post.hasOne(PostContent, {foreignKey: "postId", as: "postContent", onDelete: 'CASCADE'})
PostContent.belongsTo(Post, {foreignKey: "postId", as: "post", onDelete: 'CASCADE'})
Post.belongsToMany(Category, {through: "post_category", foreignKey: "postId", onDelete: 'CASCADE'})
Category.belongsToMany(Post, {through: "post_category", foreignKey: "categoryId", onDelete: 'CASCADE'})
Post.hasMany(Comment, {foreignKey: "postId", as: "comments", onDelete: 'CASCADE'})
Comment.belongsTo(Post, {foreignKey: "postId", as: "post", onDelete: 'CASCADE'})
Comment.hasMany(Comment, {foreignKey: "parentId", as: "replies", onDelete: 'CASCADE'})
Comment.belongsTo(Comment, {foreignKey: "parentId", as: "parent", onDelete: 'CASCADE'})

export {
    sequelize,
    Category,
    Comment,
    Post,
    PostContent,
    PostView,
    User
}