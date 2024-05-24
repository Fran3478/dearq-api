import { Router } from "express";
import validateToken from "../middleware/validateToken.js";
import {newPost} from "../controllers/blog/index.js"

const route = Router()

export default (app) => {
    app.use("/blog", route)
    route.post("/new-post", validateToken, newPost)
}