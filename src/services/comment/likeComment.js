import { CommentLikeCreationError, CommentLikeDupError, CommentLikeError, CommentLikeIncrementError } from "../../errors/index.js"
import {sequelize} from "../../models/index.js"
import { findLike, incremetLike, likeComment } from "../../repositories/comment/index.js"

export default async ({userId, commentId}) => {
    const transaction = await sequelize.transaction()
    try {
        const existingLike = await findLike({userId, commentId})
        if(existingLike) {
            throw new CommentLikeDupError("Ya has indicado que te gusta el comentario")
        }
        await likeComment({userId, commentId, transaction})
        await incremetLike({commentId, transaction})
        await transaction.commit()
        return true
    } catch (err) {
        await transaction.rollback()
        if(err instanceof CommentLikeDupError) throw err
        if(err instanceof CommentLikeCreationError || err instanceof CommentLikeIncrementError) throw new CommentLikeError(err.message, err.orig_error)
        throw new CommentLikeError(err)
    }
}