import { body } from "express-validator"

export const passwordSingup = body("password")
    .escape()
    .trim()
    .notEmpty()
    .isLength({min: 8, max: 16})
    .withMessage("La contraseña debe contener entre 8 y 16 caracteres")
    .isStrongPassword({
        returnScore: false
    })
    .withMessage("La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un símbolo")

export const passwordSingin = body("password")
    .escape()
    .trim()
    .notEmpty()
    .withMessage("Debe indicar la contraseña para inciar sesión")