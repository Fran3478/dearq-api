import { signinService } from "../../services/auth/index.js"


export default async (req, res, next) => {
    try {
        const user = await signinService(req.body)
        return res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}