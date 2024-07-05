import { resetPassword } from "../../services/user/index.js"
import { validationResult } from "express-validator"

export default async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})
        }
        const {token, password} = req.body
        await resetPassword({token, password})
        return res.status(200).json({message: "Contraseña reestablecida"})
    } catch (err) {
        next(err)
    }
}