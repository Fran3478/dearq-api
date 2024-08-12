import { PostPublishedError } from "../../errors/index.js"

export default async ({post, publisher}) => {
    try {
        const currentDate = new Date()
        post.published = true
        post.publisherId = publisher
        post.published_date = currentDate
        await post.save()
        return
    } catch (err) {
        throw new PostPublishedError("Error al publicar la publicación", err)
    }
}