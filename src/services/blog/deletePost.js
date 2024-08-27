import { PostDeleteError, PostError, PostNotFoundError } from "../../errors/index.js"
import {bulkUpdate, findById} from "../../repositories/post/index.js"

export default async ({id, deleter, action}) => {
    try {
        const deletion = action === "delete"
        const searchParameters = {
            where: {id}
        }
        const post = await findById({searchParameters})
        if(deletion && post.deleted) throw new PostDeleteError("La publicación que se intenta eliminar, ya se encuentra eliminada actualmente")
        if(!deletion && !post.deleted) throw new PostDeleteError("La publicación que se intenta restaurar, ya se encuentra restaurada actualmente")
        const updates = {
            deleted: deletion
        }
        if(deletion) {
            updates.published = false
            updates.deleted_date = new Date()
            updates.deleterId = deleter
        }
        await bulkUpdate({post, updates})
    } catch (err) {
        if(err instanceof PostNotFoundError) throw new PostNotFoundError(err.message, err.orig_error)
        throw new PostError(err.message, err.orig_error)
    }
}