import {PostView} from "../../models/index.js"
import { PostViewCreationError } from "../../errors/index.js"

export default async ({title, img, img_title, transaction}) => {
    try {
        const view = await PostView.create({title, img, img_title}, {transaction})
        return view
    } catch (err) {
        throw new PostViewCreationError("Error al almacenar la vista previa de la publicación", err)
    }
}