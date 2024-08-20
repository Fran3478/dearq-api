import { Router } from "express";
import blog from "./blogRoutes.js"
import category from "./categoryRoutes.js"

const route = Router()

export default (app) => {
    app.use("/private", route)
    blog(route)
    category(route)
}