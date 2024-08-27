import { PostError, PostNotFoundError, PostSearchError, PostPublishedError } from "../../errors/index.js"
import {bulkUpdate, findById} from "../../repositories/post/index.js"

export default async ({id, publisher, action}) => {
    try {
        const searchParameters = {where: {id, deleted: false}}
        const post = await findById({searchParameters})
        const publish = action === "publish"
        if(publish && post.published) throw new PostPublishedError("El post que se intenta publicar, ya se encuentra publicado actualmente")
        if(!publish && !post.published ) throw new PostPublishedError("El post que se intenta despublicar, ya se encuentra despublicado actualmente")
        const updates = {
            "published" : publish,
        }
        if(publish) {
            updates.published_date =  new Date()
            updates.publisherId = publisher
        }
        if(!publish) {
            updates.unpublished_date = new Date()
            updates.unpublisherId = publisher
        }
        await bulkUpdate({post, updates})
    } catch (err) {
        if(err instanceof PostNotFoundError || err instanceof PostPublishedError) throw err
        if(err instanceof PostSearchError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error al intentar publicar", err)
    }
}