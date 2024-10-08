import { DataTypes, UUIDV4 } from "sequelize"
import dbConfig from "./db.js"

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
    unpublished_date: {
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
    },
    created_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false
})

export default Post