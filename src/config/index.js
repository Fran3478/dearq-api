import dotenv from "dotenv"

const env = dotenv.config()
if(env.error) {
    throw new Error("🔴 Couldn't find .env file")
}

export default {
    api: {
        port: process.env.API_PORT,
        prefix: process.env.API_PREFIX
    },
    db: {
        url: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
        pool: {
            max: process.env.DB_POOL_MAX,
            min: process.env.DB_POOL_MIN,
            acquire: process.env.DB_POOL_ACQUIRE,
            idle: process.env.DB_POOL_IDLE
        }
    },
    email: {
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        verificationUrl: process.env.EMAIL_VERIF_URL
    },
    _jwt: {
        secret: process.env.SECRET_JWT
    }
    
}