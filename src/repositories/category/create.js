import { CategoryError } from "../../errors/index.js"
import { Category } from "../../models/index.js"

export default async ({title}) => {
    try {
        console.log(title)
        const category = await Category.create({title})
        return category
    } catch (err) {
        throw new CategoryError("No se pudo crear la categoría", err)
    }
}