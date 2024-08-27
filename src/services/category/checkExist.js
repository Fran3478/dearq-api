import {Category} from "../../models/index.js"

export default async ({value, type}) => {
    const category = await Category.findOne({ where: { [type]: value }})
    return category !== null
}