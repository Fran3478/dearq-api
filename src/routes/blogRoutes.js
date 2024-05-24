import { Router } from "express";
import validateToken from "../middleware/validateToken.js";
import {newPost, publishPost} from "../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/blog", route)
    route.post("/new-post", validateToken, newPost)
    route.post("/publish-post/:id", validateToken, publishPost)
}