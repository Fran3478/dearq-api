import { checkExist, unlikeComment } from "../../services/comment/index.js"

export default async(req, res, next) => {
    try {
        await checkExist({commentId: req.params.commentId})
        await unlikeComment({commentId: req.params.commentId, userId: req._user._id})
        return res.status(200).json({message: "Comentario desmarcado como me gusta"})
    } catch (err) {
        next(err)
    }
}