import { singupService } from "../../services/auth/index.js"
import { validationResult } from "express-validator"

export default async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})
        }
        const user = await singupService(req.body)
        return res.status(200).json({user})
    } catch (error) {
        return res.status(400).json({error})
    }
}