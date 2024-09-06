import { blockComment, checkExist } from "../../services/comment/index.js"

export default async ({req, res, next}) => {
    try {
        await checkExist({id: req.params.commentId})
        await blockComment({commentId: req.params.commentId, reason: req.body.blockReason})
        return res.status(200).json({message: "El comentario fue bloqueado"})
    } catch (err) {
        next(err)
    }
}