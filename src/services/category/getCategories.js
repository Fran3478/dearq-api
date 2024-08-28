import { findAll } from "../../repositories/category/index.js"

export default async () => {
    try {
        const categories = await findAll()
        return categories
    } catch (err) {
        throw err
    }
}