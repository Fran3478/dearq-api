import {restorePost} from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await restorePost({id: req.params.id})
        return res.status(200).json({message: "Publicación restaurada"})
    } catch (err) {
        next(err)
    }
}