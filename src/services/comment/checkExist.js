import { CommentNotFoundError, CommentSearchError } from "../../errors/index.js"
import { findById } from "../../repositories/comment/index.js"

export default async ({commentId}) => {
    try {
        const comment = await findById({id: commentId})
        return !!comment
    } catch (err) {
        if(err instanceof CommentNotFoundError || err instanceof CommentSearchError) throw err
        throw new Error("Ocurrió un error", err)
    }
}