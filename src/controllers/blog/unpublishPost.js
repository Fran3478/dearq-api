import { unpublish } from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        await unpublish({id: req.params.id, unpublisher: req._user._id})
        return res.status(200).json({message: "Publicación despublicada con exito"})
    } catch (err) {
        next(err)
    }
}