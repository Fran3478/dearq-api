import {Router} from "express"
import user from "./userRoutes.js"
import auth from "./authRoutes.js"

export default () => {
    const app = Router()
    user(app)
    auth(app)

    return app
}