import { Router } from "express";
import {validateToken} from "../middleware/index.js";
import {newPost, publishPost, listPosts, getPost, deletePost} from "../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/blog", route)
    route.get("/get-post/:id", getPost)
    route.get("/list-posts", listPosts)
    route.post("/new-post", validateToken, newPost)
    route.post("/publish-post/:id", validateToken, publishPost)
    route.delete("/delete-post/:id", validateToken, deletePost)
}