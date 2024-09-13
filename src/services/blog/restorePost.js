import { PostDeleteError, PostError, PostNotFoundError } from "../../errors/index.js"
import { bulkUpdate, findById } from "../../repositories/post/index.js"

export default async ({id}) => {
    try {
        const searchParameters = {
            where: {id}
        }
        const post = await findById({searchParameters})
        if(!post.deleted) throw new PostDeleteError("La publicación que se intenta restaurar, ya se encuentra restaurada actualmente")
        const updates = {
            deleted: false,
            deleted_date: null,
            deleterId: null
        }
        await bulkUpdate({post, updates})
    } catch (err) {
        if(err instanceof PostNotFoundError) throw PostNotFoundError(err.message, err.orig_error)
        throw new PostError(err.message, err.orig_error)
    }
}