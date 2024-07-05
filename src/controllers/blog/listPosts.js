import { getPosts } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1
        const category = req.query.category
        const posts = await getPosts({page, category})
        return res.status(200).json(posts)
    } catch (err) {
        next(err)
    }
}