import dbConfig from "./db.js"
import { DataTypes } from "sequelize"

const Comment = dbConfig.define("comments", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    edited: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    edited_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    blocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    block_reason: {
        type: DataTypes.STRING
    },
    bloqued_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    deleted_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
})

export default Comment