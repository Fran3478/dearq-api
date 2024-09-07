import { CommentDeleteError, CommentError, CommentNotFoundError, CommentSearchError, CommentUpdateError, PermissionError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import { findById, update } from "../../repositories/comment/index.js"

export default async ({commentId, userId}) => {
    const transaction = await sequelize.transaction()
    try {
        const commentToDelete = await findById({id: commentId})

        if(commentToDelete.userId !== userId) throw new PermissionError("El usuario no posee permiso para editar el comentario")
        if(commentToDelete.deleted) throw new CommentDeleteError("El comentario ya se encuentra eliminado")
        if(commentToDelete.blocked) throw new CommentDeleteError("El comentario que intenta eliminar esta bloqueado")
        const updates = {
            deleted: true,
            deleted_date: new Date()
        }
        await update({comment: commentToDelete, updates, transaction})
        await transaction.commit()
        return true
    } catch (err) {
        await transaction.rollback()
        if(err instanceof PermissionError || err instanceof CommentNotFoundError || err instanceof CommentDeleteError) throw err
        if(err instanceof CommentSearchError ||  err instanceof CommentUpdateError) throw new CommentError(err.message, err.orig_error)
        throw new CommentError("Hubo un error al intentar eliminar el comentario", err)
    }
}