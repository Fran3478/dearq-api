import { CategoryError } from "../../errors/index.js"
import {getCategory} from "./index.js"


export default async ({id, title}) => {
     try {
        const category = await getCategory(id)
        if(!category) throw new Error("La categoria no existe")
        category.title = title
        await category.save()
        return
     } catch (err) {
        throw new CategoryError(err.message, err)
     }
}