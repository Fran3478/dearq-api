import { Router } from "express";
import { checkAdmin, checkUser, validateToken } from "../../middleware/index.js";
import { blockComment, deleteComment, editComment, likeComment, newComment, newReply, unlikeComment } from "../../controllers/comment/index.js"
import { validateContent, validateReason } from "../../validators/validateComment.js"

const route = Router()

export default (app) => {
    app.use("/comments", route)
    route.post("/new/:postId", validateToken, checkUser, validateContent, newComment)
    route.post("/new/:postId/:commentId", validateToken, checkUser, validateContent, newReply)
    route.post("/like/:commentId", validateToken, checkUser, likeComment)
    route.delete("/like/:commentId", validateToken, checkUser, unlikeComment)
    route.patch("/edit/:commentId", validateToken, checkUser, validateContent, editComment)
    route.delete("/delete/:commentId", validateToken, checkUser, deleteComment)
    route.patch("/block/:commentId", validateToken, checkAdmin, validateReason, blockComment)
}