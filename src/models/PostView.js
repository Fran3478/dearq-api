import { DataTypes } from "sequelize";
import dbConfig from "../config/db.js";

const PostView = dbConfig.define("postView", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default PostView