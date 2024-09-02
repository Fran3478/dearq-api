import { CommentNotFoundError, CommentSearchError } from "../../errors/index.js"
import { Comment } from "../../models/index.js"

export default async ({id}) => {
    try {
        const comment = await Comment.findOne({
            where: {id}
        })
        if(!comment) throw new CommentNotFoundError("El comentario no existe")
        return comment
    } catch (err) {
        if(err instanceof CommentNotFoundError) throw err
        throw new CommentSearchError("Error al buscar el comentario", err)
    }
}