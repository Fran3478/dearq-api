import createPost from "./createPost.js";
import publish from "./publish.js";
import unpublish from "./unpublish.js"
import getPosts from "./getPosts.js";
import getPostById from "./getPostById.js";
import deletePost from "./deletePost.js";
import restorePost from "../../controllers/blog/restorePost.js";
import forceDeletePost from "./forceDeletePost.js";
import getPostsAdmin from "./getPostsAdmin.js"
import getPostByIdAdmin from "./getPostByIdAdmin.js";
import updatePost from "./updatePost.js";

export {
    createPost,
    publish,
    unpublish,
    getPosts,
    getPostById,
    deletePost,
    restorePost,
    forceDeletePost,
    getPostsAdmin,
    getPostByIdAdmin,
    updatePost
}