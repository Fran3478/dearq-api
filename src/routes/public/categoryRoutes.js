import { Router } from "express";
import { listCategories } from "../../controllers/category/index.js"

const route = Router()

export default (app) => {
    app.use("/category", route)
    route.get("/", listCategories)
}