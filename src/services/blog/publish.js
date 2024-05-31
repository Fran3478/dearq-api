import { PostError, PostNotFoundError, PostFindError, PostPublishedError } from "../../errors/index.js"
import {getPost} from "../post/index.js"
import publishPost from "../post/publishPost.js"

export default async ({id}) => {
    try {
        const post = await getPost({id})
        if(post.published) throw new PostPublishedError("El post ya está publicado")
        await publishPost(post)
    } catch (err) {
        if(err instanceof PostNotFoundError) throw new PostNotFoundError(err.message, err.orig_error)
        if(err instanceof PostPublishedError) throw new PostPublishedError(err.message, err.orig_error)
        if(err instanceof PostFindError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error al publicar post", err)
    }
}