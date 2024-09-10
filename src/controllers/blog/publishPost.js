import {publish} from "../../services/blog/index.js"

export default async (req, res, next) => {
    try {
        const {id, action} = req.params
        await publish({id, publisher: req._user._id, action})
        return res.status(200).json({message: `Publicación ${action === "publish" ? "publicada" : "despublicada"} con exito`})
    } catch (err) {
        next(err)
    }
}