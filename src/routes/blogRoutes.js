import { Router } from "express"
import {listPosts, getPost} from "../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/blog", route)
    route.get("/get-post/:id", getPost)
    route.get("/list-posts", listPosts)
}