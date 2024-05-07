import { body } from "express-validator"
import user from "../../user/index.js"

const inUse = (username) => {
    return user.checkExist({value: username, att: "username"})
}

const username = body("username")
    .escape()
    .trim()
    .notEmpty()
    .isLength({min: 3, max: 20})
    .withMessage("El nombre debe tener entre 3 y 20 caracteres")
    .custom(async value => {
        const isUsed = await inUse(value)
        if(isUsed) throw new Error("El nombre ya se encuentra en uso, por favor ingrese uno diferente")
    })

    export default username