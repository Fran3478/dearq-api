import {createCategory} from "../../services/category/index.js"

export default async (req, res, next) => {
    try {

        const {title} = req.body
        const category = await createCategory(title) 
        return res.status(200).json({message: "Se creo la categoria"})
    } catch (err) {
        next(err)
    }
}