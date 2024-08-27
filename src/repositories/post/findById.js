import { PostNotFoundError, PostSearchError } from "../../errors/index.js"
import { Post, PostView, PostContent, Comment } from "../../models/index.js"

const view = {
    model: PostView,
    as: "postView",
    attributes: {exclude: ["postId", "createdAt", "updatedAt"]}
}

const content = {
    model: PostContent,
    as: "postContent",
    attributes: {exclude: ["postId", "createdAt", "updatedAt"]}
}

const comment = {
    model: Comment,
    as: "comments",
    attributes: {exclude: ["postId", "createdAt", "updatedAt"]}
}

const INCLUDE_MAP = {
    "all+":[view, content, comment],
    "all": [ view, content],
    "view": [view],
    "content": [content]
}

export default async ({searchParameters = {}, transaction}) => {
    try {
        const options = {where: {}}
        if(searchParameters.include){
            options.include = INCLUDE_MAP[searchParameters.include]
        }
        options.where = {...options.where, ...searchParameters.where}
        if(transaction) {
            options.transaction = transaction
        }
        const post = await Post.findOne(options)
        if(!post) {
            throw new PostNotFoundError("No se encontró la publicación")
        }
        return post
    } catch (err) {
        if(err instanceof PostNotFoundError) throw err
        throw new PostSearchError("Error al buscar post", err)
    }
}