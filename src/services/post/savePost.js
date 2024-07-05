import { PostContentCreationError, PostCreationError, PostViewCreationError } from "../../errors/index.js"
import { Post } from "../../models/index.js"
import {saveContent, saveView} from "./index.js"


export default async ({user, title, img, img_title, content, transaction}) => {
    try {
        const post = await Post.create({transaction})
        const postView = await saveView({title, img, img_title, transaction})
        const postContent = await saveContent({content, transaction})

        await post.setUser(user, {transaction})
        await post.setPostView(postView, {transaction})
        await post.setPostContent(postContent, {transaction})
        return post
    } catch (err) {
        if(err instanceof PostViewCreationError || err instanceof PostContentCreationError) throw new PostCreationError(err.message, err.orig_error)
        throw new PostCreationError("Error al crear la publicación", err)
    }
}