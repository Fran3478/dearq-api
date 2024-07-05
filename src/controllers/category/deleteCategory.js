import { CategoryError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import {checkExist, deleteCategory} from "../../services/category/index.js"

export default async (req, res, next) => {
    const transaction = await sequelize.transaction()
    try {
        const {id} = req.params
        if(await checkExist(id) === false) throw new CategoryError("La categoria no existe o ya fue eliminada")
        await deleteCategory({id, transaction})
        await transaction.commit()
        return res.status(200).json({message: "La categoria se elimino correctamente"})
    } catch (err) {
        await transaction.rollback()
        next(err)
    }
}