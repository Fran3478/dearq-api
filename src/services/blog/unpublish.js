import { PostError, PostNotFoundError, PostPublishedError, PostSearchError } from "../../errors/index.js"
import { getPost, unpublishPost } from "../post/index.js"

export default async ({id, unpublisher}) => {
    try {
        const post = await getPost({id})
        if(!post.published) throw new PostPublishedError("El post que se intenta despublicar, ya se encuentra despublicado actualmente")
        await unpublishPost({post, unpublisher})
    } catch (err) {
        if(err instanceof PostNotFoundError || err instanceof PostPublishedError) throw err
        if(err instanceof PostSearchError || err instanceof PostError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error al intentar despublicar", err)
    }
}