import { PostError } from "../../errors/index.js"

export default async ({post, unpublisher}) => {
    try {
        const currentDate = new Date()
        post.published = false
        post.unpublisherId = unpublisher
        post.unpublished_date = currentDate
        await post.save()
        return
    } catch (err) {
        throw new PostError("No se pudieron aplicar los cambios al intentar despublicar", err)
    }
}