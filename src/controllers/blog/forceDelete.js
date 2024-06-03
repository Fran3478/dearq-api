import {hardDelete} from "../../services/post/index.js"
export default async (req, res, next) => {
    try {
        await hardDelete(req.params.id)
        return res.status(200).json({message: "Publicación eliminada correctamente"})
    } catch (err) {
        next(err)
    }
}