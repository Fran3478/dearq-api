import { Router } from "express";
import {validateToken} from "../middleware/index.js";
import {newPost, publishPost, listPosts} from "../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/blog", route)
    route.get("/list-posts", listPosts)
    route.post("/new-post", validateToken, newPost)
    route.post("/publish-post/:id", validateToken, publishPost)
}