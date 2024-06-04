import { resetPassword } from "../../services/user/index.js"

export default async (req, res, next) => {
    try {
        const {token, password} = req.body
        await resetPassword({token, password})
        return res.status(200).json({message: "Contraseña reestablecida"})
    } catch (err) {
        next(err)
    }
}