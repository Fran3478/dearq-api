import { PostUpdateError } from "../../errors/index.js"

export default async ({post, attribute, value, transaction}) => {
    try {
        post[attribute] = value
        await post.save({transaction})
    } catch (err) {
        throw new PostUpdateError("No se pudo actualizar la publicación", err)
    }
}