import { CommentLikeCountError } from "../../errors/index.js"
import { Comment } from "../../models/index.js"

export default async ({commentId, transaction}) => {
    try {
        await Comment.increment("likesCount", {by: 1, where: {id: commentId}, transaction})
        return true
    } catch (err) {
        throw new CommentLikeCountError("Error al incrementar likes", err)
    }
}