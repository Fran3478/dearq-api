import PostContent from "../../models/PostContent.js"
import { PostContentCreationError } from "../../errors/index.js"

export default async ({content}) => {
    try {
        const postContent = await PostContent.create({content})
        return postContent
    } catch (err) {
        throw new PostContentCreationError("Error al almacenar el contenido del post", err)
    }
}