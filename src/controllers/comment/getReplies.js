import { getComments } from "../../services/comment/index.js"

export default async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const replies = await getComments({page, postId: req.params.postId, parentId: req.params.parentId})
        return res.status(200).json({replies})
    } catch (err) {
        next(err)
    }
}