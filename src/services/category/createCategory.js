import { Category } from "../../models/index.js"
import {CategoryError} from "../../errors/index.js"

export default async (title) => {
    try {
        const category = await Category.create({title})
        return category
    } catch (err) {
        throw new CategoryError("No se pudo crear la categoria", err)
    }
}