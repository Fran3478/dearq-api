import { CategoryError, CategoryNotFoundError } from "../../errors/index.js"
import findById from "./findById.js"

export default async ({id, title}) => {
    try {
        const category = await findById({id})
        category.title = title
        await category.save()
        return category
    } catch (err) {
        if(err instanceof CategoryNotFoundError) throw err
        throw new CategoryError("No se pudo actualizar la categoría")
    }
}