import { PostError, PostNotFoundError, PostSearchError, PostPublishedError } from "../../errors/index.js"
import {getPost, publishPost} from "../post/index.js"

export default async ({id}) => {
    try {
        const post = await getPost({id})
        if(post.published) throw new PostPublishedError("El post ya está publicado")
        await publishPost(post)
    } catch (err) {
        if(err instanceof PostNotFoundError || err instanceof PostPublishedError) throw err
        if(err instanceof PostSearchError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error al publicar post", err)
    }
}