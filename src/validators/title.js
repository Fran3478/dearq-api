import { body } from "express-validator"
import {checkExist} from "../services/category/index.js"

const inUse = (title) => {
    return checkExist(title)
}

const title = body("title")
    .escape()
    .trim()
    .notEmpty()
    .withMessage("No se ingreso un nombre para la categoria")
    .custom(async value => {
        if(value) {
            const isUsed = await inUse(value)
            if(isUsed) throw new Error("La categoria ya existe")
        }
    })

export {
    title
}