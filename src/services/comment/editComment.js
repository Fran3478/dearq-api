import { CommentError, CommentNotFoundError, CommentSearchError, CommentUpdateError, PermissionError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import { findById, update } from "../../repositories/comment/index.js"

export default async ({commentId, userId, content}) => {
    const transaction = await sequelize.transaction()
    try {
        const commentToEdit = await findById({id: commentId})
        if(commentToEdit.userId !== userId) throw new PermissionError("El usuario no posee permiso para editar el comentario")
        const updates = {
            comment: content,
            edited: true,
            edited_date: new Date()
        }
        const editedComment = await update({comment: commentToEdit, updates, transaction})
        return editedComment
    } catch (err) {
        if(err instanceof PermissionError || err instanceof CommentNotFoundError) throw err
        if(err instanceof CommentSearchError ||  err instanceof CommentUpdateError) throw new CommentError(err.message, err.orig_error)
        throw new CommentError("Hubo un error al intentar actualizar el comentario", err)
    }
}