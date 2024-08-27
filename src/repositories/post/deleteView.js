import { PostDeleteError } from "../../errors/index.js"

export default async ({view, transaction}) => {
    try {
        view.destroy({transaction})
    } catch (err) {
        throw new PostDeleteError("No se pudo eliminar la vista", err)
    }
}