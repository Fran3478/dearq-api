import { LoginError, NotFoundError, EmailVerificationError } from "../../errors/index.js"
import { singinService } from "../../services/auth/index.js"


export default async (req, res, next) => {
    try {
        const user = await singinService(req.body)
        return res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}