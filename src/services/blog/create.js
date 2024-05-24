import { saveContent, saveView, savePost } from "../post/index.js"
import { PostError, PostCreationError, PostViewCreationError, PostContentCreationError } from "../../errors/index.js"

export default async ({body, userId}) => {
    try {
        const {title, img, img_title, content} = body
        const postView = await saveView({title, img, img_title})
        const postContent = await saveContent({content})
        await savePost({postView, postContent, userId})
        return
    } catch (err) {
        if(err instanceof PostCreationError || err instanceof PostViewCreationError || err instanceof PostContentCreationError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error inesperado al almacenar post", err)
    }
}