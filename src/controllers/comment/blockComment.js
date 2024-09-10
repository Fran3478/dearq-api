import { validationResult } from "express-validator";
import { blockComment, checkExist } from "../../services/comment/index.js"

export default async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        await checkExist({commentId: req.params.commentId})
        await blockComment({commentId: req.params.commentId, reason: req.body.blockReason})
        return res.status(200).json({message: "El comentario fue bloqueado"})
    } catch (err) {
        next(err)
    }
}