import {Router} from "express"
import user from "./userRoutes.js"
import auth from "./authRoutes.js"
import blog from "./blogRoutes.js"

export default () => {
    const app = Router()
    user(app)
    auth(app)
    blog(app)

    return app
}