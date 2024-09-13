import { publish } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await publish({id: req.params.id, publisher: req._user._id})
        return res.status(200).json({message: "Publicación publicada con exito"})
    } catch (err) {
        next(err)
    }
}