import {forceDeletePost} from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await forceDeletePost({id: req.params.id})
        return res.status(200).json({message: "Publicación eliminada correctamente"})
    } catch (err) {
        next(err)
    }
}