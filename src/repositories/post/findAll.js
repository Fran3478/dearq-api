import { Op } from "sequelize"
import { PostSearchError } from "../../errors/index.js"
import { Category, Post, PostView, sequelize } from "../../models/index.js"

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
            order: [["created_date", "DESC"]],
            distinct: true
        }

        if(searchParameters.title) {
            options.include[0].where = {title: {[Op.like]: "%" + searchParameters.title + "%"}}
        }
        if(searchParameters.published !== undefined) {
            options.where = {...options.where, published: searchParameters.published}
        }
        if(searchParameters.category) {
            options.where = {
                ...options.where,
                id: {
                  [Op.in]: sequelize.literal(
                    `(SELECT "postId" FROM "post_category" WHERE "categoryId" = '${searchParameters.category}')`
                  ),
                },
              };
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
        console.log(err)
        throw new PostSearchError("Error al recuperar las publicaciones", err)
    }
}