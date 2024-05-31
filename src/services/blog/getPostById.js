import { PostError, PostFindError, PostNotFoundError } from "../../errors/index.js"
import {PostView, PostContent} from "../../models/index.js"
import {getPost} from "../post/index.js"

export default async (postId) => {
    try {
        const options = {
            include: [{
                model: PostView,
                as: "postView",
                attributes: { exclude: ["postId", "createdAt", "updatedAt"] }
            },
            {
                model: PostContent,
                as: "postContent",
                attributes: {exclude: ["postId", "createdAt", "updatedAt"]}
            }],
            where: {
                published: true,
                deleted: false
            },
            attributes: { exclude: ['userId', 'deleted', 'deleted_date', 'createdAt', 'updatedAt'] }
        }
        const post = await getPost({id: postId, options})
        return post
    } catch (err) {
        if(err instanceof PostNotFoundError) throw new PostNotFoundError(err.message, err.orig_error)
        if(err instanceof PostFindError) throw new PostError(err.message, err.orig_error)
        throw new PostError(err.message, err)
    }
}