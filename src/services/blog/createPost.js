
import { PostError, PostCreationError } from "../../errors/index.js"
import {sequelize} from "../../models/index.js"
import { savePost } from "../post/index.js"
import {checkAdmin} from "../user/index.js"
export default async ({body, _user}) => {
    const transaction = await sequelize.transaction()
    try {
        const {title, img, img_title, content} = body
        const user = await checkAdmin(_user._id)
        if(!user.admin) throw new PostCreationError("Usuario no cuenta con permisos apropiados")
        
        const post = await savePost({user: user.data, title, img, img_title, content, transaction})
        await transaction.commit()
        return post
    } catch (err) {
        await transaction.rollback()
        if(err instanceof PostCreationError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error inesperado al almacenar post", err)
    }
}