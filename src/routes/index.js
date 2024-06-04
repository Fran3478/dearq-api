import {Router} from "express"
import user from "./userRoutes.js"
import auth from "./authRoutes.js"
import blog from "./blogRoutes.js"
import test from "./testRoutes.js"

export default () => {
    const app = Router()
    user(app)
    auth(app)
    blog(app)
    test(app)

    return app
}