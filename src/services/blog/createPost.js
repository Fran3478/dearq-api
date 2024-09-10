import { PostError, PostCreationError, PostContentCreationError, PostViewCreationError, CategoryNotFoundError, CategoryError } from "../../errors/index.js"
import {sequelize} from "../../models/index.js"
import { sanitizeHTML} from "../post/index.js"
import {bulkCheckExist} from "../category/index.js"
import {create, createView, createContent} from "../../repositories/post/index.js"

export default async ({body, _user}) => {
    const transaction = await sequelize.transaction()
    try {
        const {title, img, img_title, description, content, categories} = body
        await bulkCheckExist({type: "id", values: categories})
        const cleanContent = await sanitizeHTML(content)
        const cleanDescription = await sanitizeHTML(description)
        const post = await create({authorId: _user._id, transaction})
        const postView = await createView({title, img, img_title, description: cleanDescription, transaction})
        const postContent = await createContent({content: cleanContent, transaction})
        await post.setPostView(postView, {transaction})
        await post.setPostContent(postContent, {transaction})
        await post.setCategories(categories, {transaction})
        await transaction.commit()
        return post
    } catch (err) {
        await transaction.rollback()
        if(err instanceof CategoryNotFoundError || err instanceof CategoryError) throw err
        if(err instanceof PostCreationError || err instanceof PostContentCreationError || err instanceof PostViewCreationError) throw new PostError(err.message, err.orig_error)
        throw new PostError("Error inesperado al almacenar post", err)
    }
}