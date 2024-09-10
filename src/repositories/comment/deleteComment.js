import { CommentDeleteError } from "../../errors/index.js"
import { Comment } from "../../models/index.js"

export default async ({id, transaction}) => {
    try {
        const deletion = await Comment.destroy({where: {id, deleted: true}}, {transaction})
        if(!deletion) throw new CommentDeleteError("El comentario no esta autorizado para eliminación o ya fué eliminado")
    } catch (err) {
        if(err instanceof CommentDeleteError) throw err
        throw new CommentDeleteError("No se pudo eliminar el comentario", err)
    }
}