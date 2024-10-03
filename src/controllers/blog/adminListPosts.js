import { getPostsAdmin } from "../../services/blog/index.js"

export default async(req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const {status, category, title} = req.query
        const posts = await getPostsAdmin({page, status, category, title})
        return res.status(200).json(posts)
    } catch (err) {
        next(err)
    }
}