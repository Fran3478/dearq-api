import Post from "../../models/Post.js"
import getUser from "../user/getUser.js"
import { PostCreationError } from "../../errors/index.js"

export default async ({postView, postContent, userId}) => {
    try {
        const post = await Post.create()
        const user = await getUser({username: userId, type: "id"})
        await post.setUser(user)
        await post.setPostView(postView)
        await post.setPostContent(postContent)
        return
    } catch (error) {
        throw new PostCreationError("Error al generar el post", err)
    }
}