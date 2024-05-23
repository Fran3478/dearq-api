import dbConfig from "../config/db.js"
import { DataTypes } from "sequelize"

const Comment = dbConfig.define("comments", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    blocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    block_reason: {
        type: DataTypes.STRING
    }
})

export default Comment