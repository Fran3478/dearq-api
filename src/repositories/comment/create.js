import { CommentCreationError } from "../../errors/index.js"
import { Comment } from "../../models/index.js"

export default async ({comment, userId, transaction}) => {
    try {
        const currentDate = new Date()
        const newComment = await Comment.create({comment, created_date: currentDate, userId}, {transaction})
        return newComment
    } catch (err) {
        throw new CommentCreationError("No se pudo registrar el comentario")
    }
}