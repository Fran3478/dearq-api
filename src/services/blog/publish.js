import { PostError, PostNotFoundError, PostSearchError, PostPublishedError } from "../../errors/index.js"
import {getPost, publishPost} from "../post/index.js"

export default async ({id, publisher}) => {
    try {
        const post = await getPost({id})
        if(post.published) throw new PostPublishedError("El post que se intenta publicar, ya se encuentra publicado actualmente")
        await publishPost({post, publisher})
    } catch (err) {
        if(err instanceof PostNotFoundError || err instanceof PostPublishedError) throw err
        if(err instanceof PostSearchError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error al intentar publicar", err)
    }
}