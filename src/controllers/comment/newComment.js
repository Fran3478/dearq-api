import {newComment} from "../../services/comment/index.js"

export default async (req, res, next) => {
    try {
        const comment = await newComment({content: req.body.content, userId: req._user._id, postId: req.params.postId})
        return res.status(200).json({message: "Comentario creado con exito", comment})
    } catch (err) {
        next(err)
    }
}