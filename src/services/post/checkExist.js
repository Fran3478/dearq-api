import { PostNotFoundError, PostSearchError } from "../../errors/index.js"
import { findById } from "../../repositories/post/index.js"

export default async ({postId, published = null}) => {
    try {
        const searchParameters = {
            where: {id: postId}
        }
        if(published !== null) {
            searchParameters.where = {...searchParameters.where, published}
        }
        const post = await findById({searchParameters})
        return !!post
    } catch (err) {
        if(err instanceof PostNotFoundError || err instanceof PostSearchError) throw err
        throw new Error("Ocurrió un error", err)
    }
}