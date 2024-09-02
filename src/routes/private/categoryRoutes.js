import { Router } from "express";
import { validateToken } from "../../middleware/index.js"
import { validateTitle } from "../../validators/validateCategory.js"
import { newCategory, listCategories, editCategory, deleteCategory } from "../../controllers/category/index.js"

const route = Router()

export default (app) => {
    app.use("/category", route)
    route.get("/", listCategories)
    route.post("/new", validateToken, validateTitle, newCategory)
    route.put("/edit/:id", validateToken, validateTitle, editCategory)
    route.delete("/delete/:id", validateToken, validateTitle, deleteCategory)
}