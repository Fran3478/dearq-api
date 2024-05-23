import { DataTypes, UUIDV4 } from "sequelize";
import dbConfig from "../config/db";

const PostCategory = dbConfig("postCategory", {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default PostCategory