import { Router } from "express"
import {validateToken, checkAdmin} from "../middleware/index.js"
import {newPost, publishPost, deletePost, forceDelete, adminListPosts, adminGetPost} from "../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/admin", route)
    route.get("/blog/list-posts",validateToken, checkAdmin, adminListPosts)
    route.get("/blog/get-post/:id",validateToken, checkAdmin, adminGetPost)
    route.post("/blog/new-post", validateToken, checkAdmin, newPost)
    route.post("/blog/publish-post/:id", validateToken, checkAdmin, publishPost)
    route.delete("/blog/delete-post/:id",validateToken, checkAdmin, deletePost)
    route.delete("/blog/force-delete/:id",validateToken, checkAdmin, forceDelete)
}