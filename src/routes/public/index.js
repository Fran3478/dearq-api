import { Router } from "express";
import category from "./categoryRoutes.js"
import blog from "./blogRoutes.js"
import auth from "./authRoutes.js"
import test from "./testRoutes.js"

const route = Router()

export default (app) => {
    app.use("/public", route)
    auth(route)
    blog(route)
    category(route)
    test(route)
}