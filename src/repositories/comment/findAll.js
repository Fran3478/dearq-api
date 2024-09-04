import { Sequelize } from "sequelize"
import { CommentSearchError } from "../../errors/index.js"
import { Comment } from "../../models/index.js"

export default async ({searchParameters}) => {
    try {
        const options = {
            limit: searchParameters.pageSize,
            offset: (searchParameters.page - 1) * searchParameters.pageSize,
            where: {
                parentId: null,
                deleted: false
            },
            attributes: {
                include: [
                    [
                        Sequelize.fn("COUNT", Sequelize.col("repplies.id")), "repliesCount"
                    ],
                    [
                        Sequelize.literal(`
                            CASE 
                                WHEN "Comment"."bloqued" = true
                                THEN "Comentario bloqueado con un administrador"
                                ELSE "Comment"."content" 
                            END
                        `), "content"
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
        if(searchParameters.offset) {
            options.offset = searchParameters.offset
        }
        const {count, rows} = await Comment.findAndCountAll(options)
        return {
            totalComments: count,
            comments: rows
        }
    } catch (err) {
        throw new CommentSearchError("Error al recuperar los comentarios", err)
    }
}