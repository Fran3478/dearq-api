import { PostDeleteError } from "../../errors/index.js"
import {Post, Comment, PostView, sequelize, PostContent} from "../../models/index.js"

export default async (postId) => {
    const transaction = await sequelize.transaction()
    try {
        await Comment.destroy({where: {postId: postId}, transaction})
        await PostView.destroy({where: {postId: postId}, transaction})
        await PostContent.destroy({where: {postId: postId}, transaction})
        const postDeletion = await Post.destroy({
            where: {id: postId, deleted: true},
            transaction
        })
        console.log(postDeletion)
        if(!postDeletion) {
            throw new PostDeleteError("La publicación no está autorizada para eliminación o ya fue eliminada")
        }
        await transaction.commit()
    } catch (err) {
        await transaction.rollback()
        if(err instanceof PostDeleteError) throw err
        throw new PostDeleteError("No se pudo eliminar la publicación definitivamente", err)
    }
}