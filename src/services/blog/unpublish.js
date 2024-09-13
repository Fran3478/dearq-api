import { PostError, PostNotFoundError, PostPublishedError, PostSearchError } from "../../errors/index.js"
import { bulkUpdate, findById } from "../../repositories/post/index.js"

export default async ({id, unpublisher}) => {
    try {
        const searchParameters = {where: {id, deleted: false}}
        const post = await findById({searchParameters})
        if(!post.published) throw new PostPublishedError("La publicación que se intenta despublicar, ya se encuentra despublicada")
        const updates = {
            "published": false,
            "unpublished_date": new Date(),
            "unpublisherId": unpublisher
        }
        await bulkUpdate({post, updates})
    } catch (err) {
        if(err instanceof PostNotFoundError || err instanceof PostPublishedError) throw err
        if(err instanceof PostSearchError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Hubo un error desconocido al intentar despublicar", err)
    }
}