import { PostError, PostCreationError } from "../../errors/index.js"
import {sequelize} from "../../models/index.js"
import { sanitizeHTML, savePost } from "../post/index.js"
import {getUser} from "../user/index.js"
export default async ({body, _user}) => {
    const transaction = await sequelize.transaction()
    try {
        const {title, img, img_title, description, content} = body
        const user = _user._id
        const cleanContent = await sanitizeHTML(content)
        const cleanDescription = await sanitizeHTML(description)
        const post = await savePost({user, title, img, img_title, content: cleanContent, description: cleanDescription, transaction})
        await transaction.commit()
        return post
    } catch (err) {
        await transaction.rollback()
        if(err instanceof PostCreationError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error inesperado al almacenar post", err)
    }
}