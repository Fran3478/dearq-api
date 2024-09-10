import { Router } from "express";
import { getComments, getReplies } from "../../controllers/comment/index.js";

const route = Router()

export default (app) => {
    app.use("/comments", route)
    route.get("/:postId", getComments)
    route.get("/:postId/:parentId", getReplies)
}