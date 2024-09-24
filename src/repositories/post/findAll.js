import { PostSearchError } from "../../errors/index.js"
import { Category, Post, PostView } from "../../models/index.js"

export default async ({searchParameters}) => {
    try {
        const options = {
            limit: searchParameters.pageSize,
            offset: (searchParameters.page - 1) * searchParameters.pageSize,
            where: {
                deleted: false
            },
            include: [
                {
                    model: PostView,
                    as: "postView",
                    attributes: { exclude: ['postId', 'createdAt', 'updatedAt'] }
                },
                {
                    model: Category,
                    as: "categories",
                    through: { attributes: [] }
                }
            ],
            attributes: { exclude: ['userId', 'deleted', 'deleted_date', 'createdAt', 'updatedAt'] },
            order: [["published_date", "DESC"]]
        }

        if(searchParameters.published !== undefined) {
            options.where = {...options.where, published: searchParameters.published}
        }
        if(searchParameters.category) {
            options.where = {...options.where, category: searchParameters.category}
        }
        if(searchParameters.offset) {
            options.offset = searchParameters.offset
        }
        if(searchParameters.delete) {
            options.where = {...options.where, delete: searchParameters.delete}
        }

        const {count, rows} = await Post.findAndCountAll(options)
        return {
            totalPosts: count,
            rows
        }
    } catch (err) {
        throw new PostSearchError("Error al recuperar las publicaciones", err)
    }
}