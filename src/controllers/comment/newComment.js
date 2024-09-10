import { validationResult } from "express-validator";
import { newComment } from "../../services/comment/index.js"
import { checkExist as checkPostExist } from "../../services/post/index.js"

export default async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        await checkPostExist({postId: req.params.postId, published: true})
        const comment = await newComment({content: req.body.content, userId: req._user._id, postId: req.params.postId})
        return res.status(200).json({message: "Comentario creado con exito", comment})
    } catch (err) {
        next(err)
    }
}