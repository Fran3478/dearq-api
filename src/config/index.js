import dotenv from "dotenv"

const env = dotenv.config()
if(env.error) {
    throw new Error("🔴 Couldn't find .env file")
}

export default {
    port: process.env.API_PORT,
    db: {
        url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
        pool: {
            max: process.env.DB_POOL_MAX,
            min: process.env.DB_POOL_MIN,
            acquire: process.env.DB_POOL_ACQUIRE,
            idle: process.env.DB_POOL_IDLE
        }
    }
    
}