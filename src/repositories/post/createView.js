import { PostViewCreationError } from "../../errors/index.js"
import { PostView } from "../../models/index.js"

export default async ({title, img, img_title, description, transaction}) => {
    try {
        const postView = await PostView.create({title, img, img_title, description}, {transaction})
        return postView
    } catch (err) {
        throw new PostViewCreationError("Error al almacenar la vista previa de la publicación", err)
    }
}