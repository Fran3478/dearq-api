import { CategoryError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"

export default async ({id, transaction}) => {
    try {
        await sequelize.models.post_category.destroy({
            where: {categoryId: id},
            transaction
        })
    } catch (err) {
        throw new CategoryError("No se pudo desvincular la categoría", err)
    }
}