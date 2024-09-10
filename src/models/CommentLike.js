import { DataTypes } from "sequelize"
import dbConfig from "./db.js"

const CommentLike = dbConfig.define("commentLikes", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        },
        onDelete: "CASCADE"
    },
    commentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "comments",
            key: "id"
        },
        onDelete: "CASCADE"
    }
})

export default CommentLike