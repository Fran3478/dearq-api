import { updatePost } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        const post = await updatePost({id: req.params.id, body: req.body, _user: req._user._id})
        return res.status(200).json({msg: "Post modificado con exito", id: post})
    } catch (err) {
        next(err)
    }
}