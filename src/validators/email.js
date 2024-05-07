import { body } from "express-validator"
import {checkExist} from "../services/user/index.js"

const inUse = (email) => {
    return checkExist({value: email, att: "email"}) 
}

const email = body("email")
    .escape()
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Correo invalido")
    .custom(async (value) => {
        const isUsed = await inUse(value)
        if(isUsed) throw new Error("El email ya esta asociado a un usuario")
    })

export default email