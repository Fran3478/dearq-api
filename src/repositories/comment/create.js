import { CommentCreationError } from "../../errors/index.js"
import { Comment } from "../../models/index.js"

export default async ({content, userId, transaction, postId, parentId = null}) => {
    try {
        const currentDate = new Date()
        const newComment = await Comment.create({content, created_date: currentDate, userId, postId, parentId}, {transaction})
        return newComment
    } catch (err) {
        throw new CommentCreationError("No se pudo registrar el comentario", err)
    }
}