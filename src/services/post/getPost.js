import { PostCheckError } from "../../errors/index.js"
import Post from "../../models/Post.js"

export default async (id) => {
    try {
        const post = await Post.findByPk(id)
        if(!post) throw new PostCheckError("El post no existe")
        return post
    } catch (err) {
        throw new PostCheckError("Error al buscar post", err)
    }
}