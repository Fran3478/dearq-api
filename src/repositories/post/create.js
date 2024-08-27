import { PostCreationError } from "../../errors/index.js";
import { Post } from "../../models/index.js";

export default async ({authorId, transaction}) => {
    try {
        const currentDate = new Date()
        const post = await Post.create({authorId, created_date: currentDate}, {transaction})
        return post
    } catch (err) {
        throw new PostCreationError("Error al crear la publicación", err)
    }
}