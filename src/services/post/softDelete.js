import { PostDeleteError, PostSearchError, PostNotFoundError } from "../../errors/index.js"
import getPost from "./getPost.js"

export default async (id) => {
    try {
        const options = {
            where: {
                deleted: false,
            }
        }
        const post = await getPost({id, options})
        const date = new Date()
        post.deleted = true
        post.deleted_date = date
        await post.save()
    } catch (err) {
        if(err instanceof PostNotFoundError) throw err
        if(err instanceof PostSearchError) throw new PostDeleteError(err.message, err.orig_error)
        throw new PostDeleteError("Error al marcar post para eliminación", err)
    }
}