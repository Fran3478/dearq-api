import { PostPublishedError } from "../../errors/index.js"
import {Post} from "../../models/index.js"

export default async (post) => {
    try {
        const currentDate = new Date()
        post.published = true
        post.published_date = currentDate
        await post.save()
        return
    } catch (err) {
        throw new PostPublishedError("Error al publicar post", err)
    }
}