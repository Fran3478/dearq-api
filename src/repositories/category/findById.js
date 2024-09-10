import { CategoryError, CategoryNotFoundError } from "../../errors/index.js"
import { Category } from "../../models/index.js"

export default async ({id}) => {
    try {
        const category = await Category.findByPk(id)
        if(!category) throw new CategoryNotFoundError("No se pudo encontrar la categoría")
        return category
    } catch (err) {
        if(err instanceof CategoryNotFoundError) throw err
        throw new CategoryError("Hubo un error", err)
    }
}