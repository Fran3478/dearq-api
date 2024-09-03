import { CommentError, CommentNotFoundError, CommentSearchError, CommentUpdateError, PermissionError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import { update } from "../../repositories/comment/index.js"

export default async ({commentId, userId}) => {
    const transaction = await sequelize.transaction()
    try {
        const commentToDelete = await findById({id: commentId})

        if(commentToDelete.userId !== userId) throw new PermissionError("El usuario no posee permiso para editar el comentario")
        const updates = {
            deleted: true,
            deleted_date: new Date()
        }
        await update({comment: commentToDelete, updates, transaction})
        return true
    } catch (err) {
        if(err instanceof PermissionError || err instanceof CommentNotFoundError) throw err
        if(err instanceof CommentSearchError ||  err instanceof CommentUpdateError) throw new CommentError(err.message, err.orig_error)
        throw new CommentError("Hubo un error al intentar eliminar el comentario", err)
    }
}