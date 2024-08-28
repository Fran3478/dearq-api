import { CategoryError } from "../../errors/index.js"
import { Category } from "../../models/index.js"

export default async () => {
    try {
        const categories = await Category.findAll()
        return categories
    } catch (err) {
        throw new CategoryError("Error al obtener las categorias", err)
    }
}