import { PostSearchError } from "../../errors/index.js"
import {findAll} from "../../repositories/post/index.js"

export default async ({page, status = "all", category = "all", title = ""}) => {
    try {
        const pageSize = 10
        const searchParameters = {
            pageSize,
            page
        }

        if(status !== "all" && ["published", "unpublished"].includes(status)) {
            searchParameters.published = status === "published"
        }
        if(category !== "all") {
            searchParameters.category = category
        }
        if(title) {
            searchParameters.title = title
        }

        let results = await findAll({searchParameters})
        const totalPages = Math.ceil(results.totalPosts / pageSize)

        if(totalPages < page) {
            searchParameters.offset = 0
            results = await findAll({searchParameters})
            results.currentPage = 1
        } else results.currentPage = page

        results.totalPages = totalPages
        return results
    } catch (err) {
        throw new PostSearchError("Error al recuperar las publicaciónes", err)
    }
}