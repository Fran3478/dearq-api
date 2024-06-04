import { recoverPassword } from "../../services/user/index.js"
import { validationResult } from "express-validator"

export default async (req, res ,next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})
        }
        await recoverPassword(req.body.email)
        return res.status(200).json({message: "Se envio un correo de recuperación"})
    } catch (err) {
        next(err)
    }
}