import { CommentLikeSearchError } from "../../errors/index.js"
import {CommentLike} from "../../models/index.js"

export default async ({userId, commentId}) => {
    try {
        const like = await CommentLike.findOne({
            where: {
                userId,
                commentId
            }
        })
        return like
    } catch (err) {
        throw new CommentLikeSearchError("Hubo un error", err)
    }
}