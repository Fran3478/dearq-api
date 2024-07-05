import { PostSearchError, PostNotFoundError } from "../../errors/index.js"
import {Post} from "../../models/index.js"

export default async ({id, options = {}}) => {
    try {
        options.where = {...options.where, id}
        const post = await Post.findOne(options)
        if(!post) throw new PostNotFoundError("El post no existe o fue eliminado")
        return post
    } catch (err) {
        if(err instanceof PostNotFoundError) throw err
        throw new PostSearchError("Error al buscar post", err)
    }
}