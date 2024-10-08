import { CommentCreationError, CommentError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import { create } from "../../repositories/comment/index.js"

export default async ({content, userId, postId, parentId = null}) => {
    const transaction = await sequelize.transaction()
    try {
        const newComment = await create({content, transaction, userId, postId, parentId})
        await transaction.commit()
        return newComment
    } catch (err) {
        await transaction.rollback
        if(err instanceof CommentCreationError) throw new CommentError(err.message, err.orig_error)
        throw new CommentError("Error inesperado al registrar el comentario", err)
    }
}