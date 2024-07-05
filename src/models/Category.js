import { DataTypes, UUIDV4 } from "sequelize";
import dbConfig from "./db.js";

const Category = dbConfig.define("category", {
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

export default Category