import { CommentCreationError, CommentError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import {create} from "../../repositories/comment/index.js"

export default async ({commentId, userId}) => {
    const transaction = await sequelize.transaction()
    try {
        const comment = await create({comment: commentId, transaction, userId})
        return comment
    } catch (err) {
        if(err instanceof CommentCreationError) throw new CommentError(err.message, err.orig_error)
        throw new CommentError("Error inesperado al registrar el comentario", err)
    }
}