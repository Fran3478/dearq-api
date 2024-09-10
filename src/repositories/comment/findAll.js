import { Sequelize } from "sequelize"
import { CommentSearchError } from "../../errors/index.js"
import { Comment, sequelize } from "../../models/index.js"

export default async ({searchParameters}) => {
    try {
        const options = {
            limit: searchParameters.pageSize,
            offset: searchParameters.offset || (searchParameters.page - 1) * searchParameters.pageSize,
            where: {
                parentId: searchParameters.parentId || null
            },
            
            attributes: {
                include: [
                      [
                        Sequelize.literal(`(
                            SELECT COUNT(*)
                            FROM "comments" AS "replies"
                            WHERE "replies"."parentId" = "comments"."id"
                        )`), 
                        "repliesCount"
                    ],
                    [
                        Sequelize.literal(`
                            CASE 
                                WHEN "comments"."blocked" = true AND "comments"."deleted" = true
                                    THEN 'Comentario eliminado'
                                WHEN "comments"."deleted" = true
                                    THEN 'Comentario eliminado'
                                WHEN "comments"."blocked" = true
                                    THEN 'Comentario bloqueado por un administrador'
                                ELSE "comments"."content" 
                            END
                        `), "content"
                    ]
                ],
            },
            include: [
                {
                    model: Comment,
                    as: "replies",
                    attributes: [],
                    required: false
                }
            ],
            order: [["created_date", "ASC"]]
        }
        if(searchParameters.where) {
            options.where =  {...options.where, ...searchParameters.where}
        }
        const countComments = Comment.count({
            where: options.where
        })
        const findComments = Comment.findAll(options)
        const [totalComments, rows] = await Promise.all([countComments, findComments])
        return {totalComments, rows}
    } catch (err) {
        throw new CommentSearchError("Error al recuperar los comentarios", err)
    }
}