import { CategoryError, CategoryNotFoundError, PostNotFoundError, PostUpdateError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import {findById, updateContent, updateView} from "../../repositories/post/index.js"
import {bulkCheckExist} from "../category/index.js"
import { sanitizeHTML } from "../post/index.js"

export default async ({id, body, _user}) => {
    const transaction = await sequelize.transaction()
    try {
        const {view, content, categories} = body
        const searchParameters = {where: {id, deleted: false}}
        const post = await findById({searchParameters, transaction})
        if(categories.length) {
            await bulkCheckExist({type: "id", values: categories})
            await post.setCategories(categories, {transaction})
        }
        if(content) {
            const cleanContent = await sanitizeHTML(content)
            await updateContent({id, content: cleanContent, transaction})
        }
        if(view.description){
            const cleanDescription = await sanitizeHTML(view.description)
            view.description = cleanDescription
        }
        if(view.description || view.title || view.img || view.img_title) {
            await updateView({id, view, transaction})
        }
        post.editorId = _user
        await post.save({transaction})
        await transaction.commit()
    } catch (err) {
        await transaction.rollback()
        if(err instanceof CategoryNotFoundError || err instanceof CategoryError || err instanceof PostNotFoundError) throw err
        throw new PostUpdateError("No se pudo actualizar la publicación", err)
    }
}