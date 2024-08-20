import { Router } from "express"
import {validateToken, checkAdmin} from "../../middleware/index.js"
import {newPost, publishPost, unpublishPost, deletePost, forceDelete, adminListPosts, adminGetPost} from "../../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/posts", route)
    route.get("/",validateToken, checkAdmin, adminListPosts)
    route.get("/:id",validateToken, checkAdmin, adminGetPost)
    route.post("/new", validateToken, checkAdmin, newPost)
    route.post("/publish/:id", validateToken, checkAdmin, publishPost)
    route.post("/unpublish/:id", validateToken, checkAdmin, unpublishPost)
    route.delete("/delete/:id",validateToken, checkAdmin, deletePost)
    route.delete("/force-delete/:id",validateToken, checkAdmin, forceDelete)
}