import { PostDeleteError, PostError, PostNotFoundError } from "../../errors/index.js"
import {bulkUpdate, findById} from "../../repositories/post/index.js"

export default async ({id, deleter}) => {
    try {
        const searchParameters = {
            where: {id}
        }
        const post = await findById({searchParameters})
        if(post.deleted) throw new PostDeleteError("La publicación que se intenta eliminar, ya se encuentra eliminada actualmente")
        const updates = {
            deleted: true,
            published: false,
            deleted_date: new Date(),
            deleterId: deleter
        }
        await bulkUpdate({post, updates})
    } catch (err) {
        if(err instanceof PostNotFoundError) throw new PostNotFoundError(err.message, err.orig_error)
        throw new PostError(err.message, err.orig_error)
    }
}