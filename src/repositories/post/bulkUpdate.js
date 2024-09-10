import { PostUpdateError } from "../../errors/index.js"

export default async ({post, updates, transaction}) => {
    try {
        for(const [key, value] of Object.entries(updates)) {
            post[key] = value
        }
        await post.save({transaction})
    } catch (err) {
        throw new PostUpdateError("No se pudo actualizar la publicación", err)
    }
}