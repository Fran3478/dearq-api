import { LoginError, NotFoundError, EmailVerificationError } from "../../errors/index.js"
import { singinService } from "../../services/auth/index.js"


export default async (req, res, next) => {
    try {
        const user = await singinService(req.body)
        return res.status(200).json(user)
    } catch (err) {
        if(err instanceof NotFoundError) return res.status(404).json({msg: "El usuario no existe"})
        if(err instanceof LoginError) return res.status(401).json({msg: "Contraseña incorrecta"})
        if(err instanceof EmailVerificationError) return res.status(403).json({msg: "No se valido el correo"})
        return res.status(500).json({msg: "Ha ocurrido un error interno en el servidor"})
    }
}