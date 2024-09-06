import { body } from "express-validator";

export const content = body("content")
    .escape()
    .trim()
    .notEmpty().withMessage("El comentario no puede estar vacio")
    .isLength({min: 1, max: 300}).withMessage("El comentario debe tener entre 1 y 300 caracteres")
    .stripLow(true)
    