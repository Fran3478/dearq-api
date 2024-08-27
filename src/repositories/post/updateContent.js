import { PostUpdateError } from "../../errors/index.js"
import {PostContent} from "../../models/index.js"

export default async ({id, content, transaction}) => {
    try {
        await PostContent.update({content}, {where: {postId: id}, transaction})
    } catch (err) {
        throw new PostUpdateError("No se pudo actualizar el contenido de la publicación", err)
    }
}