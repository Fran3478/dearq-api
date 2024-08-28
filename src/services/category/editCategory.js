import { update } from "../../repositories/category/index.js"

export default async ({id, title}) => {
    try {
        const category = await update({id, title})
        return category
    } catch (err) {
        throw err
    }
}