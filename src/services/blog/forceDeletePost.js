import { PostDeleteError } from "../../errors/index.js"
import { sequelize } from "../../models/index.js"
import { deletePost, findById } from "../../repositories/post/index.js"

export default async ({id}) =>  {
    const transaction = await sequelize.transaction()
    try {
        await deletePost({id, transaction})
        await transaction.commit()
    } catch (err) {
        await transaction.rollback()
        if(err instanceof PostDeleteError) throw err
        throw new PostDeleteError("No se pudo eliminar la publicación definitivamente", err)
    }
}