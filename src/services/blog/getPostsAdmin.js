import { PostSearchError } from "../../errors/index.js"
import { PostView } from "../../models/index.js"
import {findAll} from "../post/index.js"

export default async ({page, filter = "all"}) => {
    try {
        const pageSize = 20
        const options = {
            limit: pageSize,
            offset: (page - 1) * pageSize,
            where: {
                deleted: false
            },
            include: [{
                model: PostView,
                as: "postView",
                attributes: { exclude: ["postId", "createdAt", "updatesAt"] }
            }],
            attributes: { exclude: ["userId", "deleted", "deleted_date", "createdAt", "updatedAt"] },
            order: [["published_date", "DESC"]]
        }

        if(filter && filter !== "all"){
            options.where = {...options.where, published: filter}
        }

        let results = await findAll(options)
        const totalPages = Math.ceil(results.totalPosts / pageSize)

        if(totalPages < page) {
            options.offset = 0
            results = await findAll(options)
            results.currentPage = 1
        } else results.currentPage = page

        results.totalPages = totalPages
        return results
    } catch (err) {
        throw new PostSearchError("Error al recuperar las publicaciónes", err)
    }
}