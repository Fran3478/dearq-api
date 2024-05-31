import { saveContent, saveView, savePost } from "../post/index.js"
import { PostError, PostCreationError, PostViewCreationError, PostContentCreationError } from "../../errors/index.js"
import {checkAdmin} from "../user/index.js"

export default async ({body, _user}) => {
    try {
        const {title, img, img_title, content} = body
        const user = await checkAdmin(_user._id)
        if(!user.admin) throw new PostCreationError("Usuario no cuenta con permisos apropiados")
        const postView = await saveView({title, img, img_title})
        const postContent = await saveContent({content})
        const post = await savePost({postView, postContent, user: user.data})
        return post
    } catch (err) {
        if(err instanceof PostCreationError || err instanceof PostViewCreationError || err instanceof PostContentCreationError) throw new PostError(err.message, err)
        throw new PostError("Error inesperado al almacenar post", err)
    }
}