import { CommentError, CommentNotFoundError, CommentSearchError, CommentUpdateError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import { update } from "../../repositories/comment/index.js"

export default async ({commentId, reason}) => {
    const transaction = await sequelize.transaction()
    try {
        const commentToBlock = await findById({id: commentId})
        const updates = {
            blocked: true,
            blocked_date: new Date(),
            block_reason: reason
        }
        await update({comment: commentToBlock, updates, transaction})
        return true
    } catch (err) {
        if(err instanceof CommentNotFoundError) throw err
        if(err instanceof CommentSearchError ||  err instanceof CommentUpdateError) throw new CommentError(err.message, err.orig_error)
        throw new CommentError("Hubo un error al intentar bloquear el comentario", err)
    }
}