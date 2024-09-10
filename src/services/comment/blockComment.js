import { CommentBlockError, CommentError, CommentNotFoundError, CommentSearchError, CommentUpdateError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import { findById, update } from "../../repositories/comment/index.js"

export default async ({commentId, reason}) => {
    const transaction = await sequelize.transaction()
    try {
        const commentToBlock = await findById({id: commentId})
        if(commentToBlock.blocked) throw new CommentBlockError("El comentario ya se encuentra bloqueado")
        if(commentToBlock.deleted) throw new CommentBlockError("El comentario que intenta bloquear ya fue eliminado")
        const updates = {
            blocked: true,
            blocked_date: new Date(),
            block_reason: reason
        }
        await update({comment: commentToBlock, updates, transaction})
        await transaction.commit()
        return true
    } catch (err) {
        await transaction.rollback()
        if(err instanceof CommentNotFoundError || err instanceof CommentBlockError) throw err
        if(err instanceof CommentSearchError ||  err instanceof CommentUpdateError) throw new CommentError(err.message, err.orig_error)
        throw new CommentError("Hubo un error al intentar bloquear el comentario", err)
    }
}