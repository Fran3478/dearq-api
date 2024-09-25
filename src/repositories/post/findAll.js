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
            order: [["published_date", "DESC"]],
            distinct: true
        }

        if(searchParameters.published !== undefined) {
            options.where = {...options.where, published: searchParameters.published}
        }
        if(searchParameters.category) {
            options.include[1].where = { id: searchParameters.category }
        }
        if(searchParameters.offset) {
            options.offset = searchParameters.offset
        }
        if(searchParameters.deleted) {
            options.where = {...options.where, deleted: searchParameters.deleted}
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