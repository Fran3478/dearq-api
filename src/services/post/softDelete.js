import { PostDeleteError, PostFindError, PostNotFoundError } from "../../errors/index.js"
import Post from "../../models/Post.js"
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
        if(err instanceof PostNotFoundError) throw new PostDeleteError("El post no existe o ya se ha eliminado", err.orig_error)
        if(err instanceof PostFindError) throw new PostDeleteError(err.message, err.orig_error)
        throw new PostDeleteError("Error al marcar post para eliminación", err)
    }
}