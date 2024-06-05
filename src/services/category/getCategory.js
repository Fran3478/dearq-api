import { Category } from "../../models/index.js"

export default async (id) => {
    try {
        const category = await Category.findByPk(id)
        return category
    } catch (err) {
        throw new Error(err)
    }
}