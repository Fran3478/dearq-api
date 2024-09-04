import { PostNotFoundError, PostSearchError } from "../../errors/index.js"
import { findById } from "../../repositories/post/index.js"

export default async ({postId}) => {
    try {
        const searchParameters = {
            where: {id: postId}
        }
        const post = await findById({searchParameters})
        return !!post
    } catch (err) {
        if(err instanceof PostNotFoundError || err instanceof PostSearchError) throw err
        throw new Error("Ocurrió un error", err)
    }
}