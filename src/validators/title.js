import { body } from "express-validator"
import {checkExist} from "../services/category/index.js"

const inUse = (title) => {
    return checkExist({value: title, type: "title"})
}

const title = body("title")
    .escape()
    .trim()
    .notEmpty()
    .withMessage("No se ingreso un nombre para la categoria")
    .custom(async value => {
        if(value) {
            const isUsed = await inUse(value)
            if(isUsed) throw new Error("El título ya registrado como una categoría")
        }
    })

export {
    title
}