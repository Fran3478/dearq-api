import { CategoryNotFoundError } from "../../errors/index.js"
import {sequelize} from "../../models/index.js"
import {deleteCategory, unlinkPost} from "../../repositories/category/index.js"
import checkExist from "./checkExist.js"

export default async ({id}) => {
    const transaction = await sequelize.transaction()
    try {
        if(await checkExist({value: id, type: "id"}) === false) throw new CategoryNotFoundError("No se pudo encontrar la categoría")
        await unlinkPost({id, transaction})
        await deleteCategory({id, transaction})
        await transaction.commit()
    } catch (err) {
        await transaction.rollback()
        throw err
    }
}