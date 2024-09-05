import { likeComment } from "../../services/comment/index.js"

export default async (req, res, next) => {
    try {
        await likeComment({userId: req._user._id, commentId: req.params.commentId})
        return res.status(200).json({message: 'Comentario marcado como "Me gusta"' })
    } catch (err) {
        next(err)
    }
}