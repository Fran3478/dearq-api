import { validationResult } from "express-validator";
import { checkExist, editComment } from "../../services/comment/index.js"

export default async (req, res, next) => {
try {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
    await checkExist({commentId: req.params.commentId})
    const editedComment = await editComment({commentId: req.params.commentId, userId: req._user._id, content: req.body.content})
    return res.status(200).json({message: "Comentario editado con exito", editedComment})
} catch (err) {
    next(err)
}
}