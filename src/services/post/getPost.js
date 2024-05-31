import { PostFindError, PostNotFoundError } from "../../errors/index.js"
import Post from "../../models/Post.js"

export default async ({id, options = {}}) => {
    try {
        options.where = {...options.where, id}
        const post = await Post.findOne(options)
        if(!post) throw new PostNotFoundError("El post no existe")
        return post
    } catch (err) {
        if(err instanceof PostNotFoundError) throw new PostNotFoundError(err.message, err)
        throw new PostFindError("Error al buscar post", err)
    }
}