import { PostError, PostNotFoundError, PostSearchError, PostPublishedError } from "../../errors/index.js"
import {bulkUpdate, findById} from "../../repositories/post/index.js"

export default async ({id, publisher}) => {
    try {
        const searchParameters = {where: {id, deleted: false}}
        const post = await findById({searchParameters})
        if(post.published) throw new PostPublishedError("El post que se intenta publicar, ya se encuentra publicado actualmente")
        
        const updates = {
            "published" : true,
            "published_date": new Date(),
            "publisherId": publisher
        }
        await bulkUpdate({post, updates})
    } catch (err) {
        if(err instanceof PostNotFoundError || err instanceof PostPublishedError) throw err
        if(err instanceof PostSearchError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error al intentar publicar", err)
    }
}