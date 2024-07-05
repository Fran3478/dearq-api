import { body } from "express-validator"

export const passwordSignup = body("password")
    .escape()
    .trim()
    .custom((value) => {
        if (!value.length > 0) {
            console.log("pass: ", value)
            throw new Error("La contraseña no puede estar vacía")
        }
        if (value.length < 8 || value.length > 16) {
            throw new Error("La contraseña debe contener entre 8 y 16 caracteres")
        }
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,16}$/
        if (!strongPasswordRegex.test(value)) {
            throw new Error("La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un símbolo");
        }
        return true;
    })

export const passwordSignin = body("password")
    .escape()
    .trim()
    .notEmpty()
    .withMessage("Debe indicar la contraseña para inciar sesión")