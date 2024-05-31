import { getPostById } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        const post = await getPostById(req.params.id)
        return res.json(post)
    } catch (err) {
        next(err)
    }
}