import { PermissionError, UserNotFoundError } from "../errors/index.js"
import {find} from "../repositories/user/index.js"

export default async (req, res, next) => {
    try {
        if(req._user._role === "admin"){
            const user = await find({username: req._user._id, type: "id"})
            if(!user) throw new UserNotFoundError("No existe el usuario")
            if(user?.role === "admin") return next()
        }
        throw new PermissionError("No posee permiso para la acción solicitada")
    } catch (err) {
        next(err)
    }
}