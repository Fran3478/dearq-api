import { PostDeleteError } from "../../errors/index.js"

export default async ({content, transaction}) => {
    try {
        content.destroy({transaction})
    } catch (err) {
        throw new PostDeleteError("No se pudo eliminar el contenido", err)
    }
}