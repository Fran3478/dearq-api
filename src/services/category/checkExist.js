import {Category} from "../../models/index.js"

export default async (title) => {
    const category = await Category.findOne({ where: { title }})
    return category !== null
}