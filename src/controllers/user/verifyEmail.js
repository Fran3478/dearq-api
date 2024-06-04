import {verifyEmail} from "../../services/user/index.js"

export default async (req, res, next) => {
    try {
        await verifyEmail(req.params.token)
        return res.status(200).json({message: "Correo validado"})
    } catch (err) {
        next(err)
    }
}