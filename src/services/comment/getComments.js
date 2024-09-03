import { CommentSearchError } from "../../errors/index.js"
import { findAll } from "../../repositories/comment/index.js"

export default async ({page, postId, parentId = null}) => {
    try {
        const pageSize = 15
        const searchParameters = {
            pageSize,
            page,
            where: {
                postId,
                parentId
            }
        }
        const results = await findAll({searchParameters})
        const totalPages = Math.ceil(results.totalComments / pageSize)

        if(totalPages < page) {
            searchParameters.offset = 0
            results = await findAll({searchParameters})
            results.currentPage = 1
        } else results.currentPage = page
        results.totalPages = totalPages
        return results
    } catch (err) {
        if(err instanceof CommentSearchError) throw err
        throw new CommentSearchError("Hubo un error", err)
    }
}