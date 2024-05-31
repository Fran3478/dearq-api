import { deletePost } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await deletePost(req.params.id)
        return res.status(200).json({message: "Post marcado para eliminación"})
    } catch (err) {
        next(err)
    }
}