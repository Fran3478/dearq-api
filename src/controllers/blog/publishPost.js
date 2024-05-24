import { PostUpdateError } from "../../errors/index.js"
import publishService from "../../services/blog/publish.js"

export default async (req, res, next) => {
    try {
        await publishService({id: req.params.id})
        return res.status(200).json({message: "Post publicado con exito"})
    } catch (err) {
        throw new PostUpdateError(err.message, err.orig_error)
    }
}