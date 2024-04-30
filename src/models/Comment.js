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
    }
})

export default Comment