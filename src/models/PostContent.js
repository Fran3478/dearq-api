import { DataTypes, UUIDV4 } from "sequelize"
import dbConfig from "./db.js"

const PostContent = dbConfig.define("postContent", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

export default PostContent