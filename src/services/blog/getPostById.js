import { PostError, PostSearchError, PostNotFoundError } from "../../errors/index.js"
import {findById} from "../../repositories/post/index.js"

export default async (postId) => {
    try {
        const searchParameters = {
            where: {id: postId, deleted: false, published: true},
            include: "all"
        }
        const post = await findById({searchParameters})
        return post
    } catch (err) {
        if(err instanceof PostNotFoundError) throw err
        if(err instanceof PostSearchError) throw new PostError(err.message, err.orig_error)
        throw new PostError(err.message, err)
    }
}