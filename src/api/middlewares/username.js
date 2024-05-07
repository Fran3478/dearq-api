import { body } from "express-validator"
import {checkExist} from "../../services/user/index.js"

const inUse = (username) => {
    return checkExist({value: username, att: "username"})
}

export const usernameSingup = body("username")
    .escape()
    .trim()
    .custom(async value => {
        if(value) {
            if(value.length >= 3 && value.length <= 20) {
                const isUsed = await inUse(value)
                if(isUsed) throw new Error("El nombre ya se encuentra en uso, por favor ingrese uno diferente")
            } else {
                throw new Error("El nombre solo puede contener entre 3 y 20 caracteres")
            }
        }
    })

export const usernameSingin = body("username")
    .escape()
    .trim()
    .notEmpty()
    .withMessage("Debe indicar el nombre de usuario o el correo para iniciar sesión")