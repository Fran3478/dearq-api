import { PostError, PostNotFoundError, PostSearchError } from "../../errors/index.js"
import { PostContent, PostView } from "../../models/index.js"
import { getPost } from "../post/index.js"

export default async (postId) => {
    try {
        const options = {
            include: [{
                model: PostView,
                as: "postView"
            },
            {
                model: PostContent,
                as: "postContent",
                attributes: {excludes: ["postId", "createdAt", "updatedAt"]}
            }],
            where: {
                deleted: false
            },
            attributes: {exclude: ["deleted", "deleted_date", "createdAt", "updatedAt"]}
        }
        const post = await getPost({id: postId, options})
        return post
    } catch (err) {
        if(err instanceof PostNotFoundError) throw err
        if(err instanceof PostSearchError) throw new PostError(err.message, err.orig_error)
        throw new PostError(err.message, err)
    }
}