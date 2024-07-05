import {Router} from "express"
import user from "./userRoutes.js"
import auth from "./authRoutes.js"
import blog from "./blogRoutes.js"
import test from "./testRoutes.js"
import category from "./categoryRoutes.js"
import admin from "./adminRoutes.js"

export default () => {
    const app = Router()
    user(app)
    auth(app)
    blog(app)
    test(app)
    category(app)
    admin(app)

    return app
}