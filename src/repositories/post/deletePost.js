import { PostDeleteError } from "../../errors/index.js"
import {Post} from "../../models/index.js"

export default async ({id, transaction}) => {
    try {
        const deletion = await Post.destroy({where: {id, deleted: true}, transaction})
        if(!deletion) throw new PostDeleteError("La publicación no está autorizada para eliminación o ya fue eliminada")
    } catch (err) {
        if(err instanceof PostDeleteError) throw err
        throw new PostDeleteError("No se pudo eliminar la publicación", err)
    }
}