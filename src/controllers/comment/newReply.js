import { validationResult } from "express-validator";
import {newComment} from "../../services/comment/index.js"
import {checkExist as checkPostExist} from "../../services/post/index.js"
import {checkExist} from "../../services/comment/index.js"

export default async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        await checkPostExist({postId: req.params.postId})
        await checkExist({commentId: req.params.commentId})
        const comment = await newComment({content: req.body.content, userId: req._user._id, postId: req.params.postId, parentId: req.params.commentId})
        return res.status(200).json({message: "Comentario creado con exito", comment})
    } catch (err) {
        next(err)
    }
}