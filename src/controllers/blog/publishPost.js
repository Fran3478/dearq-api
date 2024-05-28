import {publish} from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await publish({id: req.params.id})
        return res.status(200).json({message: "Post publicado con exito"})
    } catch (err) {
        next(err)
    }
}