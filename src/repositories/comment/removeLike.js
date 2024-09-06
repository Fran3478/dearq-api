import { CommentLikeError } from "../../errors/index.js"

export default async ({like, transaction}) => {
    try {
        await like.destroy({transaction})
        return true
    } catch (err) {
        throw new CommentLikeError("Ocurrió un error al eliminar el me gusta", err)
    }
}