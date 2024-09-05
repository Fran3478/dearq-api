import { CommentLikeIncrementError } from "../../errors/index.js"
import { CommentLike } from "../../models/index.js"

export default async ({commentId, transaction}) => {
    try {
        await CommentLike.increment("likesCount", {by: 1, where: {id: commentId}, transaction})
        return true
    } catch (err) {
        throw new CommentLikeIncrementError("Error al incrementar likes", err)
    }
}