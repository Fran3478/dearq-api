import { CommentLikeCountError } from "../../errors/index.js"
import { Comment } from "../../models/index.js"

export default async ({commentId, transaction}) => {
    try {
        await Comment.decrement("likesCount", {by: 1, where: {id: commentId}, transaction})
        return true
    } catch (err) {
        throw new CommentLikeCountError("Error al decrementar likes", err)
    }
}