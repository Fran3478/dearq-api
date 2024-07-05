import { CategoryError } from "../../errors/index.js"
import { Category, sequelize } from "../../models/index.js"

export default async ({id, transaction}) => {
    try {
        await sequelize.models.post_category.destroy({
            where: { categoryId: id },
            transaction
        })
        await Category.destroy({
            where: {id},
            transaction
        })
    } catch (err) {
        throw new CategoryError("No se pudo eliminar la categoria", err)
    }
}