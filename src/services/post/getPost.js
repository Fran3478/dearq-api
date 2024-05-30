import { PostFindError } from "../../errors/index.js"
import Post from "../../models/Post.js"

export default async ({id, options = {}}) => {
    try {
        options.where = {...options.where, id}
        const post = await Post.findOne(options)
        if(!post) throw new PostFindError("El post no existe")
        return post
    } catch (err) {
        if(err instanceof PostFindError) throw new PostFindError(err.message, err)
        throw new PostFindError("Error al buscar post", err)
    }
}