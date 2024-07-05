import {createCategory} from "../../services/category/index.js"
import { validationResult } from "express-validator";

export default async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const {title} = req.body
        const category = await createCategory(title) 
        return res.status(200).json({message: "Se creo la categoria"})
    } catch (err) {
        next(err)
    }
}