import {create} from "../../repositories/category/index.js"

export default async ({title}) => {
    try {
        const category = await create({title})
        return category
    } catch (err) {
        throw err
    }
}