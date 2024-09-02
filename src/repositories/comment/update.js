import { CommentUpdateError } from "../../errors/index.js"

export default async ({comment, updates, transaction}) => {
    try {
        for(const [key, value] of Object.entries(updates)) {
            comment[key] = value
        }
        await comment.save({transaction})
    } catch (err) {
        throw new CommentUpdateError("No se pudo actualizar el comentario", err)
    }
}