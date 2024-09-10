import { getComments } from "../../services/comment/index.js"

export default async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const comments = await getComments({page, postId: req.params.postId})
        return res.status(200).json({comments})
    } catch (err) {
        next(err)
    }
}