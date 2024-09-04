import { create } from "../../repositories/comment/index.js"

export default async (req, res, next) => {
    try {
        const comment = await create({content: req.body.content, userId: req._user._id, postId: req.params.postId, parentId: req.params.parentId})
        return res.status(200).json({message: "Comentario creado con exito", comment})
    } catch (err) {
        next(err)
    }
}