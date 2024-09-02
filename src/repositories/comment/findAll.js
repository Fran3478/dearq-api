import { CommentSearchError } from "../../errors/index.js"
import { Comment } from "../../models/index.js"

export default async ({searchParameters}) => {
    try {
        const options = {
            limit: searchParameters.pageSize,
            offset: (searchParameters.page - 1) * searchParameters.pageSize,
            where: {
                parentId: null,
                blocked: false,
                deleted: false
            },
            attributes: {
                include: [
                    [
                        Sequelize.fn("COUNT", Sequelize.col("repplies.id")), "repliesCount"
                    ]
                ]
            },
            include: [
                {
                    model: Comment,
                    as: "replies",
                    attributes: [],
                    where: {
                        blocked: false,
                        deleted: false
                    },
                    required: false
                }
            ],
            group: ["Comment.id"],
            order: [["created_date", "ASC"]]
        }
        if(searchParameters.where) {
            options.where = {...options.where, ...searchParameters.where}
        }
        const comments = await Comment.findAll(options)
        return comments
    } catch (err) {
        throw new CommentSearchError("Error al recuperar los comentarios", err)
    }
}