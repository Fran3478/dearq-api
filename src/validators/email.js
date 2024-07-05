import { body, param } from "express-validator"
import {checkExist} from "../services/user/index.js"

const inUse = (email) => {
    return checkExist({value: email, att: "email"}) 
}

const emailParam = param("email")
    .escape()
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Correo invalido")


const emailCreate = () => body("email")
    .escape()
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Correo invalido")
    .custom(async (value) => {
        const isUsed = await inUse(value)
        if(isUsed) throw new Error("El correo ya esta asociado a un usuario")
    })

const emailRecovery = () => body("email")
    .escape()
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("Correo invalido")
    .custom(async (value) => {
        const isUsed = await inUse(value)
        if(!isUsed) throw new Error("El correo no esta asociado a ningún usuario1")
    })

const emailResend = () => emailParam.custom(async (value) => {
    const isUsed = await inUse(value)
    if(!isUsed) throw new Error("El correo no esta asociado a ningún usuario2")
})

export {
    emailCreate,
    emailRecovery,
    emailResend
}