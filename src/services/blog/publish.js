import { PostUpdateError } from "../../errors/index.js"
import getPost from "../post/getPost.js"
import publishPost from "../post/publishPost.js"

export default async ({id}) => {
    try {
        const post = await getPost(id)
        if(post.published) throw new PostUpdateError("El post ya se encuentra publicado")
        await publishPost(post)
    } catch (err) {
        if(err instanceof PostUpdateError) throw new PostUpdateError(err.message, err.orig_error)
        throw new PostUpdateError("Error al publicar post", err)
    }
}