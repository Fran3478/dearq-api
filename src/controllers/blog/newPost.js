import { createPost } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        const post = await createPost({body: req.body, _user: req._user})
        return res.status(200).json({msg: "Post creado con exito", id: post})
    } catch (err) {
        next(err)
    }
}