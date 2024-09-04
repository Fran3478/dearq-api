import sequelize from "./db.js"
import Category from "./Category.js"
import Comment from "./Comment.js"
import Post from "./Post.js"
import PostContent from "./PostContent.js"
import PostView from "./PostView.js"
import User from "./User.js"
import CommentLike from "./CommentLike.js"

User.hasMany(Post, {foreignKey: "authorId", as: "authoredPosts", onDelete: "SET NULL"})
User.hasMany(Post, {foreignKey: "editorId", as: "editedPosts", onDelete: "SET NULL"})
User.hasMany(Post, {foreignKey: "publisherId", as: "publishedPosts", onDelete: "SET NULL"})
User.hasMany(Post, {foreignKey: "unpublisherId", as: "unpublishedPosts", onDelete: "SET NULL"})
User.hasMany(Post, {foreignKey: "deleterId", as: "deletedPosts", onDelete: "SET NULL"})
Post.belongsTo(User, {foreignKey: "authorId", as: "author", onDelete: "SET NULL"})
Post.belongsTo(User, {foreignKey: "editorId", as: "editor", onDelete: "SET NULL"})
Post.belongsTo(User, {foreignKey: "publisherId", as: "publisher", onDelete: "SET NULL"})
Post.belongsTo(User, {foreignKey: "unpublisherId", as: "unpublisher", onDelete: "SET NULL"})
Post.belongsTo(User, {foreignKey: "deleterId", as: "deleter", onDelete: "SET NULL"})
Post.hasOne(PostView, {foreignKey: "postId", as: "postView", onDelete: "CASCADE"})
PostView.belongsTo(Post, {foreignKey: "postId", as: "post", onDelete: "CASCADE"})
Post.hasOne(PostContent, {foreignKey: "postId", as: "postContent", onDelete: "CASCADE"})
PostContent.belongsTo(Post, {foreignKey: "postId", as: "post", onDelete: "CASCADE"})
Post.belongsToMany(Category, {through: "post_category", foreignKey: "postId", onDelete: "CASCADE"})
Category.belongsToMany(Post, {through: "post_category", foreignKey: "categoryId", onDelete: "CASCADE"})
Post.hasMany(Comment, {foreignKey: "postId", as: "comments", onDelete: "CASCADE"})
Comment.belongsTo(Post, {foreignKey: "postId", as: "post", onDelete: "CASCADE"})
Comment.hasMany(Comment, {foreignKey: "parentId", as: "replies", onDelete: "CASCADE"})
Comment.belongsTo(Comment, {foreignKey: "parentId", as: "parent", onDelete: "CASCADE"})
Comment.belongsTo(User, {foreignKey: "userId", as: "author", onDelete: "CASCADE"})
User.hasMany(Comment, {foreignKey: "userId", as: "authoredComments", onDelete: "CASCADE"})
User.belongsToMany(Comment, {through: "CommentLike", foreignKey: "userid", as: "likedComments", onDelete: "CASCADE"})
Comment.belongsToMany(User, {through: "CommentLike", foreignKey: "commentId", as: "usersWhoLiked", onDelete: "CASCADE"})
User.hasMany(CommentLike, {foreignKey: "userId", as: "commentLikes", onDelete: "CASCADE"})
Comment.hasMany(CommentLike, {foreignKey: "commentId", as: "likes", onDelete: "CASCADE"})
CommentLike.belongsTo(User, {foreignKey: "userId", as: "user", onDelete: "CASCADE"})
CommentLike.belongsTo(Comment, {foreignKey: "commentId", as: "comment", onDelete: "CASCADE"})

export {
    sequelize,
    Category,
    Comment,
    Post,
    PostContent,
    PostView,
    User
}