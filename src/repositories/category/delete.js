import { CategoryError } from "../../errors/index.js"
import { Category } from "../../models/index.js"

export default async ({id, transaction}) => {
    try {
        await Category.destroy({
            where: {id},
            transaction
        })
    } catch (err) {
        throw new CategoryError("No se pudo eliminar la categoría", err)
    }
}