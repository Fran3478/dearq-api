import Post from "../../models/Post.js"
import getUser from "../user/getUser.js"
import { PostCreationError } from "../../errors/index.js"

export default async ({postView, postContent, user}) => {
    try {
        const post = await Post.create()
        await post.setUser(user)
        await post.setPostView(postView)
        await post.setPostContent(postContent)
        return post.id
    } catch (err) {
        if(err instanceof PostCreationError) throw new PostCreationError(err.message)
        throw new PostCreationError("Error al generar el post", err)
    }
}