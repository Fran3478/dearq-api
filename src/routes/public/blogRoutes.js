import { Router } from "express"
import {listPosts, getPost} from "../../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/posts", route)
    route.get("/:id", getPost)
    route.get("/", listPosts)
}