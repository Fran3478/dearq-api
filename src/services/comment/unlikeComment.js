import { CommentLikeCountError, CommentLikeError, CommentLikeNotFoundError, PermissionError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import { decrementLike, findLike, removeLike } from "../../repositories/comment/index.js"


export default async ({commentId, userId}) => {
    const transaction = await sequelize.transaction()
    try {
        const existingLike = await findLike({commentId, userId})
        if(!existingLike) throw new CommentLikeNotFoundError("No se encontro registrado un me gusta para este comentario")
        if(existingLike.userId !== userId) throw new PermissionError("No tienes permiso para realizar la acción")
        await removeLike({like: existingLike, transaction})
        await decrementLike({commentId, transaction})
        await transaction.commit()
        return true
    } catch (err) {
        await transaction.rollback()
        if(err instanceof CommentLikeNotFoundError) throw err
        if(err instanceof CommentLikeCountError) throw new CommentLikeError(err.message, err.orig_error)
        throw new CommentLikeError("Hubo un error inesperado al remover el me gusta", err)
    }
}