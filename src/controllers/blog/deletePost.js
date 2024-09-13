import { deletePost } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await deletePost({id: req.params.id, deleter: req._user._id})
        return res.status(200).json({message: "Publicación marcada para eliminación"})
    } catch (err) {
        next(err)
    }
}