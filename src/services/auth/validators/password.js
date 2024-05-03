import { body } from "express-validator"

const password = body("password")
    .escape()
    .trim()
    .notEmpty()
    .isLength({min: 8, max: 16})
    .withMessage("La contraseña debe contener entre 8 y 16 caracteres")
    .isStrongPassword({
        returnScore: false
    })
    .withMessage("La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un símbolo")

export default password