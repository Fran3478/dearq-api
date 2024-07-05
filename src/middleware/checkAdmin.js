import jwt from "jsonwebtoken"
import config from "../config/index.js"
import { PermissionError } from "../errors/index.js"
import {getUser} from "../services/user/index.js"

const {_jwt} = config

export default async (req, res, next) => {
    try {
        const authorization = req.get("authorization")
        let token = null
        if(authorization && authorization.toLowerCase().startsWith(("bearer"))) {
            token = authorization.split(" ")[1]
            if(req._user._role === "admin"){
                const user = await getUser({username: req._user._id, type: "id"})
                if(user?.role === "admin") return next()
            }
        }
        throw new PermissionError("No posee permiso para la acción solicitada")
    } catch (err) {
        next(err)
    }
}