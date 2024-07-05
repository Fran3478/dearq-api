import {JSDOM} from "jsdom"
import DOMPurify from "dompurify"
import { PostSanitizeError } from "../../errors/index.js"

export default async (content) => {
    try {
        const window = new JSDOM("").window
        const purify = DOMPurify (window)
        const clean = purify.sanitize(content)
        return clean
    } catch (err) {
        throw PostSanitizeError("Error al limpiar contenido")
    }
}