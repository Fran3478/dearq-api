import { PostContentCreationError } from "../../errors/index.js"
import { PostContent } from "../../models/index.js"

export default async ({content, transaction}) => {
    try {
        const postContent = await PostContent.create({content}, {transaction})
        return postContent
    } catch (err) {
        throw new PostContentCreationError("Error al almacenar el contenido de la publicación", err)
    }
}