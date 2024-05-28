import { DataTypes, UUIDV4 } from "sequelize"
import dbConfig from "../config/db.js"

const Post = dbConfig.define("posts", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    published: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    published_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    deleted_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

export default Post