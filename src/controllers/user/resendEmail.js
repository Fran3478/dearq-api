import { validationResult } from "express-validator"
import retryVerifyEmail from "../../services/user/retryVerifyEmail.js"

export default async (req, res, next) => {
    try {
        console.log("asdasdasd")
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})
        }
        const {email} = req.params
        await retryVerifyEmail(email)        
        return res.status(200).json({message: "Correo reenviado"})
    } catch (err) {
        next(err)
    }
}