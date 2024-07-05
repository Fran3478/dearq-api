import { getPostsAdmin } from "../../services/blog/index.js"

export default async(req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const filter = req.query.filter
        const posts = await getPostsAdmin({page, filter})
        return res.status(200).json(posts)
    } catch (err) {
        next(err)
    }
}