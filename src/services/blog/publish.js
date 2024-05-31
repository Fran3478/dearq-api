import { PostError, PostNotFoundError, PostFindError, PostUpdateError } from "../../errors/index.js"
import {getPost} from "../post/index.js"
import publishPost from "../post/publishPost.js"

export default async ({id}) => {
    try {
        const post = await getPost({id})
        if(post.published) throw new PostUpdateError("El post ya se encuentra publicado")
        await publishPost(post)
    } catch (err) {
        if(err instanceof PostUpdateError || err instanceof PostNotFoundError || err instanceof PostFindError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error al publicar post", err)
    }
}