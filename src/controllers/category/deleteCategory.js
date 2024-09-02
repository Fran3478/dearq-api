import {deleteCategory} from "../../services/category/index.js"

export default async (req, res, next) => {
    try {
        await deleteCategory({id: req.params.id})
        return res.status(200).json({message: "La categoria se elimino correctamente"})
    } catch (err) {
        next(err)
    }
}