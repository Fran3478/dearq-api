import {verifyEmail} from "../../services/user/index.js"
import { validationResult } from "express-validator"

export default async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})
        }
        await verifyEmail(req.params.token)
        return res.status(200).json({message: "Correo validado"})
    } catch (err) {
        next(err)
    }
}