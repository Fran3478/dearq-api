import config from "../config/index.js"
import { Sequelize } from "sequelize";

const {db} = config

const sequelize = new Sequelize(db.url, {
    define: {
        timestamps: true
    },
    pool: {
        max: Number(db.pool.max),
        min: Number(db.pool.min),
        acquire: Number(db.pool.acquire),
        idle: Number(db.pool.idle)
    },
    operatorsAliases: 0,
    timezone: "+00:00",
    dialectOptions: {
        useUTC: true
    }
})

export default sequelize