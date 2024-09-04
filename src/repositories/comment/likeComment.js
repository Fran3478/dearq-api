import { CommentLikeCreationError } from "../../errors/index.js"
import { CommentLike } from "../../models/index.js"

export default async ({userId, commentId, transaction}) => {
    try {
        await CommentLike.create({userId, commentId}, {transaction})
        return true
    } catch (err) {
        throw new CommentLikeCreationError("Hubo un error al registrar el like", err)
    }
}