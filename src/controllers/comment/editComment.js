import { editComment } from "../../services/comment/index.js"

export default async (req, res, next) => {
try {
    const editedComment = await editComment({commentId: req.params.commentId, userId: req._user._id, content: req.body.content})
    return res.status(200).json({message: "Comentario editado con exito", editedComment})
} catch (err) {
    next(err)
}
}