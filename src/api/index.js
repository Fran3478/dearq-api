import {Router} from "express"
import user from "./routes/userRoutes.js"
import auth from "./routes/authRoutes.js"

export default () => {
    const app = Router()
    user(app)
    auth(app)

    return app
}