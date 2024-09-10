import { deletePost } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await deletePost({id: req.params.id, deleter: req._user._id, action: req.params.action})
        return res.status(200).json({message: "Post marcado para eliminación"})
    } catch (err) {
        next(err)
    }
}