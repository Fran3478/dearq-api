import { getCategories } from "../../services/category/index.js"

export default async (req, res, next) => {
    try {
        const categories = await getCategories()
        return res.status(200).json(categories)
    } catch (err) {
        next(err)
    }
}