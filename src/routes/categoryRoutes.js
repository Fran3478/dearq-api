import { Router } from "express";
import { validateToken } from "../middleware/index.js"
import { validateTitle } from "../validators/validateCategory.js"
import { newCategory, listCategories, editCategory, deleteCategory } from "../controllers/category/index.js"

const route = Router()

export default (app) => {
    app.use("/category", route)
    route.get("/list-categories", listCategories)
    route.post("/new-category", validateToken, validateTitle, newCategory)
    route.put("/edit-category/:id", validateToken, validateTitle, editCategory)
    route.delete("/delete-category/:id", validateToken, deleteCategory)
}