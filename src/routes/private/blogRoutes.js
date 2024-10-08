import { Router } from "express"
import {validateToken, checkAdmin} from "../../middleware/index.js"
import {newPost, publishPost, unpublishPost, deletePost, forceDelete, adminListPosts, adminGetPost, updatePost} from "../../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/posts", route)
    route.get("/",validateToken, checkAdmin, adminListPosts)
    route.get("/:id",validateToken, checkAdmin, adminGetPost)
    route.post("/new", validateToken, checkAdmin, newPost)
    route.patch("/publish/:id", validateToken, checkAdmin, publishPost)
    route.patch("/unpublish/:id", validateToken, checkAdmin, unpublishPost)
    route.patch("/edit/:id", validateToken, checkAdmin, updatePost)
    route.delete("/delete/:id",validateToken, checkAdmin, deletePost)
    route.delete("/force-delete/:id",validateToken, checkAdmin, forceDelete)
}