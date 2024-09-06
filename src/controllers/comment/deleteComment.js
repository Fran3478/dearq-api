import { checkExist, deleteComment } from "../../services/comment/index.js"

export default async (req, res, next) => {
    try {
        await checkExist({id: req.params.commentId})
        await deleteComment({commentId: req.params.commentId, userId: req._user._id})
        return res.status(200).json({message: "Comentario eliminado con exito"})
    } catch (err) {
        next(err)
    }
}