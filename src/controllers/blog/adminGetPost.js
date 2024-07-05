import {getPostByIdAdmin} from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        const post = await getPostByIdAdmin(req.params.id)
        return res.status(200).json(post)
    } catch (err) {
        next(err)
    }
}