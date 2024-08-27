import { PostUpdateError } from "../../errors/index.js"
import {PostView} from "../../models/index.js"

export default async ({id, view, transaction}) => {
    try {
        await PostView.update(view, {where: {postId: id}, transaction})
    } catch (err) {
        throw new PostUpdateError("No se pudo actualizar la vista de la publicación", err)
    }
}