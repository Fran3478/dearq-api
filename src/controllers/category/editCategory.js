import { validationResult } from "express-validator"
import { changeTitle } from "../../services/category/index.js";

export default async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        await changeTitle({id: req.params.id, title: req.body.title})
        return res.status(200).json({message: "Categoria actualizada correctamente"})
    } catch (err) {
        next(err)
    }
}