import { body } from "express-validator"
import {checkExist} from "../services/user/index.js"

const inUse = (token) => {
    return checkExist({value: token, att: "token"}) 
}

const token = body("token")
    .escape()
    .trim()
    .notEmpty()
    .isUUID()
    .withMessage("Token invalido")
    .custom(async (value) => {
        const exist = await inUse(value)
        if(!exist) throw new Error("El token no esta asociado a un usuario")
    })

export {
    token
}